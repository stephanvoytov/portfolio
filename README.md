# Стефан — сайт-портфолио

Личный сайт-портфолио: разработка сайтов на Next.js, интеграции с Ozon и Wildberries, лендинги и миграция с маркетплейсов.

Стек: **Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Framer Motion**.

## Страницы

| Страница | URL | О чём |
|---|---|---|
| Главная | `/` | Услуги, кейсы, процесс работы |
| Лендинги | `/landing` | Продающие лендинги, кейс франшизы Diverse |
| Каталог | `/catalog` | Каталог с синхронизацией Ozon/WB, кейс Moranti |
| Интернет-магазин | `/ecommerce` | Магазин под ключ: корзина, оплата, кабинет |
| Миграция | `/migrate` | Переход с маркетплейсов на свой сайт |
| Портфолио | `/portfolio` | Все кейсы с фильтром по типу |
| Контакты | `/contacts` | Форма заявки → Telegram |

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # продакшен-сборка
npm run start    # запуск собранной версии
```

## Форма заявок → Telegram

Форма на странице `/contacts` отправляет заявку в Telegram через API-роут `app/api/contact/route.ts`.

Для работы формы задайте переменные окружения (на Vercel — в Project Settings → Environment Variables):

| Переменная | Описание |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Токен бота от [@BotFather](https://t.me/BotFather) |
| `TELEGRAM_CHAT_ID` | Ваш chat_id (например, у [@userinfobot](https://t.me/userinfobot)) |
| `NEXT_PUBLIC_SITE_URL` | Домен продакшена, используется в sitemap и Open Graph |

Без токена форма не падает: заявка «принимается», но в Telegram не доставляется (в логах будет предупреждение).

## Деплой на Vercel

1. Залейте репозиторий на GitHub и импортируйте его в [Vercel](https://vercel.com/new).
2. Добавьте переменные окружения из таблицы выше.
3. Домен (если есть) привяжите в Project Settings → Domains.

## Структура

```
app/
  layout.tsx          — корневой layout: шрифты, мета, JSON-LD (Person), Header/Footer
  page.tsx            — главная
  landing|.../        — страницы услуг
  portfolio/          — кейсы с фильтром
  contacts/           — форма + контакты
  api/contact/        — отправка заявки в Telegram
  sitemap.ts, robots.ts
components/           — Header, Footer, CaseSlider, ContactForm и др.
lib/                  — данные кейсов, услуг, SEO-хелпер
public/images/        — скриншоты проектов
legacy/               — старый статический сайт (архив)
```
