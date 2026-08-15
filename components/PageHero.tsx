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
    <section className="hero-glow grid-bg relative overflow-hidden pb-16 pt-32 sm:pt-36">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{kicker}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl">
          {title}
        </h1>
        {sub && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{sub}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </section>
  );
}
