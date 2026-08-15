import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: "Стефан — разработка сайтов на Next.js, интеграции с Ozon и Wildberries",
    template: "%s — Стефан",
  },
  description:
    "Кастомная разработка на Next.js: интернет-магазины, каталоги с синхронизацией Ozon и Wildberries, лендинги и миграция с маркетплейсов. Под ключ, от идеи до запуска и поддержки.",
  keywords: [
    "разработка сайтов",
    "next.js разработчик",
    "интернет-магазин под ключ",
    "синхронизация с ozon",
    "синхронизация с wildberries",
    "лендинг",
    "миграция с маркетплейсов",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Стефан",
    title: "Стефан — разработка сайтов на Next.js",
    description:
      "Интернет-магазины, каталоги с синхронизацией Ozon и Wildberries, лендинги под ключ.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Стефан",
  jobTitle: "Веб-разработчик (Next.js)",
  description:
    "Разработка интернет-магазинов, каталогов с синхронизацией Ozon и Wildberries, лендингов и ботов на Next.js.",
  url: site.siteUrl,
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Ozon API",
    "Wildberries API",
    "E-commerce",
    "Telegram Bot API",
  ],
  sameAs: [site.tg, site.max],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
