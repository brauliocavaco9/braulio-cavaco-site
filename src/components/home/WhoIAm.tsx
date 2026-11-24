import Link from "next/link";

export default function WhoIAm() {
  return (
    <section className="border-t border-hairline bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-sm text-gold mb-4">Quem sou</p>
          <p className="font-serif text-xl md:text-2xl text-ink leading-snug">
            Mestre em Educação Física e Mestre em Ciências do Desporto, com trabalho
            científico publicado na área do treino de força — mais de 10 anos como Personal
            Trainer.
          </p>
          <p className="mt-5 text-ink2 leading-relaxed">
            Uma parte importante do meu trabalho é acompanhar pessoas com limitações físicas
            ou dores que querem continuar ou começar a treinar, mas têm medo da dor ou das
            próprias limitações — a par de objectivos de ganho de massa muscular, perda de
            gordura e melhoria da composição corporal.
          </p>
          <Link
            href="/sobre-mim"
            className="inline-block mt-6 text-sm text-gold hover:underline underline-offset-4"
          >
            Conhecer a minha forma de trabalhar
          </Link>
        </div>
      </div>
    </section>
  );
}
