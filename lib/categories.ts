export interface SiteCategory {
  id: string;
  num: string;
  title: string;
  goal: string;
  desc: string;
  price: string;
  time: string;
}

export const categories: SiteCategory[] = [
  {
    id: "simple",
    num: "01",
    title: "Сайты-визитки и лендинги",
    goal: "Получать заявки",
    desc: "Уникальный дизайн, адаптив, формы заявок, аналитика.",
    price: "от 10 000 ₽",
    time: "от 5 дней",
  },
  {
    id: "corporate",
    num: "02",
    title: "Корпоративные сайты и каталоги",
    goal: "Представлять бизнес",
    desc: "Структура и админка, каталог товаров, формы и аналитика.",
    price: "от 15 000 ₽",
    time: "от 2 недель",
  },
  {
    id: "ecommerce",
    num: "03",
    title: "Интернет-магазины и сложные сервисы",
    goal: "Продавать онлайн",
    desc: "Каталог, корзина, оплата, кабинеты, синхронизация с Ozon/WB.",
    price: "от 30 000 ₽",
    time: "от 3 недель",
  },
];