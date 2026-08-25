import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { BtnLink } from "@/components/BtnLink";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import ThemeDark from "@/components/ThemeDark";

export const metadata: Metadata = pageMeta({
  title: "Маркетплейс или свой сайт: что выгоднее для бренда — сравнение и гибридная модель",
  description:
    "Сравнение маркетплейса и собственного сайта по трафику, комиссиям, базе клиентов и контролю. Почему «или-или» — неверный выбор и когда начинать переход.",
  path: "/blog/marketpleis-ili-svoj-sait-chto-vygodnee",
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
            Блог · Маркетплейс vs свой сайт
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-5xl">
            Маркетплейс или свой сайт: что выгоднее для бренда
          </h1>
          <p className="mt-4 font-mono text-xs text-muted">Август 2026 · чтение ~6 минут</p>

          <p className={`${p} mt-8 text-lg`}>
            Вопрос не в том, «уйти с маркетплейса или остаться». Правильная постановка —
            «как использовать и то, и другое». Разбираем разницу по четырём параметрам и
            показываем гибридную модель, которая работает на практике.
          </p>

          <h2 className={h2}>Трафик</h2>
          <p className={p}>
            <b>Маркетплейс:</b> готовые миллионы покупателей, но алгоритмы и выдача
            принадлежат площадке. <b>Свой сайт:</b> трафик приходится привлекать самому —
            через рекламу, SEO, соцсети и перевод клиентов с площадок. На старте сайт без
            маркетплейса пустует.
          </p>

          <h2 className={h2}>Комиссия и маржа</h2>
          <p className={p}>
            На маркетплейсе с товара уходит 30–70% (комиссия, логистика, реклама, возвраты).
            На своём сайте — ~2,8% за онлайн-оплату вместо десятков процентов. Маржа
            остаётся у вас.
          </p>

          <h2 className={h2}>База клиентов и контроль</h2>
          <p className={p}>
            На маркетплейсе контакты покупателей — у площадки, а не у вас. На своём сайте
            вы собираете базу, строите лояльность и возвращаете клиентов. Цены, бренд и канал
            продаж принадлежат вам.
          </p>

          <h2 className={h2}>Риски</h2>
          <p className={p}>
            Маркетплейс меняет правила и комиссии — и вы на это не влияете. Свой сайт
            зависит от вашего трафика и технической исправности. Диверсификация каналов
            снижает оба риска.
          </p>

          <h2 className={h2}>Гибридная модель — что работает</h2>
          <p className={p}>Не выбирайте одно. Разделите продажи:</p>
          <ul className={ul}>
            <Li>
              <b>Маркетплейсы</b> — новый трафик, тесты, импульсные покупки.
            </Li>
            <Li>
              <b>Свой сайт</b> — повторные покупки, наборы, эксклюзивы, более высокий средний
              чек.
            </Li>
          </ul>
          <p className={p}>
            Так вы не теряете охват площадок, но постепенно наращиваете долю прямых заказов и
            собственную базу. Реалистичная цель на 3–6 месяцев — 15–30% прямых заказов в
            нишах с повторным спросом.
          </p>

          <h2 className={h2}>Когда начинать переход</h2>
          <ul className={ul}>
            <Li>Есть повторный спрос — косметика, расходники, зоо-, детские товары.</Li>
            <Li>Хочется продавать наборы и эксклюзивы, которых нет на площадке.</Li>
            <Li>Комиссии и правила маркетплейса давят на маржу.</Li>
            <Li>Нужна база клиентов для повторных продаж и рассылок.</Li>
          </ul>

          <div className="mt-12 rounded-3xl border-2 border-ink bg-ink px-6 py-8 text-center text-white shadow-brutal-accent-lg sm:px-10">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Разберём вашу модель?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60">
              Напишите в Telegram — посмотрим, что выгоднее перевести на сайт уже сейчас.
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
