import type { MetadataRoute } from "next";
import { theme } from "@/lib/theme";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VOYTOV STUDIO — разработка сайтов на Next.js",
    short_name: "VOYTOV",
    description:
      "Интернет-магазины, каталоги с синхронизацией Ozon и Wildberries, лендинги. Под ключ.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: theme.accent,
    icons: [
      { src: "/icon/192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon/512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
