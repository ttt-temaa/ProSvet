import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)} aria-label="Про Свет — на главную">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo.png"
        alt="Про Свет"
        width={210}
        height={159}
        className={cn("logo-mark", compact && "is-compact")}
      />
    </Link>
  );
}
