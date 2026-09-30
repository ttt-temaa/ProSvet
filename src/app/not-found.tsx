import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata = { robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-accent blur-2xl" />
      <Container className="relative max-w-2xl">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
          Кажется, этот светильник мы пока не нашли
        </h1>
        <p className="mt-4 text-muted">Страница могла быть удалена или перемещена.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">На главную</Button>
          <Button href="/catalog" variant="dark">
            В каталог
          </Button>
          <Button href="/projects" variant="line">
            Посмотреть проекты
          </Button>
        </div>
      </Container>
    </section>
  );
}
