import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { LeadProvider } from "@/components/forms/LeadModal";
import { site } from "@/data/site";
import { jsonLdOrg } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://prosvet.example"),
  icons: { icon: "/favicon.svg" },
  title: {
    default: `${site.name} — светотехнические решения для объектов`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    locale: "ru_RU",
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />
        <LeadProvider>
          <Header />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
          <MobileBar />
        </LeadProvider>
      </body>
    </html>
  );
}
