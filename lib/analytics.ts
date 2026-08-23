declare global {
  interface Window {
    ym?: (id: number, action: string, ...args: unknown[]) => void;
  }
}

/** ID счётчика Яндекс.Метрики (components/YandexMetrika.tsx). */
export const YM_ID = 111841353;

/** Идентификаторы целей (в Метрике создать цели типа «JavaScript-событие»). */
export const GOALS = {
  heroCalc: "hero_calc_click",
  tgClick: "tg_click",
  modalOpen: "modal_open",
  leadSent: "modal_lead_sent",
  stickyCta: "sticky_cta",
  calcEstimate: "calc_estimate_send",
} as const;

/** Отправка цели в Яндекс.Метрику. Молча ничего не делает без счётчика. */
export function reachGoal(goal: string) {
  if (typeof window === "undefined") return;
  window.ym?.(YM_ID, "reachGoal", goal);
}
