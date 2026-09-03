"use client";

import { useMemo, useState } from "react";
import { monthsLabel, rub } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useLead } from "@/components/forms/LeadModal";

export function PaybackCalculator({ compact }: { compact?: boolean }) {
  const { open } = useLead();
  const [qty, setQty] = useState(40);
  const [oldW, setOldW] = useState(250);
  const [newW, setNewW] = useState(80);
  const [hours, setHours] = useState(12);
  const [tariff, setTariff] = useState(8);
  const [equip, setEquip] = useState(0);
  const [mount, setMount] = useState(0);

  const result = useMemo(() => {
    const now = (qty * oldW * hours * 30 * tariff) / 1000;
    const after = (qty * newW * hours * 30 * tariff) / 1000;
    const month = Math.max(0, now - after);
    const year = month * 12;
    const capex = equip + mount;
    const payback = month > 0 && capex > 0 ? capex / month : 0;
    return { now, after, month, year, payback };
  }, [qty, oldW, newW, hours, tariff, equip, mount]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-3">
        <Field label="Количество светильников" value={qty} onChange={setQty} />
        <Field label="Мощность старых, Вт" value={oldW} onChange={setOldW} />
        <Field label="Мощность новых, Вт" value={newW} onChange={setNewW} />
        <Field label="Часов работы в сутки" value={hours} onChange={setHours} />
        <Field label="Стоимость кВт·ч, ₽" value={tariff} onChange={setTariff} step={0.1} />
        {!compact && (
          <>
            <Field label="Стоимость оборудования, ₽" value={equip} onChange={setEquip} />
            <Field label="Стоимость монтажа, ₽" value={mount} onChange={setMount} />
          </>
        )}
      </div>
      <div className="rounded-3xl bg-ink p-6 text-white">
        <p className="text-xs uppercase tracking-[0.14em] text-white/50">Предварительный расчёт</p>
        <dl className="mt-5 grid gap-4">
          <Row k="Расходы сейчас" v={rub(result.now) + " / мес"} />
          <Row k="После модернизации" v={rub(result.after) + " / мес"} />
          <Row k="Экономия в месяц" v={rub(result.month)} />
          <Row k="Экономия в год" v={rub(result.year)} />
          {!compact && <Row k="Срок окупаемости" v={equip + mount > 0 ? monthsLabel(result.payback) : "укажите стоимость"} />}
        </dl>
        <p className="mt-5 text-xs text-white/50">
          Расчёт является предварительным. Точный результат зависит от параметров объекта и выбранного оборудования.
        </p>
        <Button className="mt-6 w-full" onClick={() => open("calc")}>
          Получить точный расчёт
        </Button>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  step?: number;
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span>{label}</span>
      <input
        type="number"
        min={0}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="field"
      />
    </label>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-3">
      <dt className="text-sm text-white/60">{k}</dt>
      <dd className="text-lg font-semibold tracking-[-0.03em]">{v}</dd>
    </div>
  );
}
