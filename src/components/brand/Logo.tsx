import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  compact,
  className,
  priority,
}: {
  compact?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)} aria-label="Про Свет — на главную">
      <Image
        src="/brand/logo.png"
        alt="Про Свет"
        width={210}
        height={159}
        priority={priority}
        className={cn("h-12 w-auto object-contain md:h-14", compact && "h-10 md:h-12")}
      />
    </Link>
  );
}
