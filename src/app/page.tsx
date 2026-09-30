import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { HomeProjects } from "@/components/home/HomeProjects";
import { PaybackCalculator } from "@/components/calc/PaybackCalculator";
import { HomeFaq } from "@/components/seo/HomeFaq";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { Container, H2, Section } from "@/components/ui/Container";
import { site } from "@/data/site";
import { brands } from "@/data/brands";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Проектирование и поставка LED-освещения для бизнеса и гособъектов",
  description:
    "Про Свет — проектирование, светотехнический расчёт, подбор, поставка и монтаж LED-освещения для производств, школ, больниц, складов и улиц. Чебоксары, поставки по России и СНГ.",
  path: "/",
  keywords: [
    "проектирование освещения",
    "светотехнический расчёт",
    "поставка светильников",
    "монтаж освещения Чебоксары",
    "LED освещение производства",
    "освещение школ и больниц",
  ],
});

const cycle = [
  { title: "Проектирование", text: "Светотехнические расчёты и разработка решений под объект.", href: "/services/proektirovanie" },
  { title: "Подбор оборудования", text: "Подбираем оборудование под технические требования и любой бюджет.", href: "/services/podbor" },
  { title: "Поставка", text: "Комплектуем и поставляем светотехническое оборудование с учетом способа монтажа", href: "/services/postavka" },
  { title: "Монтаж", text: "Выполняем электромонтажные работы.", href: "/services/montazh" },
  { title: "Модернизация", text: "Помогаем заменить устаревшее освещение на современное LED.", href: "/services/modernizatsiya" },
  { title: "Консультация", text: "Техническая консультация на всех этапах реализации проекта.", href: "/services/konsultaciya" },
];

const why = [
  { t: "Мультибрендовый подбор", d: "Оборудование под задачу объекта, а не под один завод." },
  { t: "Большой опыт реализации", d: "150+ объектов: производство, образование, медицина, улица." },
  { t: "Индивидуальные решения", d: "Учитываем нормы, бюджет и конкретные задачи с учетом нюансов монтажа" },
  { t: "Проектирование и расчёт", d: "от ТЗ до планов освещения с учетом требований СП 52.13330, СП 439.1325800 и ПУЭ" },
  { t: "Поставка на объект", d: "Комплектуем партию и везём заказчику. 15–30 рабочих дней." },
  { t: "Монтаж", d: "Работы с учётом смены предприятия. Гарантия от 5 лет." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section className="bg-soft py-16 md:py-24">
        <Container>
          <p className="max-w-3xl text-lg text-muted md:text-xl">
            Более 5 лет помогаем коммерческим предприятиям и государственным учреждениям решать задачи освещения любой сложности и масштаба
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [site.stats.years, site.stats.yearsLabel],
              [site.stats.objects, site.stats.objectsLabel],
              [site.stats.directions, site.stats.directionsLabel],
              [site.stats.geo, site.stats.geoLabel],
            ].map(([n, l]) => (
              <div key={l} className="rounded-3xl bg-white p-6">
                <p className="text-4xl font-semibold tracking-[-0.04em]">{n}</p>
                <p className="mt-2 text-sm text-muted">{l}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink text-white">
        <Container>
          <H2 className="text-white">Закрываем весь цикл работ с освещением</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cycle.map((c, i) => (
              <Link
                key={c.title}
                href={c.href}
                className="group rounded-3xl border border-white/15 p-6 hover:border-accent"
              >
                <p className="text-xs text-white/50">0{i + 1}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">{c.title}</h3>
                <p className="mt-2 text-sm text-white/70">{c.text}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent">Подробнее →</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Ключевое отличие</p>
          <H2 className="mt-3">Не привязаны к одному производителю</H2>
          <p className="mt-5 max-w-2xl text-muted">
            Мы подбираем оборудование исходя из требований объекта, технических характеристик и бюджета, а не из необходимости продать продукцию одного бренда.
          </p>
          <Button href="/catalog" className="mt-8">
            Подобрать оборудование
          </Button>
          <p className="mt-10 text-sm text-muted">[ОЖИДАЕМ СПИСОК БРЕНДОВ И ЛОГОТИПЫ ПРОИЗВОДИТЕЛЕЙ]</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {brands.map((b) => (
              <Link
                key={b.slug}
                href={`/catalog?brand=${b.slug}`}
                className="grid h-24 place-items-center rounded-2xl border border-line bg-soft px-3 text-center transition hover:border-ink"
              >
                <span>
                  <span className="block text-lg font-semibold tracking-[-0.04em]">{b.short}</span>
                  <span className="mt-1 block text-[11px] text-muted">{b.name}</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <HomeProjects dark />

      <Section className="bg-soft">
        <Container className="rounded-[2rem] bg-accent p-8 md:p-12">
          <H2>Подберём светильники под ваш объект</H2>
          <p className="mt-3 max-w-2xl text-ink/70">
            Если вы не знаете точную модель — это не проблема. Расскажите о задаче, и специалист подберёт оборудование.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/catalog" variant="dark">
              Перейти в каталог
            </Button>
            <Button href="/quiz" variant="line">
              Получить подбор
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Сколько можно сэкономить после перехода на LED?</H2>
          <p className="mt-3 text-muted">Предварительный расчёт. Формулу подтверждаем с техническим специалистом на объекте.</p>
          <div className="mt-8">
            <PaybackCalculator compact />
          </div>
        </Container>
      </Section>

      <Section className="bg-ink text-white">
        <Container>
          <H2 className="text-white">Не знаете, какое освещение выбрать?</H2>
          <p className="mt-3 max-w-2xl text-white/70">
            Выберите 5 подходящих вам ответов на вопросы – мы поможем вам определить лучшее решение
          </p>
          <Button href="/quiz" className="mt-6">
            Подобрать освещение
          </Button>
        </Container>
      </Section>

      <Section>
        <Container>
          <H2>Почему Про Свет</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {why.map((w) => (
              <div key={w.t} className="rounded-3xl border border-line p-6">
                <h3 className="text-lg font-semibold">{w.t}</h3>
                <p className="mt-2 text-sm text-muted">{w.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <H2>Отзывы</H2>
          <p className="mt-3 text-muted">[ОЖИДАЕМ ОТЗЫВЫ И БЛАГОДАРСТВЕННЫЕ ПИСЬМА ОТ КЛИЕНТА]</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-3xl bg-white p-6">
                <div className="h-8 w-24 rounded bg-soft" />
                <p className="mt-4 text-sm text-muted">Текст отзыва появится после получения материалов.</p>
                <p className="mt-4 text-sm font-semibold">Имя / должность</p>
                <p className="text-xs text-muted">Название организации</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <HomeFaq />

      <CtaBand />
    </>
  );
}
