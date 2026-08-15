import { BtnLink } from "@/components/BtnLink";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Миграция с маркетплейсов на свой сайт без потери продаж",
  description:
    "Постепенный переход с Ozon и Wildberries на собственный сайт: комиссии ниже, клиенты ваши, продажи не обрываются. Пошаговый план из 5 шагов.",
  path: "/migrate",
});

const problems = [
  {
    title: "Высокие комиссии",
    desc: "Маркетплейсы забирают заметную долю с каждой продажи — и доля растёт с ужесточением условий.",
  },
  {
    title: "Зависимость от правил",
    desc: "Витрина, рейтинг и видимость управляются алгоритмами площадки — не вами.",
  },
  {
    title: "Нет своих клиентов",
    desc: "Покупатель приходит на маркетплейс, а не к вам. Базу контактов вы не получаете.",
  },
  {
    title: "Конкуренция на полке",
    desc: "Ваш товар стоит рядом с дешёвыми аналогами — борьба за клик идёт ценой.",
  },
];

const checklist = [
  {
    num: "01",
    title: "Аудит ассортимента и цен",
    desc: "Считаем маржу по товарам, определяем, что выгодно продавать на сайте, а что оставить на маркетплейсах.",
  },
  {
    num: "02",
    title: "Сайт с синхронизацией",
    desc: "Запускаем каталог с автоматической синхронизацией: цены и остатки обновляются сами — двойной работы нет.",
  },
  {
    num: "03",
    title: "Собираем аудиторию",
    desc: "QR-коды в упаковке, вкладыши, соцсети, накопительные скидки — переводим покупателей на свой сайт.",
  },
  {
    num: "04",
    title: "Реклама и SEO",
    desc: "Настраиваем рекламу и поисковое продвижение на запросы, за которыми раньше платили маркетплейсу.",
  },
  {
    num: "05",
    title: "Плавное снижение доли площадок",
    desc: "По мере роста продаж на сайте снижаем зависимость от маркетплейсов — без резких обрывов выручки.",
  },
];

const why = [
  {
    title: "Клиенты — ваши",
    desc: "Контакты и повторные покупки остаются у вас: письма, боты, накопительные программы.",
  },
  {
    title: "Комиссия — только за приём платежей",
    desc: "Вместо комиссии маркетплейса — небольшая плата за эквайринг. Остальное остаётся вам.",
  },
  {
    title: "Постепенно, без обрывов",
    desc: "Никаких резких решений: маркетплейсы продолжают работать, пока сайт набирает обороты.",
  },
];

export default function MigratePage() {
  return (
    <>
      <PageHero
        kicker="Миграция с маркетплейсов"
        title={
          <>
            Уходим с Ozon и Wildberries
            <br />
            на свой сайт — без потери продаж
          </>
        }
        sub="Маркетплейсы удобны, но дороги и непредсказуемы. Поэтапный переход на собственный сайт возвращает вам клиентов, маржу и независимость — с минимальными рисками."
      >
        <BtnLink href={site.tg} external>
          Обсудить переход
        </BtnLink>
        <BtnLink href="/catalog" variant="ghost">
          Как работает синхронизация
        </BtnLink>
      </PageHero>

      {/* Проблема */}
      <section className="py-20">
        <Container>
          <SectionHeading kicker="Проблема" title="Почему бизнес уходит с маркетплейсов" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-panel p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-heading">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Чек-лист */}
      <section className="border-y border-line bg-panel-soft py-20">
        <Container>
          <SectionHeading
            kicker="План из 5 шагов"
            title="Как проходит переход"
            sub="Никаких резких движений: каждый шаг понятен, измерим и не ломает текущие продажи."
          />
          <ol className="mt-10 space-y-4">
            {checklist.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.05}>
                <li className="flex flex-col gap-3 rounded-2xl border border-line bg-panel p-6 shadow-sm sm:flex-row sm:items-start sm:gap-6">
                  <span className="font-mono text-sm text-accent">{s.num}</span>
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

      {/* Почему это выгодно */}
      <section className="py-20">
        <Container>
          <SectionHeading kicker="Результат" title="Что вы получаете" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-panel p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-heading">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 sm:p-8">
              <p className="text-base leading-relaxed text-zinc-700 sm:text-lg">
                Начните с аудита: посмотрим ваш ассортимент, посчитаем маржу и предложим схему
                перехода под ваш случай — без обязательств.
              </p>
              <div className="mt-5">
                <BtnLink href={site.tg} external>
                  Получить аудит бесплатно
                </BtnLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
