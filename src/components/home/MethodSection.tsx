const STEPS = [
  {
    n: "01",
    title: "Perceber",
    text: "Identificar o ponto de partida, objectivos, rotina e principais dificuldades.",
  },
  {
    n: "02",
    title: "Planear",
    text: "Criar uma estratégia adaptada à realidade da pessoa.",
  },
  {
    n: "03",
    title: "Aplicar",
    text: "Executar o plano de forma consistente.",
  },
  {
    n: "04",
    title: "Ajustar",
    text: "Avaliar resultados e fazer alterações quando necessário.",
  },
];

export default function MethodSection() {
  return (
    <section className="border-t border-hairline bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h2 className="font-serif text-2xl md:text-3xl text-ink mb-14 max-w-md">
          O método
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {STEPS.map((s) => (
            <div key={s.n} className="border-l border-hairline pl-5">
              <span className="font-serif text-gold text-sm">{s.n}</span>
              <h3 className="font-serif text-lg text-ink mt-3 mb-2">{s.title}</h3>
              <p className="text-sm text-ink2 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <p className="font-serif italic text-xl text-ink2 mt-20 max-w-xl">
          Resultados não aparecem por acaso. Existe quase sempre um sistema por trás deles.
        </p>
      </div>
    </section>
  );
}
