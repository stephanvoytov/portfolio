import { Container } from "@/components/Container";
import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import CtaSection from "@/components/CtaSection";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Портфолио — проекты и кейсы",
  description:
    "Реальные проекты: интернет-магазин Moranti с синхронизацией Ozon и Wildberries, лендинг франшизы Diverse. Задача, решение, результат.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        kicker="Портфолио"
        title="Проекты, которые работают"
        sub="Живые сайты за реальным бизнесом: задача, решение и результат по каждому кейсу. Фильтруйте по типу проекта."
      />

      <section className="pb-20 pt-10">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
