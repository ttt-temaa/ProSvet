"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products, categories } from "@/data/products";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export function SearchBox() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const items: { href: string; title: string; meta: string }[] = [];
    products.forEach((p) => {
      if ([p.name, p.sku, p.brand].join(" ").toLowerCase().includes(query)) {
        items.push({
          href: `/catalog/${p.category}/${p.slug}`,
          title: p.name,
          meta: p.sku,
        });
      }
    });
    categories.forEach((c) => {
      if (c.name.toLowerCase().includes(query)) {
        items.push({ href: `/catalog/${c.slug}`, title: c.name, meta: "Категория" });
      }
    });
    projects.forEach((p) => {
      if ([p.title, p.city, p.industryLabel].join(" ").toLowerCase().includes(query)) {
        items.push({ href: `/projects/${p.slug}`, title: p.title, meta: "Проект" });
      }
    });
    services.forEach((s) => {
      if (s.title.toLowerCase().includes(query) || s.short.toLowerCase().includes(query)) {
        items.push({ href: `/services/${s.slug}`, title: s.short, meta: "Услуга" });
      }
    });
    return items.slice(0, 8);
  }, [query]);

  return (
    <div className="relative hidden w-56 lg:block xl:w-64">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Поиск по артикулу"
        className="w-full rounded-full border border-line bg-soft px-4 py-2 text-sm outline-none focus:border-ink"
      />
      {results.length > 0 && (
        <div className="absolute top-[calc(100%+6px)] z-50 w-80 rounded-2xl border border-line bg-white p-2 shadow-xl">
          {results.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              onClick={() => setQ("")}
              className="block rounded-xl px-3 py-2 hover:bg-soft"
            >
              <p className="text-sm font-medium">{r.title}</p>
              <p className="text-xs text-muted">{r.meta}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
