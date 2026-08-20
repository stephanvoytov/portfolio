import { BtnLink } from "@/components/BtnLink";
import { Container } from "@/components/Container";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import MarketplaceVsSite from "@/components/MarketplaceVsSite";
import CommissionBreakdown from "@/components/CommissionBreakdown";
import Faq from "@/components/Faq";
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
        text: "Суммарные удержания маркетплейса — 50–70% с каждой продажи (комиссия, логистика, реклама, эквайринг, хранение). Сайт — это один фиксированный бюджет и ~2–3% эквайринга. Уже при небольшом потоке заказов сайт окупается за пару месяцев.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли ставить на сайте цены ниже, чем на маркетплейсе?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Раньше за цену ниже, чем на площадке, карточку могли пессимизировать. В 2026 году ФАС запретила площадкам требовать одинаковые цены, а закон о платформенной экономике прямо запрещает санкции за отказ от скидок. Выгодная цена на своём сайте — законный способ перетягивать клиентов.",
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
    value: "50–70%",
    label: "от цены товара забирают маркетплейсы",
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

const problems = [
  {
    title: "Комиссия — только верхушка",
    desc: "За «25%» прячутся логистика, реклама и возвраты. Итого 50–70% от цены товара.",
  },
  {
    title: "Комиссии растут",
    desc: "Июль: WB поднял в 98% категорий. Август: Ozon — до 55% на одежду.",
  },
  {
    title: "Штрафы — с вашего счёта",
    desc: "Просрочка отгрузки — 50% цены. Брак — до 5 000 ₽. И всё это без суда.",
  },
  {
    title: "Возвраты съедают маржу",
    desc: "В одежде возвращается до 40% заказов. На сайте — единицы.",
  },
  {
    title: "Клиент не ваш",
    desc: "Контактов нет. Каждая повторная продажа — снова через платную рекламу.",
  },
  {
    title: "Правила меняет площадка",
    desc: "Вчера — наценки до 12%, сегодня — новая выдача. Завтра будет хуже.",
  },
];

const checklist = [
  {
    num: "01",
    title: "Экономика",
    desc: "1–3 дня. Считаем ваши реальные удержания — не «средние по рынку», а ваши: комиссия, логистика, реклама, возвраты по вашим категориям. Решаем, что переезжает первым и какой ценник выдерживает сайт.",
  },
  {
    num: "02",
    title: "Магазин",
    desc: "1–2 недели. Переносим карточки: фото, описания, характеристики, цены. Каталог с корзиной, оплатой (ЮKassa, СБП) и доставкой СДЭК и Почты России. Маркетплейсы всё это время работают как обычно.",
  },
  {
    num: "03",
    title: "Синхронизация",
    desc: "Неделя. Цены и остатки обновляются сами через API Wildberries и Ozon — двойной работы нет, карточки ведёте как раньше, а сайт повторяет всё автоматически.",
  },
  {
    num: "04",
    title: "Первые клиенты",
    desc: "3–6 недель, идёт параллельно. SEO по вашим категориям, Директ, QR-коды в каждой посылке с маркетплейса, вкладыши, соцсети. Каждый заказ на площадке приводит следующего покупателя уже на ваш сайт.",
  },
  {
    num: "05",
    title: "Снижение доли площадок по цифрам",
    desc: "2–3 месяца. Каждый месяц сравниваем выручку сайта и маркетплейса и решаем, что ещё переезжает, а что оставить. Никаких резких обрывов — темп выбираете вы.",
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
    name: "Витрина",
    price: "от 20 000 ₽",
    desc: "5–10 дней. Каталог с кнопкой «Купить» на маркетплейс: проверяете нишу и собираете своих клиентов без вложений в магазин.",
    items: [
      "Каталог до 100 товаров",
      "Перенос карточек и фото с WB и Ozon",
      "Кнопка «Купить» ведёт на карточку площадки",
      "Заявки вам в Telegram: вопросы о товаре, опт, наличие",
    ],
  },
  {
    name: "Магазин",
    price: "от 50 000 ₽",
    desc: "2–3 недели. Магазин со своей корзиной и оплатой: карточки переносим при запуске, товарами управляете сами, трафик приводите своими силами.",
    items: [
      "Каталог до 1 000 товаров",
      "Перенос карточек и фото при запуске",
      "Корзина, оплата ЮKassa и СБП, доставка СДЭК",
      "Оферта и согласие на обработку данных (152-ФЗ)",
      "Админка: товары, цены и фото меняете сами",
    ],
    hot: true,
  },
  {
    name: "Полный переход",
    price: "от 80 000 ₽",
    desc: "3–4 недели. Магазин плюс поток клиентов под ключ: реклама, SEO, переток с площадок и поддержка, пока доля маркетплейсов снижается.",
    items: [
      "Всё из «Магазина», без лимита товаров",
      "Синхронизация остатков, пока продаёте параллельно с МП",
      "Яндекс.Директ и SEO: настройка и ведение 2 месяца",
      "Дизайн вкладышей с QR для посылок (отгрузка со склада)",
      "План снижения доли площадок, поддержка 3 месяца",
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
        <BtnLink href="#calc" variant="ghost" className="w-full sm:w-auto">
          Посчитать разницу
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
                  <p className="mt-1 line-clamp-2 text-[10px] leading-tight text-white/60 sm:mt-2 sm:text-sm sm:leading-relaxed">
                    {n.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <MarketplaceVsSite />

      <CommissionBreakdown />

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
                Посчитаем экономию под ваш магазин: посмотрим ассортимент, маржу и удержания —
                получите цифру «сколько останется вам» на своём сайте.{" "}
                <span className="bg-accent px-1 font-bold text-accent-ink">бесплатно</span> и без
                обязательств.
              </p>
              <div className="relative mt-6">
                <BtnLink href={site.tg} external>
                  Рассчитать мою экономию
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
