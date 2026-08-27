import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ModalCta } from "@/components/ModalCta";
import { BtnLink } from "@/components/BtnLink";
import Magnetic from "@/components/Magnetic";
import ProcessSteps from "@/components/ProcessSteps";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";
import SeoBlocks from "@/components/SeoBlocks";
import CookieConsent from "@/components/CookieConsent";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { packages as allPackages, whatIncluded } from "@/lib/packages";
import PkgCard from "@/components/PkgCard";
import ThemeDark from "@/components/ThemeDark";


export const metadata: Metadata = pageMeta({
  title: "Свой интернет-магазин рядом с Wildberries и Ozon — добавьте второй канал продаж",
  description:
    "Запустим ваш сайт как второй канал продаж: продаёте и на маркетплейсах, и на своём — комиссии ниже, клиенты ваши. Пошаговый план запуска.",
  path: "/migrate",
});

const marqueeItems = [
  "БЕЗ ПОТЕРИ ПРОДАЖ",
  "СИНХРОНИЗАЦИЯ С WB/OZON",
  "ВАШИ КЛИЕНТЫ — ВАША БАЗА",
  "ОТ 3 ДНЕЙ",
  "ПОД КЛЮЧ",
];

const numbers = [
  {
    value: "50–70%",
    label: "от цены товара уходят площадке: комиссия, логистика, реклама, возвраты",
  },
  {
    value: "до ×3",
    label: "больше выручки остаётся на вашём сайте",
  },
  {
    value: "каждый год",
    label: "маркетплейсы пересматривают комиссии и правила — вы не влияете на это",
  },
];

const marketPackages = allPackages.filter((p) => p.audience === "migrate" || p.audience === "both");

const reasons = [
  {
    n: "01",
    t: "Продажи не останавливаются",
    d: "Маркетплейсы продолжают работать параллельно. Переход постепенный — ничего не рвётся.",
  },
  {
    n: "02",
    t: "Маржа растёт сразу",
    d: "Комиссии площадки — 30–50%. На своём сайте вы платите только за хостинг и эквайринг.",
  },
  {
    n: "03",
    t: "Клиенты остаются с вами",
    d: "База покупателей, контакты, повторные продажи — всё принадлежит вам, а не алгоритмам.",
  },
];

const reviews = [
  {
    name: "Moranti — бренд женских сумок",
    text: "Синхронизация с Ozon и Wildberries работает автоматически: карточки, цены, остатки обновляются сами. Площадки остались, но перестали быть единственным каналом — первые заказы через сайт уже пошли.",
  },
];

export default function MigratePage() {
  return (
    <>
      <ThemeDark />
      <CookieConsent />
      <style>{`
@keyframes marq { from { transform: translateX(0);} to { transform: translateX(-50%);} }
.marq { display:flex; width:max-content; animation: marq 24s linear infinite; }
@keyframes heroFloat { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-16px) rotate(-1deg); } }
.hero-float { animation: heroFloat 7s ease-in-out infinite; will-change: transform; }
`}</style>

      {/* ===== Hero ===== */}
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
                 Свой интернет-магазин: второй канал продаж рядом с Wildberries и Ozon
               </h1>
               <p className="mt-4 max-w-xl text-base leading-relaxed text-body sm:text-lg">
                 Запустим ваш сайт как дополнительный канал к маркетплейсам — без потери заказов и с ростом маржи.
               </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-xs font-extrabold text-accent-ink">✓</span>
                  <span className="text-base text-body sm:text-lg">Продажи на площадках продолжают работать параллельно.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-xs font-extrabold text-accent-ink">✓</span>
                   <span className="text-base text-body sm:text-lg">На маркетплейсах комиссия доходит до 30–50%. На своём сайте вы платите только за хостинг.</span>
                </div>
              </div>

              {/* Mobile compact CTA */}
              <div className="mt-6 rounded-2xl border-2 border-accent bg-panel p-4 sm:hidden">
                 <p className="text-sm font-semibold text-heading">
                   Запуск от 3 дней
                 </p>
                 <div className="mt-3 flex flex-wrap items-center gap-3">
                   <span className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-xs font-bold text-heading">от 25 000 ₽</span>
                   <span className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-xs font-bold text-heading">без абонплаты</span>
                 </div>
                 <Magnetic>
                   <ModalCta variant="yellow" className="mt-4 w-full py-3 text-sm" subject="Второй канал продаж — обсуждение магазина">
                     Обсудить мой магазин
                   </ModalCta>
                 </Magnetic>
                 <p className="mt-3 text-xs leading-relaxed text-muted">
                   Сделал{" "}
                   <Link href="/cases/moranti" className="font-semibold text-accent underline underline-offset-2">
                     Moranti
                   </Link>{" "}
                   — бренд женских сумок: синхронизация с WB/Ozon, сайт стал отдельным каналом продаж.
                 </p>
              </div>

              {/* Desktop full CTA */}
              <div className="mt-6 hidden sm:block sm:rounded-3xl sm:border-2 sm:border-accent sm:bg-panel sm:p-6 sm:shadow-brutal-accent">
                 <p className="text-base font-semibold leading-snug text-heading sm:text-lg">
                   Запуск от 3 дней
                 </p>
                 <p className="mt-2 text-sm text-muted sm:text-base">
                   Стоимость фиксируется до старта и не растёт по ходу работы.
                 </p>
                 <div className="mt-4 flex flex-wrap gap-3">
                   <span className="rounded-full border border-line bg-bg px-4 py-1.5 font-mono text-sm font-bold text-heading">от 25 000 ₽</span>
                   <span className="rounded-full border border-line bg-bg px-4 py-1.5 font-mono text-sm font-bold text-heading">от 3 дней</span>
                 </div>
                 <div className="mt-5">
                   <Magnetic>
                     <ModalCta variant="yellow" className="px-10 py-4 text-lg" subject="Второй канал продаж — обсуждение магазина">
                       Обсудить мой магазин
                     </ModalCta>
                   </Magnetic>
                 </div>
                 <p className="mt-4 text-sm leading-relaxed text-muted">
                   Сделал{" "}
                   <Link href="/cases/moranti" className="font-semibold text-accent underline underline-offset-2">
                     Moranti
                   </Link>{" "}
                   — бренд женских сумок: синхронизация с WB/Ozon, сайт стал отдельным каналом продаж.
                 </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="hero-float relative">
                {/* eslint-disable-next-line @next/next/no-img-element -- локальный мокап */}
                <img
                  src="/images/mockup-moranti-v2.jpg"
                   alt="Интернет-магазин — витрина бренда как второй канал продаж"
                  className="mx-auto w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Container>

        {/* Marquee */}
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

      {/* ===== Цифры ===== */}
      <section className="py-10 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-2 sm:max-w-none sm:grid-cols-3 sm:gap-8">
            {numbers.map((n, i) => (
              <Reveal key={n.label} delay={i * 0.08}>
                <div className="text-center sm:text-left">
                  <p className="text-[22px] font-extrabold tracking-tight text-accent sm:text-4xl">
                    {n.value}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-tight text-muted sm:mt-2 sm:text-sm sm:leading-relaxed">
                    {n.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Тарифы ===== */}
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
            {marketPackages.map((p) => (
              <PkgCard key={p.id} p={p} context="migrate" />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Форма ===== */}
      <section className="border-y border-line bg-panel-soft py-10 sm:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <h2 className="text-2xl font-extrabold leading-[1.15] tracking-tight text-heading sm:text-5xl">
                Рассчитаем экономию бесплатно
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-body sm:mt-4 sm:text-lg">
                Оставьте контакт — напишу за 15 минут в Telegram или Max, разберём ваш магазин и посчитаем,
                сколько останется на сайте.
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

      {/* ===== Почему важно ===== */}
      <section className="bg-bg section-light py-10 sm:py-24">
        <Container>
          <Reveal>
              <h2 className="max-w-4xl text-2xl font-extrabold leading-[1.12] tracking-tight text-heading sm:text-4xl">
               На маркетплейсе правила и комиссии меняют без вас. Свой сайт — это{" "}
               <strong className="text-heading">второй канал продаж</strong>, который остаётся у вас: цены, бренд и
               клиенты <strong className="text-heading">принадлежат вам</strong>, а площадки работают параллельно.
             </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              На маркетплейсе трафик и алгоритмы принадлежат площадке. На своём сайте вы{" "}
              <strong className="font-bold text-heading">сами решаете</strong>, как продавать — и это остаётся с вами на годы.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ===== Что входит ===== */}
      <section className="border-y border-line bg-panel-soft section-light py-10 sm:py-24">
        <Container>
           <SectionHeading title="Что входит в запуск" />
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
      <section className="bg-bg section-light py-10 sm:py-24">
        <Container>
           <SectionHeading title="Три причины добавить свой канал" />
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
             title="Как проходит запуск"
            sub="Пять шагов — каждый понятен, измерим и не ломает текущие продажи."
          />
          <div className="mt-8 sm:mt-12">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      {/* ===== Кейс ===== */}
      <section className="border-y border-line bg-panel-soft section-light py-10 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="text-2xl font-extrabold leading-[1.15] tracking-tight text-heading sm:text-4xl">
                 Кейс Moranti — свой канал продаж рядом с маркетплейсами
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
                Бренд женских сумок. Сайт синхронизирован с Ozon и Wildberries — карточки, цены и остатки обновляются сами. Площадки остались, но перестали быть единственным каналом.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center sm:flex-wrap">
              <a
                href="https://morantibags.ru"
                target="_blank"
                rel="noopener"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brutal-accent-soft sm:w-auto"
              >
                Посмотреть сайт ↗
              </a>
              <BtnLink href={site.tg} external variant="ghost" className="w-full sm:w-auto">
                Сделать так же
              </BtnLink>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== Отзывы ===== */}
      <section className="py-10 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-extrabold leading-[1.15] tracking-tight text-heading sm:text-5xl">
              Отзывы
            </h2>
          </Reveal>
          <div className="mt-8 mx-auto max-w-2xl">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.06}>
                <figure className="h-full rounded-3xl border border-line bg-panel p-6 shadow-sm sm:p-8">
                  <div className="text-xl font-extrabold text-heading sm:text-2xl">★★★★★</div>
                  <blockquote className="mt-3 text-base leading-relaxed text-body sm:text-lg">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 font-semibold text-heading sm:mt-5">{r.name}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== FAQ ===== */}
      <Faq dark />

      {/* ===== SEO ===== */}
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
               Обсудим запуск вашего канала за 15 минут
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Расскажите про магазин — предложу формат, цену и срок. Без воды.
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
