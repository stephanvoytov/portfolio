import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";

interface PageHeroProps {
  kicker: string;
  title: React.ReactNode;
  sub?: ReactNode;
  children?: React.ReactNode;
  image?: { src: string; alt: string };
  imageCaption?: string;
}

/** Шапка внутренних страниц: кикер, заголовок, подзаголовок, опциональные кнопки. */
export default function PageHero({ kicker, title, sub, children, image, imageCaption }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-14 pt-24 sm:pb-16 sm:pt-36">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 sm:gap-10">
          <div>
            <p className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-ink">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {kicker}
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-heading sm:mt-4 sm:text-5xl">
              {title}
            </h1>
            {sub && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-body sm:mt-5 sm:text-lg">{sub}</p>
            )}
            {children && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
                {children}
              </div>
            )}
          </div>
          {image && (
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-accent/30 blur-3xl" />
              <Image
                src={image.src}
                alt={image.alt}
                width={1600}
                height={1200}
                preload
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="relative aspect-[4/3] w-full rounded-3xl border-2 border-ink object-cover shadow-brutal-accent-xl"
              />
              {imageCaption && (
                <p className="mt-3 text-center text-xs leading-relaxed text-muted">
                  {imageCaption}
                </p>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
