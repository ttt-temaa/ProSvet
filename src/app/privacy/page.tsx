import { site } from "@/data/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Политика конфиденциальности",
  description: "Политика обработки персональных данных ООО «Про Свет».",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section className="pt-10">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Политика конфиденциальности" }]} />
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">Политика конфиденциальности</h1>
        <div className="prose-site mt-6 grid gap-4 text-sm leading-relaxed text-muted">
          <p>
            Настоящая политика определяет порядок обработки персональных данных посетителей сайта {site.legalName} ({site.address}).
          </p>
          <p>
            Оператор обрабатывает имя, телефон, адрес электронной почты, название компании, сведения о задаче и файлы, которые пользователь направляет через формы, а также технические данные визита.
          </p>
          <p>
            Цель обработки — ответ на заявку, подготовка коммерческого предложения, связь по проекту и улучшение работы сайта. Правовое основание — согласие субъекта и исполнение договора / преддоговорных действий.
          </p>
          <p>
            Данные не продаются третьим лицам. Они могут быть переданы подрядчикам связи, хостинга и CRM исключительно для обработки заявки. Срок хранения — до достижения цели либо до отзыва согласия.
          </p>
          <p>
            Пользователь вправе запросить уточнение, блокировку или удаление данных, направив обращение на {site.email} или по телефону {site.phone}.
          </p>
        </div>
      </Container>
    </Section>
  );
}
