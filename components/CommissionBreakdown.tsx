"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const fmt = (n: number) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(Math.round(n));

const fmtPct = (n: number) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 1 }).format(n);

const presets = [
  { label: "Обычная категория", pct: 25 },
  { label: "Wildberries, медиана", pct: 38 },
  { label: "Ozon, одежда", pct: 55 },
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

export default function CommissionBreakdown() {
  const [order, setOrder] = useState(2000);
  const [mpPct, setMpPct] = useState(25);
  const [acqPct, setAcqPct] = useState(2.5);

  const mpTake = (order * mpPct) / 100;
  const siteTake = (order * acqPct) / 100;
  const mpLeft = order - mpTake;
  const siteLeft = order - siteTake;
  const diff = siteLeft - mpLeft;

  return (
    <section className="border-y border-line bg-panel-soft py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Расчёт"
          title="Посчитайте на своём товаре"
          sub="Двигайте ползунки — посмотрите, сколько забирает площадка с товара и сколько останется вам на своём сайте. По умолчанию: товар за 2 000 ₽, удержания 25%."
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

              <RangeControl
                label="Удержания маркетплейса"
                value={mpPct}
                display={`${fmtPct(mpPct)}%`}
                min={0}
                max={70}
                step={0.5}
                onChange={setMpPct}
              />
              <div className="mt-3 flex flex-wrap gap-2">
                {presets.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => setMpPct(p.pct)}
                    className={`rounded-full border-2 px-3 py-1 text-xs font-bold transition-all duration-200 ${
                      mpPct === p.pct
                        ? "border-black bg-black text-white"
                        : "border-line bg-panel-soft text-muted hover:border-black"
                    }`}
                  >
                    {p.label} · {fmtPct(p.pct)}%
                  </button>
                ))}
              </div>

              <div className="my-6 h-px bg-black/10" />

              <RangeControl
                label="Эквайринг на сайте"
                value={acqPct}
                display={`${fmtPct(acqPct)}%`}
                min={0}
                max={6}
                step={0.1}
                onChange={setAcqPct}
              />
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5">
            <Reveal>
              <div className="h-full overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[6px_6px_0_0_#0a0a0a] sm:shadow-[8px_8px_0_0_#0a0a0a]">
                <div className="border-b-2 border-black bg-black px-4 py-3 sm:px-5 sm:py-4">
                  <h3 className="text-sm font-extrabold text-white sm:text-lg">Маркетплейс</h3>
                  <p className="mt-0.5 text-[11px] font-medium text-white/60 sm:text-sm">
                    комиссия и удержания
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
                    только эквайринг
                  </p>
                </div>
                <div className="px-4 py-5 sm:px-6 sm:py-6">
                  <p className="text-xs font-medium text-muted sm:text-sm">Забирает с заказа</p>
                  <p className="mt-1 text-xl font-extrabold text-heading sm:text-4xl">
                    −{fmt(siteTake)} ₽
                  </p>
                  <p className="mt-1 text-[11px] font-bold text-muted sm:text-xs">
                    {fmtPct(acqPct)}% — комиссия банка
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
                +{fmt(diff)} ₽ вам на своём сайте
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                <span className="mt-0.5 shrink-0 font-mono font-bold text-accent-ink">—</span>
                Реальные диапазоны: Wildberries — медиана 33,5–38% (таблица комиссий с 7 июля
                2026, одежда до 43,5%), Ozon — до 55% на одежде с 28 августа 2026. Ваш процент
                берите из личного кабинета продавца.
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