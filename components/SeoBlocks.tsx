"use client";

import { useRef, useState } from "react";

const HIDDEN_HEIGHT = 320;

const blocks = [
  {
    title: "Что входит в разработку сайта",
    content: `Вся работа на мне: вы даёте только обратную связь. Дизайн и вёрстка, настройка метрики и целей, базовое SEO, копирайтинг при необходимости, защита, обучение и техподдержка первый месяц. Договор и закрывающие документы — по ЭДО или на бумаге.`,
  },
  {
    title: "Кому нужен сайт",
    content: `Юрлицам и ИП, которые хотят второй источник трафика помимо маркетплейсов и соцсетей. Лендинг — под одну услугу и рекламу. Многостраничный сайт — когда товаров и услуг несколько. Интернет-магазин — когда нужны продажи напрямую: корзина, оплата и синхронизация с маркетплейсами.`,
  },
  {
    title: "Как заказать",
    content: `Любым удобным способом: телефон, форма, почта или мессенджер. Занимаюсь разработкой сайтов — от визиток до интернет-магазинов. Обсуждение проекта бесплатно и ни к чему не обязывает — по итогу сложится понятное видение развития.`,
  },
  {
    title: "Сколько занимает разработка",
    content: `Сайт-визитка или лендинг — 5–10 рабочих дней. Многостраничный сайт — 2–3 недели. Интернет-магазин с каталогом и оплатой — 3–4 недели. Срок фиксируется в ТЗ и не растягивается: вы видите промежуточные итоги на каждом этапе.`,
  },
  {
    title: "Технологии: Next.js и WordPress",
    content: `Лендинги и сложные сайты собираю на Next.js — быстро, безопасно и дружелюбно к поиску. Когда нужна удобная панель управления контентом, беру WordPress. Никаких конструкторов вроде Tilda или Wix: код остаётся у вас, сайт не «упадёт» из-за смены тарифа.`,
  },
  {
    title: "Гарантии и фиксированная цена",
    content: `Цена фиксируется в договоре до старта и не растёт по ходу работы. Работаю официально: договор, ТЗ, акт и чеки. Мелкие правки по сайту входят в поддержку первый месяц бесплатно — без счетов за каждую запятую.`,
  },
];

export default function SeoBlocks() {
  const [expanded, setExpanded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-auto max-w-3xl">
      <div
        ref={wrapperRef}
        className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: expanded ? "none" : HIDDEN_HEIGHT }}
      >
        <div className="space-y-6 sm:space-y-10">
          {blocks.map((b) => (
            <div key={b.title}>
              <h2 className="text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
                {b.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
                {b.content}
              </p>
            </div>
          ))}
        </div>

        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent" />
        )}
      </div>

      {!expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="mt-6 cursor-pointer text-sm font-bold text-heading hover:underline sm:text-base"
        >
          Показать полностью →
        </button>
      )}
    </div>
  );
}