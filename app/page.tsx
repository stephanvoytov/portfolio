import { BtnLink } from "@/components/BtnLink";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import SectionHeading from "@/components/SectionHeading";
import ServicesList from "@/components/ServicesList";
import CaseCard from "@/components/CaseCard";
import ProcessSteps from "@/components/ProcessSteps";
import CtaSection from "@/components/CtaSection";
import { cases } from "@/lib/cases";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Стефан — разработка сайтов на Next.js, интеграции с Ozon и Wildberries",
  description:
    "Кастомная разработка на Next.js: интернет-магазины, каталоги с синхронизацией Ozon и Wildberries, лендинги и миграция с маркетплейсов. Под ключ, от идеи до запуска и поддержки.",
  path: "/",
});
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Стефан — разработка сайтов на Next.js",
  url: site.siteUrl,
  inLanguage: "ru",
  description:
    "Интернет-магазины, каталоги с синхронизацией Ozon и Wildberries, лендинги под ключ.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* ===== Hero ===== */}
      <section className="hero-glow grid-bg relative overflow-hidden pb-16 pt-32 sm:pt-40">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Next.js · React · TypeScript
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-heading sm:text-6xl">
              Делаю сайты,
              <br />
              которые <em className="not-italic text-accent">продают</em>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Лендинги, интернет-магазины и каталоги с автоматической синхронизацией с Ozon и
              Wildberries — под ключ, от идеи до запуска и поддержки.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <BtnLink href={site.tg} external>
                Написать в Telegram
              </BtnLink>
              <BtnLink href="/portfolio" variant="ghost">
                Смотреть работы
              </BtnLink>
            </div>
          </Reveal>
          <div className="mt-14">
            <Stats />
          </div>
        </Container>
      </section>

      {/* ===== Услуги ===== */}
      <section className="py-20" id="services">
        <Container>
          <SectionHeading
            kicker="Услуги"
            title="Что я делаю"
            sub="Любой проект делаю с нуля — до полностью рабочего результата: больше клиентов, проще продажи, меньше рутины."
          />
          <div className="mt-10">
            <ServicesList />
          </div>
        </Container>
      </section>

      {/* ===== Работы ===== */}
      <section className="border-y border-line bg-panel-soft py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              kicker="Работы"
              title="Живые проекты"
              sub="За каждым кейсом — реальный бизнес и его задачи. Сайты работают, клиенты приходят."
            />
            <BtnLink href="/portfolio" variant="ghost" className="mb-1">
              Все работы →
            </BtnLink>
          </div>
          <div className="mt-10 space-y-10">
            {cases.map((c) => (
              <CaseCard key={c.id} item={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Процесс ===== */}
      <section className="py-20">
        <Container>
          <SectionHeading
            kicker="Как работаю"
            title="Простой процесс без сюрпризов"
            sub="Вы всегда знаете, что будет дальше — и что уже сделано."
          />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
