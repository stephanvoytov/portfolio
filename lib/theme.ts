/**
 * ЕДИНЫЙ источник акцентного цвета сайта.
 * Меняем здесь — обновляются: CSS-переменные, тени, градиенты,
 * фавикон (/icon.svg) и apple-icon. Больше нигде хардкодить нельзя.
 */
export const theme = {
  /** Акцентный жёлтый */
  accent: "#f6d860",
  /** Тот же цвет в RGB-триплете — для rgba()/rgb(x / alpha) в CSS */
  accentRgb: "246, 216, 96",
  /** Цвет чернил (обводки логотипа, текст на акценте) */
  ink: "#0a0a0a",
} as const;

/** SVG-логотип «С» — используется для фавикона и apple-icon */
export function buildIconSvg(): string {
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">`,
    `  <rect x="3" y="3" width="58" height="58" rx="17" fill="${theme.accent}" stroke="${theme.ink}" stroke-width="5"/>`,
    `  <path d="M44.5 21.5 A15.5 15.5 0 1 0 44.5 42.5" fill="none" stroke="${theme.ink}" stroke-width="8.5" stroke-linecap="round"/>`,
    `</svg>`,
  ].join("\n");
}

/** Тот же логотип как data-URI — для вставки <img> внутри ImageResponse */
export function iconImgDataUri(): string {
  return `data:image/svg+xml;base64,${Buffer.from(buildIconSvg()).toString("base64")}`;
}
