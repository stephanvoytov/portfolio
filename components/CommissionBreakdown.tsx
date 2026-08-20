"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const fmt = (n: number) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(Math.round(n));

const fmtPct = (n: number) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 1 }).format(n);

type Cat = { label: string; pct: number | null };

const WB_CATEGORIES: Cat[] = [
  { label: "Одежда, бельё, часы", pct: 43.5 },
  { label: "Косметика и парфюмерия", pct: 40.5 },
  { label: "Декор, бытовая химия", pct: 38.5 },
  { label: "Обувь", pct: 37.5 },
  { label: "Дом, посуда, игрушки", pct: 34.5 },
  { label: "Автотовары, стройматериалы", pct: 31.5 },
  { label: "Зоотовары", pct: 26.5 },
  { label: "Смартфоны", pct: 25.5 },
  { label: "Крупная бытовая техника", pct: 24.5 },
  { label: "Свой процент", pct: null },
];

const OZON_CATEGORIES: Cat[] = [
  { label: "Детская обувь", pct: 52 },
  { label: "Детские товары, игрушки", pct: 52 },
  { label: "Обувь", pct: 49 },
  { label: "Одежда", pct: 48 },
  { label: "Книги", pct: 44 },
  { label: "Товары для дома", pct: 32 },
  { label: "Косметика", pct: 29 },
  { label: "Электроника", pct: 23 },
  { label: "Продукты питания", pct: 19 },
  { label: "Свой процент", pct: null },
];

const ACQUIRERS = [
  { label: "ЮKassa", pct: 2.8 },
  { label: "Т-Касса", pct: 1.5 },
  { label: "CloudPayments", pct: 2.6 },
  { label: "СБП", pct: 0.7 },
];

function RangeControl({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-bold text-heading">{label}</span>
        <span className="font-mono text-sm font-bold text-heading">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-[#0a0a0a]"
      />
    </div>
  );
}

function ChipGroup<T extends string | number>({
  options,
  value,
  onChange,
}: {
  options: { label: string; value: T }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={String(o.value)}
          type="button"
          onClick={() => onChange(o.value)}
          className={`rounded-full border-2 px-3 py-1.5 text-xs font-bold transition-all duration-200 ${
            value === o.value
              ? "border-black bg-black text-white"
              : "border-line bg-panel-soft text-muted hover:border-black"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function CommissionBreakdown() {
  const [order, setOrder] = useState(2000);
  const [mp, setMp] = useState<"wb" | "ozon">("wb");
  const [catIdx, setCatIdx] = useState(0);
  const [customPct, setCustomPct] = useState(25);
  const [acqIdx, setAcqIdx] = useState(0);
  const [sales, setSales] = useState(100);

  const cats = mp === "wb" ? WB_CATEGORIES : OZON_CATEGORIES;
  const cat = cats[catIdx] ?? cats[0];
  const mpPct = cat.pct ?? customPct;

  const mpTake = (order * mpPct) / 100;
  const acqPct = ACQUIRERS[acqIdx].pct;
  const siteTake = (order * acqPct) / 100;
  const mpLeft = order - mpTake;
  const siteLeft = order - siteTake;
  const diff = siteLeft - mpLeft;

  return (
    <section id="calc" className="scroll-mt-24 border-y border-line bg-panel-soft py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Расчёт"
          title="Посчитайте на своём товаре"
          sub="Выберите маркетплейс, категорию и оператора оплаты — увидите, сколько забирает площадка и сколько останется вам на своём сайте. По умолчанию: товар за 2 000 ₽."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <Reveal>
            <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-[8px_8px_0_0_#d4af37] sm:p-8">
              <RangeControl
                label="Сумма заказа"
                value={order}
                display={`${fmt(order)} ₽`}
                min={300}
                max={50000}
                step={100}
                onChange={setOrder}
              />

              <div className="my-6 h-px bg-black/10" />

              <p className="text-sm font-bold text-heading">Маркетплейс</p>
              <div className="mt-3">
                <ChipGroup
                  options={[
                    { label: "Wildberries", value: "wb" as const },
                    { label: "Ozon", value: "ozon" as const },
                  ]}
                  value={mp}
                  onChange={setMp}
                />
              </div>

              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <label htmlFor="category" className="text-sm font-bold text-heading">
                    Категория
                  </label>
                  <span className="font-mono text-sm font-bold text-heading">
                    {fmtPct(mpPct)}% — комиссия площадки
                  </span>
                </div>
                <div className="relative mt-2">
                  <select
                    id="category"
                    value={catIdx}
                    onChange={(e) => setCatIdx(Number(e.target.value))}
                    className="w-full appearance-none rounded-2xl border-2 border-black bg-white px-4 py-3 text-sm font-bold text-heading outline-none transition-all focus:shadow-[3px_3px_0_0_#d4af37]"
                  >
                    {cats.map((c, i) => (
                      <option key={c.label} value={i}>
                        {c.label}
                        {c.pct !== null ? ` — ${fmtPct(c.pct)}%` : ""}
                      </option>
                    ))}
                  </select>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-heading"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                {cat.pct === null && (
                  <div className="mt-3 flex items-center gap-3">
                    <input
                      type="number"
                      min={0}
                      max={70}
                      step={0.5}
                      value={customPct}
                      onChange={(e) => setCustomPct(Number(e.target.value))}
                      className="w-24 rounded-xl border-2 border-black bg-white px-3 py-2 text-sm font-bold text-heading outline-none focus:shadow-[3px_3px_0_0_#d4af37]"
                    />
                    <span className="text-sm font-bold text-muted">% — возьмите из кабинета продавца</span>
                  </div>
                )}
              </div>

              <div className="my-6 h-px bg-black/10" />

              <p className="text-sm font-bold text-heading">Эквайринг на сайте</p>
              <div className="mt-3">
                <ChipGroup
                  options={ACQUIRERS.map((a) => ({ label: `${a.label} · ${fmtPct(a.pct)}%`, value: String(a.pct) }))}
                  value={String(acqPct)}
                  onChange={(v) => setAcqIdx(ACQUIRERS.findIndex((a) => String(a.pct) === v))}
                />
              </div>

              <div className="my-6 h-px bg-black/10" />

              <RangeControl
                label="Продаж в месяц"
                value={sales}
                display={`${fmt(sales)}`}
                min={10}
                max={10000}
                step={10}
                onChange={setSales}
              />
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5">
            <Reveal>
              <div className="h-full overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[6px_6px_0_0_#0a0a0a] sm:shadow-[8px_8px_0_0_#0a0a0a]">
                <div className="border-b-2 border-black bg-black px-4 py-3 sm:px-5 sm:py-4">
                  <h3 className="text-sm font-extrabold text-white sm:text-lg">Маркетплейс</h3>
                  <p className="mt-0.5 text-[11px] font-medium text-white/60 sm:text-sm">
                    {mp === "wb" ? "Wildberries" : "Ozon"} · комиссия
                  </p>
                </div>
                <div className="px-4 py-5 sm:px-6 sm:py-6">
                  <p className="text-xs font-medium text-muted sm:text-sm">Забирает с заказа</p>
                  <p className="mt-1 text-xl font-extrabold text-heading sm:text-4xl">
                    −{fmt(mpTake)} ₽
                  </p>
                  <p className="mt-1 text-[11px] font-bold text-muted sm:text-xs">
                    {fmtPct(mpPct)}% от суммы заказа
                  </p>
                  <div className="my-4 h-2.5 w-full overflow-hidden rounded-full bg-black/10 sm:my-5">
                    <div
                      className="h-full rounded-full bg-black"
                      style={{ width: `${Math.min(mpPct, 100)}%` }}
                    />
                  </div>
                  <p className="text-xs font-medium text-muted sm:text-sm">Остаётся вам</p>
                  <p className="mt-1 text-xl font-extrabold text-heading sm:text-4xl">
                    {fmt(mpLeft)} ₽
                  </p>
                  <p className="mt-1 text-[11px] font-bold text-muted sm:text-xs">
                    {fmtPct(100 - mpPct)}% от суммы заказа
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="h-full overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[6px_6px_0_0_#d4af37] sm:shadow-[8px_8px_0_0_#d4af37]">
                <div className="border-b-2 border-black bg-accent px-4 py-3 sm:px-5 sm:py-4">
                  <h3 className="text-sm font-extrabold text-accent-ink sm:text-lg">Свой сайт</h3>
                  <p className="mt-0.5 text-[11px] font-medium text-accent-ink/70 sm:text-sm">
                    {ACQUIRERS[acqIdx].label} · только эквайринг
                  </p>
                </div>
                <div className="px-4 py-5 sm:px-6 sm:py-6">
                  <p className="text-xs font-medium text-muted sm:text-sm">Забирает с заказа</p>
                  <p className="mt-1 text-xl font-extrabold text-heading sm:text-4xl">
                    −{fmt(siteTake)} ₽
                  </p>
                  <p className="mt-1 text-[11px] font-bold text-muted sm:text-xs">
                    {fmtPct(acqPct)}% — комиссия оператора
                  </p>
                  <div className="my-4 h-2.5 w-full overflow-hidden rounded-full bg-black/10 sm:my-5">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${Math.min(acqPct * 2, 100)}%` }}
                    />
                  </div>
                  <p className="text-xs font-medium text-muted sm:text-sm">Остаётся вам</p>
                  <p className="mt-1 text-xl font-extrabold text-heading sm:text-4xl">
                    {fmt(siteLeft)} ₽
                  </p>
                  <p className="mt-1 text-[11px] font-bold text-muted sm:text-xs">
                    {fmtPct(100 - acqPct)}% от суммы заказа
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-6">
            <div className="rounded-2xl border-2 border-black bg-accent px-5 py-6 text-center shadow-[5px_5px_0_0_#0a0a0a] sm:px-8">
              <p className="text-xs font-bold uppercase tracking-wider text-accent-ink/70 sm:text-sm">
                Разница с каждого товара
              </p>
              <p className="mt-1 text-2xl font-extrabold text-accent-ink sm:text-4xl">
                +{fmt(diff)} ₽
              </p>
              <p className="mt-1 text-2xl font-extrabold text-accent-ink sm:text-4xl">
                {fmtPct((diff / order) * 100)}% от цены товара
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <div className="rounded-3xl border-2 border-black bg-black px-5 py-7 text-center text-white shadow-[8px_8px_0_0_#d4af37] sm:px-8 sm:py-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Выгода в месяц
              </p>
              <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">
                +{fmt(diff * sales)} ₽
              </p>
              <p className="mt-2 text-sm font-medium text-white/60">
                при {fmt(sales)} продажах в месяц
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                <span className="mt-0.5 shrink-0 font-mono font-bold text-accent-ink">—</span>
                Wildberries: медианы по категориям из таблицы КВВ от 7 июля 2026 (схема FBW).
                FBS дороже на 4,5 п.п., а у некоторых товаров комиссия доходит до 48%.
              </li>
              <li className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                <span className="mt-0.5 shrink-0 font-mono font-bold text-accent-ink">—</span>
                Ozon: с 1 июля 2026 — единая ставка для товаров дороже 300 ₽; дешёвые товары
                защищены порогами — до 100 ₽ не ниже 14%, 100–300 ₽ не ниже 20%. В детской
                обуви и чемоданах комиссия доходит до 55–60%.
              </li>
              <li className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                <span className="mt-0.5 shrink-0 font-mono font-bold text-accent-ink">—</span>
                Эквайринг: интернет-тарифы 2026, зависят от оборота — при 1 млн ₽ в месяц банки
                снижают ставку до 0,8–1,2%. СБП дешевле карт.
              </li>
              <li className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                <span className="mt-0.5 shrink-0 font-mono font-bold text-accent-ink">—</span>
                На сайте к этой марже добавляются повторные продажи: клиенты остаются вашими.
              </li>
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}