"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { objectTypes, taskTypes } from "@/data/site";
import { Button } from "@/components/ui/Button";

export type LeadIntent =
  | "kp"
  | "callback"
  | "calc"
  | "quiz"
  | "partner"
  | "docs"
  | "consult";

const titles: Record<LeadIntent, string> = {
  kp: "Получить коммерческое предложение",
  callback: "Заказать звонок",
  calc: "Получить точный расчёт",
  quiz: "Подбор освещения",
  partner: "Сотрудничество с проектировщиками",
  docs: "Получить документацию",
  consult: "Получить консультацию",
};

export function LeadForm({
  intent = "kp",
  compact,
  extra,
  className,
}: {
  intent?: LeadIntent;
  compact?: boolean;
  extra?: Record<string, string>;
  className?: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [source, setSource] = useState("");
  const isCallback = intent === "callback";
  const isPartner = intent === "partner";

  useEffect(() => {
    setSource(window.location.pathname);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("intent", intent);
    if (extra) {
      Object.entries(extra).forEach(([k, v]) => data.set(k, v));
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", { method: "POST", body: data });
      if (!res.ok) throw new Error("fail");
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className={className ?? "grid gap-3"}>
      <input type="hidden" name="source" value={source} />
      <label className="grid gap-1 text-sm">
        <span>Имя</span>
        <input required name="name" className="field" placeholder="Как к вам обращаться" />
      </label>
      <label className="grid gap-1 text-sm">
        <span>Телефон</span>
        <input required name="phone" type="tel" className="field" placeholder="+7" />
      </label>
      {!isCallback && !isPartner && (
        <>
          <label className="grid gap-1 text-sm">
            <span>Компания</span>
            <input name="company" className="field" placeholder="ООО «…»" />
          </label>
          {!compact && (
            <>
              <label className="grid gap-1 text-sm">
                <span>Email</span>
                <input name="email" type="email" className="field" placeholder="work@company.ru" />
              </label>
              <label className="grid gap-1 text-sm">
                <span>Тип объекта</span>
                <select name="objectType" className="field">
                  <option value="">Выберите</option>
                  {objectTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1 text-sm">
                <span>Что требуется</span>
                <select name="task" className="field">
                  <option value="">Выберите</option>
                  {taskTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1 text-sm">
                <span>Задача</span>
                <textarea name="message" rows={3} className="field" placeholder="Коротко опишите объект" />
              </label>
              <label className="grid gap-1 text-sm">
                <span>Файл (план, ТЗ, спецификация)</span>
                <input name="file" type="file" className="text-sm file:mr-3 file:rounded-full file:border-0 file:bg-soft file:px-3 file:py-1.5" />
              </label>
            </>
          )}
        </>
      )}
      {isPartner && (
        <>
          <label className="grid gap-1 text-sm">
            <span>Email</span>
            <input name="email" type="email" className="field" placeholder="you@studio.ru" />
          </label>
          <label className="grid gap-1 text-sm">
            <span>Сколько проектов выпускаете в месяц</span>
            <input name="projectsPerMonth" className="field" placeholder="Например, 4–6" />
          </label>
          <label className="grid gap-1 text-sm">
            <span>География проектирования</span>
            <input name="geo" className="field" placeholder="Чувашия, Поволжье, РФ" />
          </label>
        </>
      )}
      <p className="text-xs text-muted">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a className="underline" href="/privacy">
          политикой конфиденциальности
        </a>{" "}
        и{" "}
        <a className="underline" href="/consent">
          обработкой персональных данных
        </a>
        .
      </p>
      <Button type="submit" className="w-full">
        {status === "loading" ? "Отправляем…" : titles[intent]}
      </Button>
      {status === "error" && (
        <p className="text-sm text-red-600">Не удалось отправить. Позвоните нам — ответим сразу.</p>
      )}
    </form>
  );
}
