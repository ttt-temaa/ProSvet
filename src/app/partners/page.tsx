import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Проектировщикам — комплектация светотехнической части проекта",
  description: "Партнёрство для проектных бюро: расчёты, аналоги, поставка без привязки к одному бренду. Чебоксары и регионы РФ.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <Section className="pt-10">
      <Container className="grid gap-10 lg:grid-cols-2">
        <div>
          <Breadcrumbs items={[{ label: "Проектировщикам" }]} />
          <h1 className="text-4xl font-semibold tracking-[-0.04em]">Светотехнический партнёр для проектных бюро</h1>
          <p className="mt-4 text-muted">
            Если вы выпускаете проекты и не хотите тратить ресурс на бесконечный подбор светильников — закроем светотехническую часть вместе. Без обещаний «самых низких цен» и без привязки к одному заводу.
          </p>
          <ul className="mt-6 grid gap-3 text-sm">
            <li className="rounded-2xl bg-soft p-4">Помогаем с расчётом и спецификацией под нормы объекта</li>
            <li className="rounded-2xl bg-soft p-4">Даём несколько вариантов комплектации под бюджет заказчика</li>
            <li className="rounded-2xl bg-soft p-4">Комплектуем и поставляем оборудование в срок проекта</li>
            <li className="rounded-2xl bg-soft p-4">Остаёмся на связи на этапе авторского надзора и монтажа</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-line p-6">
          <h2 className="text-2xl font-semibold">Оставить контакты</h2>
          <p className="mt-2 text-sm text-muted">Напишите, сколько проектов выпускаете и в каких регионах работаете — свяжемся и обсудим формат.</p>
          <div className="mt-4">
            <LeadForm intent="partner" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
