"use client";

import { useEffect, useState } from "react";
import { useContactModal } from "@/components/ContactModal";

/**
 * Липкая кнопка заявки внизу экрана на мобильных.
 * Появляется после пролистывания первого экрана и исчезает при открытой модалке —
 * постоянная точка конверсии для длинного лендинга с платным трафиком.
 */
export default function MobileStickyCta() {
  const { open, isOpen } = useContactModal();
  const [passedHero, setPassedHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPassedHero(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = passedHero && !isOpen;

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        type="button"
        tabIndex={show ? 0 : -1}
        onClick={() => open()}
        className="w-full rounded-full bg-accent px-6 py-3.5 text-base font-bold text-accent-ink shadow-[3px_3px_0_0_#0a0a0a] transition-transform active:scale-[0.98]"
      >
        Обсудить переход
      </button>
    </div>
  );
}
