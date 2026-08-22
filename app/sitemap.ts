import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  { path: "", priority: 1 },
  { path: "/migrate", priority: 0.9 },
  { path: "/blog", priority: 0.6 },
  { path: "/blog/kak-razdelit-prodazhi-sait-i-marketpleisy", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map(({ path, priority }) => ({
    url: `${site.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
