"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContactModal } from "@/components/ContactModal";
import { ArrowRight, Clock, Coins, Package } from "@/components/icons";

const heroWords = ["Делаю", "сайты,", "которые", "продают"];

const metrics = [
  { value: "от 15 000 ₽", label: "цена", icon: <Coins className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "от 5 дней", label: "срок", icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { value: "под ключ", label: "формат", icon: <Package className="h-4 w-4 sm:h-5 sm:w-5" /> },
];

export default function Hero() {
  const { open: openContact } = useContactModal();

return (
    <section className="relative overflow-hidden pb-10 pt-20 sm:pt-36 lg:pb-24">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-heading sm:text-7xl lg:text-[4.8rem]">
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
              className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:mt-7 sm:text-xl"
            >
              Делаю сайты для бизнеса: структура, дизайн, разработка,
              интеграции и запуск. Сайт должен приносить заявки — это его работа.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 flex flex-col gap-y-2.5 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-start sm:gap-y-6 sm:divide-x sm:divide-line-strong"
            >
              {metrics.map((m) => (
                <div key={m.label} className="flex items-center gap-2.5 sm:flex-col sm:items-start sm:gap-2 sm:px-8 sm:first:pl-0">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border-2 border-black bg-white text-accent-ink sm:h-10 sm:w-10 sm:rounded-xl">
                    {m.icon}
                  </span>
                  <p className="text-lg font-extrabold leading-none text-heading sm:text-2xl">
                    {m.value}
                  </p>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-faint sm:mt-1 sm:text-xs">
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
            className="m-0 flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="order-1 mb-5 mt-0 flex flex-col gap-2.5 sm:order-2 sm:mb-0 sm:mt-14 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center"
            >
              <button
                type="button"
                onClick={() => openContact()}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-black bg-accent px-8 py-2.5 text-base font-bold text-accent-ink shadow-[4px_4px_0_0_#0a0a0a] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#0a0a0a] active:translate-y-0 sm:w-auto sm:py-4"
              >
                Обсудить проект
              </button>
              <Link
                href="/cases"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line-strong bg-white px-8 py-2.5 text-base font-bold text-body transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:text-heading active:translate-y-0 sm:w-auto sm:py-4"
              >
                Посмотреть кейсы
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <div className="relative order-2 mx-auto w-full max-w-[18.5rem] sm:order-1 sm:w-96 sm:max-w-none lg:w-[26rem]">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-black bg-white">
                <Image
                  src="/images/photo-hero.webp"
                  alt="Стефан — разработчик сайтов на Next.js"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="absolute inset-x-3 bottom-3 mx-auto rounded-2xl border border-white/60 bg-white/40 p-3.5 text-left shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:inset-x-0 sm:bottom-0 sm:w-[calc(100%-7rem)] sm:translate-y-1/2 sm:p-4">
                <p className="font-extrabold leading-tight text-heading">Стефан</p>
                <p className="font-mono text-xs text-body">Full-stack разработчик</p>
              </figcaption>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}