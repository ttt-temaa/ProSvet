import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Индивидуальный расчёт стоимости",
  description: "Получите индивидуальный расчёт стоимости освещения под ваш объект.",
  path: "/calculator/turnkey",
});

export default function TurnkeyPage() {
  return (
    <Section className="pt-10">
      <Container className="max-w-2xl">
        <Breadcrumbs items={[{ label: "Индивидуальный расчёт" }]} />
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">Получите индивидуальный расчёт стоимости</h1>
        <p className="mt-4 text-muted">
          Универсальной «цены под ключ» без объекта не бывает: высота, нормы, бренд и монтаж меняют смету. Опишите задачу — посчитаем точечно.
        </p>
        <div className="mt-8 rounded-3xl border border-line p-6">
          <LeadForm intent="calc" />
        </div>
      </Container>
    </Section>
  );
}
