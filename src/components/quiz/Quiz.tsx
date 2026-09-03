"use client";

import { useState } from "react";
import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    q: "Какой у вас тип объекта?",
    name: "objectType",
    options: ["Производство", "Склад", "Школа / детский сад", "Медицина", "Офис", "Торговля", "Улица / парк"],
  },
  {
    q: "Это новое освещение или модернизация?",
    name: "mode",
    options: ["Новое строительство", "Модернизация действующего", "Пока не определились"],
  },
  {
    q: "Какая ориентировочная площадь?",
    name: "area",
    options: ["До 200 м²", "200–1000 м²", "1000–5000 м²", "Более 5000 м²"],
  },
  {
    q: "Требуется ли проектирование?",
    name: "design",
    options: ["Да, нужен расчёт", "Есть готовое ТЗ", "Нужна консультация"],
  },
  {
    q: "Что необходимо получить?",
    name: "need",
    options: ["Коммерческое предложение", "Светотехнический расчёт", "Поставку", "Монтаж", "Комплекс под ключ"],
  },
];

export function Quiz() {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const step = steps[i];
  const done = i >= steps.length;

  return (
    <div className="rounded-3xl border border-line bg-white p-6 md:p-8">
      {!done ? (
        <>
          <p className="text-xs uppercase tracking-[0.14em] text-muted">
            Вопрос {i + 1} из {steps.length}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{step.q}</h2>
          <div className="mt-6 grid gap-2">
            {step.options.map((opt) => (
              <button
                key={opt}
                className="rounded-2xl border border-line px-4 py-3 text-left hover:border-ink"
                onClick={() => {
                  setAnswers((a) => ({ ...a, [step.name]: opt }));
                  setI((v) => v + 1);
                }}
              >
                {opt}
              </button>
            ))}
          </div>
          {i > 0 && (
            <button className="mt-4 text-sm text-muted" onClick={() => setI((v) => v - 1)}>
              ← Назад
            </button>
          )}
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">Спасибо! Оставьте контакты</h2>
          <p className="mt-2 text-muted">Специалист изучит информацию и свяжется с вами.</p>
          <div className="mt-6">
            <LeadForm intent="quiz" compact extra={answers} />
          </div>
          <Button variant="ghost" className="mt-3" onClick={() => { setI(0); setAnswers({}); }}>
            Пройти ещё раз
          </Button>
        </>
      )}
    </div>
  );
}
