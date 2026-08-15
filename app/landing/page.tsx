import { BtnLink } from "@/components/BtnLink";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CaseCard from "@/components/CaseCard";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import { cases } from "@/lib/cases";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Разработка продающих лендингов на Next.js",
  description:
    "Лендинги под ключ на Next.js: быстрый запуск за неделю, дизайн под ваш стиль, формы заявок в Telegram, SEO и аналитика. Пример — сайт франшизы Diverse.",
  path: "/landing",
});

const diverse = cases.find((c) => c.id === "diverse")!;

const included = [
  {
    title: "Запуск около недели",
    desc: "Чёткий срок и фиксированная цена до старта — без «а давайте ещё потерпим».",
  },
  {
    title: "Дизайн под ваш стиль",
    desc: "Не шаблон из каталога, а страница, которая выглядит как ваш бренд.",
  },
  {
    title: "Заявки сразу в Telegram",
    desc: "Форма или кнопка — каждое обращение приходит вам лично, без потерь и задержек.",
  },
  {
    title: "SEO и аналитика",
    desc: "Страница индексируется, метрика считает, откуда приходят клиенты.",
  },
  {
    title: "Адаптив под все устройства",
    desc: "Телефон, планшет, десктоп — всё одинаково аккуратно и быстро.",
  },
  {
    title: "Правки после запуска",
    desc: "Остаюсь на связи: небольшие правки и консультации после запуска — бесплатно.",
  },
];

const audience = [
  {
    title: "Франшизы",
    desc: "Продать партнёрство: условия, карта сети, заявки от будущих партнёров напрямую владельцу.",
  },
  {
    title: "Услуги и тренинги",
    desc: "Представить программу, собрать предоплаты и заявки на консультации без посредников.",
  },
  {
    title: "Товары и ниши",
    desc: "Быстрая продающая страница для рекламы — вместо посадочной на маркетплейсе.",
  },
];

const faqItems = [
  {
    q: "Сколько стоит лендинг?",
    a: "Цена зависит от задачи: количество блоков, интеграции, дизайн. До старта фиксирую стоимость и срок в смете — дальше они не меняются. Напишите в Telegram, пришлю расчёт под ваш проект.",
  },
  {
    q: "Сколько времени занимает запуск?",
    a: "Обычно около недели. Сложные интеграции или большой объём контента могут добавить несколько дней — это видно ещё на этапе сметы.",
  },
  {
    q: "Кто пишет тексты?",
    a: "Тексты можно взять ваши, или я помогу составить структуру и формулировки на основе ваших материалов. Изображения и видео обычно предоставляете вы, но могу помочь с подбором.",
  },
  {
    q: "Что после запуска?",
    a: "Учу пользоваться сайтом, передаю доступы. Небольшие правки и консультации после запуска — бесплатно. Дальше работаем по запросу: поддержка, новые блоки, рекламные страницы.",
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

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        kicker="Лендинги"
        title={
          <>
            Продающие лендинги
            <br />
            на Next.js — быстро и под ключ
          </>
        }
        sub="Запуск около недели, дизайн под ваш стиль, заявки приходят сразу в Telegram. Показываю промежуточные версии по ходу — правки вносим до финала, а не после."
      >
        <BtnLink href={site.tg} external>
          Обсудить лендинг
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
            title="Всё нужное для запуска"
            sub="Не просто красивая страница, а инструмент, который приводит заявки."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                  <h3 className="text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Кейс Diverse */}
      <section className="border-y border-white/5 bg-white/[0.015] py-20">
        <Container>
          <SectionHeading
            kicker="Кейс"
            title="Лендинг франшизы бренда одежды"
            sub="Будущие партнёры изучают условия, находят магазины на карте и оставляют заявку — она сразу приходит владельцу в Telegram и на почту."
          />
          <div className="mt-10">
            <CaseCard item={diverse} detailed />
          </div>
        </Container>
      </section>

      {/* Кому подходит */}
      <section className="py-20">
        <Container>
          <SectionHeading
            kicker="Кому подходит"
            title="Для кого такой лендинг"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {audience.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                  <h3 className="text-base font-semibold text-white">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 py-20">
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
