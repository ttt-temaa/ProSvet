import type { Metadata } from "next";
import { site } from "@/data/site";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prosvet.example";

export function pageMeta({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${base}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "ru_RU",
      type: "website",
    },
  };
}

export const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: base,
  email: site.email,
  telephone: [site.phone, site.phoneAlt],
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Хузангая, 14, офис 208, 208 В",
    addressLocality: "Чебоксары",
    postalCode: "428027",
    addressCountry: "RU",
  },
  areaServed: "RU",
};
