import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-24 md:pb-32">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center">
        <div>
          <p className="text-sm text-gold mb-6">Personal Trainer — Viseu &amp; Online</p>

          <h1 className="font-serif text-[2.4rem] leading-[1.1] md:text-6xl md:leading-[1.08] text-ink text-balance">
            Se o teu corpo não muda, há uma razão.
          </h1>

          <p className="mt-6 text-lg text-ink2 max-w-lg">
            Treino e alimentação com método, estratégia e acompanhamento individual.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <LinkButton href="/acompanhamento-online" variant="primary">
              Quero acompanhamento online
            </LinkButton>
            <LinkButton href="/livros" variant="secondary">
              Conhecer os livros
            </LinkButton>
          </div>
        </div>

        <div className="relative aspect-[4/5] max-w-sm mx-auto md:max-w-none border border-hairline">
          <Image
            src="/braulio-cavaco.jpg"
            alt="Bráulio Cavaco, Personal Trainer"
            fill
            sizes="(max-width: 768px) 60vw, 40vw"
            priority
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
