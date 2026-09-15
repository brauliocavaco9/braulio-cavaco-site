import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Mim",
  description: "Quem sou, como trabalho e porque valorizo método e consistência.",
};

export default function SobreMimPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid md:grid-cols-[320px_1fr] gap-14">
        <div className="relative aspect-[4/5] border border-hairline bg-panel">
          {/* Substituir por fotografia profissional real */}
          <Image
            src="/placeholders/foto-sobre-mim.svg"
            alt="Bráulio Cavaco"
            fill
            sizes="320px"
            className="object-cover"
          />
        </div>

        <div className="max-w-2xl">
          <h1 className="font-serif text-3xl md:text-4xl text-ink mb-8">Sobre mim</h1>

          <p className="font-serif italic text-xl text-ink2 mb-10 leading-relaxed">
            Não acredito em soluções milagrosas. Acredito em perceber o problema, criar uma
            estratégia adequada e repetir o que funciona durante tempo suficiente para obter
            resultados.
          </p>

          <section className="mb-10">
            <h2 className="text-sm text-gold mb-3">Experiência</h2>
            <p className="text-ink2 leading-relaxed">
              {/* Preencher com o percurso profissional real: anos de experiência,
                  número de clientes acompanhados, contextos de trabalho (online,
                  presencial, ginásio). */}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-sm text-gold mb-3">Formação e certificações</h2>
            <p className="text-ink2 leading-relaxed">
              {/* Preencher com certificações reais. */}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-sm text-gold mb-3">Forma de trabalhar</h2>
            <p className="text-ink2 leading-relaxed">
              O trabalho começa sempre por perceber a pessoa antes do plano: rotina, histórico,
              limitações e objectivos reais. A partir daí, constrói-se uma estratégia — não uma
              fórmula genérica — e ajusta-se com base no que os dados e a evolução mostram.
            </p>
          </section>

          <div className="flex gap-6 pt-6 border-t border-hairline">
            <a
              href="https://instagram.com/brauliocavaco_personaltrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink2 hover:text-gold"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
