import { BtnLink } from "@/components/BtnLink";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CaseCard from "@/components/CaseCard";
import CodeBlock from "@/components/CodeBlock";
import CtaSection from "@/components/CtaSection";
import { cases } from "@/lib/cases";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Интернет-каталог с синхронизацией с Ozon и Wildberries",
  description:
    "Свой каталог товаров на данных Ozon и Wildberries: цены, остатки, характеристики и отзывы обновляются автоматически через API. Пример — магазин Moranti.",
  path: "/catalog",
});

const moranti = cases.find((c) => c.id === "moranti")!;

const syncSteps = [
  {
    num: "01",
    title: "Товары на маркетплейсах",
    desc: "Вы уже ведёте карточки на Ozon и Wildberries — с фото, характеристиками и отзывами.",
  },
  {
    num: "02",
    title: "API-обмен",
    desc: "Сайт через API маркетплейсов забирает данные о товарах, ценах и остатках.",
  },
  {
    num: "03",
    title: "Сайт обновляется сам",
    desc: "Цены и остатки на сайте всегда актуальны — без ручного ввода и сверки таблиц.",
  },
  {
    num: "04",
    title: "Заказы в одном месте",
    desc: "Заказы с сайта приходят в кабинет и при необходимости выгружаются на маркетплейсы.",
  },
];

const apiSnippet = `// Пример: получить остатки товаров с Ozon (упрощённо)
const res = await fetch("https://api-seller.ozon.ru/v3/product/info/stocks", {
  method: "POST",
  headers: {
    "Client-Id": process.env.OZON_CLIENT_ID,
    "Api-Key": process.env.OZON_API_KEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    filter: { offer_id: ["SKU-12345"] },
    limit: 100,
  }),
});

const { result } = await res.json();
// result.stocks → актуальные остатки — сайт показывает их сразу`;

const benefits = [
  {
    title: "Актуальные остатки",
    desc: "Клиент не заказывает товар, которого нет. Остатки обновляются через API — автоматически.",
  },
  {
    title: "Цены без ручной работы",
    desc: "Изменили цену на маркетплейсе — на сайте она тоже изменилась. Никаких таблиц и сверок.",
  },
  {
    title: "Характеристики и отзывы",
    desc: "Карточки товаров на сайте наполняются автоматически: фото, характеристики, отзывы.",
  },
  {
    title: "Один источник данных",
    desc: "Сайт и маркетплейсы работают на единых данных — расхождений нет нигде.",
  },
];

export default function CatalogPage() {
  return (
    <>
      <PageHero
        kicker="Каталог товаров"
        title={
          <>
            Свой каталог,
            <br />
            синхронизированный с Ozon и Wildberries
          </>
        }
        sub="Сайт автоматически подтягивает цены, остатки, характеристики и отзывы с маркетплейсов. Вы один раз настраиваете обмен — дальше всё работает само."
      >
        <BtnLink href={site.tg} external>
          Обсудить каталог
        </BtnLink>
        <BtnLink href="/portfolio" variant="ghost">
          Смотреть кейс
        </BtnLink>
      </PageHero>

      {/* Как работает синхронизация */}
      <section className="py-20">
        <Container>
          <SectionHeading
            kicker="Как это работает"
            title="Схема синхронизации"
            sub="Четыре шага — и данные между сайтом и маркетплейсами обновляются сами."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {syncSteps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.07}>
                <div className="relative h-full rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                  <span className="font-mono text-sm text-violet-400">{s.num}</span>
                  <h3 className="mt-3 text-base font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
                  {i < syncSteps.length - 1 && (
                    <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 font-mono text-zinc-600 lg:block">
                      →
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Пример кода */}
      <section className="border-y border-white/5 bg-white/[0.015] py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              kicker="Техническая часть"
              title="Работа с API маркетплейсов"
              sub="Обмен строится на официальных API Ozon и Wildberries: остатки, цены, характеристики, заказы. Код поддерживается и аккуратен — вы получаете не «чёрный ящик», а понятную интеграцию."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {["Ozon Seller API", "Wildberries API", "Крон / webhook", "Админка"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <CodeBlock code={apiSnippet} caption="catalog/sync.ts — получение остатков" />
        </Container>
      </section>

      {/* Преимущества */}
      <section className="py-20">
        <Container>
          <SectionHeading
            kicker="Зачем это нужно"
            title="Меньше рутины — больше продаж"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                  <h3 className="text-base font-semibold text-white">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Кейс */}
      <section className="border-t border-white/5 py-20">
        <Container>
          <SectionHeading
            kicker="Кейс"
            title="Moranti — магазин с полной синхронизацией"
            sub="Каталог, корзина и оплата на сайте + автоматическая синхронизация с Ozon и Wildberries: картинки, характеристики, цены, остатки, отзывы."
          />
          <div className="mt-10">
            <CaseCard item={moranti} detailed />
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
