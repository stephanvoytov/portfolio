import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { cases } from "@/lib/cases";

const STATIC_PATHS: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/migrate", priority: 0.9 },
  { path: "/blog", priority: 0.6 },
  { path: "/blog/kak-razdelit-prodazhi-sait-i-marketpleisy", priority: 0.7 },
  { path: "/blog/skolko-stoit-svoj-magazin-vmesto-marketpleisa", priority: 0.7 },
  { path: "/blog/kak-perevesti-klientov-s-marketpleisa-na-svoj-sait", priority: 0.7 },
  { path: "/blog/marketpleis-ili-svoj-sait-chto-vygodnee", priority: 0.7 },
  { path: "/cases", priority: 0.8 },
  { path: "/design", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = STATIC_PATHS.map(({ path, priority }) => ({
    url: `${site.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));

  const caseUrls = cases.map((c) => ({
    url: `${site.siteUrl}/cases/${c.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticUrls, ...caseUrls];
}
