import Link from "next/link";
import { footerNav, site } from "@/data/site";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-line bg-soft pb-24 md:pb-10">
      <Container wide className="grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Светотехнические решения для бизнеса, производства и государственных объектов.
          </p>
        </div>
        <FooterCol title="Компания" items={footerNav.company} />
        <FooterCol title="Решения" items={footerNav.solutions} />
        <div>
          <p className="mb-3 text-sm font-semibold">Услуги</p>
          <ul className="grid gap-2 text-sm text-muted">
            {footerNav.services.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="hover:text-ink">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold">Контакты</p>
          <ul className="mt-2 grid gap-1 text-sm text-muted">
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={site.phoneAltHref}>{site.phoneAlt}</a>
            </li>
            <li>
              <a href={site.emailHref}>{site.email}</a>
            </li>
            <li>{site.city}</li>
          </ul>
        </div>
      </Container>
      <Container wide className="flex flex-col gap-3 border-t border-line py-6 text-xs text-muted md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.legalName}
        </p>
        <div className="flex gap-4">
          <Link href="/privacy">Политика конфиденциальности</Link>
          <Link href="/consent">Согласие на обработку персональных данных</Link>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold">{title}</p>
      <ul className="grid gap-2 text-sm text-muted">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="hover:text-ink">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
