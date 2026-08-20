import { Container } from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function CommissionBreakdown() {
  return (
    <section className="border-y border-line bg-panel-soft py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Расчёт"
          title="Посчитаем на вашем заказе"
          sub="Пример: товар за 2 000 ₽. Посмотрите, сколько забирает площадка и сколько останется вам на своём сайте."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <Reveal>
            <div className="flex items-center justify-center gap-3 rounded-full border-2 border-black bg-white px-6 py-3 shadow-[4px_4px_0_0_#d4af37]">
              <span className="text-sm font-bold text-muted">Товар за</span>
              <span className="text-2xl font-extrabold text-heading sm:text-3xl">2 000 ₽</span>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="h-full overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[8px_8px_0_0_#0a0a0a]">
                <div className="border-b-2 border-black bg-black px-5 py-4">
                  <h3 className="text-base font-extrabold text-white sm:text-lg">
                    Маркетплейс
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-white/60 sm:text-sm">
                    комиссия и удержания
                  </p>
                </div>
                <div className="px-5 py-6 sm:px-6">
                  <p className="text-sm font-medium text-muted">Забирает с заказа</p>
                  <p className="mt-1 text-3xl font-extrabold text-heading sm:text-4xl">−500 ₽</p>
                  <p className="mt-1 text-xs font-bold text-muted">25% от суммы заказа</p>
                  <div className="my-5 h-2.5 w-full overflow-hidden rounded-full bg-black/10">
                    <div className="h-full w-1/4 rounded-full bg-black" />
                  </div>
                  <p className="text-sm font-medium text-muted">Остаётся вам</p>
                  <p className="mt-1 text-3xl font-extrabold text-heading sm:text-4xl">1 500 ₽</p>
                  <p className="mt-1 text-xs font-bold text-muted">75% от суммы заказа</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[8px_8px_0_0_#d4af37]">
                <div className="border-b-2 border-black bg-accent px-5 py-4">
                  <h3 className="text-base font-extrabold text-accent-ink sm:text-lg">
                    Свой сайт
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-accent-ink/70 sm:text-sm">
                    только эквайринг
                  </p>
                </div>
                <div className="px-5 py-6 sm:px-6">
                  <p className="text-sm font-medium text-muted">Забирает с заказа</p>
                  <p className="mt-1 text-3xl font-extrabold text-heading sm:text-4xl">−50 ₽</p>
                  <p className="mt-1 text-xs font-bold text-muted">2,5% — комиссия банка</p>
                  <div className="my-5 h-2.5 w-full overflow-hidden rounded-full bg-black/10">
                    <div className="h-full w-[2.5%] rounded-full bg-accent" />
                  </div>
                  <p className="text-sm font-medium text-muted">Остаётся вам</p>
                  <p className="mt-1 text-3xl font-extrabold text-heading sm:text-4xl">1 950 ₽</p>
                  <p className="mt-1 text-xs font-bold text-muted">97,5% от суммы заказа</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-8">
            <div className="rounded-2xl border-2 border-black bg-accent px-6 py-6 text-center shadow-[5px_5px_0_0_#0a0a0a] sm:px-8">
              <p className="text-sm font-bold uppercase tracking-wider text-accent-ink/70">
                Разница с каждого заказа
              </p>
              <p className="mt-1 text-3xl font-extrabold text-accent-ink sm:text-4xl">
                +450 ₽ вам на своём сайте
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                <span className="mt-0.5 shrink-0 font-mono font-bold text-accent-ink">—</span>
                Пример: удержания маркетплейса 25% (комиссия и логистика), эквайринг 2,5%.
                Ваши цифры зависят от категории и схемы — посчитаем бесплатно.
              </li>
              <li className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                <span className="mt-0.5 shrink-0 font-mono font-bold text-accent-ink">—</span>
                На сайте к этой марже добавляются повторные продажи: клиенты остаются вашими.
              </li>
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}