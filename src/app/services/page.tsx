import Link from "next/link";
import { services, workSteps } from "@/data/services";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { Container, H2, Section } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Услуги в области освещения",
  description: "От расчёта и подбора оборудования до поставки и монтажа. Проектирование, модернизация, консультация.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-10">
        <Container>
          <Breadcrumbs items={[{ label: "Услуги" }]} />
          <h1 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Услуги в области освещения</h1>
          <p className="mt-4 max-w-2xl text-muted">От расчёта и подбора оборудования до поставки и монтажа.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-3xl border border-line p-6 hover:border-ink">
                <h2 className="text-xl font-semibold">{s.short}</h2>
                <p className="mt-2 text-sm text-muted">{s.hero}</p>
                <span className="mt-4 inline-block text-sm font-semibold">Подробнее →</span>
              </Link>
            ))}
          </div>
          <H2 className="mt-16">Как работаем</H2>
          <ol className="mt-8 grid gap-3 md:grid-cols-4">
            {workSteps.map((s) => (
              <li key={s.n} className="rounded-3xl bg-soft p-5">
                <p className="text-xs text-muted">{s.n}</p>
                <p className="mt-2 font-semibold">{s.title}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <CtaBand title="Обсудим, какая услуга нужна объекту" />
    </>
  );
}
