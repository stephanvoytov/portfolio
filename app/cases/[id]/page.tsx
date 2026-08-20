import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import BrowserFrame from "@/components/BrowserFrame";
import CaseSlider from "@/components/CaseSlider";
import CtaSection from "@/components/CtaSection";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Coins,
  Gauge,
  Package,
  Send,
  Sparkles,
  Timer,
} from "@/components/icons";
import { cases } from "@/lib/cases";
import { pageMeta } from "@/lib/seo";

const resultIcons: Record<string, React.ReactNode> = {
  coins: <Coins className="h-5 w-5" />,
  package: <Package className="h-5 w-5" />,
  gauge: <Gauge className="h-5 w-5" />,
  timer: <Timer className="h-5 w-5" />,
  clock: <Clock className="h-5 w-5" />,
  send: <Send className="h-5 w-5" />,
  sparkles: <Sparkles className="h-5 w-5" />,
};

interface CasePageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return cases.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { id } = await params;
  const item = cases.find((c) => c.id === id);
  if (!item) return pageMeta({ title: "Кейс не найден", description: "", path: "/cases" });
  return pageMeta({
    title: `${item.title} — кейс`,
    description: item.short,
    path: `/cases/${item.id}`,
  });
}

export default async function CasePage({ params }: CasePageProps) {
  const { id } = await params;
  const item = cases.find((c) => c.id === id);
  if (!item) notFound();

  const idx = cases.findIndex((c) => c.id === id);
  const next = cases[(idx + 1) % cases.length];
  const preview = item.previewDesktop ?? item.slides[0]?.src;
  const time = item.results.find((r) => r.icon === "clock")?.value;
  const perf = item.results.find((r) => r.icon === "gauge")?.value;

  const heroMetrics = [
    { value: item.typeLabel, label: "Тип проекта" },
    ...(time ? [{ value: time, label: "Время разработки" }] : []),
    ...(perf ? [{ value: perf, label: "PageSpeed на десктопе" }] : []),
  ];

  return (
    <>
      {/* ===== Hero кейса ===== */}
      <section className="relative overflow-hidden bg-black pb-20 pt-28 text-white sm:pb-24 sm:pt-32">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-16 select-none text-[16rem] font-extrabold leading-none text-white/[0.04] sm:text-[22rem]"
        >
          {item.index}
        </span>
        <Container className="relative">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal>
                <Link
                  href="/cases"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Все кейсы
                </Link>
                <div className="mt-10 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Кейс <span className="font-sans">{item.index}</span> · {item.typeLabel}
                </div>
                <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
                  {item.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                  {item.short}
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-ink shadow-[4px_4px_0_0_rgba(255,255,255,0.18)] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Открыть сайт
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    href={`/cases/${next.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white/70 transition-colors hover:border-white hover:text-white"
                  >
                    Следующий кейс
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              {preview && (
                <BrowserFrame
                  src={preview}
                  alt={`${item.title} — главная страница сайта`}
                  url={item.urlLabel}
                  priority
                />
              )}
            </Reveal>
          </div>

          <div className="mt-14 flex flex-col gap-y-2.5 border-t border-white/15 pt-6 sm:mt-16 sm:flex-row sm:gap-y-0 sm:divide-x sm:divide-white/15">
            {heroMetrics.map((m) => (
              <div key={m.label} className="sm:px-8 sm:first:pl-0">
                <p className="text-lg font-extrabold leading-none text-white sm:text-2xl">
                  {m.value}
                </p>
                <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Было / Стало ===== */}
      {item.compare && (
        <section className="bg-black pb-20 text-white sm:pb-24">
          <Container>
            <SectionHeading
              dark
              kicker="Визуально"
              title="Было и стало"
              sub="Слева — сайт, который владелец собрал сам на Tilda. Справа — новый сайт."
            />
            <div className="relative mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-accent px-4 py-2 font-mono text-sm font-extrabold text-accent-ink shadow-[3px_3px_0_0_rgba(255,255,255,0.25)] lg:block"
              >
                →
              </span>
              <Reveal>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-white/70">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  Было · старый сайт на Tilda
                </p>
                <BrowserFrame
                  src={item.compare.before.src}
                  alt={item.compare.before.label}
                  url="diversebrand.ru"
                />
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Стало · новый сайт
                </p>
                <BrowserFrame
                  src={item.compare.after.src}
                  alt={item.compare.after.label}
                  url="diversebrand.vercel.app"
                />
              </Reveal>
            </div>
          </Container>
        </section>
      )}

      {/* ===== Проблема ===== */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <SectionHeading kicker="Проблема" title="С чего всё началось" />
            <Reveal>
              <p className="text-lg leading-relaxed text-body">{item.problem}</p>
              <ul className="mt-8 space-y-4">
                {item.problemPoints.map((p, i) => (
                  <li
                    key={p}
                    className="flex gap-4 rounded-2xl border border-line bg-panel p-5 text-sm leading-relaxed text-body sm:text-base"
                  >
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red-500/10 text-xs font-extrabold text-red-500">
                      {i + 1}
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== Решение ===== */}
      <section className="border-y border-line bg-panel/50 py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="lg:order-2 lg:self-center">
              <CaseSlider slides={item.slides} id={item.id} url={item.urlLabel} />
            </div>
            <div className="lg:order-1">
              <SectionHeading kicker="Решение" title="Что сделано" />
              <ul className="mt-8 space-y-4">
                {item.solution.map((s, i) => (
                  <li key={s} className="flex gap-4 text-sm leading-relaxed text-body sm:text-base">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-xs font-extrabold text-accent-ink">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Результат ===== */}
      <section className="bg-black py-20 text-white sm:py-28">
        <Container>
          <SectionHeading
            dark
            kicker="Результат"
            title="Что изменилось"
            sub="Цифры — без догадок: всё, что здесь написано, проверяется на живом сайте."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {item.results.map((r, i) => (
              <Reveal key={r.label} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center transition-colors duration-200 hover:border-accent/40 sm:p-8">
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                    {resultIcons[r.icon]}
                  </span>
                  <p className="mt-4 text-3xl font-extrabold tracking-tight text-accent sm:text-4xl">
                    {r.value}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">{r.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Стек и план ===== */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading kicker="Стек" title="Технологии" />
              <div className="mt-8 flex flex-wrap gap-2">
                {item.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line-strong bg-panel px-4 py-2 font-mono text-sm text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {item.nextSteps && (
              <div>
                <SectionHeading kicker="Дальше" title="Что в планах" />
                <Reveal>
                  <p className="mt-8 text-lg leading-relaxed text-body">{item.nextSteps}</p>
                </Reveal>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ===== Следующий кейс ===== */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <Link
              href={`/cases/${next.id}`}
              className="group block overflow-hidden rounded-3xl border border-line bg-panel shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-md"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto_auto] sm:items-center sm:gap-10">
                <div className="bg-black px-8 py-10 text-white sm:py-12">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    Следующий кейс
                  </p>
                  <p className="mt-3 text-3xl font-extrabold text-white/90">
                    {next.index}
                  </p>
                </div>
                <div className="px-8 py-8 sm:py-10">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    {next.typeLabel}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-heading sm:text-3xl">
                    {next.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-body">{next.short}</p>
                </div>
                {next.previewDesktop && (
                  <div className="hidden w-44 self-center sm:block">
                    <div className="overflow-hidden rounded-xl border border-line-strong">
                      <Image
                        src={next.previewDesktop}
                        alt={`${next.title} — превью`}
                        width={480}
                        height={300}
                        className="aspect-[16/10] h-auto w-full object-cover object-top"
                      />
                    </div>
                  </div>
                )}
                <span
                  aria-hidden
                  className="hidden px-8 text-accent transition-transform duration-200 group-hover:translate-x-1.5 sm:block"
                >
                  <ArrowRight className="h-7 w-7" />
                </span>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}