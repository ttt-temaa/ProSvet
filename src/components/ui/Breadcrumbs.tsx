import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="hidden sm:inline">
          <Link href="/" className="hover:text-ink">
            Главная
          </Link>
        </li>
        <li className="sm:hidden">
          <Link href={items[items.length - 2]?.href ?? "/"} className="hover:text-ink">
            ← Назад
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="hidden items-center gap-1.5 sm:flex">
            <span aria-hidden>/</span>
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
