"use client";

import { motion } from "framer-motion";
import { BtnLink } from "@/components/BtnLink";
import { Container } from "@/components/Container";
import Stats from "@/components/Stats";
import BrowserFrame from "@/components/BrowserFrame";
import { site } from "@/lib/site";

const heroWords = ["Делаю", "сайты,", "которые", "продают"];

export default function Hero() {
  return (
    <section className="hero-glow grid-bg relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-heading"
            >
              <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
              Next.js · React · TypeScript
            </motion.p>
            <h1 className="mt-7 text-5xl font-extrabold leading-[1.04] tracking-tight text-heading sm:text-7xl lg:text-[5.2rem]">
              {heroWords.map((w, i) =>
                i === heroWords.length - 1 ? (
                  <span key={w} className="relative inline-block">
                    <motion.span
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.25 + i * 0.1, ease: "easeOut" }}
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
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                    >
                      {w}
                    </motion.span>
                  </span>
                ),
              )}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
            >
              Интернет-магазины, каталоги и лендинги под ключ: быстрые, понятные и заточенные
              под результат. От идеи до запуска — с поддержкой после.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <BtnLink href={site.tg} external>
                Написать в Telegram
              </BtnLink>
              <BtnLink href="/migrate" variant="yellow">
                Уход с маркетплейсов
              </BtnLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-14"
            >
              <Stats />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <BrowserFrame
              src="/images/moranti-home.jpg"
              alt="Интернет-магазин Moranti — главная страница"
              url="morbantibags.ru"
              priority
            />
            <div className="float-slow absolute -left-7 -top-6 rounded-2xl border-2 border-black bg-accent px-5 py-4 shadow-[5px_5px_0_0_#0a0a0a]">
              <p className="font-mono text-xl font-extrabold text-accent-ink">Ozon + WB</p>
              <p className="mt-1 text-xs font-semibold text-accent-ink/70">
                синхронизация цен и остатков
              </p>
            </div>
            <div className="float-slower absolute -bottom-6 -right-4 rounded-2xl border-2 border-black bg-white px-5 py-4 shadow-[5px_5px_0_0_#ffd900]">
              <p className="font-mono text-xl font-extrabold text-heading">24/7</p>
              <p className="mt-1 text-xs font-semibold text-muted">работает без ручного ведения</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}