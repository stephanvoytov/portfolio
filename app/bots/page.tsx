import { BtnLink } from "@/components/BtnLink";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Боты для Telegram, VK и Max — заявки, запись, уведомления",
  description:
    "Бот под ваш бизнес: принимает заявки, записывает клиентов, напоминает о визитах, рассылает уведомления и акции. Запуск около недели, поддержка после.",
  path: "/bots",
});

const included = [
  {
    title: "Заявки в один клик",
    desc: "Клиент нажимает кнопку в чате — заявка приходит вам в Telegram, почту или CRM. Ничего не теряется.",
  },
  {
    title: "Запись и напоминания",
    desc: "Клиент выбирает дату и время сам, бот напоминает о визите заранее — меньше неявок.",
  },
  {
    title: "Уведомления о заказах",
    desc: "Новый заказ, смена статуса, отгрузка — клиент и вы видите всё сразу, в привычном мессенджере.",
  },
  {
    title: "Рассылки и сегменты",
    desc: "Акции и новости уходят тем, кому интересно: по покупкам, интересам, активности.",
  },
  {
    title: "Интеграции с сайтом и CRM",
    desc: "Бот работает вместе с вашим сайтом и учётной системой: данные в одном месте, без двойного ввода.",
  },
  {
    title: "Поддержка после запуска",
    desc: "Остаюсь на связи: поправки, новые сценарии и доработки — по запросу, быстро.",
  },
];

const steps = [
  {
    num: "01",
    title: "Сценарий",
    desc: "Собираем логику: что бот делает на первом сообщении, какие кнопки и вопросы, куда отправляет данные.",
  },
  {
    num: "02",
    title: "Сборка",
    desc: "Пишу бота: команды, кнопки, формы, напоминания, интеграции. Показываю промежуточные версии.",
  },
  {
    num: "03",
    title: "Тест",
    desc: "Прогоняем все сценарии вместе: клиент, заявка, напоминание, рассылка. Правим, пока всё не гладко.",
  },
  {
    num: "04",
    title: "Запуск и поддержка",
    desc: "Запускаем, учу пользоваться, передаю доступы. Дальше — доработки по мере роста задач.",
  },
];

const scenario = [
  {
    title: "Клиент нажимает «Записаться»",
    desc: "В меню бота кнопка «Записаться» — клиент выбирает услугу из списка.",
  },
  {
    title: "Выбирает время",
    desc: "Бот показывает свободные слоты — клиент выбирает удобное. Свободный слот сразу бронируется.",
  },
  {
    title: "Заявка у вас",
    desc: "Вам приходит сообщение: услуга, дата, время, контакт клиента. Вы подтверждаете в один клик.",
  },
  {
    title: "Напоминание",
    desc: "За день до визита бот пишет клиенту напоминание — неявок меньше, записи плотнее.",
  },
];

const audience = [
  {
    title: "Сервис и запись",
    desc: "Красота, медицина, ремонт: клиент записывается сам, бот напоминает — администратору меньше рутины.",
  },
  {
    title: "Магазины и доставка",
    desc: "Заявки, статусы заказов и уведомления в чате: клиент всегда знает, где его заказ.",
  },
  {
    title: "Онлайн-проекты",
    desc: "Доступ к материалам, напоминания о вебинарах, ответы на частые вопросы — без поддержки вручную.",
  },
];

const faqItems = [
  {
    q: "Сколько стоит бот?",
    a: "Зависит от сценариев: чем больше команд и интеграций, тем больше работы. До старта фиксирую стоимость и срок — дальше они не меняются. Напишите в Telegram, пришлю расчёт под ваш сценарий.",
  },
  {
    q: "Бот будет работать без программиста?",
    a: "Да. Меню, кнопки и тексты настраиваются так, что их может менять любой сотрудник. Сложные сценарии дорабатываю я по запросу.",
  },
  {
    q: "В каких мессенджерах работает?",
    a: "Telegram, VK и Max. Можно запустить в одном или сразу в нескольких — клиент пишет туда, где ему удобнее.",
  },
  {
    q: "Что нужно от меня?",
    a: "Описание вашего сценария: что клиент должен получить и куда должны уходить данные. Остальное — тексты кнопок, логику, оформление — делаю я.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function BotsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        kicker="Боты"
        title={
          <>
            Бот, который работает
            <br />
            за вас 24/7
          </>
        }
        sub="Заявки, запись, напоминания и рассылки — в Telegram, VK и Max. Клиент получает ответ сразу, а вы — меньше рутины."
      >
        <BtnLink href={site.tg} external>
          Обсудить бота
        </BtnLink>
        <BtnLink href="/portfolio" variant="ghost">
          Примеры работ
        </BtnLink>
      </PageHero>

      {/* Что входит */}
      <section className="py-20">
        <Container>
          <SectionHeading
            kicker="Что входит"
            title="Всё нужное для автоматизации"
            sub="Бот закрывает повторяющиеся задачи: приём заявок, запись, ответы и напоминания — без участия сотрудника."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-panel p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-heading">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Как это работает */}
      <section className="border-y border-line bg-panel-soft py-20">
        <Container>
          <SectionHeading
            kicker="Как это работает"
            title="От идеи до запуска"
            sub="Четыре шага — и бот принимает первых клиентов."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.07}>
                <div className="relative h-full rounded-2xl border border-line bg-panel p-6 shadow-sm">
                  <span className="font-mono text-sm text-accent">{s.num}</span>
                  <h3 className="mt-3 text-base font-semibold text-heading">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Пример сценария */}
      <section className="py-20">
        <Container>
          <SectionHeading
            kicker="Пример сценария"
            title="Запись клиента — без звонков"
            sub="Так выглядит простой сценарий записи: клиент сам выбирает время, вы только подтверждаете."
          />
          <ol className="mt-10 space-y-4">
            {scenario.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <li className="flex flex-col gap-3 rounded-2xl border border-line bg-panel p-6 shadow-sm sm:flex-row sm:items-start sm:gap-6">
                  <span className="font-mono text-sm text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-heading">{s.title}</h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">{s.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Кому подходит */}
      <section className="border-t border-line py-20">
        <Container>
          <SectionHeading kicker="Кому подходит" title="Где бот окупается быстрее всего" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {audience.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-panel p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-heading">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line py-20">
        <Container>
          <SectionHeading kicker="FAQ" title="Частые вопросы" />
          <div className="mt-10 max-w-3xl">
            <Faq items={faqItems} />
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
