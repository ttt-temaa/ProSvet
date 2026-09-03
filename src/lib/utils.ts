export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function formatPhone(value: string) {
  return value.replace(/[^\d+]/g, "");
}

export function rub(n: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export function monthsLabel(n: number) {
  if (!Number.isFinite(n) || n <= 0) return "—";
  const m = Math.round(n);
  const mod10 = m % 10;
  const mod100 = m % 100;
  if (mod10 === 1 && mod100 !== 11) return `${m} месяц`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${m} месяца`;
  return `${m} месяцев`;
}
