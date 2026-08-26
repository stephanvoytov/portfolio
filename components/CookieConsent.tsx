"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  // Показываем только после монтирования: иначе SSR (null) против клиента
  // (баннер) даёт ошибку гидратации на каждом первом визите.
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "1");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9990] border-t border-line bg-panel/95 px-3 py-2.5 backdrop-blur-none sm:px-4 sm:py-3">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="text-xs leading-snug text-muted sm:text-sm">
          Продолжая пользоваться сайтом, вы соглашаетесь с{" "}
          <a href="/privacy" className="font-semibold text-heading hover:underline">
            политикой конфиденциальности
          </a>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-ink transition-transform hover:-translate-y-0.5 sm:px-5 sm:py-2 sm:text-sm"
        >
          Принять
        </button>
      </div>
    </div>
  );
}