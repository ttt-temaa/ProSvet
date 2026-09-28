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
    q: "Новое строительство или модернизация существующего освещения?",
    name: "mode",
    options: ["Новое строительство", "Модернизация действующего", "Другое"],
  },
  {
    q: "Представителем какой организации вы являетесь?",
    name: "role",
    options: ["Заказчик", "Подрядчик", "Проектировщик", "Другое"],
  },
  {
    q: "Требуется ли проектирование?",
    name: "design",
    options: [
      "Есть проектная документация",
      "Есть готовое ТЗ",
      "Да, нужен светотехнический расчет",
      "Нет, замена 1 к 1",
      "Другое",
    ],
  },
  {
    q: "Что необходимо получить в итоге?",
    name: "need",
    options: ["Поставка светильников", "Поставка с монтажом под ключ", "Коммерческое предложение"],
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
