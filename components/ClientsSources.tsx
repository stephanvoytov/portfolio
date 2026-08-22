import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const sources = [
  {
    num: "01",
    title: "QR-вкладыши в ваших же посылках",
    desc: "Каждый заказ с WB и Ozon уже содержит покупателя. Вкладываете открытку: «Гарантия и скидка на следующую покупку — на сайте». Клиент сканирует, оставляет контакт — попадает в вашу базу.",
    tag: "Работает с первого дня",
  },
  {
    num: "02",
    title: "Поиск по брендовым запросам",
    desc: "Покупатели гуглят ваш бренд по названию — и практически сразу сайт стоит на первом-втором месте выдачи. Это органический бесплатный трафик: люди ищут именно вас, без комиссии площадке.",
    tag: "Бесплатно, почти сразу",
  },
  {
    num: "03",
    title: "Цена ниже, чем на площадке",
    desc: "Без комиссии маркетплейса цена на сайте может быть ниже при большей марже. Это честный аргумент, который можно показывать прямо на сайте — площадке вы ничего не должны.",
    tag: "Ваша выгода — аргумент",
  },
  {
    num: "04",
    title: "Соцсети и Telegram-канал",
    desc: "Контент, новинки, закрытые акции — всё ведёт на сайт. Повторные продажи идут без комиссии: рассылка вместо платной рекламы внутри площадки.",
    tag: "Повторные продажи бесплатно",
  },
  {
    num: "05",
    title: "Яндекс.Директ",
    desc: "Реклама по товарным и категорийным запросам плюс ретаргетинг на тех, кто был на сайте, но не купил. Платный канал для масштабирования, когда базовая воронка уже работает.",
    tag: "Когда нужна скорость",
  },
];

export default function ClientsSources() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Главный вопрос"
          title="Откуда на сайте возьмутся клиенты"
          sub="Маркетплейс приводит покупателя один раз — и за деньги. Ваш сайт начинает работать от тех же заказов, которые у вас уже идут."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sources.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.06} className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}>
              <div className="group h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-black hover:shadow-[5px_5px_0_0_var(--accent)]">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-block rounded-full border-2 border-black bg-accent px-3 py-1 text-xs font-extrabold text-accent-ink">
                    {s.num}
                  </span>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-faint">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-heading">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
