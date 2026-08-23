"use client";

import { useContactModal } from "@/components/ContactModal";
import { GOALS, reachGoal } from "@/lib/analytics";

interface ModalCtaProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "yellow";
  block?: boolean;
  className?: string;
  /** Тема заявки — подставится в форму (например, выбранный тариф). */
  subject?: string;
}

/** Кнопка, открывающая форму заявки (модалка) — свой канал конверсии вместо Telegram. */
export function ModalCta({
  children,
  variant = "primary",
  block = false,
  className = "",
  subject,
}: ModalCtaProps) {
  const { open } = useContactModal();

  const base = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
    block ? "w-full" : ""
  }`;
  const styles =
    variant === "primary"
      ? "bg-ink text-white shadow-sm hover:shadow-lg hover:shadow-black/20"
      : variant === "yellow"
        ? "bg-accent text-accent-ink shadow-sm hover:shadow-lg hover:shadow-brutal-accent-soft"
        : "border border-line-strong bg-panel text-body hover:border-ink hover:text-heading";

  return (
    <button type="button" onClick={() => { reachGoal(GOALS.modalOpen); open(subject); }} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
