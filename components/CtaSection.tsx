import { BtnLink } from "@/components/BtnLink";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function CtaSection({ hideMigrate = false }: { hideMigrate?: boolean }) {
  return (
    <section className="pb-24 pt-4">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border-2 border-black bg-white px-6 py-16 text-center shadow-[10px_10px_0_0_#ffd900] sm:px-12">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 90% at 50% 0%, rgba(255,217,0,0.28), transparent 70%)",
              }}
            />
            <p className="relative font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent-ink">
              Следующий шаг
            </p>
            <h2 className="relative mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-5xl">
              Обсудим ваш проект?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
              Расскажу, как можно решить вашу задачу, и подготовлю смету. Обсуждение ни к чему не
              обязывает.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-3">
              <BtnLink href={site.tg} external>
                Написать в Telegram
              </BtnLink>
              {!hideMigrate && (
                <BtnLink href="/migrate" variant="yellow">
                  Уход с маркетплейсов
                </BtnLink>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}