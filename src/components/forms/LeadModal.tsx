"use client";

import { createContext, useContext, useState } from "react";
import { LeadForm, type LeadIntent } from "@/components/forms/LeadForm";

type Ctx = {
  open: (intent?: LeadIntent, extra?: Record<string, string>) => void;
  close: () => void;
};

const LeadCtx = createContext<Ctx>({ open: () => {}, close: () => {} });

export function useLead() {
  return useContext(LeadCtx);
}

export function LeadProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{
    open: boolean;
    intent: LeadIntent;
    extra?: Record<string, string>;
  }>({ open: false, intent: "kp" });

  return (
    <LeadCtx.Provider
      value={{
        open: (intent = "kp", extra) => setState({ open: true, intent, extra }),
        close: () => setState((s) => ({ ...s, open: false })),
      }}
    >
      {children}
      {state.open && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <button
            className="absolute inset-0 bg-black/50"
            aria-label="Закрыть"
            onClick={() => setState((s) => ({ ...s, open: false }))}
          />
          <div className="relative z-10 max-h-[92dvh] w-full overflow-auto rounded-t-3xl bg-white p-6 sm:max-w-md sm:rounded-3xl">
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold tracking-[-0.03em]">
                {state.intent === "callback" ? "Заказать звонок" : "Расскажите о задаче"}
              </h2>
              <button
                className="text-2xl leading-none text-muted"
                onClick={() => setState((s) => ({ ...s, open: false }))}
                aria-label="Закрыть"
              >
                ×
              </button>
            </div>
            <LeadForm
              intent={state.intent}
              compact={state.intent !== "partner"}
              extra={state.extra}
            />
          </div>
        </div>
      )}
    </LeadCtx.Provider>
  );
}
