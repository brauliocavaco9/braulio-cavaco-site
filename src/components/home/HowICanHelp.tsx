import Image from "next/image";
import Link from "next/link";

const BLOCKS = [
  {
    title: "Acompanhamento Online",
    text: "Acompanhamento individual para quem quer treinar com estratégia, melhorar a alimentação e construir resultados sustentáveis.",
    href: "/acompanhamento-online",
    cta: "Saber mais",
    image: "/placeholders/foto-acompanhamento-online.jpg",
    focus: "object-center",
  },
  {
    title: "Acompanhamento Presencial",
    text: "Treino presencial individual para quem procura acompanhamento directo e personalizado.",
    href: "/acompanhamento-presencial",
    cta: "Saber mais",
    image: "/placeholders/foto-acompanhamento-presencial.jpg",
    focus: "object-top",
  },
  {
    title: "Livros Digitais",
    text: "Guias práticos para compreender melhor alimentação e composição corporal.",
    href: "/livros",
    cta: "Ver livros",
    image: "/placeholders/capa-pack-completo.jpg",
    focus: "object-top",
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
            <Link
              key={b.title}
              href={b.href}
              className="group bg-base flex flex-col hover:bg-panel transition-colors"
            >
              <div className="relative aspect-[4/5] bg-panel">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover ${b.focus}`}
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-xl text-ink mb-4">{b.title}</h3>
                <p className="text-ink2 text-sm leading-relaxed flex-1">{b.text}</p>
                <span className="mt-8 text-sm text-gold group-hover:underline underline-offset-4 w-fit">
                  {b.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
