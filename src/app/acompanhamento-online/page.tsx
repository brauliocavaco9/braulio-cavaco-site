import type { Metadata } from "next";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Acompanhamento Online",
  description:
    "Um plano adaptado a ti, não um plano genérico. Treino e alimentação com estratégia individual, acompanhados de perto.",
};

const STEPS = [
  {
    n: "01",
    title: "Candidatura",
    text: "A pessoa preenche um formulário com informações sobre objectivos, experiência de treino, rotina e dificuldades.",
  },
  {
    n: "02",
    title: "Avaliação",
    text: "Analiso a situação actual e percebo se o acompanhamento faz sentido para aquela pessoa.",
  },
  {
    n: "03",
    title: "Planeamento",
    text: "É criada uma estratégia individual de treino e alimentação.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    text: "A estratégia é acompanhada e ajustada ao longo do processo.",
  },
];

const INCLUDES = [
  "Avaliação inicial completa da tua situação, rotina e objectivos",
  "Plano de treino individual, adaptado ao teu contexto e equipamento disponível",
  "Orientação alimentar prática, sem dietas genéricas",
  "Ajustes regulares consoante a tua evolução",
  "Comunicação directa para dúvidas ao longo do processo",
  "Monitorização contínua da tua evolução",
];

export default function AcompanhamentoOnlinePage() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <section className="pt-16 pb-20 md:pt-24 md:pb-24 max-w-2xl">
        <h1 className="font-serif text-4xl md:text-5xl leading-tight text-ink">
          Um plano adaptado a ti. Não um plano genérico.
        </h1>
        <p className="mt-6 text-lg text-ink2">
          Acompanhamento individual de treino e alimentação, pensado para a tua rotina real —
          não para uma média estatística.
        </p>
        <div className="mt-10">
          <LinkButton href="/acompanhamento-online/candidatura" variant="primary">
            Candidatar-me ao acompanhamento
          </LinkButton>
        </div>
      </section>

      <section className="border-t border-hairline py-20 md:py-24">
        <h2 className="font-serif text-2xl md:text-3xl text-ink mb-4 max-w-md">
          O que está incluído
        </h2>
        <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-3xl">
          {INCLUDES.map((item) => (
            <li key={item} className="text-ink2 text-sm leading-relaxed border-l border-hairline pl-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-hairline py-20 md:py-24">
        <h2 className="font-serif text-2xl md:text-3xl text-ink mb-14 max-w-md">
          Como funciona
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
      </section>

      <section className="border-t border-hairline py-20 md:py-28 text-center">
        <p className="font-serif italic text-xl text-ink2 max-w-xl mx-auto">
          Não acredito em soluções milagrosas. Acredito em perceber o problema, criar uma
          estratégia adequada e repetir o que funciona durante tempo suficiente.
        </p>
        <div className="mt-10">
          <LinkButton href="/acompanhamento-online/candidatura" variant="primary">
            Candidatar-me ao acompanhamento
          </LinkButton>
        </div>
      </section>
    </div>
  );
}
