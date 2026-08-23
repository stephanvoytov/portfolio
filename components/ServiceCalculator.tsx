"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useContactModal } from "@/components/ContactModal";
import { GOALS, reachGoal } from "@/lib/analytics";

const fmt = (n: number) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(n);

type TypeId = "vitrina" | "shop" | "full";

const TYPES: { id: TypeId; name: string; base: number; days: string; desc: string }[] = [
  {
    id: "vitrina",
    name: "Витрина",
    base: 25000,
    days: "3–7 дней",
    desc: "Лендинг бренда с кнопкой «Купить» на маркетплейсе",
  },
  {
    id: "shop",
    name: "Магазин",
    base: 49000,
    days: "10–15 дней",
    desc: "Корзина, оплата, доставка — продажи на сайте",
  },
  {
    id: "full",
    name: "Переход под ключ",
    base: 89000,
    days: "около 3 недель",
    desc: "Магазин плюс перевод клиентов с площадок",
  },
];

const GOODS_BY_TYPE: Record<TypeId, { label: string; add: number }[]> = {
  vitrina: [
    { label: "до 20 товаров", add: 0 },
    { label: "до 50", add: 12000 },
    { label: "до 100", add: 20000 },
  ],
  shop: [
    { label: "до 300 товаров", add: 0 },
    { label: "до 500", add: 10000 },
    { label: "до 1 000", add: 18000 },
    { label: "больше 1 000", add: 30000 },
  ],
  full: [
    { label: "до 300 товаров", add: 0 },
    { label: "до 1 000", add: 20000 },
    { label: "без лимита", add: 35000 },
  ],
};

const OPTIONS = [
  { label: "Синхронизация остатков с Ozon/WB (параллельные продажи)", price: 10000 },
  { label: "Яндекс.Директ и SEO: настройка и ведение 2 мес.", price: 50000 },
  {
    label: "Страница под QR: сбор контактов, промокод, дизайн вкладыша",
    price: 10000,
  },
  {
    label: "Программа лояльности: баллы, уровни, персональные скидки",
    price: 40000,
  },
  { label: "Интеграция с CRM или 1С", price: 40000 },
];

export default function ServiceCalculator() {
  const [typeId, setTypeId] = useState<TypeId>("shop");
  const [goodsIdx, setGoodsIdx] = useState(0);
  const [opts, setOpts] = useState<number[]>([]);
  const { open } = useContactModal();

  const type = TYPES.find((t) => t.id === typeId) ?? TYPES[1];
  const goods = GOODS_BY_TYPE[typeId];
  const goodsItem = goods[Math.min(goodsIdx, goods.length - 1)];
  const optsSum = opts.reduce((acc, i) => acc + OPTIONS[i].price, 0);
  const low = type.base + goodsItem.add + optsSum;
  const high = Math.round((low * 1.35) / 1000) * 1000;
  const days =
    optsSum >= 30000 ? `${type.days} + неделя на интеграции` : type.days;

  const toggleOpt = (i: number) =>
    setOpts((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Смета за минуту"
          title="Сколько будет стоить ваш переезд"
          sub="Соберите конфигурацию — покажу вилку цены и срок. Точная смета фиксируется до старта и не меняется."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <Reveal>
            <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-[8px_8px_0_0_var(--accent)] sm:p-8">
              <p className="text-sm font-bold text-heading">Формат</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {TYPES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      setTypeId(t.id);
                      setGoodsIdx(0);
                    }}
                    className={`rounded-2xl border-2 p-4 text-left transition-all duration-200 ${
                      typeId === t.id
                        ? "border-black bg-black text-white"
                        : "border-line bg-panel-soft hover:border-black"
                    }`}
                  >
                    <span className={`text-sm font-extrabold ${typeId === t.id ? "text-white" : "text-heading"}`}>
                      {t.name}
                    </span>
                    <span className={`mt-1 block text-xs leading-snug ${typeId === t.id ? "text-white/60" : "text-muted"}`}>
                      {t.desc}
                    </span>
                  </button>
                ))}
              </div>

              <div className="my-6 h-px bg-black/10" />

              <p className="text-sm font-bold text-heading">Товаров в каталоге</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {goods.map((g, i) => (
                  <button
                    key={g.label}
                    type="button"
                    onClick={() => setGoodsIdx(i)}
                    className={`inline-flex min-h-[40px] items-center rounded-full border-2 px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                      Math.min(goodsIdx, goods.length - 1) === i
                        ? "border-black bg-black text-white"
                        : "border-line bg-panel-soft text-muted hover:border-black"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>

              <div className="my-6 h-px bg-black/10" />

              <p className="text-sm font-bold text-heading">Дополнительно</p>
              <ul className="mt-3 space-y-2">
                {OPTIONS.map((o, i) => {
                  const on = opts.includes(i);
                  return (
                    <li key={o.label}>
                      <button
                        type="button"
                        onClick={() => toggleOpt(i)}
                        aria-pressed={on}
                        className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 ${
                          on
                            ? "border-black bg-panel-soft font-bold text-heading"
                            : "border-line text-muted hover:border-line-strong"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 text-[11px] font-extrabold ${
                              on ? "border-black bg-accent text-accent-ink" : "border-line-strong"
                            }`}
                          >
                            {on ? "✓" : ""}
                          </span>
                          {o.label}
                        </span>
                        <span className="shrink-0 font-mono text-xs font-bold">
                          +{fmt(o.price)} ₽
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <div className="relative overflow-hidden rounded-3xl border-2 border-black bg-black px-6 py-8 text-center text-white shadow-[8px_8px_0_0_var(--accent)] sm:px-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Ваша ориентировочная смета
              </p>
              <p className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
                {fmt(low)} – {fmt(high)} ₽
              </p>
              <p className="mt-2 text-sm font-medium text-white/60">срок: {days}</p>

              <div className="mx-auto mt-6 max-w-sm space-y-1.5 border-t border-white/15 pt-5 text-left">
                <p className="flex justify-between gap-4 text-sm text-white/70">
                  <span>{type.name}</span>
                  <span className="font-mono">{fmt(type.base)} ₽</span>
                </p>
                {goodsItem.add > 0 && (
                  <p className="flex justify-between gap-4 text-sm text-white/70">
                    <span>Каталог: {goodsItem.label}</span>
                    <span className="font-mono">+{fmt(goodsItem.add)} ₽</span>
                  </p>
                )}
                {optsSum > 0 && (
                  <p className="flex justify-between gap-4 text-sm text-white/70">
                    <span>Доп. опции ({opts.length})</span>
                    <span className="font-mono">+{fmt(optsSum)} ₽</span>
                  </p>
                )}
              </div>

              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={() => {
                    reachGoal(GOALS.calcEstimate);
                    open(
                      [
                        `Смета: ${type.name}`,
                        goodsItem.label,
                        ...(opts.length ? [`опции: ${opts.map((i) => OPTIONS[i].label).join("; ")}`] : []),
                        `ориентировочно ${fmt(low)}–${fmt(high)} ₽`,
                      ].join(", ")
                    );
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black bg-accent px-7 py-3.5 text-sm font-bold text-accent-ink shadow-[4px_4px_0_0_rgba(255,255,255,0.9)] transition-all duration-200 hover:-translate-y-0.5"
                >
                  Обсудить точную смету →
                </button>
                <p className="text-xs leading-relaxed text-white/50 sm:max-w-[220px] sm:text-left">
                  Цена фиксируется в договоре до старта и не меняется по ходу работы.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
