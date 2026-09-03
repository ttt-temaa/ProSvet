import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)} aria-label="Про Свет — на главную">
      <span className="relative grid h-9 w-9 place-items-center rounded-full bg-ink">
        <span className="absolute inset-1 rounded-full bg-accent/90" />
        <span className="relative h-2 w-2 rounded-full bg-ink" />
      </span>
      <span className={cn("leading-none", compact && "hidden sm:block")}>
        <span className="block text-[15px] font-semibold tracking-[-0.04em]">Про Свет</span>
        <span className="mt-0.5 block text-[10px] uppercase tracking-[0.14em] text-muted">
          светотехника
        </span>
      </span>
    </Link>
  );
}
