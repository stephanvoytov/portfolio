"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "@/components/Reveal";

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 10, prefix: "от ", suffix: " тыс. ₽", label: "за сайт под ключ" },
  { value: 10, suffix: "+", label: "проектов в портфеле" },
  { value: 5, suffix: "", label: "дней — экспресс-запуск" },
];

function Counter({ stat, start }: { stat: Stat; start: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1100;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * stat.value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, stat.value]);

  return (
    <p className="font-mono text-3xl font-bold text-heading sm:text-4xl">
      {stat.prefix}
      {n}
      {stat.suffix}
    </p>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className={i === 0 ? "col-span-2 sm:col-span-1" : ""}>
          <div className="rounded-2xl border border-line bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-black hover:shadow-[4px_4px_0_0_#ffd900]">
            <Counter stat={s} start={inView} />
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}