"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

interface Option {
  label: string;
  value: string;
}

interface Question {
  key: string;
  title: string;
  options: Option[];
}

const questions: Question[] = [
  {
    key: "type",
    title: "Какой сайт вам нужен?",
    options: [
      { label: "Лендинг — продающая страница", value: "Лендинг" },
      { label: "Интернет-магазин с оплатой", value: "Интернет-магазин" },
      { label: "Каталог с синхронизацией Ozon/WB", value: "Каталог с синхронизацией Ozon/WB" },
      { label: "Миграция с маркетплейсов на свой сайт", value: "Миграция с маркетплейсов" },
    ],
  },
  {
    key: "terms",
    title: "В какие сроки нужно уложиться?",
    options: [
      { label: "Как можно быстрее — до 2 недель", value: "до 2 недель" },
      { label: "Около месяца", value: "около месяца" },
      { label: "Сроки гибкие, главное — результат", value: "сроки гибкие" },
    ],
  },
  {
    key: "integrations",
    title: "Нужны ли интеграции?",
    options: [
      { label: "Синхронизация с Ozon и Wildberries", value: "синхронизация с Ozon и Wildberries" },
      { label: "Оплата и доставка", value: "оплата и доставка" },
      { label: "Боты и уведомления в Telegram", value: "боты в Telegram" },
      { label: "Пока не знаю — нужна консультация", value: "нужна консультация" },
    ],
  },
  {
    key: "budget",
    title: "Какой бюджет закладываете?",
    options: [
      { label: "До 100 000 ₽", value: "до 100 000 ₽" },
      { label: "100 000 – 300 000 ₽", value: "100–300 тыс. ₽" },
      { label: "От 300 000 ₽", value: "от 300 тыс. ₽" },
      { label: "Пока не определился", value: "бюджет не определён" },
    ],
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

  const q = questions[step];
  const isLast = step === questions.length - 1;

  const pick = (value: string) => {
    const next = { ...answers, [q.key]: value };
    setAnswers(next);
    if (isLast) {
      setDone(true);
    } else {
      setStep((s) => s + 1);
    }
  };

  const summary = questions
    .map((question) => `${question.title} ${answers[question.key] ?? "—"}`)
    .join("\n");
  const message = `Заявка с сайта (квиз):\n${summary}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard недоступен — не страшно, есть кнопка Telegram
    }
  };

  const progress = Math.round(((step + (done ? 1 : 0)) / questions.length) * 100);

  return (
    <div className="rounded-3xl border-2 border-black bg-accent p-6 shadow-[8px_8px_0_0_#0a0a0a] sm:p-10">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-ink">
        Квиз · 2 минуты
      </p>
      <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-accent-ink sm:text-4xl">
        Рассчитайте стоимость сайта
      </h3>

      <div className="mt-8 h-2 overflow-hidden rounded-full bg-black/10">
        <div
          className="h-full rounded-full bg-accent-ink transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-8 min-h-[260px]">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-accent-ink/60">
                Вопрос {step + 1} / {questions.length}
              </p>
              <h4 className="mt-2 text-lg font-bold text-accent-ink sm:text-xl">{q.title}</h4>
              <div className="mt-5 space-y-2.5">
                {q.options.map((o) => (
                  <button
                    key={o.value}
                    onClick={() => pick(o.value)}
                    className="flex w-full items-center justify-between rounded-2xl border-2 border-black bg-white px-5 py-3.5 text-left text-sm font-semibold text-heading transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#0a0a0a] active:translate-y-0"
                  >
                    {o.label}
                    <span aria-hidden="true" className="text-black">
                      →
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h4 className="text-lg font-bold text-accent-ink sm:text-xl">
                Задача понятна. Теперь обсудим детали в Telegram
              </h4>
              <pre className="mt-4 whitespace-pre-wrap rounded-2xl border-2 border-black bg-white p-4 font-mono text-xs leading-relaxed text-heading">
                {message}
              </pre>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={site.tg}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-ink px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  Отправить в Telegram
                </a>
                <button
                  onClick={copy}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black bg-white px-7 py-3.5 text-sm font-semibold text-heading transition-all duration-200 hover:-translate-y-0.5"
                >
                  {copied ? "Скопировано ✓" : "Скопировать заявку"}
                </button>
              </div>
              <button
                onClick={() => {
                  setStep(0);
                  setAnswers({});
                  setDone(false);
                }}
                className="mt-4 text-xs font-semibold text-accent-ink/60 underline-offset-2 hover:underline"
              >
                Пройти заново
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}