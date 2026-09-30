import { Quiz } from "@/components/quiz/Quiz";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Подбор освещения за 5 вопросов — получить решение под объект",
  description: "Ответьте на 5 вопросов — инженер Про Свет подберёт сценарий освещения и подготовит коммерческое предложение.",
  path: "/quiz",
});

export default function QuizPage() {
  return (
    <Section className="pt-10">
      <Container className="max-w-2xl">
        <Breadcrumbs items={[{ label: "Подбор" }]} />
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">Подберём решение для вашего объекта</h1>
        <p className="mt-3 text-muted">5 вопросов. Дальше — контакты и ответ специалиста.</p>
        <div className="mt-8">
          <Quiz />
        </div>
      </Container>
    </Section>
  );
}
