"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContactModal } from "@/components/ContactModal";

const heroWords = ["Делаю", "сайты,", "которые", "продают"];

const metrics = [
  { value: "от 10 000 ₽", label: "цена" },
  { value: "от 5 дней", label: "срок" },
  { value: "под ключ", label: "формат" },
];

export default function Hero() {
  const { open: openContact } = useContactModal();

  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pt-36 lg:pb-24">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-heading sm:text-7xl lg:text-[4.8rem]">
              {heroWords.map((w, i) =>
                i === heroWords.length - 1 ? (
                  <span key={w} className="relative inline-block">
                    <motion.span
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                      className="relative z-10"
                    >
                      {w}
                    </motion.span>
                    <span className="absolute bottom-1 left-0 z-0 h-[42%] w-full bg-accent" />
                  </span>
                ) : (
                  <span key={w} className="mr-3 inline-block sm:mr-4">
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.08 + i * 0.08, ease: "easeOut" }}
                    >
                      {w}
                    </motion.span>
                  </span>
                ),
              )}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            >
              Делаю сайты для бизнеса: структура, дизайн, разработка,
              интеграции и запуск. Сайт должен приносить заявки — это его работа.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-y-6 sm:divide-x sm:divide-line-strong"
            >
              {metrics.map((m) => (
                <div key={m.label} className="sm:px-8 sm:first:pl-0">
                  <p className="text-2xl font-extrabold leading-none text-heading">{m.value}</p>
                  <p className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-faint">
                    {m.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="m-0"
          >
            <div className="relative mx-auto mb-8 w-72 sm:w-96 lg:w-[26rem]">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-black bg-white">
                <Image
                  src="/images/photo-hero.webp"
                  alt="Стефан — разработчик сайтов на Next.js"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 mx-auto w-[calc(100%-7rem)] translate-y-1/2 rounded-2xl border border-white/60 bg-white/40 p-4 text-left shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                <p className="font-extrabold leading-tight text-heading">Стефан</p>
                <p className="font-mono text-xs text-muted">Full-stack разработчик</p>
              </figcaption>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-14 flex flex-wrap items-center justify-center gap-3"
            >
              <button
                type="button"
                onClick={openContact}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black bg-accent px-8 py-4 text-base font-bold text-accent-ink shadow-[4px_4px_0_0_#0a0a0a] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#0a0a0a] active:translate-y-0"
              >
                Обсудить проект
              </button>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-white px-8 py-4 text-base font-bold text-body transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:text-heading active:translate-y-0"
              >
                Смотреть работы
              </a>
            </motion.div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}