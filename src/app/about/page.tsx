import { site } from "@/data/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, H2, Section } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "О компании Про Свет",
  description:
    "Более 5 лет помогаем предприятиям и государственным учреждениям решать задачи освещения. Мультибрендовый подбор, проектирование, поставка, монтаж.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section className="pt-10">
        <Container>
          <Breadcrumbs items={[{ label: "О компании" }]} />
          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            Про Свет — светотехнические решения для объектов любого масштаба и сложности
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Более 5 лет помогаем предприятиям, организациям и государственным учреждениям решать задачи освещения.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [site.stats.years, "лет на рынке"],
              [site.stats.objects, "объектов"],
              ["РФ", "география поставок"],
              ["~10", "каталогов производителей"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-3xl bg-soft p-6">
                <p className="text-3xl font-semibold">{n}</p>
                <p className="mt-2 text-sm text-muted">{l}</p>
              </div>
            ))}
          </div>

          <H2 className="mt-16">Кто мы</H2>
          <p className="mt-4 max-w-3xl text-muted">
            ООО «Про Свет» — команда из 5 специалистов в Чебоксарах. Мы не магазин светильников: проектируем, подбираем, поставляем и монтируем освещение под конкретный объект. Работаем с промышленными предприятиями, образовательными и медицинскими учреждениями, коммерцией и улицей. Поставки — по России.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["Сначала задача — потом оборудование", "Разбираем объект, нормы и бюджет до закупки."],
              ["Подбираем решение, а не бренд", "Сравниваем производителей под требования, а не под склад одного завода."],
              ["Отвечаем за весь процесс", "Расчёт, поставка, монтаж, гарантия от 5 лет и сервис за 3 рабочих дня."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-3xl border border-line p-6">
                <h2 className="text-xl font-semibold">{t}</h2>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </div>
            ))}
          </div>

          <H2 className="mt-16">География</H2>
          <p className="mt-3 text-muted">Чувашия → Татарстан → Нижегородская область → другие регионы РФ.</p>
          <div className="mt-6 h-56 rounded-3xl bg-soft p-6 text-sm text-muted">
            Карта работы: поставки по России, офис в Чебоксарах.
          </div>

          <H2 className="mt-16">Наши клиенты</H2>
          <p className="mt-3 text-muted">[ОЖИДАЕМ ПОДТВЕРЖДЕНИЕ ПРАВА НА РАЗМЕЩЕНИЕ ЛОГОТИПОВ]</p>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
