import { LeadForm, type LeadIntent } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";

export function CtaBand({
  title = "Расскажите о вашем объекте — предложим решение",
  intent = "kp",
}: {
  title?: string;
  intent?: LeadIntent;
}) {
  return (
    <section className="bg-ink py-16 text-white md:py-20">
      <Container className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-md text-white/70">
            Инженерный разбор задачи, несколько вариантов оборудования и понятный следующий шаг — без привязки к одному бренду.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-5 text-ink">
          <LeadForm intent={intent} compact={intent === "callback"} />
        </div>
      </Container>
    </section>
  );
}
