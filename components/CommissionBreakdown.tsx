"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ModalCta } from "@/components/ModalCta";

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
];

/** Эквайринг зафиксирован на типовой ставке ЮKassa — лишний шаг для селлера убран. */
const ACQ_PCT = 2.8;

const SALES_PRESETS = [50, 100, 250, 500, 1000];

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

function ChipGroup({
  options,
  value,
  onChange,
}: {
  options: number[];
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`inline-flex min-h-[40px] items-center rounded-full border-2 px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
            value === o
              ? "border-black bg-black text-white"
              : "border-line bg-panel-soft text-muted hover:border-black"
          }`}
        >
          {o >= 1000 ? `${o / 1000} 000` : o}
        </button>
      ))}
    </div>
  );
}

export default function CommissionBreakdown() {
  const [orderInput, setOrderInput] = useState("2000");
  const [mp, setMp] = useState<"wb" | "ozon">("wb");
  const [catIdx, setCatIdx] = useState(0);
  const [sales, setSales] = useState(100);

  const order = Math.min(Math.max(Number(orderInput) || 0, 300), 50000);
  const cats = mp === "wb" ? WB_CATEGORIES : OZON_CATEGORIES;
  const cat = cats[Math.min(catIdx, cats.length - 1)];
  const mpPct = cat.pct ?? 25;

  const mpTake = (order * mpPct) / 100;
  const siteTake = (order * ACQ_PCT) / 100;
  const diff = mpTake - siteTake;

  return (
    <section id="calc" className="scroll-mt-24 border-y border-line bg-panel-soft py-14 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Расчёт"
          title="Посчитайте на своём товаре"
          sub="Сколько забирает площадка и сколько останется вам."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <Reveal className="mt-4">
            <div className="rounded-3xl border-2 border-black bg-white p-5 shadow-[8px_8px_0_0_#d4af37] sm:p-6">
              <RangeControl
                label="Сумма заказа"
                value={order}
                display={`${fmt(order)} ₽`}
                min={300}
                max={50000}
                step={100}
                onChange={(v) => setOrderInput(String(v))}
              />

              <div className="my-6 h-px bg-black/10" />

              <p className="text-sm font-bold text-heading">Маркетплейс</p>
              <div className="mt-3">
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      { label: "Wildberries", value: "wb" as const },
                      { label: "Ozon", value: "ozon" as const },
                    ]
                  ).map((o) => (
                    <button
                      key={o.value}
                      type="button"
                      onClick={() => {
                        setMp(o.value);
                        setCatIdx(0);
                      }}
                      className={`inline-flex min-h-[40px] items-center rounded-full border-2 px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                        mp === o.value
                          ? "border-black bg-black text-white"
                          : "border-line bg-panel-soft text-muted hover:border-black"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
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
                    value={Math.min(catIdx, cats.length - 1)}
                    onChange={(e) => setCatIdx(Number(e.target.value))}
                    className="w-full appearance-none rounded-2xl border-2 border-black bg-white px-4 py-3 text-sm font-bold text-heading outline-none transition-all focus:shadow-[3px_3px_0_0_#d4af37]"
                  >
                    {cats.map((c, i) => (
                      <option key={c.label} value={i}>
                        {c.label} — {fmtPct(c.pct ?? 0)}%
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
              </div>

              <div className="my-6 h-px bg-black/10" />

              <RangeControl
                label="Продаж в месяц"
                value={sales}
                display={`${fmt(sales)}`}
                min={10}
                max={2000}
                step={10}
                onChange={(v) => setSales(v - (v % 10))}
              />
              <div className="mt-3">
                <ChipGroup options={SALES_PRESETS} value={sales} onChange={setSales} />
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5">
            <Reveal>
              <div className="h-full overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[6px_6px_0_0_#0a0a0a] sm:shadow-[8px_8px_0_0_#0a0a0a]">
                <div className="border-b-2 border-black bg-black px-4 py-3 sm:px-5">
                  <h3 className="text-sm font-extrabold text-white sm:text-lg">Маркетплейс</h3>
                  <p className="mt-0.5 text-[11px] font-medium text-white/60 sm:text-sm">
                    {mp === "wb" ? "Wildberries" : "Ozon"} · комиссия
                  </p>
                </div>
                <div className="px-4 py-4 sm:px-5 sm:py-5">
                  <p className="text-xs font-medium text-muted sm:text-sm">Забирает с заказа</p>
                  <p className="mt-1 whitespace-nowrap text-xl font-extrabold text-heading sm:text-4xl">
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
                  <p className="mt-1 whitespace-nowrap text-xl font-extrabold text-heading sm:text-4xl">
                    {fmt(order - mpTake)} ₽
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
                    ЮKassa · только эквайринг
                  </p>
                </div>
                <div className="px-4 py-4 sm:px-5 sm:py-5">
                  <p className="text-xs font-medium text-muted sm:text-sm">Забирает с заказа</p>
                  <p className="mt-1 text-xl font-extrabold text-heading sm:text-4xl">
                    −{fmt(siteTake)} ₽
                  </p>
                  <p className="mt-1 text-[11px] font-bold text-muted sm:text-xs">
                    {fmtPct(ACQ_PCT)}% — комиссия оператора
                  </p>
                  <div className="my-4 h-2.5 w-full overflow-hidden rounded-full bg-black/10 sm:my-5">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${Math.min(ACQ_PCT * 2, 100)}%` }}
                    />
                  </div>
                  <p className="text-xs font-medium text-muted sm:text-sm">Остаётся вам</p>
                  <p className="mt-1 whitespace-nowrap text-xl font-extrabold text-heading sm:text-4xl">
                    {fmt(order - siteTake)} ₽
                  </p>
                  <p className="mt-1 text-[11px] font-bold text-muted sm:text-xs">
                    {fmtPct(100 - ACQ_PCT)}% от суммы заказа
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-6">
            <div className="rounded-3xl border-2 border-black bg-black px-5 py-5 text-center text-white shadow-[8px_8px_0_0_#d4af37] sm:px-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Выгода в месяц
              </p>
              <p className="mt-2 text-2xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                +{fmt(diff * sales)} ₽
              </p>
              <p className="mt-2 text-sm font-medium text-white/60">
                при {fmt(sales)} продажах в месяц
              </p>
              <div className="mt-6 flex justify-center">
                <ModalCta
                  variant="yellow"
                  subject={`Калькулятор: площадка забирает ${fmt(mpTake)} ₽ с заказа (${mp === "wb" ? "WB" : "Ozon"}, ${fmtPct(mpPct)}%), ${fmt(sales)} продаж/мес — выгода на сайте ${fmt(diff * sales)} ₽/мес`}
                >
                  Обсудить переход
                </ModalCta>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
