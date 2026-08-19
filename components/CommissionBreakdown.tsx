import { Container } from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const example = [
  { name: "Базовая комиссия (КВВ)", pct: "20%", rub: "400 ₽" },
  { name: "Логистика (магистраль + ПВЗ)", pct: "10%", rub: "200 ₽" },
  { name: "Эквайринг", pct: "2%", rub: "40 ₽" },
  { name: "Реклама (трафареты / продвижение)", pct: "12%", rub: "240 ₽" },
  { name: "Хранение и риск невыкупа", pct: "3%", rub: "60 ₽" },
];

export default function CommissionBreakdown() {
  return (
    <section className="border-y border-line bg-panel-soft py-24">
      <Container>
        <SectionHeading
          kicker="Сколько реально забирает площадка"
          title="35–55% от цены товара"
          sub="С каждой продажи: комиссия, логистика, реклама, эквайринг, хранение."
        />
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[8px_8px_0_0_#ffd900]">
            <div className="border-b-2 border-black bg-accent px-6 py-5 sm:px-8">
              <h3 className="text-lg font-extrabold text-accent-ink sm:text-xl">
                Товар за 2 000 ₽ по схеме FBO
              </h3>
              <p className="mt-1 text-sm font-medium text-accent-ink/70">
                Условная одежда или товар для дома
              </p>
            </div>
            <table className="w-full border-collapse text-left">
              <tbody>
                {example.map((r, i) => (
                  <tr key={r.name} className={i !== example.length - 1 ? "border-b border-line" : ""}>
                    <td className="px-6 py-3.5 text-sm font-medium text-body sm:px-8 sm:text-base">
                      {r.name}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono text-sm font-bold text-accent-ink sm:text-base">
                      {r.pct}
                    </td>
                    <td className="px-6 py-3.5 text-right font-mono text-sm font-bold text-heading sm:px-8 sm:text-base">
                      {r.rub}
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-black bg-accent">
                  <td className="px-6 py-4 text-base font-extrabold text-accent-ink sm:px-8">
                    ИТОГО удержит маркетплейс
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-base font-extrabold text-accent-ink">
                    47%
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-base font-extrabold text-accent-ink sm:px-8">
                    940 ₽
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal className="mt-8">
          <div className="rounded-2xl border-2 border-black bg-accent px-6 py-5 shadow-[5px_5px_0_0_#0a0a0a] sm:px-8">
            <p className="text-base font-bold text-accent-ink sm:text-lg">
              Почти половина каждой продажи уходит площадке. На своём сайте — ~2–3% за приём платежей.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}