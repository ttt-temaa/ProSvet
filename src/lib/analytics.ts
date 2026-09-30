declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
  }
}

export const ymId = Number(process.env.NEXT_PUBLIC_YM_ID || 0);

export function trackGoal(name: string, params?: Record<string, unknown>) {
  if (!ymId || typeof window === "undefined" || typeof window.ym !== "function") return;
  window.ym(ymId, "reachGoal", name, params);
}

export function getYmClientId(): Promise<string> {
  return new Promise((resolve) => {
    if (!ymId || typeof window === "undefined" || typeof window.ym !== "function") {
      resolve("");
      return;
    }
    let done = false;
    const finish = (id: string) => {
      if (done) return;
      done = true;
      resolve(id);
    };
    try {
      window.ym(ymId, "getClientID", (id: string) => finish(id || ""));
      setTimeout(() => finish(""), 800);
    } catch {
      finish("");
    }
  });
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "yclid", "ysclid"] as const;

export function collectAttribution() {
  if (typeof window === "undefined") return {} as Record<string, string>;
  const params = new URLSearchParams(window.location.search);
  const stored = sessionStorage.getItem("ps_attr");
  const prev: Record<string, string> = stored ? JSON.parse(stored) : {};
  const next: Record<string, string> = { ...prev };
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) next[key] = value;
  });
  if (!next.referrer && document.referrer) next.referrer = document.referrer.slice(0, 500);
  if (!next.landing) next.landing = window.location.pathname;
  sessionStorage.setItem("ps_attr", JSON.stringify(next));
  return next;
}
