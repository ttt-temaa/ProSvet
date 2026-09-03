import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Заявка отправлена",
  description: "Мы получили вашу заявку и свяжемся для уточнения деталей.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <Section className="pt-20">
      <Container className="max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Готово</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Заявка отправлена</h1>
        <p className="mt-4 text-muted">
          Спасибо! Мы получили вашу заявку и свяжемся с вами в ближайшее время для уточнения деталей.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Вернуться на сайт</Button>
          <Button href="/projects" variant="dark">
            Посмотреть проекты
          </Button>
        </div>
      </Container>
    </Section>
  );
}
