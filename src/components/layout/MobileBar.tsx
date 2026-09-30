"use client";

import { site } from "@/data/site";
import { useLead } from "@/components/forms/LeadModal";

export function MobileBar() {
  const { open } = useLead();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a href={site.phoneHref} className="rounded-2xl bg-soft py-3 text-center text-xs font-semibold">
          Позвонить
        </a>
        <button onClick={() => open("kp")} className="rounded-2xl bg-accent py-3 text-center text-xs font-semibold text-ink">
          Получить КП
        </button>
        <a href={site.maxHref} className="rounded-2xl bg-ink py-3 text-center text-xs font-semibold text-white">
          Написать
        </a>
      </div>
    </div>
  );
}
