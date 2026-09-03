import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-white">
      <Link href={`/projects/${project.slug}`} className="block aspect-[16/10] overflow-hidden bg-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
      </Link>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.12em] text-muted">
          {project.industryLabel} · {project.city}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-[-0.03em]">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{project.task}</p>
        <p className="mt-3 text-sm">{project.works}</p>
        <Link href={`/projects/${project.slug}`} className="mt-4 inline-flex text-sm font-semibold">
          Подробнее →
        </Link>
      </div>
    </article>
  );
}
