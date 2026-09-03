"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useLead } from "@/components/forms/LeadModal";

const slides = [
  { src: "/images/hero/factory.jpg", label: "Производство" },
  { src: "/images/hero/school.jpg", label: "Школа" },
  { src: "/images/hero/hospital.jpg", label: "Медицина" },
  { src: "/images/hero/warehouse.jpg", label: "Склад" },
  { src: "/images/hero/office.jpg", label: "Коммерция" },
  { src: "/images/hero/park.jpg", label: "Парк" },
];

export function Hero() {
  const { open } = useLead();
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[86vh] overflow-hidden bg-ink text-white">
      {slides.map((s, idx) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: idx === i ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.src} alt={s.label} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        </div>
      ))}
      <div className="relative mx-auto flex min-h-[86vh] max-w-[1440px] flex-col justify-end px-4 pb-16 pt-28 md:px-8 md:pb-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Чебоксары · поставки по России
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
          Светотехнические решения для бизнеса, производства и государственных объектов
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">
          Проектируем, подбираем, поставляем и монтируем светодиодное освещение под задачи конкретного объекта любой сложности.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={() => open("kp")}>Получить коммерческое предложение</Button>
          <Button href="/projects" variant="line" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-ink">
            Посмотреть проекты
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.label}
              onClick={() => setI(idx)}
              className={`rounded-full px-3 py-1 text-xs ${idx === i ? "bg-accent text-ink" : "bg-white/15"}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
