"use client";

import { useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("cookie-consent");
  });

  const accept = () => {
    localStorage.setItem("cookie-consent", "1");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9990] border-t-2 border-line bg-panel p-4 shadow-brutal-accent sm:p-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-body sm:text-base">
          Сайт использует файлы cookie для улучшения работы. Продолжая пользоваться сайтом, вы соглашаетесь с{" "}
          <a href="/privacy" className="font-semibold text-heading hover:underline">
            политикой конфиденциальности
          </a>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full border-2 border-line bg-panel px-6 py-2.5 text-sm font-bold text-heading transition-colors hover:border-accent hover:text-accent"
        >
          Принять
        </button>
      </div>
    </div>
  );
}