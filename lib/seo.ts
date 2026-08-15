import type { Metadata } from "next";

interface PageMeta {
  title: string;
  description: string;
  path: string;
}

/** Единый конструктор мета-данных для страниц (SEO: title, description, canonical, Open Graph). */
export function pageMeta({ title, description, path }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
    },
  };
}
