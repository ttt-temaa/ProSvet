import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { HomeProjects } from "@/components/home/HomeProjects";
import { PaybackCalculator } from "@/components/calc/PaybackCalculator";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, H2, Section } from "@/components/ui/Container";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Светотехнические решения для бизнеса и гособъектов",
  description:
    "Про Свет — проектирование, подбор, поставка и монтаж LED-освещения для производств, школ, больниц и коммерции. Чебоксары, поставки по России.",
  path: "/",
});

const cycle = [
  { title: "Проектирование", text: "Светотехнические расчёты и разработка решений под объект.", href: "/services/proektirovanie" },
  { title: "Подбор оборудования", text: "Подбираем оборудование под технические требования и любой бюджет.", href: "/catalog" },
  { title: "Поставка", text: "Комплектуем и поставляем светотехническое оборудование.", href: "/services/postavka" },
  { title: "Монтаж", text: "Выполняем электромонтажные работы.", href: "/services/montazh" },
  { title: "Модернизация", text: "Помогаем заменить устаревшее освещение на современное LED.", href: "/services/modernizatsiya" },
  { title: "Консультация", text: "Техническая консультация на всех этапах реализации проекта.", href: "/services/konsultaciya" },
];

const why = [
  { t: "Мультибрендовый подбор", d: "Оборудование под задачу объекта, а не под один завод." },
  { t: "Большой опыт реализации", d: "150+ объектов: производство, образование, медицина, улица." },
  { t: "Индивидуальные решения", d: "Считаем нормы, бюджет и режим работы конкретного здания." },
  { t: "Проектирование и расчёт", d: "От ТЗ и планов до рабочей документации." },
  { t: "Поставка на объект", d: "Комплектуем партию и везём заказчику. 15–30 рабочих дней." },
  { t: "Монтаж", d: "Работы с учётом смены предприятия. Гарантия от 5 лет." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section className="bg-soft py-12 md:py-16">
        <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [site.stats.years, site.stats.yearsLabel],
            [site.stats.objects, site.stats.objectsLabel],
            [site.stats.directions, site.stats.directionsLabel],
            [site.stats.geo, "Чувашия + регионы"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-3xl bg-white p-6">
              <p className="text-4xl font-semibold tracking-[-0.04em]">{n}</p>
              <p className="mt-2 text-sm text-muted">{l}</p>
            </div>
          ))}
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Цикл работ</Eyebrow>
          <H2>Закрываем весь цикл работ с освещением</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cycle.map((c, i) => (
              <Link key={c.title} href={c.href} className="group rounded-3xl border border-line p-6 hover:border-ink">
                <p className="text-xs text-muted">0{i + 1}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">{c.title}</h3>
                <p className="mt-2 text-sm text-muted">{c.text}</p>
                <span className="mt-4 inline-block text-sm font-semibold">Подробнее →</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <H2>Освещение под специфику каждого объекта</H2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="overflow-hidden rounded-3xl bg-white">
                <div className="aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={s.cardTitle} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{s.cardTitle}</h3>
                  <p className="mt-1 text-sm text-muted">{s.cardText}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <section className="relative overflow-hidden bg-ink py-20 text-white">
        <Container className="relative">
          <p className="text-xs uppercase tracking-[0.16em] text-accent">Ключевое отличие</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            Не привязаны к одному производителю
          </h2>
          <p className="mt-5 max-w-2xl text-white/70">
            Мы подбираем оборудование исходя из требований объекта, технических характеристик и бюджета, а не из необходимости продать продукцию одного бренда.
          </p>
          <Button href="/catalog" className="mt-8">
            Подобрать оборудование
          </Button>
        </Container>
      </section>

      <HomeProjects />

      <Section className="bg-soft">
        <Container className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <Eyebrow>Кейс</Eyebrow>
            <H2>Один объект — задача, решение, результат</H2>
            <dl className="mt-6 grid gap-4">
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-muted">Задача</dt>
                <dd>Заменить устаревшее освещение цеха и снизить расход без остановки смены.</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-muted">Что сделали</dt>
                <dd>Расчёт, мультибрендовый подбор, поставка и монтаж в технологические окна.</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-muted">Оборудование</dt>
                <dd>Промышленные high-bay и линейные светильники проходов.</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-muted">Результат</dt>
                <dd>Окупаемость объекта в среднем за 2 года при гарантии от 5 лет. Точные цифры экономии — [ОЖИДАЕМ КОРРЕКТНУЮ ИНФОРМАЦИЮ ОТ ВАС].</dd>
              </div>
            </dl>
            <Button href="/projects/ceh-cheboksary" variant="dark" className="mt-6">
              Посмотреть проект
            </Button>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/projects/factory.jpg" alt="Производственный объект" className="rounded-3xl object-cover" />
        </Container>
      </Section>

      <Section>
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

      <Section className="bg-soft">
        <Container>
          <H2>Сколько можно сэкономить после перехода на LED?</H2>
          <p className="mt-3 text-muted">Предварительный расчёт. Формулу подтверждаем с техническим специалистом на объекте.</p>
          <div className="mt-8">
            <PaybackCalculator compact />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <H2>Не знаете, какое освещение выбрать?</H2>
            <p className="mt-3 text-muted">Ответьте на 5 вопросов — специалист поможет определить подходящее решение.</p>
            <Button href="/quiz" className="mt-6">
              Подобрать освещение
            </Button>
          </div>
          <div className="rounded-3xl bg-soft p-8">
            <p className="text-sm text-muted">Тип объекта → модернизация или новое → площадь → проектирование → что получить</p>
            <p className="mt-6 text-3xl font-semibold tracking-[-0.03em]">5 вопросов</p>
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <H2>Работаем с несколькими производителями</H2>
          <p className="mt-3 text-muted">[ОЖИДАЕМ СПИСОК БРЕНДОВ И ЛОГОТИПЫ ПРОИЗВОДИТЕЛЕЙ]</p>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="grid h-20 place-items-center rounded-2xl bg-white text-xs text-muted">
                Каталог {i + 1}
              </div>
            ))}
          </div>
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

      <p className="sr-only">{services[0].short}</p>
      <CtaBand />
    </>
  );
}
