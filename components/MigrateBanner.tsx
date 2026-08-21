import Link from "next/link";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function MigrateBanner() {
  return (
    <section className="pb-20 sm:pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border-2 border-black bg-black px-6 py-12 text-white shadow-[10px_10px_0_0_var(--accent)] sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 100% at 85% 0%, rgb(var(--accent-rgb) / 0.22), transparent 70%)",
              }}
            />
            <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
              <div>
                <p className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Продаёте на Ozon или Wildberries?
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Маркетплейсы забирают до 50–70% от цены товара.
                  <span className="text-accent"> Переезжайте на свой сайт.</span>
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
                  Без резких движений: сайт запускается параллельно, клиенты переносятся,
                  продажи не обрываются. Пошаговый план перехода — на отдельной странице.
                </p>
              </div>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:justify-end">
                <Link
                  href="/migrate"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black bg-accent px-7 py-3.5 text-sm font-bold text-accent-ink shadow-[4px_4px_0_0_rgba(255,255,255,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(255,255,255,0.9)] active:translate-y-0"
                >
                  Как уйти с маркетплейса →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
