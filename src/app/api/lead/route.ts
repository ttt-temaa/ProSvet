import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const payload = Object.fromEntries(
    [...form.entries()].map(([k, v]) => [k, typeof v === "string" ? v : v.name]),
  );

  console.info("[lead]", payload);

  // Этап 1: сайт → email / лог. Архитектура готова к AmoCRM.
  return NextResponse.json({ ok: true });
}
