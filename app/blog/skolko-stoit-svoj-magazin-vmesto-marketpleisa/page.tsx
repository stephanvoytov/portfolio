import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { BtnLink } from "@/components/BtnLink";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import ThemeDark from "@/components/ThemeDark";

export const metadata: Metadata = pageMeta({
  title: "Сколько стоит свой магазин вместо маркетплейса в 2026 — разбор расходов",
  description:
    "Реальная стоимость собственного интернет-магазина против комиссий Wildberries и Ozon: разработка, хостинг, оплата, доставка, скрытые расходы и окупаемость.",
  path: "/blog/skolko-stoit-svoj-magazin-vmesto-marketpleisa",
});

const h2 = "mt-14 text-2xl font-extrabold tracking-tight text-heading sm:text-3xl";
const p = "mt-4 leading-relaxed text-body";
const ul = "mt-4 space-y-2.5";
const li = "flex items-start gap-3 text-body";
const dot = "mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent";

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className={li}>
      <span className={dot} />
      <span>{children}</span>
    </li>
  );
}

export default function BlogPost() {
  return (
    <>
      <ThemeDark />
      <article className="pt-28 pb-20 sm:pt-36">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Блог · Расчёты для селлеров
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-5xl">
            Сколько стоит свой магазин вместо маркетплейса в 2026
          </h1>
          <p className="mt-4 font-mono text-xs text-muted">Август 2026 · чтение ~6 минут</p>

          <p className={`${p} mt-8 text-lg`}>
            Кажется, что «свой сайт — это дорого, а маркетплейс бесплатный». На деле
            маркетплейс забирает 15–40% от цены товара, и на больших оборотах это сотни
            тысяч рублей в месяц. Разбираем, из чего складывается стоимость собственного
            магазина и когда он начинает окупаться.
          </p>

          <h2 className={h2}>Сколько отдаёт маркетплейс</h2>
          <p className={p}>
            В «комиссию» входит не только процент площадки. Реальная доля расходов на Ozon
            и Wildberries — это комиссия за продажу, логистика (FBO/FBS), реклама, возвраты
            и платная выгрузка. В сумме с товара уходит 30–70%.
          </p>
          <p className={p}>
            Пример: заказ на 5 000 ₽ на маркетплейсе приносит вам чистыми часто 2 000–3 000 ₽.
            Остальное — площадке. На обороте 300 000 ₽ в месяц это 100 000–200 000 ₽ упущенной
            маржи.
          </p>

          <h2 className={h2}>Из чего складывается стоимость своего магазина</h2>
          <ul className={ul}>
            <Li>
              <b>Разработка — один раз.</b> Витрина или магазин на Next.js: фиксированная цена
              до старта, дальше только правки.
            </Li>
            <Li>
              <b>Хостинг и домен — копейки.</b> На Vercel хостинг для сайта чаще всего 0 ₽/год,
              домен — около 500–1 000 ₽/год.
            </Li>
            <Li>
              <b>Оплата.</b> ЮKassa или СБП берут ~2,8% за транзакцию — это вместо 15–40%
              маркетплейса.
            </Li>
            <Li>
              <b>Доставка.</b> СДЭК или Почта России — её обычно оплачивает покупатель при
              оформлении, как и на маркетплейсе.
            </Li>
          </ul>

          <h2 className={h2}>Наши тарифы на переход</h2>
          <p className={p}>
            Цена фиксируется в договоре до старта и не меняется по ходу работы:
          </p>
          <ul className={ul}>
            <Li>
              <b>Витрина — от 25 000 ₽.</b> Каталог бренда с кнопками «Купить на WB/Ozon».
              Для теста спроса вне площадки за 3–7 дней.
            </Li>
            <Li>
              <b>Магазин — от 49 000 ₽.</b> Полноценный магазин: каталог, корзина, онлайн-оплата,
              доставка. Синхронизация остатков с площадкой — +10 000 ₽.
            </Li>
            <Li>
              <b>Старт перехода — от 69 000 ₽.</b> Магазин плюс первый контур перевода клиентов
              с площадок на свой канал (QR-посадочные, сбор базы, базовая стратегия).
            </Li>
          </ul>

          <h2 className={h2}>Скрытые расходы</h2>
          <ul className={ul}>
            <Li>
              <b>Контент.</b> Фото и тексты товаров — обычно ваши. Структуру и подачу довожу до
              ума, но снимать товар придётся вам (или фотографу).
            </Li>
            <Li>
              <b>Реклама.</b> Трафик на сайт не бесплатный: Директ, ретаргетинг, соцсети —
              отдельная статья расходов. Маркетплейс же даёт трафик «в комплекте».
            </Li>
            <Li>
              <b>Поддержка.</b> У нас входит в работу первый месяц; дальше — по договорённости.
            </Li>
          </ul>

          <h2 className={h2}>Когда свой сайт выгоден</h2>
          <p className={p}>
            Свой канал окупается быстрее всего в нишах с повторным спросом и где можно
            предложить больше, чем на площадке:
          </p>
          <ul className={ul}>
            <Li>Расходники, косметика, зоо- и детские товары — покупатель возвращается.</Li>
            <Li>Наборы и подарочные боксы, которых нет на маркетплейсе.</Li>
            <Li>Эксклюзивные цвета, версии, ранний доступ для подписчиков.</Li>
          </ul>

          <h2 className={h2}>Главный риск — трафик</h2>
          <p className={p}>
            У маркетплейса есть покупатели, у нового сайта — нет. Поэтому правильная стратегия
            не «уйти», а «разделить продажи»: площадки остаются источником новых клиентов,
            а на сайт вы переводите повторные заказы через QR-вкладыши, лояльность и рекламу.
            Подробнее — в гайде по разделению продаж.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              {
                name: "Витрина-лендинг",
                price: "от 25 000 ₽",
                desc: "Каталог бренда с кнопками «Купить на WB/Ozon». Для теста спроса вне площадки.",
                days: "3–7 дней",
              },
              {
                name: "Магазин",
                price: "от 49 000 ₽",
                desc: "Полноценный магазин: каталог, корзина, онлайн-оплата, доставка. Синхронизация остатков — +10 000 ₽.",
                days: "10–15 дней",
              },
              {
                name: "Переход под ключ",
                price: "от 69 000 ₽",
                desc: "Магазин плюс стратегия перевода клиентов с площадок: QR-воронка, сбор базы, реклама.",
                days: "около 3 недель",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-line bg-panel p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="text-base font-extrabold text-heading">{t.name}</h3>
                  <span className="font-mono text-xs font-bold text-muted">{t.days}</span>
                </div>
                <p className="mt-1 text-xl font-extrabold text-accent">{t.price}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border-2 border-ink bg-ink px-6 py-8 text-center text-white shadow-brutal-accent-lg sm:px-10">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Посчитаем вашу экономию?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60">
              Напишите в Telegram — глянем ваши цифры и скажу, какой формат и тариф подойдут
              именно вам.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <BtnLink href={site.tg} external>
                Обсудить в Telegram
              </BtnLink>
              <Link
                href="/migrate"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
              >
                Подробно про переход →
              </Link>
            </div>
          </div>

          <p className="mt-10 text-sm">
            <Link href="/blog" className="font-semibold text-accent hover:underline">
              ← Все статьи
            </Link>
          </p>
        </div>
      </Container>
    </article>
    </>
  );
}
