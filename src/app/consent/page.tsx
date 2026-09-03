import { site } from "@/data/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Согласие на обработку персональных данных",
  description: "Согласие на обработку персональных данных при отправке форм сайта Про Свет.",
  path: "/consent",
});

export default function ConsentPage() {
  return (
    <Section className="pt-10">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Согласие на обработку ПДн" }]} />
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">Согласие на обработку персональных данных</h1>
        <div className="mt-6 grid gap-4 text-sm leading-relaxed text-muted">
          <p>
            Отправляя форму на сайте, я даю {site.legalName} согласие на обработку указанных мной персональных данных: имени, телефона, email, названия компании, должности, сведений о задаче и приложенных файлов.
          </p>
          <p>
            Согласие даётся для связи со мной, подготовки коммерческого предложения и исполнения договора. Обработка включает сбор, запись, хранение, уточнение, использование и удаление.
          </p>
          <p>
            Согласие действует до его отзыва. Отозвать согласие можно письмом на {site.email}.
          </p>
        </div>
      </Container>
    </Section>
  );
}
