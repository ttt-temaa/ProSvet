import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategory, getProduct, products } from "@/data/products";
import { solutions } from "@/data/solutions";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, H2, Section } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { pageMeta, jsonLdProduct } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Image from "next/image";

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, product: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; product: string }> }) {
  const { product } = await params;
  const item = getProduct(product);
  if (!item) return {};
  return pageMeta({
    title: `${item.name} ${item.sku} — характеристики и запрос КП`,
    description: item.description,
    path: `/catalog/${item.category}/${item.slug}`,
    image: item.image,
    keywords: [item.name, item.sku, item.brand, "светильник", "КП"],
  });
}

export default async function ProductPage({ params }: { params: Promise<{ category: string; product: string }> }) {
  const { category, product } = await params;
  const item = getProduct(product);
  const cat = getCategory(category);
  if (!item || !cat) notFound();

  return (
    <Section className="pt-10">
      <JsonLd
        data={jsonLdProduct({
          name: item.name,
          sku: item.sku,
          description: item.description,
          brand: item.brand,
          image: item.image,
          path: `/catalog/${item.category}/${item.slug}`,
        })}
      />
      <Container>
        <Breadcrumbs
          items={[
            { href: "/catalog", label: "Каталог" },
            { href: `/catalog/${cat.slug}`, label: cat.name },
            { label: item.name },
          ]}
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-soft">
            <Image
              src={item.image}
              alt={`${item.name}, артикул ${item.sku}`}
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-sm text-muted">
              {item.brand} · {item.sku}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">{item.name}</h1>
            <p className="mt-4 text-muted">{item.description}</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <li className="rounded-2xl bg-soft p-3">Мощность: {item.power} Вт</li>
              <li className="rounded-2xl bg-soft p-3">Поток: {item.flux.toLocaleString("ru-RU")} лм</li>
              <li className="rounded-2xl bg-soft p-3">IP: {item.ip}</li>
              <li className="rounded-2xl bg-soft p-3">CCT: {item.cct}</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#kp">Запросить стоимость</Button>
              <Button href="#kp" variant="dark">
                Получить КП
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <H2>Технические характеристики</H2>
          <table className="mt-6 w-full text-sm">
            <tbody>
              {item.specs.map((s) => (
                <tr key={s.label} className="border-b border-line">
                  <th className="py-3 text-left font-medium text-muted">{s.label}</th>
                  <td className="py-3">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16">
          <H2>Где применяется</H2>
          <div className="mt-6 flex flex-wrap gap-3">
            {item.applications.map((a) => {
              const sol = solutions.find((s) => s.cardTitle.includes(a.split(" ")[0]) || s.cardText.includes(a));
              return (
                <Link key={a} href={sol ? `/solutions/${sol.slug}` : "/solutions"} className="rounded-full bg-soft px-4 py-2 text-sm">
                  {a}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-soft p-6">
            <h2 className="text-2xl font-semibold">Документация</h2>
            <p className="mt-3 text-muted">[ОЖИДАЕМ ДОКУМЕНТЫ ДЛЯ ПУБЛИКАЦИИ]: паспорт, сертификат, технический лист, монтажная инструкция.</p>
            <Button href="#kp" className="mt-4">
              Получить документацию
            </Button>
          </div>
          <div id="kp" className="rounded-3xl border border-line p-6">
            <h2 className="text-2xl font-semibold">Подходит для проекта?</h2>
            <p className="mt-2 text-sm text-muted">Запросите стоимость или полный подбор под объект.</p>
            <div className="mt-4">
              <LeadForm intent="kp" compact extra={{ sku: item.sku, product: item.name }} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
