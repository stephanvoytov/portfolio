# Стефан — сайт-портфолио

Личный сайт-портфолио: разработка сайтов на Next.js, интеграции с Ozon и Wildberries, лендинги и миграция с маркетплейсов.

Стек: **Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Framer Motion**.

## Страницы

| Страница | URL | О чём |
|---|---|---|
| Главная | `/` | Услуги, кейсы, процесс работы |
| Кейсы | `/cases` | Все кейсы; отдельные страницы `/cases/[id]` |
| Дизайн | `/design` | Про подход к дизайну сайтов |
| Миграция | `/migrate` | Переход с маркетплейсов на свой сайт |
| Заявка в Telegram | `/api/telegram` | API-роут приёма заявок |

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # продакшен-сборка
npm run start    # запуск собранной версии
```

## Форма заявок → Telegram

Заявки с сайта отправляются в Telegram через API-роут `app/api/telegram/route.ts`.

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
  layout.tsx          — корневой layout: шрифты, мета, JSON-LD, Header/Footer
  page.tsx            — главная
  cases/              — список кейсов + страницы /cases/[id]
  design/             — страница про дизайн
  migrate/            — лендинг «Сайт вместо маркетплейса»
  api/telegram/       — отправка заявок в Telegram
  sitemap.ts, robots.ts
components/           — Header, Footer, Hero, CaseCard, MigrateBanner и др.
lib/                  — данные кейсов, услуг, SEO-хелпер
public/images/        — скриншоты проектов
legacy/               — старый статический сайт (архив)
```
