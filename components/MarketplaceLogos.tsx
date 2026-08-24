"use client";

/* eslint-disable @next/next/no-img-element */
export function WbIcon({ className = "h-8 w-8" }: { className?: string }) {
  return <img src="/images/logos/wb.png" alt="Wildberries" className={className} />;
}
export function OzonIcon({ className = "h-8 w-8" }: { className?: string }) {
  return <img src="/images/logos/ozon.png" alt="Ozon" className={className} />;
}
export function YmIcon({ className = "h-8 w-8" }: { className?: string }) {
  return <img src="/images/logos/ymarket.png" alt="Яндекс.Маркет" className={className} />;
}
