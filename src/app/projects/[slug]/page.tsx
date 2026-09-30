import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container, H2, Section } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { pageMeta, jsonLdProject } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Image from "next/image";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMeta({
    title: p.title.includes(p.city) ? p.title : `${p.title} — ${p.city}`,
    description: p.task,
    path: `/projects/${p.slug}`,
    image: p.image,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const similar = projects.filter((x) => x.slug !== p.slug && x.industry === p.industry).slice(0, 3);
  const fallback = similar.length ? similar : projects.filter((x) => x.slug !== p.slug).slice(0, 3);

  const facts = (
    [
      ["Объект", p.object],
      ["Город", p.city],
      p.area ? ["Площадь", p.area] : null,
      p.roomType ? ["Тип помещения", p.roomType] : null,
      p.term ? ["Срок", p.term] : null,
      p.fixtures ? ["Количество светильников", p.fixtures] : null,
    ] as Array<[string, string] | null>
  ).filter((x): x is [string, string] => Boolean(x));

  return (
    <Section className="pt-10">
      <JsonLd
        data={jsonLdProject({
          name: p.title,
          description: p.task,
          image: p.image,
          path: `/projects/${p.slug}`,
          city: p.city,
        })}
      />
      <Container>
        <Breadcrumbs
          items={[
            { href: "/projects", label: "Проекты" },
            { href: `/projects?f=${p.industry}`, label: p.industryLabel },
            { label: p.title },
          ]}
        />
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm text-muted">
              {p.industryLabel} · {p.city}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{p.title}</h1>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-soft">
            <Image src={p.image} alt={p.title} width={1600} height={1000} className="aspect-[16/10] w-full object-cover" priority />
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map(([k, v]) => (
            <div key={k} className="rounded-3xl bg-soft p-5">
              <p className="text-xs uppercase tracking-[0.12em] text-muted">{k}</p>
              <p className="mt-2 font-semibold">{v}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Block title="Задача" text={p.task} />
          <Block title="Решение" text={p.solution} />
        </div>

        <H2 className="mt-12">Оборудование</H2>
        <ul className="mt-4 grid gap-2">
          {p.equipment.map((e) => (
            <li key={e} className="rounded-2xl border border-line px-4 py-3">
              {e}
            </li>
          ))}
        </ul>

        <H2 className="mt-12">Реализация</H2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {p.gallery.map((src, i) => (
            <figure key={src} className="overflow-hidden rounded-3xl bg-soft">
              <Image
                src={src}
                alt={p.galleryLabels?.[i] ? `${p.title}: ${p.galleryLabels[i]}` : `Реализация: ${p.title}`}
                width={1200}
                height={800}
                className="w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {p.galleryLabels?.[i] ? (
                <figcaption className="px-4 py-3 text-sm font-semibold">{p.galleryLabels[i]}</figcaption>
              ) : null}
            </figure>
          ))}
          {p.videos?.map((src) => (
            <video key={src} src={src} controls playsInline preload="none" className="w-full rounded-3xl bg-ink" />
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-accent p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Результат</h2>
          <p className="mt-3">{p.result}</p>
        </div>

        <H2 className="mt-16">Похожие проекты</H2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {fallback.map((x) => (
            <ProjectCard key={x.slug} project={x} />
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">Хотите реализовать похожий проект?</h2>
            <p className="mt-3 text-muted">Расскажите об объекте — предложим решение.</p>
            <Button href="/services" variant="line" className="mt-4">
              Смотреть услуги
            </Button>
          </div>
          <LeadForm intent="consult" extra={{ project: p.slug }} />
        </div>
      </Container>
    </Section>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-soft p-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-3 text-muted">{text}</p>
    </div>
  );
}
