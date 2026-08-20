import { BtnLink } from "@/components/BtnLink";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import BrowserFrame from "@/components/BrowserFrame";
import MarketplaceVsSite from "@/components/MarketplaceVsSite";
import CommissionBreakdown from "@/components/CommissionBreakdown";
import Faq from "@/components/Faq";
import { ArrowUpRight } from "@/components/icons";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Миграция с маркетплейсов на свой сайт без потери продаж",
  description:
    "Постепенный переход с Ozon и Wildberries на собственный сайт: комиссии ниже, клиенты ваши, продажи не обрываются. Пошаговый план из 5 шагов.",
  path: "/migrate",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Не потеряю ли я продажи, если начну уходить с маркетплейса?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Переход спланирован так, чтобы продажи не обрывались: маркетплейсы продолжают работать, пока сайт набирает обороты. Вы сами решаете, когда и насколько снижать долю площадок — по шагам и по цифрам.",
      },
    },
    {
      "@type": "Question",
      name: "Кто будет обновлять цены и остатки на сайте?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Никто. Сайт синхронизируется с Ozon и Wildberries через API: цены, остатки, характеристики и отзывы обновляются автоматически, без ручного ввода. Двойной работы нет — ведёте карточки на маркетплейсе, сайт повторяет.",
      },
    },
    {
      "@type": "Question",
      name: "Сайт не будет дороже маркетплейса?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Суммарные удержания маркетплейса — 35–55% с каждой продажи (комиссия, логистика, реклама, эквайринг, хранение). Сайт — это один фиксированный бюджет и ~2–3% эквайринга. Уже при небольшом потоке заказов сайт окупается за пару месяцев.",
      },
    },
    {
      "@type": "Question",
      name: "А доставка? У маркетплейса склады и ПВЗ по всей стране",
      acceptedAnswer: {
        "@type": "Answer",
        text: "На своём сайте география и скорость доставки на старте будут скромнее. Подключаем СДЭК, Почту России и курьерские службы с расчётом стоимости на лету — для большинства ниш этого достаточно, а с ростом продаж добавляются региональные склады и свои ПВЗ.",
      },
    },
    {
      "@type": "Question",
      name: "Маркетплейс сам приводит покупателей. А на сайт кто будет приводить?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Реклама, SEO и соцсети — это отдельный шаг плана, плюс каждая посылка с маркетплейса несёт QR-код на ваш сайт. Трафик придётся приводить самим — но каждый приведённый клиент остаётся вашим.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько времени занимает переход?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Сам сайт — 1–2 недели. Полный переход с переносом аудитории — обычно 2–3 месяца: сайт, синхронизация, реклама, постепенное снижение доли маркетплейсов. Темп выбираете вы.",
      },
    },
    {
      "@type": "Question",
      name: "А если у меня ещё нет своих клиентов?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Для этого в плане есть шаг «Собираем аудиторию»: QR-коды в упаковке, вкладыши, соцсети, накопительные скидки. Каждая посылка с маркетплейса превращается в возможность привести покупателя на ваш сайт.",
      },
    },
    {
      "@type": "Question",
      name: "Мне вообще подходит уход с маркетплейсов?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Не всем — и это нормально. Если у вас разовые покупки без повторов и высокая конкуренция по цене, маркетплейс может оставаться основным каналом. На аудите посмотрим ваши цифры и честно скажем, что выгоднее.",
      },
    },
  ],
};

const numbers = [
  {
    value: "35–55%",
    label: "реальная суммарная комиссия: комиссия, логистика, реклама, эквайринг, хранение",
  },
  {
    value: "98%",
    label: "категорий Wildberries — комиссии выросли с 7 июля 2026",
  },
  {
    value: "+50%",
    label: "спрос на запуск собственных интернет-магазинов — к IV кварталу 2026",
  },
];

const problems = [
  {
    title: "Высокая нагрузка",
    desc: "Суммарные удержания — комиссия, логистика, реклама, эквайринг, хранение — достигают 35–55% от цены товара, а на дешёвых позициях — до 60–70%.",
  },
  {
    title: "Комиссии растут",
    desc: "С 7 июля 2026 Wildberries повысил комиссии в 98% категорий. Планировать маржу на площадке становится всё сложнее.",
  },
  {
    title: "Зависимость от правил",
    desc: "Витрина, рейтинг и видимость управляются алгоритмами площадки — не вами.",
  },
  {
    title: "Нет своих клиентов",
    desc: "Покупатель приходит на маркетплейс, а не к вам. Базу контактов вы не получаете.",
  },
  {
    title: "Конкуренция на полке",
    desc: "Ваш товар стоит рядом с дешёвыми аналогами — борьба за клик идёт ценой.",
  },
  {
    title: "Нестабильная ситуация со складами",
    desc: "18 июля 2026 два склада Wildberries выгорели: ущерб — от 100 млрд ₽, восстановление — 1–1,5 года, а новая оферта снимает с площадки ответственность за сгоревший товар.",
  },
];

const news = [
  {
    date: "18 июля 2026",
    tag: "Пожары",
    img: "/images/migrate/news-fire.jpg",
    title: "Сгорели склады в Электростали и Котовске: ущерб — от 100 млрд ₽",
    desc: "Пожары на логистических центрах Wildberries уничтожили товары селлеров на сотни миллиардов рублей. Из строя выведено около 7% мощностей компании.",
    src: "dp.ru, фото — Донат Сорокин / ТАСС",
    href: "https://www.dp.ru/a/2026/07/20/pozhari-na-skladah-wildberries",
  },
  {
    date: "с 7 июля 2026",
    tag: "Оферта",
    img: "/images/migrate/worker.jpg",
    title: "Сгоревший товар — «непреодолимая сила»: компенсации не будет",
    desc: "Wildberries обновил оферту: утрата товара из-за пожаров на складах больше не возмещается. Селлеры, потерявшие товар, юридически остаются без компенсации.",
    src: "Т-Бизнес / secrets.tbank.ru",
    href: "https://secrets.tbank.ru/trendy/ataki-bpla-wildberries-chto-delayut-sellery",
  },
  {
    date: "с 7 июля 2026",
    tag: "Комиссии",
    img: "/images/migrate/boxes.jpg",
    title: "Комиссии выросли почти во всех категориях",
    desc: "Wildberries повысил комиссии в 98% категорий: на дешёвых позициях удержания достигают 60–70% от цены товара. Маржа селлеров сжимается дальше.",
    src: "сводки продавцов и отраслевые разборы, 2026",
    href: "https://mercora.ru/news/ushcherb-skladam-wildberries-ot-atak-bpla-2026-08-09",
  },
  {
    date: "9 августа 2026",
    tag: "Масштаб",
    img: "/images/migrate/news-fire2.jpg",
    title: "Уже 19 пострадавших складов, ущерб — 239,4 млрд ₽",
    desc: "За месяц волна пожаров затронула 19 логистических центров Wildberries, 12 из них повреждены или уничтожены. За то же время спрос на собственные интернет-магазины вырос на 50%.",
    src: "mercora.ru, обзор рынка",
    href: "https://mercora.ru/news/ushcherb-skladam-wildberries-ot-atak-bpla-2026-08-09",
  },
];

const checklist = [
  {
    num: "01",
    title: "Аудит ассортимента и цен",
    desc: "Считаем маржу по товарам, определяем, что выгодно продавать на сайте, а что оставить на маркетплейсах.",
  },
  {
    num: "02",
    title: "Сайт с синхронизацией",
    desc: "Запускаем каталог с автоматической синхронизацией: цены и остатки обновляются сами — двойной работы нет.",
  },
  {
    num: "03",
    title: "Собираем аудиторию",
    desc: "QR-коды в упаковке, вкладыши, соцсети, накопительные скидки — переводим покупателей на свой сайт.",
  },
  {
    num: "04",
    title: "Реклама и SEO",
    desc: "Настраиваем рекламу и поисковое продвижение на запросы, за которыми раньше платили маркетплейсу.",
  },
  {
    num: "05",
    title: "Плавное снижение доли площадок",
    desc: "По мере роста продаж на сайте снижаем зависимость от маркетплейсов — без резких обрывов выручки.",
  },
];

const why = [
  {
    title: "Клиенты — ваши",
    desc: "Контакты и повторные покупки остаются у вас: письма, боты, накопительные программы.",
  },
  {
    title: "Комиссия — только за приём платежей",
    desc: "Вместо комиссии маркетплейса — небольшая плата за эквайринг. Остальное остаётся вам.",
  },
  {
    title: "Постепенно, без обрывов",
    desc: "Никаких резких решений: маркетплейсы продолжают работать, пока сайт набирает обороты.",
  },
];

const fit = {
  yes: [
    "Продажи повторяются: товар покупают снова и снова",
    "Есть бренд или ниша, которую можно отстроить от конкурентов",
    "Маржа позволяет платить за рекламу и оставаться в плюсе",
    "Хотите знать своих покупателей и собирать свою базу",
  ],
  no: [
    "Разовые покупки без повторов: клиент пришёл — и больше не вернётся",
    "Высокая ценовая конкуренция: выигрывает только самый дешёвый",
    "Нет времени на рекламу и работу с трафиком",
    "Маркетплейс даёт основной поток — и текущая ситуация вас устраивает",
  ],
};

const plans = [
  {
    name: "Перенос каталога",
    price: "от 30 000 ₽",
    desc: "Простой переезд витрины: ваш ассортимент и цены — на сайте, пока маркетплейсы работают как обычно.",
    items: ["Лендинг или каталог", "Форма заявки и обратный звонок", "Перенос товаров и фото"],
  },
  {
    name: "Синхронизация",
    price: "от 80 000 ₽",
    desc: "Сайт живёт одной жизнью с Ozon и Wildberries: цены, остатки и отзывы обновляются сами.",
    items: [
      "Каталог с корзиной и оплатой",
      "Автосинхронизация цен и остатков",
      "Подхват отзывов с маркетплейсов",
    ],
    hot: true,
  },
  {
    name: "Магазин под ключ",
    price: "от 150 000 ₽",
    desc: "Полный переход: свой магазин, реклама, SEO и план по снижению доли маркетплейсов.",
    items: [
      "Всё из «Синхронизации»",
      "Настройка рекламы и SEO",
      "План перехода и поддержка после запуска",
    ],
  },
];

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
            Перестаём зависеть
            <br />
            от Ozon и Wildberries — без потери продаж
          </>
        }
        sub="Маркетплейсы удобны, но дороги и непредсказуемы. Поэтапный переход на собственный сайт возвращает вам клиентов, маржу и независимость — с минимальными рисками."
        image={{
          src: "/images/migrate/warehouse.jpg",
          alt: "Склад логистического центра Wildberries",
        }}
      >
        <BtnLink href={site.tg} external className="w-full sm:w-auto">
          Обсудить переход
        </BtnLink>
      </PageHero>

      {/* Цифры */}
      <section className="bg-black py-16 text-white">
        <Container>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {numbers.map((n, i) => (
              <Reveal key={n.label} delay={i * 0.08}>
                <div className="text-center sm:text-left">
                  <p className="text-3xl font-extrabold tracking-tight text-accent sm:text-4xl">
                    {n.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{n.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center font-mono text-xs text-white/40 sm:text-left">
            Источники: разборы комиссий продавцов, <span className="font-sans">2026</span>; INFOLine/Forbes, август <span className="font-sans">2026</span>; новости июля <span className="font-sans">2026</span>
            (пожары и оферта WB).
          </p>
        </Container>
      </section>

      <MarketplaceVsSite />

      <CommissionBreakdown />

      {/* Хроника */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Хроника"
            title="Что происходит с маркетплейсами прямо сейчас"
            sub="Это не абстрактные риски, а события этого лета. Цифры ниже — из открытых публикаций, ссылки на источники в карточках."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {news.map((n, i) => (
              <Reveal key={n.title} delay={i * 0.06}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-black hover:shadow-[6px_6px_0_0_#d4af37]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={n.img}
                      alt={n.title}
                      className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                      {n.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-xs font-bold text-muted">{n.date}</p>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-heading">{n.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{n.desc}</p>
                    <a
                      href={n.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink underline-offset-4 transition-colors hover:underline"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                      {n.src}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Проблема */}
      <section className="border-y border-line bg-panel-soft py-20 sm:py-24">
        <Container>
          <SectionHeading kicker="Проблема" title="Почему бизнес уходит с маркетплейсов" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-black hover:shadow-[5px_5px_0_0_#d4af37]">
                  <span className="inline-block rounded-full border-2 border-black bg-accent px-3 py-1 text-xs font-extrabold text-accent-ink">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-heading">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Чек-лист */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="План из 5 шагов"
            title="Как проходит переход"
            sub="Никаких резких движений: каждый шаг понятен, измерим и не ломает текущие продажи."
          />
          <ol className="mt-10 space-y-4">
            {checklist.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.05}>
                <li className="group flex flex-col gap-3 rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:shadow-[5px_5px_0_0_#d4af37] sm:flex-row sm:items-start sm:gap-6">
                  <span className="text-sm font-bold text-accent-ink">{s.num}</span>
                  <div>
                    <h3 className="text-lg font-bold text-heading">{s.title}</h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">{s.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Кому подходит */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Честно"
            title="Подходит ли это вашему магазину"
            sub="Уход с маркетплейсов — не догма. Он выгоден не всем: решайте по своим цифрам, а не по трендам."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border-2 border-black bg-white p-7 shadow-[6px_6px_0_0_#d4af37] sm:p-8">
                <h3 className="text-xl font-extrabold text-heading">Переходить — да, если</h3>
                <ul className="mt-5 space-y-3.5">
                  {fit.yes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-[11px] font-extrabold text-accent-ink">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-line bg-panel-soft p-7 sm:p-8">
                <h3 className="text-xl font-extrabold text-heading">Пока рано, если</h3>
                <ul className="mt-5 space-y-3.5">
                  {fit.no.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-line text-[11px] font-extrabold text-muted">
                        ✕
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  Не уверены, где ваш случай? На аудите посмотрим цифры и скажем честно — без
                  навязывания переезда.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Тарифы */}
      <section className="border-y border-line bg-panel-soft py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Стоимость"
            title="Что во что обходится"
            sub="Цена фиксируется до старта и не меняется по ходу работы. Точную оценку даю после короткого разговора о задаче."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl border-2 p-7 transition-all duration-200 hover:-translate-y-1 ${
                    p.hot
                      ? "border-black bg-accent shadow-[8px_8px_0_0_#0a0a0a]"
                      : "border-line bg-white shadow-sm hover:border-black hover:shadow-[6px_6px_0_0_#d4af37]"
                  }`}
                >
                  {p.hot && (
                    <span className="absolute -top-3 left-6 rounded-full bg-accent-ink px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-accent">
                      Чаще всего выбирают
                    </span>
                  )}
                  <h3 className={`text-lg font-bold ${p.hot ? "text-accent-ink" : "text-heading"}`}>
                    {p.name}
                  </h3>
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
                    <BtnLink href={site.tg} external variant={p.hot ? "primary" : "yellow"} block>
                      Обсудить задачу
                    </BtnLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Кейс */}
      <section className="bg-black py-20 text-white sm:py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <BrowserFrame
                src="/images/moranti-catalog.jpg"
                alt="Интернет-магазин Moranti — каталог с синхронизацией Ozon и Wildberries"
                url="morantibags.ru"
              />
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
                  Бренд женских сумок. Каталог-витрина на собственном сайте —
                  и всё это синхронизировано с Ozon и Wildberries: картинки, характеристики,
                  цены, остатки и отзывы обновляются автоматически. Покупка пока через
                  маркетплейсы, оплата на сайте — следующим этапом. Маркетплейсы остались,
                  но перестали быть единственным каналом.
                </p>
              </Reveal>
              <Reveal delay={0.1} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://morantibags.ru"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(212,175,55,0.4)] sm:w-auto"
                >
                  Посмотреть сайт ↗
                </a>
                <BtnLink href={site.tg} external variant="ghost" className="w-full sm:w-auto">
                  Сделать так же
                </BtnLink>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <Faq />

      {/* Почему это выгодно */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading kicker="Результат" title="Что вы получаете" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-black hover:shadow-[5px_5px_0_0_#d4af37]">
                  <h3 className="text-lg font-bold text-heading">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <div className="relative overflow-hidden rounded-3xl border-2 border-black bg-white p-7 shadow-[8px_8px_0_0_#d4af37] sm:p-10">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 90% at 100% 0%, rgba(212,175,55,0.3), transparent 70%)",
                }}
              />
              <p className="relative max-w-3xl text-base font-medium leading-relaxed text-body sm:text-lg">
                Начните с аудита: посмотрим ваш ассортимент, посчитаем маржу и предложим схему
                перехода под ваш случай —{" "}
                <span className="bg-accent px-1 font-bold text-accent-ink">бесплатно</span> и без
                обязательств.
              </p>
              <div className="relative mt-6">
                <BtnLink href={site.tg} external>
                  Получить аудит бесплатно
                </BtnLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection hideMigrate />
    </>
  );
}