import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Acompanhamento Presencial",
  description: "Treino presencial individual em Viseu, CityGym. Vagas e horários muito limitados.",
};

const POINTS = [
  "Treino individual, sem partilhar atenção com outros alunos",
  "Correcção de técnica de execução em tempo real",
  "Progressão planeada de carga e volume",
  "Planeamento adaptado à tua disponibilidade semanal",
  "Acompanhamento directo, sessão a sessão",
  "Número de horários disponíveis muito reduzido — quanto antes perguntares, maior a hipótese de encaixar na agenda",
];

const MESSAGE =
  "Olá! Gostaria de saber se há vaga disponível para treino presencial em Viseu (CityGym).";

export default function AcompanhamentoPresencialPage() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <section className="pt-16 pb-16 md:pt-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight text-ink">
            Treino presencial. Atenção total à tua evolução.
          </h1>
          <p className="mt-6 text-lg text-ink2">Viseu — CityGym</p>

          <div className="mt-6 inline-block border border-gold px-4 py-3">
            <p className="text-sm text-gold">Vagas e horários muito limitados</p>
            <p className="text-xs text-muted mt-1 max-w-xs">
              Por ser um acompanhamento verdadeiramente individual, sessão a sessão, aceito
              apenas um número reduzido de alunos presenciais e tenho poucos horários
              disponíveis por semana.
            </p>
          </div>

          <div className="mt-10">
            <WhatsAppCTA message={MESSAGE} label="Perguntar por vaga no WhatsApp" />
          </div>
        </div>
        <div className="relative aspect-[4/5] border border-hairline hidden md:block">
          <Image
            src="/placeholders/foto-acompanhamento-presencial.jpg"
            alt="Bráulio Cavaco a acompanhar um treino presencial"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-t border-hairline py-16 md:py-20">
        <ul className="flex flex-col gap-5 max-w-2xl">
          {POINTS.map((p) => (
            <li key={p} className="text-ink2 text-sm leading-relaxed border-l border-hairline pl-4">
              {p}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
