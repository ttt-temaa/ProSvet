import { PaybackCalculator } from "@/components/calc/PaybackCalculator";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Калькулятор окупаемости LED-освещения",
  description: "Предварительный расчёт экономии после перехода на светодиодное освещение. Точную цифру подтверждаем на объекте.",
  path: "/calculator/payback",
});

export default function PaybackPage() {
  return (
    <Section className="pt-10">
      <Container>
        <Breadcrumbs items={[{ href: "/services/modernizatsiya", label: "Модернизация" }, { label: "Калькулятор" }]} />
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">Калькулятор окупаемости</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Сравните расход сейчас и после замены. Расчёт предварительный и не заменяет расчёт по объекту.
        </p>
        <div className="mt-8">
          <PaybackCalculator />
        </div>
      </Container>
    </Section>
  );
}
