import Link from "next/link";

const BLOCKS = [
  {
    title: "Acompanhamento Online",
    text: "Acompanhamento individual para quem quer treinar com estratégia, melhorar a alimentação e construir resultados sustentáveis.",
    href: "/acompanhamento-online",
    cta: "Saber mais",
  },
  {
    title: "Acompanhamento Presencial",
    text: "Treino presencial individual para quem procura acompanhamento directo e personalizado.",
    href: "/acompanhamento-presencial",
    cta: "Saber mais",
  },
  {
    title: "Livros Digitais",
    text: "Guias práticos para compreender melhor treino, alimentação e composição corporal.",
    href: "/livros",
    cta: "Ver livros",
  },
];

export default function HowICanHelp() {
  return (
    <section className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h2 className="font-serif text-2xl md:text-3xl text-ink mb-14 max-w-md">
          Como posso ajudar
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {BLOCKS.map((b) => (
            <div key={b.title} className="bg-base p-8 flex flex-col">
              <h3 className="font-serif text-xl text-ink mb-4">{b.title}</h3>
              <p className="text-ink2 text-sm leading-relaxed flex-1">{b.text}</p>
              <Link
                href={b.href}
                className="mt-8 text-sm text-gold hover:underline underline-offset-4 w-fit"
              >
                {b.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
