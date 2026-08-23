import { BtnLink } from "@/components/BtnLink";
import { Container } from "@/components/Container";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import CommissionBreakdown from "@/components/CommissionBreakdown";
import { ModalCta } from "@/components/ModalCta";
import MobileStickyCta from "@/components/MobileStickyCta";
import ScrollRow from "@/components/ScrollRow";
import Faq, { faqs } from "@/components/Faq";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { GOALS } from "@/lib/analytics";

export const metadata = pageMeta({
  title: "Миграция с маркетплейсов на свой сайт без потери продаж",
  description:
    "Постепенный переход с Ozon и Wildberries на собственный сайт: комиссии ниже, клиенты ваши, продажи не обрываются. Пошаговый план из 5 шагов.",
  path: "/migrate",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const numbers = [
  {
    value: "50–70%",
    label: "от цены товара могут уходить площадке: комиссия, логистика, реклама, возвраты",
  },
  {
    value: "до ×3",
    label: "больше выручки с заказа остаётся на своём сайте",
  },
  {
    value: "98%",
    label: "категорий Wildberries подняли комиссии в июле 2026",
    desktopOnly: true,
  },
];

const checklist = [
  {
    num: "01",
    title: "Разбор",
    desc: "Переписываемся о вашем магазине: ассортимент, маржа, повторные покупки. По цифрам выбираем формат — витрина, магазин или гибрид.",
  },
  {
    num: "02",
    title: "Данные",
    desc: "Переношу карточки товаров с WB и Ozon. Если торгуете параллельно — подключаю синхронизацию остатков и цен по API.",
  },
  {
    num: "03",
    title: "Дизайн",
    desc: "Изучаю конкурентов и согласовываю макет главной и карточки товара до кода, чтобы не переделывать потом.",
  },
  {
    num: "04",
    title: "Запуск",
    desc: "Вёрстка, оплата ЮKassa и СБП, доставка СДЭК и Почта, оферта и 152-ФЗ. Финал — первый тестовый заказ у вас в руках.",
  },
  {
    num: "05",
    title: "Клиенты и адаптация",
    desc: "Подключаю каналы под нишу: QR-скидки в посылках, соцсети, реклама. Через 2–3 месяца сверяем цифры и перераспределяем товары между сайтом и площадками.",
  },
];

const basePlans = [
  {
    name: "Витрина",
    price: "от 25 000 ₽",
    days: "3–7 дней",
    desc: "Лендинг бренда с каталогом до 20 товаров. Продаёте через маркетплейс — клиенты запоминают вас, а не площадку.",
    items: [
      "Лендинг бренда + каталог до 20 товаров",
      "Кнопка «Купить» ведёт на WB или Ozon",
      "Домен, хостинг, Яндекс.Метрика, базовое SEO",
      "Заявки вам в Telegram: вопросы, опт, наличие",
    ],
  },
  {
    name: "Магазин",
    price: "от 49 000 ₽",
    days: "10–15 дней",
    desc: "Полноценный магазин с оплатой и доставкой: продажи идут прямо на сайте, маржа остаётся у вас.",
    items: [
      "Каталог до 300 товаров, перенос карточек с WB/Ozon",
      "Корзина, онлайн-оплата ЮKassa и СБП",
      "Промокоды и акции — настраиваете сами в админке",
      "Доставка: расчёт СДЭК или Почты России",
      "Админка + Метрика с целями: заказ и оплата",
      "+10 000 ₽ — синхронизация остатков, если торгуете параллельно с площадкой",
    ],
    hot: true,
  },
];

const growthPlans = [
  {
    name: "Старт перехода",
    price: "от 69 000 ₽",
    days: "около 3 недель",
    desc: "Магазин плюс первый контур перевода клиентов с площадок на свой канал.",
    items: [
      "Всё из «Магазина»",
      "Посадочные страницы под QR для посылок",
      "Форма сбора контактов покупателей",
      "Базовая стратегия перевода клиентов",
    ],
  },
];

const addServices = [
  {
    name: "Синхронизация остатков с Ozon/WB",
    desc: "Параллельные продажи без расхождений по наличию.",
  },
  {
    name: "Яндекс.Директ и SEO",
    desc: "Настройка и ведение рекламы — 2 месяца.",
  },
  {
    name: "Страница под QR в посылках",
    desc: "Сбор контактов, промокод, дизайн вкладыша.",
  },
  {
    name: "Программа лояльности",
    desc: "Баллы, уровни, персональные скидки.",
  },
  {
    name: "Интеграция с CRM или 1С",
    desc: "Передача заказов и остатков в вашу систему.",
  },
];

type Plan = {
  name: string;
  price: string;
  days: string;
  desc: string;
  items: string[];
  hot?: boolean;
};

function PlanCard({ p, delay }: { p: Plan; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`relative flex h-full flex-col rounded-3xl border-2 p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 ${
          p.hot
            ? "border-black bg-accent shadow-[8px_8px_0_0_#0a0a0a]"
            : "border-line bg-white shadow-sm hover:border-black hover:shadow-[6px_6px_0_0_var(--accent)]"
        }`}
      >
        {p.hot && (
          <span className="absolute -top-3 left-6 rounded-full bg-accent-ink px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-accent">
            Чаще всего выбирают
          </span>
        )}
        <div className="flex items-baseline justify-between gap-3">
          <h3 className={`text-lg font-bold ${p.hot ? "text-accent-ink" : "text-heading"}`}>
            {p.name}
          </h3>
          <span
            className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px] font-bold ${
              p.hot ? "border-accent-ink/30 text-accent-ink/80" : "border-line text-muted"
            }`}
          >
            {p.days}
          </span>
        </div>
        <p
          className={`mt-3 text-3xl font-extrabold ${
            p.hot ? "text-accent-ink" : "text-heading"
          }`}
        >
          {p.price}
        </p>
        <p
          className={`mt-3 text-sm leading-relaxed ${
            p.hot ? "text-accent-ink/70" : "text-muted"
          }`}
        >
          {p.desc}
        </p>
        <ul
          className={`mt-6 flex-1 space-y-2.5 text-sm font-semibold ${
            p.hot ? "text-accent-ink" : "text-heading"
          }`}
        >
          {p.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span
                className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] font-extrabold ${
                  p.hot ? "bg-white text-accent-ink" : "bg-accent text-accent-ink"
                }`}
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <ModalCta
            variant={p.hot ? "primary" : "yellow"}
            block
            subject={`Тариф «${p.name}» (${p.price}) — переход с маркетплейсов`}
          >
            Обсудить задачу
          </ModalCta>
        </div>
      </div>
    </Reveal>
  );
}

export default function MigratePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        kicker="Миграция с маркетплейсов"
        title={
          <>
            Перенесём ваши продажи
            <br />
            с Wildberries и Ozon на свой сайт за 14 дней
          </>
        }
        sub="Соберите базу клиентов, поднимите маржу и получите синхронизацию остатков с площадками. Продажи на маркетплейсах продолжают работать — текущие заказы не останавливаются."
        image={{
          src: "/images/mockup-moranti-v2.jpg",
          alt: "Интернет-магазин Moranti — витрина бренда, перенесённая с маркетплейсов",
        }}
        imageCaption="Реальный пример: витрина бренда Moranti, синхронизированная с Ozon и Wildberries"
      >
        <BtnLink href="#calc" className="w-full sm:w-auto" goal={GOALS.heroCalc}>
          Посчитать экономию
        </BtnLink>
      </PageHero>

      {/* Цифры */}
      <section className="bg-black py-12 text-white sm:py-16">
        <Container>
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-2 sm:max-w-none sm:grid-cols-3 sm:gap-8">
            {numbers.map((n, i) => (
              <Reveal key={n.label} delay={i * 0.08}>
                <div className={n.desktopOnly ? "hidden text-center sm:block sm:text-left" : "text-center sm:text-left"}>
                  <p className="text-[22px] font-extrabold tracking-tight text-accent sm:text-4xl">
                    {n.value}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-tight text-white/60 sm:mt-2 sm:text-sm sm:leading-relaxed">
                    {n.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Суть — крупный цепляющий текст */}
      <section className="border-b border-line bg-white py-14 sm:py-20">
        <Container>
          <Reveal>
            <p className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-ink">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Суть
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-extrabold leading-[1.12] tracking-tight text-heading sm:text-5xl">
              Маркетплейс — это аренда витрины у конкурента. Свой сайт — магазин, клиенты и
              маржа, которые остаются у вас.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Площадка забирает 50–70% с каждого заказа и владеет вашими покупателями. Мы
              переносим продажи на сайт постепенно — без потери текущего потока заказов.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Тарифы — подняты наверх */}
      <section id="tariffs" className="scroll-mt-24 border-y border-line bg-panel-soft py-14 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Стоимость"
            title="Что во что обходится"
            sub="Цена фиксируется до старта и не меняется по ходу работы. Точную оценку даю после короткого разговора о задаче."
          />
          <p className="mt-10 font-mono text-xs font-bold uppercase tracking-[0.25em] text-faint sm:mt-12">
            Базовые форматы
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {basePlans.map((p, i) => (
              <PlanCard key={p.name} p={p} delay={i * 0.08} />
            ))}
          </div>

          <p className="mt-10 sm:mt-14 font-mono text-xs font-bold uppercase tracking-[0.25em] text-faint">
            Переход под ключ
          </p>
          <div className="mx-auto mt-5 max-w-2xl">
            {growthPlans.map((p, i) => (
              <PlanCard key={p.name} p={p} delay={i * 0.08} />
            ))}
          </div>

          <p className="mt-10 sm:mt-14 font-mono text-xs font-bold uppercase tracking-[0.25em] text-faint">
            Дополнительные услуги — добавляю к любому тарифу
          </p>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {addServices.map((s) => (
              <li key={s.name} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-[11px] font-extrabold text-accent-ink">
                  ✓
                </span>
                <span>
                  <span className="font-bold text-heading">{s.name}.</span> {s.desc}
                </span>
              </li>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted">
              В любой тариф входит: договор и ТЗ с фиксированной ценой, адаптив под телефоны,
              SSL, обучение работе с сайтом и поддержка первый месяц.
            </p>
          </Reveal>
        </Container>
      </section>

      <CommissionBreakdown />

      {/* Чек-лист */}
      <section className="py-14 sm:py-24">
        <Container>
          <SectionHeading
            kicker="План из 5 шагов"
            title="Как проходит переход"
            sub="Никаких резких движений: каждый шаг понятен, измерим и не ломает текущие продажи."
          />
          <div className="mt-10">
            <ScrollRow label="План перехода по шагам">
              {checklist.map((s, i) => (
                <Reveal key={s.num} delay={i * 0.05} className="w-[80%] shrink-0 snap-start sm:w-[310px]">
                  <div className="group h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-black hover:shadow-[5px_5px_0_0_var(--accent)]">
                    <span className="inline-block rounded-full border-2 border-black bg-accent px-3 py-1 text-xs font-extrabold text-accent-ink">{s.num}</span>
                    <h3 className="mt-4 text-lg font-bold text-heading">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ScrollRow>
          </div>
        </Container>
      </section>

      {/* Кейс */}
      <section className="bg-black py-20 text-white sm:py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
                <Image
                  src="/images/mockup-moranti-v2.jpg"
                  alt="Интернет-магазин Moranti — главная страница сайта"
                  width={1600}
                  height={1000}
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Пример
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
                  Уже работает: Moranti
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                  Бренд женских сумок. Сайт готов и синхронизирован с Ozon и Wildberries —
                  карточки, цены и остатки обновляются сами. Ждём поставку товара клиенту и
                  начинаем продавать прямо на сайте. Площадки остаются, но перестают быть
                  единственным каналом продаж.
                </p>
              </Reveal>
              <Reveal delay={0.1} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://morantibags.ru"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgb(var(--accent-rgb)_/_0.4)] sm:w-auto"
                >
                  Посмотреть сайт ↗
                </a>
                <BtnLink href={site.tg} external variant="ghost" className="w-full sm:w-auto" goal={GOALS.tgClick}>
                  Сделать так же
                </BtnLink>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <Faq />

      <MobileStickyCta />

      <CtaSection hideMigrate />
    </>
  );
}
