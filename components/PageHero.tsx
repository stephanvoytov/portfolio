import { Container } from "@/components/Container";

interface PageHeroProps {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
  children?: React.ReactNode;
  image?: { src: string; alt: string };
}

/** Шапка внутренних страниц: кикер, заголовок, подзаголовок, опциональные кнопки. */
export default function PageHero({ kicker, title, sub, children, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-36">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-ink">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {kicker}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-heading sm:text-6xl">
              {title}
            </h1>
            {sub && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{sub}</p>
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
              <img
                src={image.src}
                alt={image.alt}
                className="relative aspect-[4/3] w-full rounded-3xl border-2 border-black object-cover shadow-[10px_10px_0_0_#d4af37]"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}