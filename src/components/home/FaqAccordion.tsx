"use client";

import { homeFaq, type FaqBlock } from "@/data/faq";
import { Button } from "@/components/ui/Button";
import { useLead } from "@/components/forms/LeadModal";

function Blocks({ blocks }: { blocks: FaqBlock[] }) {
  return (
    <div className="grid gap-3">
      {blocks.map((block, i) => {
        if (block.type === "h") {
          return (
            <p key={i} className="pt-1 text-sm font-semibold text-ink">
              {block.text}
            </p>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="grid gap-2 text-sm leading-relaxed text-muted">
              {block.items.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-sm leading-relaxed text-muted">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export function FaqAccordion() {
  const { open } = useLead();
  return (
    <div className="mt-8 grid gap-3">
      {homeFaq.map((item) => (
        <details key={item.q} className="rounded-3xl border border-line bg-white p-5">
          <summary className="cursor-pointer list-none text-lg font-semibold tracking-[-0.02em]">
            {item.q}
          </summary>
          <div className="mt-4">
            <Blocks blocks={item.blocks} />
            {item.cta ? (
              <Button className="mt-5" onClick={() => open(item.cta!.intent, { faq: item.q })}>
                {item.cta.label}
              </Button>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}
