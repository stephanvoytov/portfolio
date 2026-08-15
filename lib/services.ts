export interface Service {
  num: string;
  title: string;
  desc: string;
  meta: string;
  href: string;
}

export const services: Service[] = [
  {
    num: "01",
    title: "Лендинг",
    desc: "Продающая страница для рекламы: заявки приходят сразу, без лишних кликов.",
    meta: "около недели",
    href: "/landing",
  },
  {
    num: "02",
    title: "Интернет-магазин",
    desc: "Каталог, корзина, оплата и кабинет управления. Под ключ, от дизайна до запуска.",
    meta: "около недели",
    href: "/ecommerce",
  },
  {
    num: "03",
    title: "Каталог с синхронизацией Ozon и Wildberries",
    desc: "Свой каталог на данных маркетплейсов: цены, остатки, характеристики и отзывы обновляются сами.",
    meta: "1–2 недели",
    href: "/catalog",
  },
  {
    num: "04",
    title: "Миграция с маркетплейсов",
    desc: "Постепенный переход с Ozon и Wildberries на свой сайт — без резких обрывов продаж.",
    meta: "по задаче",
    href: "/migrate",
  },
  {
    num: "05",
    title: "Боты",
    desc: "Боты для Telegram, VK и Max: заявки, запись, уведомления, рассылки.",
    meta: "около недели",
    href: "/contacts",
  },
  {
    num: "06",
    title: "Поддержка и доработка",
    desc: "Обновления, новые страницы, помощь — сайт продолжает работать и приносить клиентов.",
    meta: "по запросу",
    href: "/contacts",
  },
];
