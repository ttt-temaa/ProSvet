import type { MetadataRoute } from "next";
import { categories, products } from "@/data/products";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly") => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("", 1, "daily"),
    page("/catalog", 0.9),
    page("/services", 0.9),
    page("/solutions", 0.9),
    page("/projects", 0.9),
    page("/about", 0.6),
    page("/contacts", 0.8),
    page("/quiz", 0.7),
    page("/calculator/payback", 0.6),
    page("/calculator/lighting", 0.5),
    page("/calculator/turnkey", 0.7),
    page("/partners", 0.6),
    page("/privacy", 0.2, "yearly"),
    page("/consent", 0.2, "yearly"),
    ...categories.map((c) => page(`/catalog/${c.slug}`, 0.8)),
    ...products.map((p) => page(`/catalog/${p.category}/${p.slug}`, 0.7)),
    ...services.map((s) => page(`/services/${s.slug}`, 0.85)),
    ...solutions.map((s) => page(`/solutions/${s.slug}`, 0.85)),
    ...projects.map((p) => page(`/projects/${p.slug}`, 0.8)),
  ];
}
