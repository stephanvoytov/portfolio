import { Container } from "@/components/Container";

interface PageHeroProps {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
  children?: React.ReactNode;
}

/** Шапка внутренних страниц: кикер, заголовок, подзаголовок, опциональные кнопки. */
export default function PageHero({ kicker, title, sub, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-36">
      <Container>
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
      </Container>
    </section>
  );
}