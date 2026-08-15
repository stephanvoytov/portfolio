import { BtnLink } from "@/components/BtnLink";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Поддержка и доработка сайта — обновления, правки, новые страницы",
  description:
    "Сайт продолжает работать: обновления контента, новые страницы и блоки, правки и мониторинг. По запросу или по договору — вы не остаётесь один на один с сайтом.",
  path: "/support",
});

const included = [
  {
    title: "Обновление контента",
    desc: "Тексты, цены, фото, новости — меняется быстро и аккуратно, без «передайте разработчику».",
  },
  {
    title: "Новые страницы и блоки",
    desc: "Акция, новый товар, раздел блога или отдельная посадочная — добавляем по мере роста бизнеса.",
  },
  {
    title: "Правки и доработки",
    desc: "Изменения в логике, формах, интеграциях — сайт подстраивается под новые задачи.",
  },
  {
    title: "Техническое обслуживание",
    desc: "Обновления платформы, проверка скорости, резервные копии — сайт работает стабильно.",
  },
  {
    title: "Мониторинг",
    desc: "Слежу за доступностью и ошибками: если что-то сломалось, узнаю раньше клиентов.",
  },
  {
    title: "Консультации",
    desc: "Подскажу по рекламе, аналитике и SEO — куда двигаться дальше, чтобы продавать больше.",
  },
];

const formats = [
  {
    title: "По запросу",
    desc: "Пишете, когда что-то нужно: правка, страница, консультация. Работаю по факту — платите за конкретную задачу.",
  },
  {
    title: "По договору",
    desc: "Фиксированная сумма в месяц: гарантированный объём правок, приоритетная связь и мониторинг.",
  },
  {
    title: "Пакет часов",
    desc: "Покупаете блок часов на квартал — тратите их на любые задачи: от правок до новых функций.",
  },
];

const steps = [
  {
    num: "01",
    title: "Заявка",
    desc: "Пишете в Telegram, что нужно сделать: правку, страницу или разобраться с проблемой.",
  },
  {
    num: "02",
    title: "Оценка и срок",
    desc: "Отвечаю быстро: сколько стоит, когда будет готово. Если задача мелкая — делаю сразу.",
  },
  {
    num: "03",
    title: "Готово на проде",
    desc: "Вношу изменения, показываю результат и коротко объясняю, что и почему изменилось.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        kicker="Поддержка"
        title={
          <>
            Сайт работает —
            <br />
            я рядом
          </>
        }
        sub="Обновления, правки, новые страницы и техническое обслуживание. Вы не остаётесь один на один с сайтом после запуска."
      >
        <BtnLink href={site.tg} external>
          Обсудить поддержку
        </BtnLink>
        <BtnLink href="/portfolio" variant="ghost">
          Посмотреть работы
        </BtnLink>
      </PageHero>

      {/* Что входит */}
      <section className="py-20">
        <Container>
          <SectionHeading
            kicker="Что входит"
            title="Всё, чтобы сайт приносил пользу"
            sub="Сайт не заканчивается запуском: он растёт вместе с бизнесом."
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

      {/* Форматы */}
      <section className="border-y border-line bg-panel-soft py-20">
        <Container>
          <SectionHeading
            kicker="Форматы"
            title="Как можно работать"
            sub="Выбирайте удобный формат — или комбинируйте их."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {formats.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
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
      <section className="py-20">
        <Container>
          <SectionHeading
            kicker="Как это работает"
            title="Просто: написали — получили"
            sub="Никаких тикет-систем и ожиданий по неделе."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <CtaSection />
    </>
  );
}
