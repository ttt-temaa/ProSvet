import type { MetadataRoute } from "next";
import { categories, products } from "@/data/products";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prosvet.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/catalog",
    "/services",
    "/solutions",
    "/projects",
    "/about",
    "/contacts",
    "/quiz",
    "/calculator/payback",
    "/calculator/lighting",
    "/calculator/turnkey",
    "/partners",
    "/privacy",
    "/consent",
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));

  return [
    ...staticPages,
    ...categories.map((c) => ({ url: `${base}/catalog/${c.slug}` })),
    ...products.map((p) => ({ url: `${base}/catalog/${p.category}/${p.slug}` })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}` })),
    ...solutions.map((s) => ({ url: `${base}/solutions/${s.slug}` })),
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}` })),
  ];
}
