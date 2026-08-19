import Link from "next/link";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import { cases } from "@/lib/cases";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Кейсы — реальные проекты",
  description:
    "Реальные проекты: интернет-магазин с синхронизацией Ozon и Wildberries, лендинг франшизы. Проблема, решение и результат каждого проекта.",
  path: "/cases",
});

export default function CasesPage() {
  return (
    <>
      <PageHero
        kicker="Кейсы"
        title={
          <>
            Реальные проекты, <span className="text-accent-ink">которые я разработал</span>
          </>
        }
        sub="Каждый кейс — это задача бизнеса, моё решение и конкретный результат. Без выдуманных цифр: всё, что написано, можно проверить на живом сайте."
      />

      <section className="pb-24">
        <Container>
          <div className="space-y-10">
            {cases.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.05}>
                <Link
                  href={`/cases/${c.id}`}
                  className="group block rounded-3xl border border-line bg-panel p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-md sm:p-8"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8">
                    <span className="text-2xl font-extrabold text-accent">{c.index}</span>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted">
                        {c.typeLabel}
                      </p>
                      <h2 className="mt-1.5 text-xl font-bold tracking-tight text-heading sm:text-2xl">
                        {c.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-body">{c.short}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-accent transition-transform duration-200 group-hover:translate-x-1">
                      Подробнее
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}