export type CaseType = "landing" | "catalog" | "ecommerce";

export interface CaseSlide {
  src: string;
  label: string;
}

export interface Case {
  id: string;
  index: string;
  title: string;
  types: CaseType[];
  typeLabel: string;
  url: string;
  urlLabel: string;
  short: string;
  task: string;
  solution: string[];
  result: string[];
  stack: string[];
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
    title: "Moranti — бренд женских сумок",
    types: ["ecommerce", "catalog"],
    typeLabel: "Интернет-магазин · Синхронизация с Ozon и Wildberries",
    url: "https://morantibags.ru",
    urlLabel: "morantibags.ru ↗",
    short:
      "Интернет-магазин с каталогом, корзиной и оплатой. Всё синхронизируется с Ozon и Wildberries автоматически: картинки, характеристики, цены, остатки, отзывы.",
    task: "Бренд продавал на Ozon и Wildberries, но хотел свой сайт, который не требовал бы ручного ведения — владелец должен заниматься бизнесом, а не обновлением цен вручную.",
    solution: [
      "Каталог, корзина и оплата на сайте",
      "Автоматическая синхронизация с Ozon и Wildberries: картинки, характеристики, цены, остатки, отзывы",
      "Кабинет управления без ручной работы",
      "Дизайн — по стилю клиента",
    ],
    result: [
      "Сайт сам обновляет цены и остатки — владельцу не нужно ничего делать вручную",
      "Единая витрина: сайт и маркетплейсы работают на одних данных",
    ],
    stack: ["Next.js", "Ozon API", "Wildberries API", "Платёжная система", "Админка"],
    slides: [
      { src: "/images/moranti-home.jpg", label: "Главная" },
      { src: "/images/moranti-catalog.jpg", label: "Каталог" },
      { src: "/images/moranti-product.jpg", label: "Страница товара" },
    ],
  },
  {
    id: "diverse",
    index: "02",
    title: "Diverse — франшиза бренда одежды",
    types: ["landing"],
    typeLabel: "Лендинг",
    url: "https://diversebrand.vercel.app",
    urlLabel: "diversebrand.vercel.app ↗",
    short:
      "Сайт франшизы: будущие партнёры изучают условия, находят магазины рядом на карте и оставляют заявку — она сразу приходит владельцу в Telegram и на почту.",
    task: "Франшизе нужен был сайт, который продаёт партнёрство: знакомит с условиями, показывает сеть магазинов и собирает заявки без лишних кликов.",
    solution: [
      "Лендинг с презентацией условий франшизы",
      "Карта 11 магазинов с автоматическим определением города",
      "Форма заявки — заявка приходит в Telegram и на почту",
      "Кейсы действующих партнёров",
    ],
    result: [
      "Заявки от партнёров приходят напрямую владельцу — без посредников",
      "Потенциальные партнёры сразу видят масштаб сети на карте",
    ],
    stack: ["Next.js", "Карты", "Telegram Bot API", "Формы заявок"],
    slides: [
      { src: "/images/diverse-hero.jpg", label: "Главная" },
      { src: "/images/diverse-map.jpg", label: "Карта магазинов" },
      { src: "/images/diverse-cases.jpg", label: "Кейсы партнёров" },
    ],
  },
];
