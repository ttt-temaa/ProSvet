"use client";

import { useEffect } from "react";
import { collectAttribution, trackGoal } from "@/lib/analytics";

export function TrackAttribution() {
  useEffect(() => {
    collectAttribution();
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest("a, button");
      if (!target) return;
      const href = target instanceof HTMLAnchorElement ? target.getAttribute("href") ?? "" : "";
      const text = (target.textContent ?? "").toLowerCase();
      if (href.startsWith("tel:")) trackGoal("phone_click");
      if (text.includes("получить кп") || text.includes("коммерческое предложение") || href.includes("#kp")) {
        trackGoal("kp_click");
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
