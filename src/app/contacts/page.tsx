import { site } from "@/data/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Контакты — офис в Чебоксарах, поставки по РФ",
  description: `Офис ООО «Про Свет»: ${site.address}. Телефоны ${site.phone}, ${site.phoneAlt}. Заявка на КП и расчёт освещения.`,
  path: "/contacts",
});

export default function ContactsPage() {
  const mapSrc = `https://yandex.ru/map-widget/v1/?ll=47.252%2C56.143&z=16&text=${encodeURIComponent(site.address)}`;
  return (
    <Section className="pt-10">
      <Container>
        <Breadcrumbs items={[{ label: "Контакты" }]} />
        <h1 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Контакты «Про Свет»</h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-lg">{site.address}</p>
            <ul className="mt-6 grid gap-2">
              <li>
                <a className="font-semibold" href={site.phoneHref}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a className="font-semibold" href={site.phoneAltHref}>
                  {site.phoneAlt}
                </a>
              </li>
              <li>
                <a href={site.emailHref}>{site.email}</a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted">{site.hours}</p>
            <iframe
              title="Карта офиса Про Свет"
              src={mapSrc}
              className="mt-8 h-72 w-full rounded-3xl border-0"
              loading="lazy"
            />
          </div>
          <div className="rounded-3xl bg-soft p-6">
            <h2 className="text-2xl font-semibold">Есть задача по освещению?</h2>
            <div className="mt-4">
              <LeadForm intent="kp" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
