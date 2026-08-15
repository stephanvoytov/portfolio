import { BtnLink } from "@/components/BtnLink";
import { Container } from "@/components/Container";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function CtaSection() {
  return (
    <section className="pb-20 pt-4">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-950/60 via-[#0b0e15] to-[#0b0e15] px-6 py-14 text-center sm:px-12">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(139,92,246,0.25), transparent 70%)",
              }}
            />
            <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Обсудим ваш проект?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
              Расскажу, как можно решить вашу задачу, и подготовлю смету. Обсуждение ни к чему не
              обязывает.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <BtnLink href={site.tg} external>
                Написать в Telegram
              </BtnLink>
              <BtnLink href="/contacts" variant="ghost">
                Форма заявки
              </BtnLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
