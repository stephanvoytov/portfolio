export type CaseType = "landing" | "catalog" | "ecommerce";

export interface CaseSlide {
  src: string;
  label: string;
}

export interface CaseResult {
  value: string;
  label: string;
  icon: string;
}

export interface Case {
  id: string;
  index: string;
  title: string;
  types: CaseType[];
  typeLabel: string;
  url: string;
  urlLabel: string;
  tagline: string;
  short: string;
  problem: string;
  problemPoints: string[];
  solution: string[];
  features: string[];
  integrations: string[];
  results: CaseResult[];
  nextSteps?: string;
  stack: string[];
  previewDesktop?: string;
  previewMobile?: string;
  compare?: { before: CaseSlide; after: CaseSlide };
  slides: CaseSlide[];
}

export const caseTypeLabels: Record<CaseType, string> = {
  landing: "Лендинг",
  catalog: "Каталог",
  ecommerce: "Интернет-магазин",
};

export const cases: Case[] = [
  {
    id: "moranti",
    index: "01",
    title: "Moranti",
    types: ["ecommerce", "catalog"],
    typeLabel: "Интернет-магазин",
    url: "https://morantibags.ru",
    urlLabel: "morantibags.ru",
    tagline: "Интернет-магазин женских сумок",
    previewDesktop: "/images/mockup-moranti-v2.jpg",
    short:
      "Каталог-витрина: 70+ позиций с ценами, скидками и рейтингами. Всё синхронизируется с Ozon и Wildberries автоматически: картинки, характеристики, цены, остатки, отзывы. Появилась корзина: покупатель собирает заказ на сайте и переходит к оформлению на маркетплейсе.",
    problem:
      "Бренд продавал только на Ozon и Wildberries: покупатель искал «сумки Moranti» и находил лишь карточки на маркетплейсах. Свой сайт был нужен, но вести каталог на сотни позиций вручную — обновлять цены, остатки и карточки — невозможно.",
    problemPoints: [
      "У бренда не было своей витрины — только карточки на маркетплейсах",
      "Сотни позиций: обновление цен и остатков вручную занимало бы часы каждый день",
      "Нет своего канала для коммуникации с покупателями и сбора клиентской базы",
    ],
    solution: [
      "Каталог-витрина на Next.js: 70+ позиций с ценами, скидками и рейтингами",
      "Автоматическая синхронизация с Ozon и Wildberries: картинки, характеристики, цены, остатки, отзывы",
      "Фильтры по категориям и площадкам, страницы товаров, избранное",
      "Корзина: заказ собирается на сайте, оформление — переходом на карточку площадки, одним кликом",
    ],
    features: [
      "Каталог на 70+ позиций с ценами, скидками и рейтингами",
      "Фильтры по категориям и площадкам",
      "Страницы товаров и избранное",
      "Корзина с переходом к оформлению на маркетплейсе",
    ],
    integrations: ["Ozon API", "Wildberries API", "Корзина", "Админ-панель"],
    results: [
      { value: "0 мин/день", label: "на ручное ведение каталога — цены и остатки тянутся сами", icon: "coins" },
      { value: "70+", label: "позиций на одних данных с маркетплейсами", icon: "package" },
      { value: "89/100", label: "PageSpeed на десктопе (замер Lighthouse)", icon: "gauge" },
      { value: "1.6 с", label: "LCP на десктопе (замер Lighthouse)", icon: "timer" },
      { value: "≈66 ч", label: "часов работы над проектом — от идеи до запуска", icon: "clock" },
    ],
    nextSteps:
      "Корзина готова: покупатель собирает заказ на сайте, оформление — одним переходом на маркетплейс. Следующий этап — платёжная система: сайт станет полноценным магазином с оплатой на сайте, и продажи пойдут напрямую, без комиссий площадок.",
    stack: ["Next.js", "Ozon API", "Wildberries API", "Корзина", "Админка"],
    slides: [
      { src: "/images/moranti-home.jpg", label: "Главная" },
      { src: "/images/moranti-catalog.webp", label: "Каталог" },
      { src: "/images/moranti-product.webp", label: "Страница товара" },
    ],
  },
  {
    id: "diverse",
    index: "02",
    title: "Diverse",
    types: ["landing"],
    typeLabel: "Лендинг",
    url: "https://diversebrand.ru",
    urlLabel: "diversebrand.ru",
    tagline: "Лендинг франшизы одежды",
    previewDesktop: "/images/mockup-diverse-v2.jpg",
    short:
      "Сайт франшизы: будущие партнёры изучают условия, находят магазины рядом на карте и оставляют заявку — она сразу приходит владельцу в Telegram и на почту. Заменил сайт, собранный владельцем на Tilda.",
    problem:
      "Старый сайт владелец собрал сам на Tilda: главная растянута на 10 000+ пикселей, на сайте нет ни одной формы — заявки собирались только через ссылки на мессенджеры. С внутренних страниц нельзя вернуться на главную: на них нет навигации вообще. Плюс хостинг — 6 000 ₽/год.",
    problemPoints: [
      "0 форм заявки на сайте — только ссылки на Telegram, WhatsApp и почту",
      "Главная высотой 10 000+ px — ключевая информация тонет",
      "Внутренние страницы без навигации: вернуться можно только кнопкой «назад» в браузере",
      "Опечатки («серцифицированы»), 13 скриптов тяжёлого движка, ошибка загрузки шрифта в консоли",
      "Медленная загрузка на мобильном: 72/100 PageSpeed (замер Lighthouse)",
      "Хостинг — 6 000 ₽/год",
    ],
    solution: [
      "Новый лендинг: условия франшизы в первом экране — 0 ₽ взнос, 0% роялти, от 800 000 ₽",
      "Форма заявки — заявка приходит владельцу в Telegram и на почту",
      "Карта 11 магазинов, кейсы действующих партнёров",
      "Хостинг на Vercel — 0 ₽/год",
    ],
    features: [
      "Условия франшизы в первом экране",
      "Форма заявки — приходит в Telegram и на почту",
      "Карта 11 магазинов",
      "Кейсы действующих партнёров",
    ],
    integrations: ["Telegram Bot API", "Карты", "Формы заявок", "CMS для текстов"],
    results: [
      { value: "0 ₽/год", label: "хостинг на Vercel вместо 6 000 ₽ на Tilda", icon: "coins" },
      { value: "1 форма", label: "заявок вместо 0 — заявка приходит в Telegram и на почту", icon: "send" },
      { value: "100/100", label: "PageSpeed на десктопе (замер Lighthouse)", icon: "gauge" },
      { value: "0 ошибок", label: "в консоли вместо битых шрифтов и 13 скриптов движка", icon: "sparkles" },
      { value: "≈49 ч", label: "часов работы над проектом — от идеи до запуска", icon: "clock" },
    ],
    nextSteps:
      "Сайт перенесён с временного адреса на собственный домен diversebrand.ru и уже запущен для презентации франшизы. После полноценного запуска посчитаем первые заявки от партнёров и подключим аналитику по воронке.",
    stack: ["Next.js", "Карты", "Telegram Bot API", "Формы заявок"],
    compare: {
      before: { src: "/images/diverse-old.webp", label: "Старый сайт на Tilda" },
      after: { src: "/images/diverse-hero.webp", label: "Новый сайт" },
    },
    slides: [
      { src: "/images/diverse-hero.webp", label: "Главная" },
      { src: "/images/diverse-map.jpg", label: "Карта магазинов" },
      { src: "/images/diverse-cases.jpg", label: "Кейсы партнёров" },
    ],
  },
];