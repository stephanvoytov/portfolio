import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { BtnLink } from "@/components/BtnLink";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Как перевести клиентов с Ozon и Wildberries на свой сайт — 6 рабочих способов",
  description:
    "Легальные способы перевести покупателей маркетплейса на свой сайт: QR-вкладыши, упаковка, соцсети, email и Telegram, программа лояльности, ретаргетинг.",
  path: "/blog/kak-perevesti-klientov-s-marketpleisa-na-svoj-sait",
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
    <article className="pt-28 pb-20 sm:pt-36">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Блог · Перевод клиентов
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-5xl">
            Как перевести клиентов с Ozon и Wildberries на свой сайт
          </h1>
          <p className="mt-4 font-mono text-xs text-muted">Август 2026 · чтение ~7 минут</p>

          <p className={`${p} mt-8 text-lg`}>
            Площадки дают трафик, но не отдают контакты покупателей и забирают комиссию.
            Чтобы это изменить, не нужно «уходить» — нужно легально переводить часть
            клиентов на свой канал. Ниже — 6 рабочих способов, которые используют бренды
            уже сейчас.
          </p>

          <h2 className={h2}>1. QR-вкладыши в заказы</h2>
          <p className={p}>
            Самый эффективный и разрешённый способ. В каждую посылку с маркетплейса
            кладёте листовку с QR-кодом на посадочную страницу: «Зарегистрируйтесь — скидка
            10–20% на следующий заказ на сайте». Клиент оставляет email или телефон и
            попадает в вашу базу.
          </p>
          <p className={p}>Что писать на вкладыше:</p>
          <ul className={ul}>
            <Li>«Спасибо за покупку! Зарегистрируйтесь на сайте — скидка на следующий заказ».</Li>
            <Li>«Активируйте расширенную гарантию на сайте».</Li>
            <Li>«Закрытый клуб подписчиков — ранний доступ к новинкам и специальные цены».</Li>
          </ul>

          <h2 className={h2}>2. Упаковка и стикеры</h2>
          <p className={p}>
            На коробке или стикере — QR с текстом «Инструкция / видеообзор / гарантия на
            сайте». Это не «купите дешевле», а дополнительная ценность, которую площадки
            разрешают. В описании товара на маркетплейсе — аккуратно: «На сайте доступна
            расширенная гарантия, наборы, эксклюзивные цвета».
          </p>

          <h2 className={h2}>3. Соцсети и мессенджеры</h2>
          <p className={p}>
            В профилях и постах — ссылки на сайт с оффером: «Только на сайте — наборы и
            закрытые акции». Telegram-канал — основной канал удержания: анонсы новинок,
            личные промокоды, опросы.
          </p>

          <h2 className={h2}>4. Email и Telegram-рассылки</h2>
          <p className={p}>
            Собранная база работает через рассылки с новинками, акциями и полезным
            контентом — инструкции, обзоры, сравнения. Конверсия сегментированных
            email-рассылок — 3–8%.
          </p>

          <h2 className={h2}>5. Программа лояльности</h2>
          <p className={p}>
            Бонусы за покупки, отзывы и рекомендации, персональные предложения по истории
            заказов, уровни скидок. На сайте это настроить проще и дешевле, чем на
            маркетплейсе.
          </p>

          <h2 className={h2}>6. Ретаргетинг и Директ</h2>
          <p className={p}>
            Яндекс.Директ по бренду и товарным запросам, ретаргетинг на тех, кто смотрел
            товары, но не купил. В узких нишах ROI 300–500% при аккуратной настройке.
            Яндекс.Директ и ретаргетинг настраиваю сам — это часть работы по переводу
            клиентов, а не отдельный подрядчик.
          </p>

          <h2 className={h2}>Чего делать нельзя</h2>
          <ul className={ul}>
            <Li>
              Никаких «купите дешевле на сайте» прямо в карточке или в переписке с
              покупателем — это нарушение правил площадок.
            </Li>
            <Li>
              Предлагайте дополнительную ценность: гарантию, контент, наборы, клуб — а не
              просто скидку на тот же товар.
            </Li>
          </ul>

          <h2 className={h2}>Метрики, за которыми следим</h2>
          <ul className={ul}>
            <Li>Доля прямых заказов с сайта против маркетплейса.</Li>
            <Li>Маржа на прямых заказах против площадки.</Li>
            <Li>LTV клиента и доля повторных покупок.</Li>
            <Li>Конверсия рассылок и ROI рекламы.</Li>
          </ul>

          <div className="mt-12 rounded-3xl border-2 border-ink bg-ink px-6 py-8 text-center text-white shadow-brutal-accent-lg sm:px-10">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Сделаем воронку перевода?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60">
              Напишите в Telegram — настрою магазин, QR-посадочные и сбор базы под вашу нишу.
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
            <Link href="/blog" className="font-semibold text-accent-ink hover:underline">
              ← Все статьи
            </Link>
          </p>
        </div>
      </Container>
    </article>
  );
}
