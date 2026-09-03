"use client";

import { useState } from "react";
import { categories } from "@/data/products";

export function CatalogFilters() {
  const [open, setOpen] = useState(false);
  const body = (
    <div className="grid gap-5 text-sm">
      <fieldset>
        <legend className="mb-2 font-semibold">Категория</legend>
        {categories.map((c) => (
          <label key={c.slug} className="mb-1 flex gap-2">
            <input type="checkbox" /> {c.short}
          </label>
        ))}
      </fieldset>
      {["Назначение", "Производитель", "Мощность", "Световой поток", "Цветовая температура", "Степень защиты", "Способ монтажа"].map(
        (f) => (
          <fieldset key={f}>
            <legend className="mb-2 font-semibold">{f}</legend>
            <p className="text-muted">Появится после загрузки полного каталога заказчика.</p>
          </fieldset>
        ),
      )}
    </div>
  );

  return (
    <>
      <button className="mb-4 w-full rounded-full bg-ink py-3 text-sm font-semibold text-white lg:hidden" onClick={() => setOpen(true)}>
        Фильтры
      </button>
      <aside className="hidden rounded-3xl bg-soft p-5 lg:block">{body}</aside>
      {open && (
        <div className="fixed inset-0 z-[70] overflow-auto bg-white p-5 lg:hidden">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-lg font-semibold">Фильтры</p>
            <button className="text-3xl" onClick={() => setOpen(false)} aria-label="Закрыть">
              ×
            </button>
          </div>
          {body}
          <button className="mt-6 w-full rounded-full bg-accent py-3 font-semibold" onClick={() => setOpen(false)}>
            Показать
          </button>
        </div>
      )}
    </>
  );
}
