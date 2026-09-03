"use client";

import { useState } from "react";
import { projectFilters, projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Container, H2, Section } from "@/components/ui/Container";

export function HomeProjects() {
  const [filter, setFilter] = useState("all");
  const list = (filter === "all" ? projects : projects.filter((p) => p.industry === filter)).slice(0, 6);

  return (
    <Section>
      <Container>
        <H2>150+ объектов — от школ до производственных предприятий</H2>
        <div className="mt-6 flex flex-wrap gap-2">
          {projectFilters
            .filter((f) => ["all", "proizvodstvo", "obrazovanie", "meditsina", "commerciya", "ulitsa"].includes(f.slug))
            .map((f) => (
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
        <div className="mt-8">
          <Button href="/projects" variant="dark">
            Все проекты
          </Button>
        </div>
      </Container>
    </Section>
  );
}
