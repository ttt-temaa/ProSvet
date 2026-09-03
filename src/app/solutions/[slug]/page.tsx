import { notFound } from "next/navigation";
import { getSolution, solutions } from "@/data/solutions";
import { products, type ProductCategory } from "@/data/products";
import { getProjectsByIndustry, type ProjectIndustry } from "@/data/projects";
import { ProductCard } from "@/components/cards/ProductCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, H2, Section } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return pageMeta({ title: s.title, description: s.hero, path: `/solutions/${s.slug}` });
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();
  const relatedProducts = products.filter((p) => s.productCategories.includes(p.category as ProductCategory)).slice(0, 4);
  const relatedProjects = getProjectsByIndustry(s.industry as ProjectIndustry);

  return (
    <Section className="pt-10">
      <Container>
        <Breadcrumbs items={[{ href: "/solutions", label: "Решения" }, { label: s.cardTitle }]} />
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{s.title}</h1>
            <p className="mt-4 text-lg text-muted">{s.hero}</p>
            <Button href="#calc" className="mt-6">
              Получить расчёт
            </Button>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.image} alt={s.title} className="rounded-3xl object-cover" />
        </div>

        <H2 className="mt-16">Какие задачи решаем</H2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {s.tasks.map((t) => (
            <li key={t} className="rounded-2xl bg-soft p-4">
              {t}
            </li>
          ))}
        </ul>

        <H2 className="mt-16">Реализованные проекты</H2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {relatedProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <H2 className="mt-16">Подходящее оборудование</H2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {relatedProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <H2 className="mt-16">Как проходит работа</H2>
        <ol className="mt-6 grid gap-3 md:grid-cols-4">
          {s.how.map((h, i) => (
            <li key={h} className="rounded-3xl border border-line p-5">
              <p className="text-xs text-muted">0{i + 1}</p>
              <p className="mt-2 font-semibold">{h}</p>
            </li>
          ))}
        </ol>

        <div id="calc" className="mt-16 rounded-3xl bg-ink p-6 text-white md:p-10">
          <h2 className="text-3xl font-semibold">Получить расчёт</h2>
          <div className="mt-6 max-w-lg rounded-3xl bg-white p-5 text-ink">
            <LeadForm intent="calc" extra={{ solution: s.slug }} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
