import Link from "next/link";
import { solutions } from "@/data/solutions";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Решения по типам объектов",
  description: "Промышленное, складское, школьное, медицинское, офисное, торговое, уличное и парковое освещение.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <Section className="pt-10">
      <Container>
        <Breadcrumbs items={[{ label: "Решения" }]} />
        <h1 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Решения под тип объекта</h1>
        <p className="mt-4 max-w-2xl text-muted">Выберите свой объект — покажем задачи, проекты и подходящее оборудование.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {solutions.map((s) => (
            <Link key={s.slug} href={`/solutions/${s.slug}`} className="overflow-hidden rounded-3xl border border-line">
              <div className="aspect-[16/8] overflow-hidden bg-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.cardTitle} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold">{s.cardTitle}</h2>
                <p className="mt-2 text-sm text-muted">{s.cardText}</p>
                <span className="mt-4 inline-block text-sm font-semibold">Получить расчёт →</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
