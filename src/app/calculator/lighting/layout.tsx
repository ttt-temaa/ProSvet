import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Калькулятор освещённости — предварительный подбор светильников",
  description: "Предварительный расчёт количества светильников. Не заменяет светотехнический проект.",
  path: "/calculator/lighting",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
