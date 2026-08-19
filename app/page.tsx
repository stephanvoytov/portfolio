import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServicesList from "@/components/ServicesList";
import SiteCategories from "@/components/SiteCategories";
import CaseCard from "@/components/CaseCard";
import ProcessSteps from "@/components/ProcessSteps";
import CtaSection from "@/components/CtaSection";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import Image from "next/image";
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

      {/* ===== Работы ===== */}
      <section className="bg-black py-24 text-white" id="work">
        <Container>
          <Reveal>
            <p className="font-mono text-sm font-bold tracking-[0.35em] text-accent">01</p>
            <p className="mt-2 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Работы
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Живые проекты
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Реальные проекты, которые я разработал для бизнеса.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {cases.map((c) => (
              <CaseCard key={c.id} item={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Услуги ===== */}
      <section className="py-24" id="services">
        <Container>
          <SectionHeading
            num="02"
            kicker="Услуги"
            title="Что я делаю"
            sub="Три категории сайтов: от визитки до магазина с интеграциями. Сравните по составу, цене и сроку — и выберите свою."
          />
          <div className="mt-12">
            <SiteCategories />
          </div>
        </Container>
      </section>

      {/* ===== Дополнительные услуги ===== */}
      <section className="py-24">
        <Container>
          <SectionHeading
            num="03"
            kicker="Дополнительно"
            title="Услуги под задачу"
            sub="Не только сайты с нуля: доведу до ума существующий проект или решу узкую задачу."
          />
          <div className="mt-10">
            <ServicesList />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-faint">
                Что я не делаю
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-muted sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-black bg-white font-mono text-xs font-extrabold text-heading">
                    ✕
                  </span>
                  <span>
                    <span className="font-semibold text-heading">Реклама и ссылочная масса.</span>{" "}
                    Таргет, Директ и наращивание ссылок — отдельные задачи, их настраивают специалисты по продвижению.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-black bg-white font-mono text-xs font-extrabold text-heading">
                    ✕
                  </span>
                  <span>
                    <span className="font-semibold text-heading">Гарантии позиций в поиске.</span>{" "}
                    Их не даёт никто — SEO-настройку делаю, но продвижение в выдаче это отдельная работа.
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-faint">
                Что потребуется от вас
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-muted sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent font-mono text-xs font-extrabold text-accent-ink">
                    →
                  </span>
                  <span>
                    <span className="font-semibold text-heading">Тексты и фотографии — ваши.</span>{" "}
                    Свой текст и свои фото дают лучший результат — структуру и подачу доведу до ума.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent font-mono text-xs font-extrabold text-accent-ink">
                    →
                  </span>
                  <span>
                    <span className="font-semibold text-heading">Домен и хостинг — на вас.</span>{" "}
                    Зарегистрирую и настрою всё сам — оплату аренды берёте вы.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent font-mono text-xs font-extrabold text-accent-ink">
                    →
                  </span>
                  <span>
                    <span className="font-semibold text-heading">Юридические тексты.</span>{" "}
                    Оферту и политику подготовлю, но при сомнениях проверьте с юристом.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Как я работаю ===== */}
      <section className="py-24">
        <Container>
          <SectionHeading
            num="04"
            kicker="Подход"
            title="Не начинаю с дизайна. Начинаю с задачи."
            sub="Сначала разбираюсь, зачем бизнесу нужен сайт, и только потом проектирую решение."
          />
          <div className="mt-12 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-line bg-panel shadow-2xl shadow-black/10">
                <Image
                  src="/images/workspace-v2.jpg"
                  alt="Рабочий стол разработчика — стоковое фото"
                  width={1600}
                  height={1065}
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
            <div className="space-y-6">
              {[
                {
                  t: "Разбираю задачу",
                  d: "Вопросы о бизнесе и цели, а не «какой вам цвет». Понял, кого и к чему сайт должен вести, — предлагаю решение.",
                },
                {
                  t: "Делаю с нуля",
                  d: "Дизайн, структура, тексты, разработка — своими руками. Без конструкторов и шаблонов.",
                },
                {
                  t: "Запускаю и остаюсь рядом",
                  d: "Учу пользоваться сайтом, отвечаю на вопросы, делаю правки. После запуска — поддержка и развитие.",
                },
              ].map((s, i) => (
                <Reveal key={s.t} delay={i * 0.06}>
                  <div className="group flex gap-4">
                    <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-black bg-accent text-sm font-extrabold text-accent-ink shadow-[3px_3px_0_0_#0a0a0a] transition-transform duration-200 group-hover:-translate-y-0.5">
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
        </Container>
      </section>

      {/* ===== Процесс ===== */}
      <section className="py-24" id="process">
        <Container>
          <SectionHeading
            num="05"
            kicker="Как я работаю"
            title="Простой процесс без сюрпризов"
            sub="Вы всегда знаете, что будет дальше — и что уже сделано. Цена и срок фиксируются до старта и не меняются."
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      <ComparisonTable />

      <CtaSection />
    </>
  );
}