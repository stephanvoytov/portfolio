import { Container } from "@/components/Container";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { BtnLink } from "@/components/BtnLink";
import { theme } from "@/lib/theme";

const colors = [
  { token: "bg", value: "#ffffff", name: "Фон", light: true },
  { token: "panel", value: "#ffffff", name: "Панель", light: true },
  { token: "panel-soft", value: "#f4f4f5", name: "Панель мягкая" },
  { token: "heading", value: "#0a0a0a", name: "Заголовки" },
  { token: "body", value: "#3f3f46", name: "Основной текст" },
  { token: "muted", value: "#71717a", name: "Приглушённый" },
  { token: "faint", value: "#a1a1aa", name: "Едва заметный" },
  { token: "line", value: "#e4e4e7", name: "Граница" },
  { token: "line-strong", value: "#d4d4d8", name: "Граница сильная" },
  { token: "accent", value: theme.accent, name: "Акцент (lib/theme.ts)" },
  { token: "accent-ink", value: "#0a0a0a", name: "Текст на акценте" },
  { token: "ink", value: "#0a0a0a", name: "Чернила/рамка (border-ink, bg-ink)" },
];

const typeScale = [
  { cls: "text-xs", usage: "Кикеры, чипы, подписи" },
  { cls: "text-sm", usage: "Кнопки, теги, ссылки" },
  { cls: "text-base", usage: "Основной текст, абзацы" },
  { cls: "text-lg", usage: "Крупный текст, подзаголовки" },
  { cls: "text-2xl", usage: "Заголовки карточек" },
  { cls: "text-3xl", usage: "Заголовки секций (моб.)" },
  { cls: "text-4xl", usage: "Заголовки секций" },
  { cls: "text-5xl", usage: "Hero, крупные заголовки" },
  { cls: "text-6xl", usage: "Главный заголовок" },
];

const buttons = [
  {
    label: "Primary",
    cls: "bg-ink text-white shadow-sm hover:shadow-lg hover:shadow-black/20",
  },
  {
    label: "Yellow",
    cls: "bg-accent text-accent-ink shadow-sm hover:shadow-lg hover:shadow-brutal-accent-soft",
  },
  {
    label: "Ghost",
    cls: "border border-line-strong bg-panel text-body hover:border-ink hover:text-heading",
  },
  {
    label: "Header CTA",
    cls: "bg-accent text-accent-ink hover:-translate-y-0.5 hover:shadow-brutal-sm",
  },
  {
    label: "Dark (на чёрном)",
    cls: "bg-accent text-accent-ink hover:bg-ink hover:text-white",
  },
];

export default function DesignSystemPage() {
  return (
    <>
      <PageHero
        kicker="Дизайн-система"
        title="Единый язык интерфейса"
        sub="Токены, типографика, кнопки и компоненты, из которых собран сайт. Всё на кастомном CSS: Tailwind v4 + CSS-переменные в globals.css."
      >
        <BtnLink href="/" variant="ghost">
          ← На главную
        </BtnLink>
      </PageHero>

      {/* ===== Цвета ===== */}
      <section className="border-t border-line bg-panel-soft py-16 sm:py-20">
        <Container>
          <SectionHeading kicker="01 · Цвета" title="Палитра" sub="Светлая тема, семантические токены — не сырые hex, а смысловые имена." />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {colors.map((c) => (
              <div key={c.token} className="overflow-hidden rounded-2xl border border-line bg-panel shadow-sm">
                <div className="h-24 border-b border-line" style={{ background: c.value }} />
                <div className="p-4">
                  <p className="font-mono text-xs font-bold text-heading">{c.token}</p>
                  <p className="mt-0.5 text-xs text-muted">{c.name}</p>
                  <p className="mt-1 font-mono text-[11px] text-faint">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-sm">
              <div className="h-24 border-b border-line bg-ink" />
              <div className="p-4">
                <p className="font-mono text-xs font-bold text-heading">black (тёмные секции)</p>
                <p className="mt-0.5 text-xs text-muted">Фон секций «Работы», «Результат», hero кейса</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-sm">
              <div className="h-24 border-b border-line bg-panel" />
              <div className="p-4">
                <p className="font-mono text-xs font-bold text-heading">white / white/5-60</p>
                <p className="mt-0.5 text-xs text-muted">Текст и рамки поверх чёрного</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-sm">
              <div className="h-24 border-b border-line" style={{ background: "rgb(var(--accent-rgb) / 0.55)" }} />
              <div className="p-4">
                <p className="font-mono text-xs font-bold text-heading">selection</p>
                <p className="mt-0.5 text-xs text-muted">Жёлтое выделение текста</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Типографика ===== */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading kicker="02 · Типографика" title="Шрифты и размеры" sub="Golos Text — для текста и цифр, JetBrains Mono — для кикеров и меток." />
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-line bg-panel p-6 shadow-sm sm:p-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent" />
                Кикер
              </p>
              <h1 className="mt-4 text-6xl font-extrabold leading-tight tracking-tight text-heading">
                Заголовок H1
              </h1>
              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-heading">Заголовок H2 · секция</h2>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-heading">Заголовок H3 · карточка</h3>
              <p className="mt-6 text-lg leading-relaxed text-body">
                Основной текст. Клиенту не нужен сайт — ему нужны заявки. Поэтому сначала задача, потом дизайн.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Приглушённый текст — пояснения и подписи.
              </p>
              <p className="mt-3 text-sm text-faint">Едва заметный текст — вспомогательное.</p>
              <p className="mt-6 font-mono text-sm text-heading">
                <span className="text-accent">{"//"}</span> mono-строка для меток
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-panel p-6 shadow-sm sm:p-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Шкала размеров</p>
              <ul className="mt-6 space-y-3">
                {typeScale.map((t) => (
                  <li key={t.cls} className="flex items-baseline justify-between gap-4 border-b border-line pb-2">
                    <span className="font-mono text-xs text-faint">{t.cls}</span>
                    <span className={`font-semibold text-heading ${t.cls}`}>Аа</span>
                    <span className="text-xs text-muted">{t.usage}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-line bg-panel-soft p-5">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-faint">Жёлтый маркер</p>
                <p className="mt-3 text-2xl font-extrabold tracking-tight text-heading">
                  <span className="hl">Ключевое слово</span> в заголовке
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Кнопки ===== */}
      <section className="border-t border-line bg-panel-soft py-16 sm:py-20">
        <Container>
          <SectionHeading kicker="03 · Кнопки" title="Кнопки и ссылки" sub="Скругления full, отступ px-7 py-3.5, hover — приподъём -translate-y-0.5." />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-line bg-panel p-6 shadow-sm sm:p-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">На светлом фоне</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                {buttons.slice(0, 3).map((b) => (
                  <button key={b.label} className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${b.cls}`}>
                    {b.label}
                  </button>
                ))}
              </div>
              <div className="mt-8">
                <BtnLink href="/" variant="ghost">Ghost-ссылка ←</BtnLink>
              </div>
              <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.25em] text-faint">Текстовая ссылка</p>
              <Link href="/" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-heading">
                Подробнее о кейсе
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-ink p-6 shadow-sm sm:p-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">На чёрном фоне</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-colors duration-200 ${buttons[4].cls}`}>
                  Yellow → Black
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-panel/10 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-panel/20">
                  Ghost dark
                </button>
              </div>
              <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.25em] text-white/40">Жёсткая тень</p>
              <button className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-ink shadow-glow transition-all duration-200 hover:-translate-y-0.5">
                Открыть сайт ↗
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Чипы и метки ===== */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading kicker="04 · Чипы" title="Метки и теги" sub="Моно-шрифт, маленький кегль, округлые капсулы. Два режима: светлый и тёмный." />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-line bg-panel p-6 shadow-sm sm:p-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Светлый режим</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-line-strong bg-panel px-3 py-1 font-mono text-xs text-muted">Интернет-магазин</span>
                <span className="rounded-full border border-line-strong bg-panel px-3 py-1 font-mono text-xs text-muted">Лендинг</span>
                <span className="rounded-full border border-line-strong bg-panel px-3 py-1 font-mono text-xs text-muted">Каталог</span>
                <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs font-bold text-accent-ink">Акцент</span>
              </div>
              <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.25em] text-faint">Кикер с точкой</p>
              <p className="mt-3 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Работы
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-ink p-6 shadow-sm sm:p-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Тёмный режим</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/20 bg-panel/5 px-3 py-1 font-mono text-xs text-white/60">Next.js</span>
                <span className="rounded-full border border-white/20 bg-panel/5 px-3 py-1 font-mono text-xs text-white/60">Ozon API</span>
                <span className="rounded-full border border-white/20 bg-panel/5 px-3 py-1 font-mono text-xs text-white/60">Telegram Bot API</span>
                <span className="rounded-full border border-white/20 bg-panel/5 px-3 py-1 font-mono text-xs text-white/60">Админ-панель</span>
              </div>
              <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.25em] text-white/40">Номер кейса</p>
              <p className="mt-3 text-sm text-accent">01</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Карточки ===== */}
      <section className="border-t border-line bg-panel-soft py-16 sm:py-20">
        <Container>
          <SectionHeading kicker="05 · Карточки" title="Карточки и поверхности" sub="Скругления xl / 2xl / 3xl, тонкие границы line, мягкие тени на светлом и жёсткие на тёмном." />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-line bg-panel p-6 shadow-sm">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Карточка</p>
              <p className="mt-3 text-lg font-bold text-heading">Заголовок</p>
              <p className="mt-2 text-sm leading-relaxed text-body">Основная поверхность: rounded-3xl, border-line, bg-panel, shadow-sm.</p>
            </div>
            <div className="rounded-3xl border border-line bg-panel p-6 shadow-sm">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">KPI-чип</p>
              <p className="mt-3 text-2xl font-extrabold leading-none text-accent">98/100</p>
              <p className="mt-2 text-[11px] leading-tight text-muted">PageSpeed на десктопе</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-ink p-6">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Тёмная карточка</p>
              <p className="mt-3 text-lg font-bold text-white">На чёрном фоне</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">bg-ink, border-white/10, hover:border-white/25.</p>
            </div>
            <div className="rounded-2xl border-2 border-ink bg-accent p-6">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Акцентная плашка</p>
              <p className="mt-3 text-sm font-semibold text-accent">Модалка: border-2 border-ink + жёсткая тень shadow-brutal-accent-lg.</p>
            </div>
            <div className="rounded-2xl border border-line bg-panel p-6 shadow-sm">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Список-пункт</p>
              <div className="mt-4 flex gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-xs font-extrabold text-accent-ink">1</span>
                <p className="text-sm leading-relaxed text-body">Номер-кружок с жёлтой заливкой 15%.</p>
              </div>
              <div className="mt-3 flex gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red-500/10 text-xs font-extrabold text-red-500">2</span>
                <p className="text-sm leading-relaxed text-body">Для «Проблемы» — красный вариант.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-panel p-6 shadow-sm">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Форма</p>
              <div className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border-2 border-ink bg-panel px-4 py-3 text-sm font-semibold text-heading placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="w-full rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-ink transition-all duration-200 hover:-translate-y-0.5">
                  Отправить
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Сетка и спецэффекты ===== */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading kicker="06 · Сетка и эффекты" title="Контейнер, тени, анимации" sub="Контент в max-w-6xl с отступами px-4 / sm:px-6. Эффекты определены в globals.css." />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-line bg-panel p-6 shadow-sm">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Мягкая тень</p>
              <div className="mt-5 flex gap-4">
                <div className="h-16 w-16 rounded-2xl border border-line bg-panel shadow-sm" />
                <div className="h-16 w-16 rounded-2xl border border-line bg-panel shadow-md" />
                <div className="h-16 w-16 rounded-2xl border border-line bg-panel shadow-lg" />
              </div>
            </div>
            <div className="rounded-3xl border border-line bg-panel p-6 shadow-sm">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Жёсткая тень</p>
              <div className="mt-5 flex gap-4">
                <div className="h-16 w-16 rounded-2xl bg-accent shadow-brutal" />
                <div className="h-16 w-16 rounded-2xl border-2 border-ink bg-panel shadow-brutal-accent-lg" />
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-line bg-panel p-6 shadow-sm">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Сетка фона</p>
              <div className="mt-5 h-20 rounded-2xl border border-line grid-bg" />
              <p className="mt-4 text-xs text-muted">Класс .grid-bg — 44px, тонкие линии 4.5%.</p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-line bg-panel p-6 shadow-sm">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Анимации</p>
            <div className="mt-5 flex flex-wrap items-center gap-6">
              <span className="rounded-full bg-accent px-4 py-2 font-mono text-xs font-bold text-accent-ink shadow-brutal-sm float-slow">
                float 5s
              </span>
              <span className="rounded-full bg-accent px-4 py-2 font-mono text-xs font-bold text-accent-ink shadow-brutal-sm float-slower">
                float 6.5s
              </span>
              <span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                <span className="h-2 w-2 rounded-full bg-accent pulse-dot" />
                pulse-dot
              </span>
              <span className="rounded-2xl border-2 border-ink bg-accent px-4 py-2 font-mono text-xs font-bold text-accent-ink shadow-brutal transition-all duration-200 hover:-translate-y-0.5">
                hover: подъём
              </span>
            </div>
          </div>

          <Reveal>
            <div className="mt-6 overflow-hidden rounded-3xl border border-line bg-panel p-6 shadow-sm">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Reveal</p>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Этот блок появился с анимацией fade + slide-up — компонент Reveal с framer-motion (y: 24 → 0, 0.6s, при скролле).
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}