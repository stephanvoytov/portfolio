import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  { path: "", priority: 1 },
  { path: "/landing", priority: 0.8 },
  { path: "/catalog", priority: 0.8 },
  { path: "/ecommerce", priority: 0.8 },
  { path: "/migrate", priority: 0.8 },
  { path: "/bots", priority: 0.8 },
  { path: "/support", priority: 0.6 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/contacts", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map(({ path, priority }) => ({
    url: `${site.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
