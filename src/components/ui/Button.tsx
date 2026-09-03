import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "ghost" | "line";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink hover:brightness-95 border border-accent",
  dark: "bg-ink text-white hover:bg-black border border-ink",
  ghost: "bg-transparent text-ink hover:bg-soft border border-transparent",
  line: "bg-white text-ink border border-ink/15 hover:border-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[-0.01em] transition",
    styles[variant],
    className,
  );
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
