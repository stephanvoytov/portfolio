"use client";

import { useEffect } from "react";
import { YM_ID } from "@/lib/analytics";

/**
 * Яндекс.Метрика.
 * Инлайн-скрипт через next/script стратегии beforeInteractive вызывает ошибку
 * React 19 («Encountered a script tag while rendering React component»), т.к.
 * <script> рендерится на клиенте повторно. Поэтому счётчик внедряем
 * императивно через useEffect — никакого <script> в JSX, ошибок в консоли нет.
 */
const counterJs = `
(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${YM_ID}', 'ym');

ym(${YM_ID}, 'init', {
  ssr: true,
  webvisor: true,
  clickmap: true,
  ecommerce: "dataLayer",
  accurateTrackBounce: true,
  trackLinks: true,
});
`;

export default function YandexMetrika() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ((window as unknown as { ym?: unknown }).ym) return;
    const s = document.createElement("script");
    s.textContent = counterJs;
    document.head.appendChild(s);
  }, []);

  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://mc.yandex.ru/watch/${YM_ID}`}
        style={{ position: "absolute", left: "-9999px" }}
        alt=""
      />
    </noscript>
  );
}
