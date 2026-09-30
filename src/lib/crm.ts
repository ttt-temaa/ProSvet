export type LeadPayload = Record<string, string>;

const intentTitles: Record<string, string> = {
  kp: "КП с сайта",
  callback: "Обратный звонок",
  calc: "Точный расчёт",
  quiz: "Квиз / подбор",
  partner: "Проектировщик",
  docs: "Документация",
  consult: "Консультация",
};

function leadTitle(data: LeadPayload) {
  const intent = intentTitles[data.intent] ?? "Заявка с сайта";
  const who = [data.name, data.company].filter(Boolean).join(", ");
  return who ? `[${intent}] ${who}` : `[${intent}]`;
}

function leadNote(data: LeadPayload) {
  return Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}

async function postJson(url: string, body: unknown, headers: Record<string, string> = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 8000);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    const text = await res.text();
    return { ok: res.ok, status: res.status, text };
  } finally {
    clearTimeout(t);
  }
}

async function sendAmo(data: LeadPayload) {
  const sub = process.env.AMOCRM_SUBDOMAIN;
  const token = process.env.AMOCRM_ACCESS_TOKEN;
  if (!sub || !token) return { skipped: true as const };

  const pipelineId = Number(process.env.AMOCRM_PIPELINE_ID || 0);
  const statusId = Number(process.env.AMOCRM_STATUS_ID || 0);
  const contactFields = [
    data.phone
      ? { field_code: "PHONE", values: [{ value: data.phone, enum_code: "WORK" }] }
      : null,
    data.email
      ? { field_code: "EMAIL", values: [{ value: data.email, enum_code: "WORK" }] }
      : null,
  ].filter((field): field is NonNullable<typeof field> => Boolean(field));

  const body = [
    {
      name: leadTitle(data),
      ...(pipelineId ? { pipeline_id: pipelineId } : {}),
      ...(statusId ? { status_id: statusId } : {}),
      _embedded: {
        contacts: [
          {
            name: data.name || data.company || "Заявка с сайта",
            ...(contactFields.length ? { custom_fields_values: contactFields } : {}),
          },
        ],
      },
    },
  ];

  const created = await postJson(`https://${sub}.amocrm.ru/api/v4/leads/complex`, body, {
    Authorization: `Bearer ${token}`,
  });

  if (created.ok) {
    try {
      const parsed = JSON.parse(created.text) as Array<{ id?: number }>;
      const id = parsed?.[0]?.id;
      if (id) {
        await postJson(
          `https://${sub}.amocrm.ru/api/v4/leads/notes`,
          [
            {
              entity_id: id,
              note_type: "common",
              params: { text: leadNote(data) },
            },
          ],
          { Authorization: `Bearer ${token}` },
        );
      }
    } catch {
      /* заметка необязательна */
    }
  }

  return created;
}

async function sendWebhook(data: LeadPayload) {
  const url = process.env.CRM_WEBHOOK_URL;
  if (!url) return { skipped: true as const };
  return postJson(url, {
    source: "prosvet-site",
    title: leadTitle(data),
    note: leadNote(data),
    ...data,
  });
}

export async function dispatchLead(data: LeadPayload) {
  const [amo, webhook] = await Promise.allSettled([sendAmo(data), sendWebhook(data)]);
  return {
    amo: amo.status === "fulfilled" ? amo.value : { ok: false, error: String(amo.reason) },
    webhook: webhook.status === "fulfilled" ? webhook.value : { ok: false, error: String(webhook.reason) },
  };
}
