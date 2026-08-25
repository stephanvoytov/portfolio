import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ModalCta } from "@/components/ModalCta";
import { BtnLink } from "@/components/BtnLink";
import Magnetic from "@/components/Magnetic";
import CaseCard from "@/components/CaseCard";
import ProcessSteps from "@/components/ProcessSteps";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";
import SeoBlocks from "@/components/SeoBlocks";
import CookieConsent from "@/components/CookieConsent";
import { cases } from "@/lib/cases";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { packages as allPackages, whatIncluded } from "@/lib/packages";
import PkgCard from "@/components/PkgCard";
import ThemeDark from "@/components/ThemeDark";

export const metadata: Metadata = pageMeta({
  title: "VOYTOV STUDIO — разработка сайтов на Next.js",
  description:
    "Разработка сайтов на Next.js и WordPress: интернет-магазины, каталоги с синхронизацией Ozon и Wildberries, лендинги под ключ. От идеи до запуска и поддержки.",
  path: "/",
});

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VOYTOV STUDIO — разработка сайтов на Next.js",
  url: site.siteUrl,
  inLanguage: "ru",
  description: "Интернет-магазины, каталоги и лендинги под ключ на Next.js.",
};

const marqueeItems = [
  "РАБОТАЮ ПО ДОГОВОРУ",
  "НЕОГРАНИЧЕННЫЕ ПРАВКИ",
  "АДАПТИВ ПОД ВСЕ УСТРОЙСТВА",
  "OZON + WILDBERRIES",
  "ОТ 7 ДНЕЙ",
  "ПОД КЛЮЧ",
];

const homePackages = allPackages.filter((p) => p.audience === "home" || p.audience === "both");

const reasons = [
  {
    n: "01",
    t: "Практичный подход",
    d: "Сайт делается не «красиво», а для заявок: Яндекс.Директ, SEO, удобный интерфейс — сразу, а не потом.",
  },
  {
    n: "02",
    t: "Next.js + WordPress",
    d: "Любая логика и любой бюджет: быстрый кастом на Next.js или привычная админка на WordPress. Без Tilda и Wix.",
  },
  {
    n: "03",
    t: "Честность и фикс-цена",
    d: "Договор, ТЗ и акт. Цена фиксируется до старта и не растёт по ходу работы. Правки — без лимита.",
  },
];

const reviews = [
  {
    name: "Ирина, бренд сумок",
    text: "Перешли с Wildberries на свой сайт — Стефан поднял всё за две недели, синхронизация с площадкой работает сама. Первые заказы пошли.",
  },
  {
    name: "Дмитрий, карго из Китая",
    text: "Сделал лендинг под рекламу, подсказал по Директу. Заявки пошли со второй недели, всё понятно и без воды.",
  },
  {
    name: "Анна, юрист",
    text: "Объяснил всё просто, хотя я в сайтах ноль. Договор, доступы — мои. Поддержка реально отвечает.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <ThemeDark />
      <CookieConsent />
      <style>{`
@keyframes marq { from { transform: translateX(0);} to { transform: translateX(-50%);} }
.marq { display:flex; width:max-content; animation: marq 24s linear infinite; }
@keyframes heroFloat { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-16px) rotate(-1deg); } }
@keyframes heroFloatPhone { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-12px) rotate(2deg); } }
.hero-float { animation: heroFloat 7s ease-in-out infinite; will-change: transform; }
.hero-float-phone { animation: heroFloatPhone 6s ease-in-out 1.2s infinite; will-change: transform; }
`}</style>

      {/* ===== Hero (+ бегущая строка) ===== */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: "url('/images/hero/topo-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", mixBlendMode: "screen" }}
        />
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <Container className="flex flex-1 flex-col justify-center">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-heading sm:text-6xl lg:text-7xl">
                Разработка сайтов под ключ
              </h1>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-xs font-extrabold text-accent-ink">✓</span>
                  <span className="text-base text-body sm:text-lg">Делаю на Next.js и WordPress — без Tilda и Wix.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-xs font-extrabold text-accent-ink">✓</span>
                  <span className="text-base text-body sm:text-lg">Проект веду я один — полный контроль на каждом этапе.</span>
                </div>
              </div>

              {/* на мобилке — компактный блок */}
              <div className="mt-6 rounded-2xl border-2 border-accent bg-panel p-4 sm:hidden">
                <p className="text-sm font-semibold text-heading">
                  Главную страницу разработаю{" "}
                  <span className="rounded bg-accent px-1.5 py-0.5 font-bold text-accent-ink">до оплаты</span>
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-xs font-bold text-heading">от 10 000 ₽</span>
                  <span className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-xs font-bold text-heading">от 5 дней</span>
                </div>
                <Magnetic>
                  <ModalCta variant="yellow" className="mt-4 w-full py-3 text-sm" subject="Обсуждение проекта">
                    Обсудить проект
                  </ModalCta>
                </Magnetic>
              </div>

              {/* на десктопе — полный блок */}
              <div className="mt-6 hidden sm:block sm:rounded-3xl sm:border-2 sm:border-accent sm:bg-panel sm:p-6 sm:shadow-brutal-accent">
                <p className="text-base font-semibold leading-snug text-heading sm:text-lg">
                  Главную страницу разработаю{" "}
                  <span className="rounded bg-accent px-1.5 py-0.5 font-bold text-accent-ink">до оплаты</span>{" "}
                  — одобрите макет, потом платите.
                </p>
                <p className="mt-2 text-sm text-muted sm:text-base">
                  И месяц Яндекс.Директа — в подарок при заказе.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="rounded-full border border-line bg-bg px-4 py-1.5 font-mono text-sm font-bold text-heading">от 10 000 ₽</span>
                  <span className="rounded-full border border-line bg-bg px-4 py-1.5 font-mono text-sm font-bold text-heading">от 5 дней</span>
                </div>
                <p className="mt-3 text-sm text-muted">
                  Цена — за лендинг бренда под ключ. Каталог, магазин и синхронизация с WB/Ozon —
                  отдельными пакетами на{" "}
                  <Link href="/migrate" className="font-semibold text-accent underline underline-offset-2">
                    странице перехода
                  </Link>
                  .
                </p>
                <div className="mt-5">
                  <Magnetic>
                    <ModalCta variant="yellow" className="px-10 py-4 text-lg" subject="Обсуждение проекта">
                      Обсудить проект
                    </ModalCta>
                  </Magnetic>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="hero-float relative">
                {/* eslint-disable-next-line @next/next/no-img-element -- локальный мокап ноутбука */}
                <img
                  src="/images/hero/mac-sst.png"
                  alt="Ноутбук с готовым сайтом"
                  className="mx-auto w-full"
                />
              </div>
              <div className="hero-float-phone absolute bottom-0 right-0 w-28 sm:w-32 md:w-36">
                {/* eslint-disable-next-line @next/next/no-img-element -- локальный мокап телефона */}
                <img
                  src="/images/hero/iphone-sst.png"
                  alt="Телефон с сайтом"
                  className="drop-shadow-[0_24px_40px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </Container>

        {/* бегущая строка */}
        <div className="mt-auto overflow-hidden border-t-2 border-line bg-panel py-3">
          <div className="marq">
            {[...marqueeItems, ...marqueeItems].map((t, i) => (
              <span
                key={i}
                className="mx-6 whitespace-nowrap font-mono text-sm font-bold uppercase tracking-[0.2em] text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Пакеты ===== */}
      <section className="py-10 sm:py-24">
        <Container>
          <SectionHeading
            dark
            title="Что во что обходится"
            sub={
              <>
                Цена <strong className="font-semibold text-heading">фиксируется до старта</strong> и не меняется по
                ходу работы.
              </>
            }
          />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
            {homePackages.map((p) => (
              <PkgCard key={p.id} p={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Форма захвата ===== */}
      <section className="border-y border-line bg-panel-soft py-10 sm:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <h2 className="text-2xl font-extrabold leading-[1.15] tracking-tight text-heading sm:text-5xl">
                Подберём тип сайта под вашу задачу бесплатно
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-body sm:mt-4 sm:text-lg">
                Оставьте контакт — напишу за 15 минут в Telegram или Max, разберём цели и предложу вариант под
                бюджет.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={site.tg} target="_blank" rel="noopener" className="font-semibold text-heading hover:underline">
                  Telegram
                </a>
                <a href={site.max} target="_blank" rel="noopener" className="font-semibold text-heading hover:underline">
                  Max
                </a>
              </div>
            </div>
            <div className="rounded-3xl border-2 border-line bg-panel p-6 shadow-brutal-accent sm:p-8">
              <LeadForm />
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Работы ===== */}
      <section className="flex min-h-[100svh] flex-col justify-center py-8 sm:py-16">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-extrabold leading-[1.15] tracking-tight text-heading sm:text-5xl">
              Живые проекты
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:mt-4 sm:text-lg">
              Сайты под ключ, которые я разработал для бизнеса.
            </p>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-6 sm:grid-cols-2">
            {cases.slice(0, 4).map((c) => (
              <CaseCard key={c.id} item={c} big />
            ))}
          </div>
          <div className="mt-5">
            <BtnLink href="/cases" variant="ghost">
              Смотреть все кейсы →
            </BtnLink>
          </div>
        </Container>
      </section>

      {/* ===== Что входит ===== */}
      <section className="bg-bg section-light py-10 sm:py-24">
        <Container>
          <SectionHeading title="Что входит в разработку сайта" />
          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatIncluded.map((t, i) => (
              <Reveal key={t} delay={(i % 3) * 0.05}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-panel p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent sm:p-5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-xs font-extrabold text-accent-ink sm:h-7 sm:w-7">
                    ✓
                  </span>
                  <span className="text-sm font-semibold leading-relaxed text-heading sm:text-base">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Топ-3 причины ===== */}
      <section className="border-y border-line bg-panel-soft section-light py-10 sm:py-24">
        <Container>
          <SectionHeading title="Три причины поработать со мной" />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.n} delay={i * 0.06}>
                <div className="group h-full rounded-3xl border border-line bg-panel p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-brutal-accent sm:p-7">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-accent font-mono text-lg font-extrabold text-accent-ink sm:h-12 sm:w-12 sm:text-xl">
                    {r.n}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-heading sm:mt-5 sm:text-xl">{r.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body sm:mt-3">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Процесс ===== */}
      <section className="py-10 sm:py-24">
        <Container>
          <SectionHeading
            dark
            title="Этапы разработки сайта"
            sub="Один шаг за другим — вы всегда знаете, что будет дальше."
          />
          <div className="mt-8 sm:mt-12">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      {/* ===== Отзывы ===== */}
      <section className="border-y border-line bg-panel-soft section-light py-10 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-extrabold leading-[1.15] tracking-tight text-heading sm:text-5xl">
              Отзывы
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.06}>
                <figure className="h-full rounded-3xl border border-line bg-panel p-5 shadow-sm sm:p-6">
                  <div className="text-xl font-extrabold text-heading sm:text-2xl">★★★★★</div>
                  <blockquote className="mt-2 text-sm leading-relaxed text-body sm:mt-3">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 font-semibold text-heading sm:mt-4">{r.name}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== FAQ ===== */}
      <Faq dark />

      {/* ===== SEO-блоки ===== */}
      <section className="bg-bg section-light py-10 sm:py-24">
        <Container>
          <SeoBlocks />
        </Container>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-line bg-panel py-16 text-heading sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-heading sm:text-5xl">
              Обсудим ваш сайт за 15 минут
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Расскажите задачу — предложу вариант, цену и срок. Без воды.
            </p>
            <div className="mt-8 flex justify-center">
              <Magnetic>
                <ModalCta
                  variant="yellow"
                  className="text-base sm:text-lg px-9 py-4"
                >
                  Обсудить проект
                </ModalCta>
              </Magnetic>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
