import { BtnLink } from "@/components/BtnLink";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CaseCard from "@/components/CaseCard";
import CtaSection from "@/components/CtaSection";
import { cases } from "@/lib/cases";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Интернет-магазин под ключ на Next.js",
  description:
    "Интернет-магазин под ключ: каталог, корзина, оплата (ЮKassa, СБП, Stripe), личный кабинет, интеграции с 1С, CRM и синхронизация с Ozon и Wildberries.",
  path: "/ecommerce",
});

const moranti = cases.find((c) => c.id === "moranti")!;

const modules = [
  {
    title: "Каталог и фильтры",
    desc: "Удобная навигация по товарам, фильтры по категориям, характеристикам и цене.",
  },
  {
    title: "Корзина и оформление",
    desc: "Быстрое оформление заказа без лишних полей. Гостевая покупка — не заставляем регистрироваться.",
  },
  {
    title: "Оплата",
    desc: "ЮKassa, СБП, карты, Stripe для международных продаж. Платёжная страница — под ваш бренд.",
  },
  {
    title: "Личный кабинет",
    desc: "История заказов, статусы доставки, повторные покупки в один клик.",
  },
  {
    title: "Уведомления",
    desc: "Заказ приходит вам в Telegram и на почту. Клиент получает подтверждение и статусы.",
  },
  {
    title: "Админка",
    desc: "Управление заказами и товарами без программиста: статусы, остатки, цены.",
  },
];

const integrations = [
  {
    title: "1С и CRM",
    desc: "Заказы и остатки синхронизируются с вашей учётной системой — двойной ввод исключён.",
  },
  {
    title: "Ozon и Wildberries",
    desc: "Единая витрина: сайт и маркетплейсы работают на одних ценах, остатках и карточках.",
  },
  {
    title: "Рассылки и боты",
    desc: "Email-рассылки и Telegram-боты для возврата клиентов и акций.",
  },
  {
    title: "Аналитика",
    desc: "Метрика, цели, отчёты по продажам — видно, откуда приходят заказы.",
  },
];

const security = [
  {
    title: "SSL и HTTPS",
    desc: "Сертификат шифрует все данные между клиентом и сайтом.",
  },
  {
    title: "Безопасная оплата",
    desc: "Платежи проходят через сертифицированные платёжные системы — карты мы не храним.",
  },
  {
    title: "Защита данных",
    desc: "Минимум собираемых данных, корректная обработка персональных данных клиентов.",
  },
];

export default function EcommercePage() {
  return (
    <>
      <PageHero
        kicker="Интернет-магазин"
        title={
          <>
            Интернет-магазин под ключ
            <br />
            на Next.js
          </>
        }
        sub="Каталог, корзина, оплата, личный кабинет и админка — собранный, настроенный и запущенный. От вас — товары и желание продавать."
      >
        <BtnLink href={site.tg} external>
          Обсудить магазин
        </BtnLink>
        <BtnLink href="/portfolio" variant="ghost">
          Смотреть кейс
        </BtnLink>
      </PageHero>

      {/* Модули */}
      <section className="py-20">
        <Container>
          <SectionHeading
            kicker="Что внутри"
            title="Модули магазина"
            sub="Собираем магазин из готовых модулей под вашу задачу — платите за нужное, а не за лишнее."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-line bg-panel p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-heading">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Интеграции */}
      <section className="border-y border-line bg-panel-soft py-20">
        <Container>
          <SectionHeading
            kicker="Интеграции"
            title="Магазин — часть вашей системы"
            sub="Сайт не «висит в воздухе»: он общается с учётом, маркетплейсами и каналами продаж."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {integrations.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-panel p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-heading">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Безопасность */}
      <section className="py-20">
        <Container>
          <SectionHeading kicker="Безопасность" title="Данные под защитой" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {security.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-panel p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-heading">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Кейс */}
      <section className="border-t border-line py-20">
        <Container>
          <SectionHeading
            kicker="Кейс"
            title="Moranti — бренд женских сумок"
            sub="Полноценный магазин с каталогом, корзиной, оплатой и автоматической синхронизацией с Ozon и Wildberries."
          />
          <div className="mt-10">
            <CaseCard item={moranti} detailed />
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
