import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)} aria-label="Про Свет — на главную">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo.png"
        alt="Про Свет"
        width={1048}
        height={793}
        className={cn("h-12 w-auto object-contain md:h-14", compact && "h-10 md:h-12")}
      />
    </Link>
  );
}
