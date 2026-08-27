"use client";

import { useRef, useState, useCallback, useEffect } from "react";

const steps = [
  {
    num: "01",
    title: "Бриф и сбор информации",
    desc: "Прежде чем заказать разработку сайта, заполним бриф. Я организую удобный формат сбора информации — вопросы зависят от выбранного типа сайта и занимают не больше 30–60 минут. На этом этапе мы сможем определиться с точной стоимостью проекта и сроками его выполнения.",
  },
  {
    num: "02",
    title: "Структура и прототип",
    desc: "Собираем структуру сайта: какие страницы нужны, что на них разместить, как связать. Рисуем прототип — вы видите будущий сайт ещё до дизайна. На этом этапе корректируем объём и финализируем стоимость.",
  },
  {
    num: "03",
    title: "Дизайн + Вёрстка",
    desc: "Самый творческий этап. Подбираем шрифты, цвета, стиль и юзабилити, затем по утверждённому макету движемся к готовому дизайну. В начале этапа важно поработать вместе с чёткой обратной связью с вашей стороны — далее вы оцениваете уже финальный вариант.",
  },
  {
    num: "04",
    title: "Запуск и сдача",
    desc: "Вы получаете почти готовый инструмент и все ключи. Точечно доводим проект до совершенства: выкладываем, настраиваем, готовим к запуску. На этом этапе важна коммуникация с вами — это максимально ускорит доведение проекта до 100% готовности.",
  },
  {
    num: "05",
    title: "Передача и поддержка",
    desc: "Финальный этап: всё ещё раз проверяем, передаю код, доступы и учу управлять сайтом. Даю месяц технической поддержки на выявление недочётов. Сайт уже готов к работе и запуску, а это значит — ваше сотрудничество только начинается.",
  },
];

export default function ProcessSteps() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const n = steps.length;

  const scrollToIdx = useCallback((idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild?.children[idx] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const handleScroll = () => {
      const children = Array.from(el.firstElementChild?.children || []) as HTMLElement[];
      const scrollLeft = el.scrollLeft;
      let closest = 0;
      let minDist = Infinity;
      children.forEach((child, idx) => {
        const dist = Math.abs(child.offsetLeft - scrollLeft);
        if (dist < minDist) { minDist = dist; closest = idx; }
      });
      setI(closest);
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (dir: number) => {
    const next = Math.min(n - 1, Math.max(0, i + dir));
    setI(next);
    scrollToIdx(next);
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="relative -mx-5 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth px-5 sm:-mx-8 sm:px-8"
      >
        <div className="flex gap-5 pb-2 sm:gap-6">
          {steps.map((s) => (
            <article
              key={s.num}
              className="w-[78%] shrink-0 snap-center rounded-3xl border border-line bg-panel p-6 shadow-sm sm:w-[60%] sm:p-8 lg:w-[46%]"
            >
              <div className="flex items-start justify-between">
                <div className="process-num text-6xl font-extrabold leading-none sm:text-7xl">{s.num}</div>
                <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-muted">
                  этап {s.num}/0{n}
                </div>
              </div>
              <h3 className="mt-5 text-xl font-bold text-heading sm:text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Предыдущий этап"
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-line bg-panel text-heading transition-colors hover:border-accent hover:text-accent disabled:opacity-40"
            disabled={i <= 0}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Следующий этап"
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-line bg-panel text-heading transition-colors hover:border-accent hover:text-accent disabled:opacity-40"
            disabled={i >= n - 1}
          >
            →
          </button>
        </div>

        <div className="font-mono text-sm font-bold text-muted">
          {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted">
        Работаю официально: договор · ТЗ · акт · чеки.
      </p>
    </div>
  );
}