import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white">
      <Link href={`/catalog/${product.category}/${product.slug}`} className="block aspect-[4/3] bg-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-muted">{product.sku}</p>
        <h3 className="mt-1 text-lg font-semibold tracking-[-0.03em]">
          <Link href={`/catalog/${product.category}/${product.slug}`}>{product.name}</Link>
        </h3>
        <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted">
          <li>{product.power} Вт</li>
          <li>{product.flux.toLocaleString("ru-RU")} лм</li>
          <li>{product.ip}</li>
          <li>{product.cct}</li>
        </ul>
        <div className="mt-auto flex gap-2 pt-5">
          <Link
            href={`/catalog/${product.category}/${product.slug}`}
            className="rounded-full border border-line px-4 py-2 text-sm font-semibold"
          >
            Подробнее
          </Link>
          <Link
            href={`/catalog/${product.category}/${product.slug}#kp`}
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold"
          >
            Получить КП
          </Link>
        </div>
      </div>
    </article>
  );
}
