import { notFound } from "next/navigation";
import { categories, getCategory, getProductsByCategory, type ProductCategory } from "@/data/products";
import { ProductCard } from "@/components/cards/ProductCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return pageMeta({
    title: `${cat.name} — подбор и поставка под объект`,
    description: cat.description,
    path: `/catalog/${cat.slug}`,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();
  const list = getProductsByCategory(cat.slug as ProductCategory);

  return (
    <Section className="pt-10">
      <Container>
        <Breadcrumbs items={[{ href: "/catalog", label: "Каталог" }, { label: cat.name }]} />
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">{cat.name}</h1>
        <p className="mt-4 max-w-2xl text-muted">{cat.description}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
