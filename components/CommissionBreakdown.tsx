"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ModalCta } from "@/components/ModalCta";

const fmt = (n: number) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(Math.round(n));

const MP_RATE: Record<"wb" | "ozon", number> = { wb: 35, ozon: 30 };
const ACQ_PCT = 2.8;

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
  const [sales, setSales] = useState(100);
  const [mp, setMp] = useState<"wb" | "ozon">("wb");

  const mpPct = MP_RATE[mp];
  const savePerOrder = (order * mpPct) / 100 - (order * ACQ_PCT) / 100;
  const saveMonth = savePerOrder * sales;

  return (
    <section id="calc" className="scroll-mt-24 border-y border-line bg-panel-soft py-14 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Расчёт"
          title="Сколько остаётся у вас"
          sub="Двигайте ползунки — сразу увидите экономию на своём сайте."
        />

        <Reveal className="mx-auto mt-10 max-w-xl">
          <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-[8px_8px_0_0_#d4af37]">
            <RangeControl
              label="Сумма заказа"
              value={order}
              display={`${fmt(order)} ₽`}
              min={300}
              max={50000}
              step={100}
              onChange={setOrder}
            />
            <div className="my-5 h-px bg-black/10" />
            <RangeControl
              label="Продаж в месяц"
              value={sales}
              display={fmt(sales)}
              min={10}
              max={2000}
              step={10}
              onChange={(v) => setSales(v - (v % 10))}
            />
            <div className="mt-5 flex gap-2">
              {(
                [
                  { id: "wb", label: "Wildberries" },
                  { id: "ozon", label: "Ozon" },
                ] as const
              ).map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setMp(o.id)}
                  className={`inline-flex min-h-[40px] flex-1 items-center justify-center rounded-full border-2 px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                    mp === o.id
                      ? "border-black bg-black text-white"
                      : "border-line bg-panel-soft text-muted hover:border-black"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <div className="mx-auto max-w-xl rounded-3xl border-2 border-black bg-black px-6 py-6 text-center text-white shadow-[8px_8px_0_0_#d4af37]">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Экономия в месяц
            </p>
            <p className="mt-2 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              +{fmt(saveMonth)} ₽
            </p>
            <p className="mt-2 text-sm font-medium text-white/70">
              вместо {mpPct}% комиссии {mp === "wb" ? "Wildberries" : "Ozon"} — только {ACQ_PCT}% эквайринга
            </p>
            <div className="mt-5 flex justify-center">
              <ModalCta
                variant="yellow"
                subject={`Калькулятор: выгода ${fmt(saveMonth)} ₽/мес при ${fmt(sales)} продажах, ${mp === "wb" ? "WB" : "Ozon"} ${mpPct}%`}
              >
                Обсудить переход
              </ModalCta>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
