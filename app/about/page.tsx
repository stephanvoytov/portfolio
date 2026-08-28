import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { pageMeta } from "@/lib/seo";
import { ModalCta } from "@/components/ModalCta";
import { BtnLink } from "@/components/BtnLink";
import Reveal from "@/components/Reveal";
import ThemeDark from "@/components/ThemeDark";

export const metadata: Metadata = pageMeta({
  title: "Обо мне — разработка сайтов на Next.js и WordPress",
  description:
    "Кто делает ваши сайты: VOYTOV STUDIO, Next.js и WordPress разработчик. Кастомные интернет-магазины, каталоги и интеграции с Ozon и Wildberries под ключ. Пишу код сам на Next.js и WordPress — без Tilda, Wix и конструкторов, остаюсь на связи после запуска.",
  path: "/about",
});

const doList = [
  "Интернет-магазины на Next.js или WordPress: корзина, оплата ЮKassa и СБП, доставка СДЭК и Почта России",
  "Каталоги и витрины бренда с синхронизацией остатков и цен с Ozon и Wildberries по API",
  "Лендинги и корпоративные сайты — от структуры и дизайна до запуска",
    "Второй канал продаж: синхронизация карточек с маркетплейсов, API-интеграции, воронка перевода части клиентов — QR, сбор базы, реклама",
  "Яндекс.Директ и ретаргетинг — трафик на сайт помимо маркетплейса",
];

const dontList = [
  {
    t: "Ссылочная масса и таргет в соцсетях.",
    d: "Отдельные задачи — их ведут специалисты по продвижению. Яндекс.Директ и ретаргетинг настраиваю сам.",
  },
  {
    t: "Гарантии позиций в поиске.",
    d: "Их не даёт никто: SEO-настройку делаю, но продвижение в выдаче — это отдельная работа.",
  },
];

const principles = [
  "Код пишу сам — и на Next.js, и на WordPress (своя тема, не Elementor). Никаких Tilda и Wix: получаете чистый и быстрый сайт, а не шаблон.",
  "Работаю напрямую: вы общаетесь с разработчиком, а не с менеджером агентства и не платите за посредников.",
  "Цену называю до начала работы — и не повышаю по ходу.",
  "После запуска не пропадаю: покажу, как работать с сайтом, и правлю первый месяц бесплатно.",
];

export default function AboutPage() {
  return (
    <>
      <ThemeDark />
      <section className="pt-28 pb-20 sm:pt-36">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border-2 border-line bg-panel shadow-brutal-lg">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/photo-hero.webp"
                    alt="Стефан — разработчик сайтов на Next.js и WordPress"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  Обо мне
                </p>
                <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-5xl">
                  Стефан — разработчик сайтов на Next.js и WordPress
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                  Делаю сайты для бизнеса под ключ: интернет-магазины, каталоги, лендинги.
                  Специализируюсь на добавлении собственного канала продаж рядом с
                  маркетплейсами — с интеграциями Ozon и Wildberries.
                  Работаю один, напрямую с вами. Код пишу сам — и на Next.js, и на WordPress,
                  без Tilda и Wix. После запуска не пропадаю: правки и поддержка входят в работу.
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="mt-8 rounded-2xl border-2 border-accent bg-panel p-5 shadow-brutal-accent-md sm:p-6">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    Как я работаю
                  </p>
                  <div className="mt-5 grid grid-cols-3 gap-3 border-b border-line pb-5 text-center">
                    <div>
                      <p className="text-2xl font-extrabold text-accent sm:text-3xl">5+</p>
                      <p className="mt-1 text-[11px] leading-snug text-muted">лет в веб-разработке</p>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-accent sm:text-3xl">десятки</p>
                      <p className="mt-1 text-[11px] leading-snug text-muted">запущенных проектов</p>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-accent sm:text-3xl">1</p>
                      <p className="mt-1 text-[11px] leading-snug text-muted">человек — вы и разработчик напрямую</p>
                    </div>
                  </div>
                  <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-body sm:text-base">
                    {principles.map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-[11px] font-extrabold text-accent-ink">
                          ✓
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="mt-10 text-xl font-extrabold tracking-tight text-heading">
                  Что я делаю
                </h2>
                <ul className="mt-4 grid gap-3">
                  {doList.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-[15px] leading-relaxed text-body">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-[11px] font-extrabold text-accent-ink">
                        ✓
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 rounded-2xl border border-line bg-panel p-5 shadow-sm sm:p-6">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted">
                    Чего я не делаю
                  </p>
                  <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    {dontList.map((i) => (
                      <li key={i.t} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line bg-panel font-mono text-xs font-extrabold text-heading">
                          ✕
                        </span>
                        <span>
                          <span className="font-semibold text-heading">{i.t}</span> {i.d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ModalCta variant="yellow" subject="Вопрос с /about — обсудить проект">
                  Обсудить проект
                </ModalCta>
                <BtnLink href="/migrate" variant="ghost">
                  Второй канал продаж →
                </BtnLink>
              </div>

              <p className="mt-8 text-sm">
                <Link href="/cases" className="font-semibold text-accent hover:underline">
                  Посмотреть кейсы →
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
