import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { cases } from "@/lib/cases";
import { pageMeta } from "@/lib/seo";
import ThemeDark from "@/components/ThemeDark";

export const metadata = pageMeta({
  title: "Кейсы — реальные проекты",
  description:
    "Последние проекты: интернет-магазин с синхронизацией Ozon и Wildberries, лендинг франшизы. Проблема, решение и результат каждого проекта.",
  path: "/cases",
});

export default function CasesPage() {
  return (
    <>
      <ThemeDark />
      <PageHero
        kicker="Кейсы"
        title={
          <>
            Проекты, <span className="text-accent">которые я разработал</span>
          </>
        }
        sub="Каждый кейс — это задача бизнеса, моё решение и конкретный результат. Без выдуманных цифр: всё, что написано, можно проверить на живом сайте."
      />

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="space-y-10">
            {cases.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.05}>
                <article className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-line-strong bg-panel shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md lg:grid-cols-[1fr_1.1fr]">
                  <Link
                    href={`/cases/${c.id}`}
                    className="relative block aspect-[16/10] overflow-hidden border-b border-line-strong lg:aspect-auto lg:border-b-0 lg:border-r"
                    aria-label={`${c.title} — подробнее`}
                  >
                    {c.previewDesktop && (
                      <Image
                        src={c.previewDesktop}
                        alt={`${c.title} — скриншот сайта`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 700px"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    )}
                  </Link>
                  <div className="flex flex-col p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm font-bold text-accent">{c.index}</span>
                      <span className="rounded-full border border-line-strong bg-panel px-3 py-1 font-mono text-xs text-muted">
                        {c.typeLabel}
                      </span>
                    </div>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-heading sm:text-3xl">
                      {c.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">{c.short}</p>

                    <div className="mt-6 grid grid-cols-2 gap-4 sm:max-w-md">
                      {c.results.slice(0, 2).map((r) => (
                        <div key={r.label}>
                          <p className="text-xl font-extrabold tracking-tight text-accent">
                            {r.value}
                          </p>
                          <p className="mt-1 text-xs leading-snug text-muted">{r.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {c.integrations.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line-strong bg-panel px-3 py-1 font-mono text-xs text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
                      <Link
                        href={`/cases/${c.id}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-ink shadow-brutal-sm transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
                      >
                        Подробнее
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-heading hover:underline underline-offset-4"
                      >
                        {c.urlLabel}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}