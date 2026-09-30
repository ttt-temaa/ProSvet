import { categories, getProductsByBrand, products } from "@/data/products";
import { getBrand } from "@/data/brands";
import { ProductCard } from "@/components/cards/ProductCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";
import { CatalogFilters } from "@/components/catalog/CatalogFilters";

export const metadata = pageMeta({
  title: "Каталог LED-светильников — подбор под объект и запрос КП",
  description:
    "Промышленные, офисные, школьные, медицинские, уличные и парковые светильники. Подбор под ТЗ и бюджет, без привязки к одному заводу. Чебоксары, поставка по РФ.",
  path: "/catalog",
});

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ brand?: string }>;
}) {
  const { brand } = await searchParams;
  const activeBrand = brand ? getBrand(brand) : undefined;
  const list = activeBrand ? getProductsByBrand(activeBrand.slug) : products;

  return (
    <Section className="pt-10">
      <Container>
        <Breadcrumbs items={[{ label: "Каталог" }]} />
        <h1 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Каталог светотехнического оборудования</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Подберём оборудование под характеристики объекта, техническое задание и бюджет. Если модели нет в спецификации — пришлите задачу.
        </p>
        {activeBrand && (
          <p className="mt-4 text-sm">
            Производитель: <span className="font-semibold">{activeBrand.name}</span>{" "}
            <a href="/catalog" className="underline">
              сбросить
            </a>
          </p>
        )}
        <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
          <CatalogFilters brand={brand} />
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              {categories.map((c) => (
                <a key={c.slug} href={`/catalog/${c.slug}`} className="rounded-full bg-soft px-4 py-2 text-sm">
                  {c.short}
                </a>
              ))}
            </div>
            {list.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2">
                {list.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl bg-soft p-8">
                <p className="font-semibold">Каталог этого производителя загрузим после согласования</p>
                <p className="mt-2 text-sm text-muted">Пока можно оставить задачу — подберём оборудование из линейки завода.</p>
                <Button href="/quiz" className="mt-4">
                  Получить подбор
                </Button>
              </div>
            )}
            <div className="mt-10 rounded-3xl bg-accent p-6">
              <p className="text-xl font-semibold">Не нашли нужную модель?</p>
              <p className="mt-2 text-sm">Специалист подберёт аналог по ТЗ и бюджету.</p>
              <Button href="/quiz" variant="dark" className="mt-4">
                Получить подбор
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
