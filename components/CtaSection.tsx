"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import { useContactModal } from "@/components/ContactModal";

export default function CtaSection({ hideMigrate = false }: { hideMigrate?: boolean }) {
  const { open } = useContactModal();

  return (
    <section className="pb-20 pt-4 sm:pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border-2 border-ink bg-panel px-6 py-16 text-center shadow-brutal-accent-xl sm:px-12">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 90% at 50% 0%, rgb(var(--accent-rgb) / 0.28), transparent 70%)",
              }}
            />
            <p className="relative font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Следующий шаг
            </p>
            <h2 className="relative mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-5xl">
              Обсудим ваш проект?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
              Расскажу, как можно решить вашу задачу, и подготовлю смету. Обсуждение ни к чему не
              обязывает.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => open()}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent bg-accent px-7 py-3.5 text-sm font-bold text-accent-ink shadow-brutal-accent transition-all duration-200 hover:-translate-y-0.5"
              >
                Оставить заявку
              </button>
            </div>
            {!hideMigrate && (
              <p className="relative mt-5 text-sm text-muted">
                <Link href="/migrate" className="font-semibold text-accent hover:underline">
                  Нужен второй канал продаж? →
                </Link>
              </p>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}