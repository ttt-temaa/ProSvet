import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { LeadProvider } from "@/components/forms/LeadModal";
import { YandexMetrika } from "@/components/analytics/YandexMetrika";
import { TrackAttribution } from "@/components/analytics/TrackAttribution";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { jsonLdOrg, jsonLdWebsite } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://prosvet.example"),
  icons: { icon: [{ url: "/favicon.png", type: "image/png" }, { url: "/favicon.svg" }] },
  title: {
    default: `Проектирование и поставка LED-освещения для объектов — ${site.name}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "business",
  keywords: [
    "освещение производственных помещений",
    "светотехнический расчёт",
    "поставка LED светильников",
    "монтаж освещения Чебоксары",
    "модернизация освещения",
    "освещение школ",
    "освещение больниц",
    "Про Свет",
  ],
  formatDetection: { telephone: true, email: true, address: true },
  verification: {
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  openGraph: {
    locale: "ru_RU",
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <JsonLd data={{ "@context": "https://schema.org", "@graph": [jsonLdOrg, jsonLdWebsite] }} />
        <YandexMetrika />
        <TrackAttribution />
        <LeadProvider>
          <Header />
          <main className="min-h-[60dvh]">{children}</main>
          <Footer />
          <MobileBar />
        </LeadProvider>
      </body>
    </html>
  );
}
