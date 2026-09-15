import type { Metadata } from "next";
import PresentialRequestForm from "@/components/forms/PresentialRequestForm";

export const metadata: Metadata = {
  title: "Acompanhamento Presencial",
  description: "Treino presencial individual em Viseu, CityGym. Novas vagas sujeitas a disponibilidade.",
};

const POINTS = [
  "Treino individual, sem partilhar atenção com outros alunos",
  "Correcção de técnica de execução em tempo real",
  "Progressão planeada de carga e volume",
  "Planeamento adaptado à tua disponibilidade semanal",
  "Acompanhamento directo, sessão a sessão",
];

export default function AcompanhamentoPresencialPage() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <section className="pt-16 pb-16 md:pt-24 max-w-2xl">
        <h1 className="font-serif text-4xl md:text-5xl leading-tight text-ink">
          Treino presencial. Atenção total à tua evolução.
        </h1>
        <p className="mt-6 text-lg text-ink2">Viseu — CityGym</p>
        <p className="mt-2 text-sm text-gold">Novas vagas sujeitas a disponibilidade.</p>
      </section>

      <section className="border-t border-hairline py-16 md:py-20 grid md:grid-cols-2 gap-16">
        <ul className="flex flex-col gap-5">
          {POINTS.map((p) => (
            <li key={p} className="text-ink2 text-sm leading-relaxed border-l border-hairline pl-4">
              {p}
            </li>
          ))}
        </ul>

        <div>
          <h2 className="font-serif text-2xl text-ink mb-6">Pedir informações</h2>
          <PresentialRequestForm />
        </div>
      </section>
    </div>
  );
}
