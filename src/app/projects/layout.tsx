import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Реализованные проекты",
  description:
    "Более 150 объектов: образование, медицина, промышленность, коммерция и уличное освещение. Чебоксары и регионы РФ.",
  path: "/projects",
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
