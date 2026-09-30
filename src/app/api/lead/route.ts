import { NextResponse } from "next/server";
import { dispatchLead } from "@/lib/crm";

export async function POST(req: Request) {
  const form = await req.formData();
  const payload = Object.fromEntries(
    [...form.entries()].map(([k, v]) => [k, typeof v === "string" ? v : v.name]),
  );

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  console.info("[lead]", payload);

  try {
    const result = await dispatchLead(payload);
    console.info("[lead:crm]", result);
  } catch (error) {
    console.error("[lead:crm-error]", error);
  }

  return NextResponse.json({ ok: true });
}
