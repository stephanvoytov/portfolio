import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServicesList from "@/components/ServicesList";
import CaseCard from "@/components/CaseCard";
import ProcessSteps from "@/components/ProcessSteps";
import CtaSection from "@/components/CtaSection";
import BrowserFrame from "@/components/BrowserFrame";
import Quiz from "@/components/Quiz";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import { cases } from "@/lib/cases";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Стефан — разработка сайтов на Next.js",
  description:
    "Кастомная разработка на Next.js: интернет-магазины, каталоги, лендинги и корпоративные сайты под ключ. От идеи до запуска и поддержки.",
  path: "/",
});
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Стефан — разработка сайтов на Next.js",
  url: site.siteUrl,
  inLanguage: "ru",
  description: "Интернет-магазины, каталоги и лендинги под ключ на Next.js.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <Hero />

      {/* ===== Услуги ===== */}
      <section className="py-24" id="services">
        <Container>
          <SectionHeading
            kicker="Услуги"
            title="Что я делаю"
            sub="Любой проект делаю с нуля — до полностью рабочего результата: больше клиентов, проще продажи, меньше рутины."
          />
          <div className="mt-12">
            <ServicesList />
          </div>
        </Container>
      </section>

      {/* ===== Как я работаю ===== */}
      <section className="border-y border-line bg-panel-soft py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <BrowserFrame
                src="/images/diverse-hero.jpg"
                alt="Лендинг франшизы Diverse — главная страница"
                url="diversebrand.vercel.app"
              />
            </Reveal>
            <div>
              <Reveal>
                <SectionHeading
                  kicker="Подход"
                  title="Сайт, который решает задачу бизнеса"
                />
              </Reveal>
              <div className="mt-8 space-y-6">
                {[
                  {
                    t: "Разбираю задачу",
                    d: "Сначала — вопросы о бизнесе и цели сайта, а не «какой вам цвет». Понимаю, кого и к чему сайт должен вести, и уже потом предлагаю решение.",
                  },
                  {
                    t: "Делаю с нуля",
                    d: "Дизайн, структура, тексты, разработка — всё своими руками. Никаких конструкторов и шаблонов: сайт получается под вашу задачу, а не «как у всех».",
                  },
                  {
                    t: "Запускаю и остаюсь рядом",
                    d: "Учу пользоваться сайтом, отвечаю на вопросы, делаю правки. После запуска — поддержка и развитие, когда понадобится.",
                  },
                ].map((s, i) => (
                  <Reveal key={s.t} delay={i * 0.06}>
                    <div className="group flex gap-4">
                      <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-black bg-accent font-mono text-sm font-extrabold text-accent-ink shadow-[3px_3px_0_0_#0a0a0a] transition-transform duration-200 group-hover:-translate-y-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-heading">{s.t}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-base">{s.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ComparisonTable />

      {/* ===== Работы ===== */}
      <section className="bg-black py-24 text-white">
        <Container>
          <Reveal>
            <p className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Работы
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Живые проекты
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              За каждым кейсом — реальный бизнес и его задачи. Сайты работают, клиенты приходят.
            </p>
          </Reveal>
          <div className="mt-12 space-y-10">
            {cases.map((c) => (
              <CaseCard key={c.id} item={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Процесс ===== */}
      <section className="py-24">
        <Container>
          <SectionHeading
            kicker="Как работаю"
            title="Простой процесс без сюрпризов"
            sub="Вы всегда знаете, что будет дальше — и что уже сделано. Цена и срок фиксируются до старта и не меняются."
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      {/* ===== Квиз ===== */}
      <section className="bg-panel-soft py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <SectionHeading
                kicker="Стоимость"
                title="Узнайте цену за 2 минуты"
                sub="Четыре вопроса — и я сразу пойму вашу задачу. Без звонков и длинных брифингов: ответы пришлёте в Telegram, и я предложу решение под ваш случай."
              />
              <div className="mt-8 space-y-4">
                {[
                  "Ответы не обязывают к заказу",
                  "Смета — после короткого обсуждения",
                  "Срок и цена фиксируются до старта",
                ].map((t, i) => (
                  <Reveal key={t} delay={i * 0.06}>
                    <div className="flex items-center gap-3 text-sm font-semibold text-heading sm:text-base">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent font-mono text-xs font-extrabold text-accent-ink">
                        ✓
                      </span>
                      {t}
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Quiz />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}