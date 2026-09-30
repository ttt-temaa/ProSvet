import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PaybackCalculator } from "@/components/calc/PaybackCalculator";
import { LeadForm } from "@/components/forms/LeadForm";
import { pageMeta, jsonLdService } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMeta({
    title: `${s.short}: расчёт, поставка и работы под объект`,
    description: s.hero,
    path: `/services/${s.slug}`,
    keywords: [s.short, "освещение", "Чебоксары", "Про Свет"],
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const isModern = slug === "modernizatsiya";
  const isDesign = slug === "proektirovanie";
  const isPodbor = slug === "podbor";
  const hideBottomCta = isDesign || isPodbor;

  return (
    <>
      <JsonLd data={jsonLdService({ name: s.title, description: s.hero, path: `/services/${s.slug}` })} />
      <Section className="pt-10">
        <Container>
          <Breadcrumbs items={[{ href: "/services", label: "Услуги" }, { label: s.short }]} />
          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{s.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{s.hero}</p>
          <p className="mt-3 max-w-2xl text-muted">{s.lead}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {isModern ? (
              <Button href="#calc">{s.cta}</Button>
            ) : (
              <Button href="#form">{s.cta}</Button>
            )}
            <Button href="/catalog" variant="line">
              Смотреть оборудование
            </Button>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {s.items.map((i, idx) => (
              <div key={i.title} className="rounded-3xl bg-soft p-6">
                <p className="text-xs text-muted">0{idx + 1}</p>
                <h2 className="mt-2 text-xl font-semibold">{i.title}</h2>
                <p className="mt-2 text-sm text-muted">{i.text}</p>
              </div>
            ))}
          </div>
          {isDesign && (
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-line p-6">
                <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                  Расскажите о вашем объекте — предложим решение
                </h2>
                <p className="mt-3 text-muted">
                  Инженерный разбор задачи, несколько вариантов оборудования и понятный следующий шаг — без привязки к одному бренду.
                </p>
                <h3 className="mt-8 text-xl font-semibold">Что нужно от клиента</h3>
                <ul className="mt-4 grid gap-2 text-sm">
                  {[
                    "План помещения / территории",
                    "Размеры и высота",
                    "Назначение",
                    "Существующее освещение",
                    "ТЗ, если есть",
                  ].map((x) => (
                    <li key={x}>— {x}</li>
                  ))}
                </ul>
              </div>
              <div id="form" className="rounded-3xl bg-soft p-6">
                <LeadForm intent="calc" extra={{ service: s.slug }} />
              </div>
            </div>
          )}
          {isModern && (
            <div id="calc" className="mt-12">
              <h2 className="text-3xl font-semibold tracking-[-0.03em]">Рассчитать окупаемость</h2>
              <div className="mt-6">
                <PaybackCalculator />
              </div>
            </div>
          )}
          {!isDesign && (
            <div id="form" className="mt-12 rounded-3xl border border-line p-6">
              <h2 className="text-2xl font-semibold">{s.cta}</h2>
              <LeadForm intent="kp" extra={{ service: s.slug }} />
            </div>
          )}
        </Container>
      </Section>
      {!hideBottomCta && <CtaBand />}
    </>
  );
}
