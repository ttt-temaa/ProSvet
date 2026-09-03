"use client";

import { useMemo, useState } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { useLead } from "@/components/forms/LeadModal";

const norms: Record<string, number> = {
  "Офис": 400,
  "Класс": 400,
  "Склад": 200,
  "Цех": 300,
  "Коридор": 100,
  "Торговый зал": 500,
};

export default function LightingCalcPage() {
  const { open } = useLead();
  const [area, setArea] = useState(200);
  const [height, setHeight] = useState(3);
  const [purpose, setPurpose] = useState("Офис");
  const [lux, setLux] = useState(400);
  const [flux, setFlux] = useState(4000);

  const qty = useMemo(() => {
    const need = area * lux;
    const useful = flux * (height <= 4 ? 0.5 : 0.4);
    return Math.max(1, Math.ceil(need / useful));
  }, [area, lux, flux, height]);

  return (
    <Section className="pt-10">
      <Container>
        <Breadcrumbs items={[{ label: "Калькулятор освещённости" }]} />
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">Калькулятор освещённости</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Предварительное количество светильников. Расчёт не заменяет профессиональный светотехнический проект.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-3">
            <label className="grid gap-1 text-sm">
              Площадь, м²
              <input className="field" type="number" value={area} onChange={(e) => setArea(Number(e.target.value))} />
            </label>
            <label className="grid gap-1 text-sm">
              Высота, м
              <input className="field" type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
            </label>
            <label className="grid gap-1 text-sm">
              Назначение
              <select
                className="field"
                value={purpose}
                onChange={(e) => {
                  setPurpose(e.target.value);
                  setLux(norms[e.target.value] ?? 300);
                }}
              >
                {Object.keys(norms).map((k) => (
                  <option key={k}>{k}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-1 text-sm">
              Требуемая освещённость, лк
              <input className="field" type="number" value={lux} onChange={(e) => setLux(Number(e.target.value))} />
            </label>
            <label className="grid gap-1 text-sm">
              Световой поток одного светильника, лм
              <input className="field" type="number" value={flux} onChange={(e) => setFlux(Number(e.target.value))} />
            </label>
          </div>
          <div className="rounded-3xl bg-ink p-6 text-white">
            <p className="text-sm text-white/60">Предварительное количество</p>
            <p className="mt-3 text-5xl font-semibold">{qty}</p>
            <p className="mt-2 text-white/70">светильников</p>
            <Button className="mt-8 w-full" onClick={() => open("calc")}>
              Получить точный расчёт
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
