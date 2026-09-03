"use client";

import { useMemo, useState } from "react";
import { projectFilters, projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const list = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.industry === filter)),
    [filter],
  );

  return (
    <Section className="pt-10">
      <Container>
        <Breadcrumbs items={[{ label: "Проекты" }]} />
        <h1 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Реализованные проекты</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Более 150 объектов в сфере образования, медицины, промышленности, коммерческой недвижимости и уличного освещения.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.slug}
              onClick={() => setFilter(f.slug)}
              className={`rounded-full px-4 py-2 text-sm ${filter === f.slug ? "bg-ink text-white" : "bg-soft"}`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
