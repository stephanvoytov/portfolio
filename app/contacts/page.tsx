import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Контакты — напишите мне",
  description:
    "Связаться со Стефаном: Telegram @ngriia, Max. Форма заявки — отвечу в течение дня. Обсуждение проекта ни к чему не обязывает.",
  path: "/contacts",
});

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Контакты",
  url: `${site.siteUrl}/contacts`,
  inLanguage: "ru",
  mainEntity: {
    "@type": "Person",
    name: "Стефан",
    url: site.siteUrl,
    sameAs: [site.tg, site.max],
  },
};

export default function ContactsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <PageHero
        kicker="Контакты"
        title="Обсудим ваш проект?"
        sub="Расскажу, как можно решить вашу задачу, и подготовлю смету. Обсуждение ни к чему не обязывает — отвечаю в течение дня."
      />

      <section className="pb-20 pt-10">
        <Container className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-line bg-panel p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold text-heading">Форма заявки</h2>
              <p className="mt-2 text-sm text-muted">
                Заявка приходит мне в Telegram — отвечу в ближайшее время.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <Reveal delay={0.05}>
              <a
                href={site.tg}
                target="_blank"
                rel="noopener"
                className="group block rounded-3xl border border-line bg-panel p-6 shadow-sm transition-colors hover:bg-panel-soft"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Быстрее всего</p>
                <p className="mt-3 text-lg font-semibold text-heading group-hover:text-accent">
                  Telegram
                </p>
                <p className="mt-1 text-sm text-muted">{site.tgHandle}</p>
                <p className="mt-3 text-sm text-accent">Написать →</p>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href={site.max}
                target="_blank"
                rel="noopener"
                className="group block rounded-3xl border border-line bg-panel p-6 shadow-sm transition-colors hover:bg-panel-soft"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Мессенджер</p>
                <p className="mt-3 text-lg font-semibold text-heading group-hover:text-accent">Max</p>
                <p className="mt-1 text-sm text-muted">написать в Max</p>
                <p className="mt-3 text-sm text-accent">Открыть →</p>
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-line bg-panel p-6 shadow-sm">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">О проекте</p>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  Чем больше деталей — тем точнее смета: тип сайта, количество товаров, нужны ли
                  интеграции с маркетплейсами и учётными системами.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
