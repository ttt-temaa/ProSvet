import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Реализованные объекты освещения в Чебоксарах и по России",
  description:
    "Более 150 объектов: образование, медицина, промышленность, коммерция и уличное освещение. Фото, видео и состав работ.",
  path: "/projects",
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
