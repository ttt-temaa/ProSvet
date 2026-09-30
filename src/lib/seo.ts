import type { Metadata } from "next";
import { site } from "@/data/site";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://prosvet.example").replace(/\/$/, "");

export function pageMeta({
  title,
  description,
  path = "/",
  keywords,
  index = true,
  image,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  index?: boolean;
  image?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image ?? "/opengraph-image";
  return {
    title,
    description,
    keywords,
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        }
      : { index: false, follow: false },
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "ru_RU",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${siteUrl}/#organization`,
  name: site.legalName,
  alternateName: site.name,
  url: siteUrl,
  email: site.email,
  telephone: [site.phone, site.phoneAlt],
  image: `${siteUrl}/brand/logo.png`,
  logo: `${siteUrl}/brand/logo.png`,
  description: site.description,
  priceRange: "₽₽",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Хузангая, 14, офис 208, 208 В",
    addressLocality: site.city,
    addressRegion: site.region,
    postalCode: "428027",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.coords.lat,
    longitude: site.coords.lon,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  areaServed: [
    { "@type": "Country", name: "Россия" },
    { "@type": "AdministrativeArea", name: site.region },
    { "@type": "City", name: site.city },
  ],
  knowsAbout: [
    "проектирование освещения",
    "светотехнический расчёт",
    "поставка LED-светильников",
    "монтаж систем освещения",
    "модернизация освещения",
  ],
};

export const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: site.name,
  url: siteUrl,
  inLanguage: "ru-RU",
  publisher: { "@id": `${siteUrl}/#organization` },
};

export function jsonLdFaq(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function jsonLdBreadcrumb(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        ...(item.path ? { item: `${siteUrl}${item.path}` } : {}),
      })),
    ],
  };
}

export function jsonLdService(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: "RU",
    serviceType: input.name,
  };
}

export function jsonLdProduct(input: {
  name: string;
  sku: string;
  description: string;
  brand: string;
  image: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    sku: input.sku,
    description: input.description,
    image: input.image.startsWith("http") ? input.image : `${siteUrl}${input.image}`,
    brand: { "@type": "Brand", name: input.brand },
    url: `${siteUrl}${input.path}`,
    offers: {
      "@type": "Offer",
      url: `${siteUrl}${input.path}`,
      availability: "https://schema.org/InStock",
      priceCurrency: "RUB",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "RUB",
        valueAddedTaxIncluded: true,
        description: "Стоимость по запросу — расчёт под объект",
      },
    },
  };
}

export function jsonLdProject(input: { name: string; description: string; image: string; path: string; city: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.name,
    description: input.description,
    image: input.image.startsWith("http") ? input.image : `${siteUrl}${input.image}`,
    url: `${siteUrl}${input.path}`,
    locationCreated: { "@type": "Place", name: input.city },
    creator: { "@id": `${siteUrl}/#organization` },
    inLanguage: "ru-RU",
  };
}
