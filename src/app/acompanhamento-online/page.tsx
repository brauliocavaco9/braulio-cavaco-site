import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Acompanhamento Online",
  description:
    "Um plano adaptado a ti, não um plano genérico. Treino e alimentação com estratégia individual, acompanhados de perto.",
};

const STEPS = [
  {
    n: "01",
    title: "Contacto",
    text: "Envias-me uma mensagem no WhatsApp com o teu objectivo. Faço-te algumas perguntas para perceber a tua situação, experiência e disponibilidade.",
  },
  {
    n: "02",
    title: "Avaliação",
    text: "Analiso a tua situação actual e percebo se o acompanhamento faz sentido para o teu caso.",
  },
  {
    n: "03",
    title: "Planeamento",
    text: "É criada uma estratégia individual de treino e, se aplicável, alimentação.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    text: "A estratégia é acompanhada e ajustada ao longo do processo.",
  },
];

const INCLUDES = [
  {
    title: "Avaliação inicial",
    text: "Começa com uma conversa que permite perceber os teus objectivos, histórico de treino, disponibilidade, rotina alimentar e eventuais limitações.",
  },
  {
    title: "Plano individualizado",
    text: "Com base nessa informação, é estruturado um plano de treino totalmente individualizado e, no acompanhamento completo, também um plano nutricional ajustado ao teu objectivo — sempre pensado para a tua realidade.",
  },
  {
    title: "Ginásio ou casa",
    text: "O plano de treino é adaptado tanto para treino em ginásio como para treino em casa, de acordo com a tua disponibilidade e contexto.",
  },
  {
    title: "Tudo numa aplicação",
    text: "O treino e a alimentação ficam disponíveis na aplicação, onde consegues consultar os exercícios, registar cargas e acompanhar a tua progressão de forma simples e organizada.",
  },
  {
    title: "Revisão semanal",
    text: "É feita a revisão do plano, com os ajustes necessários com base no teu feedback e nos dados registados, garantindo que existe evolução ao longo do processo.",
  },
  {
    title: "Sempre disponível",
    text: "As dúvidas podem ser esclarecidas a qualquer momento através de mensagem na própria aplicação ou por WhatsApp, para que nunca fiques sem orientação.",
  },
];

const PLANS = [
  {
    name: "Treino + Nutrição",
    price: "240€",
    period: "3 meses",
    text: "Plano de treino individualizado e plano nutricional ajustado ao teu objectivo, com revisão semanal de ambos.",
    featured: true,
    message: "Olá! Quero começar o acompanhamento online — Treino + Nutrição (240€ / 3 meses).",
  },
  {
    name: "Apenas Treino",
    price: "150€",
    period: "3 meses",
    text: "Plano de treino individualizado, adaptado ao teu contexto, com revisão semanal e ajustes ao longo do processo.",
    featured: false,
    message: "Olá! Quero começar o acompanhamento online — Apenas Treino (150€ / 3 meses).",
  },
];

const GENERIC_MESSAGE = "Olá! Tenho interesse no acompanhamento online. Podemos falar?";

export default function AcompanhamentoOnlinePage() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <section className="pt-16 pb-20 md:pt-24 md:pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight text-ink">
            Um plano adaptado a ti. Não um plano genérico.
          </h1>
          <p className="mt-6 text-lg text-ink2">
            Acompanhamento individual de treino e alimentação, pensado para a tua rotina real —
            não para uma média estatística.
          </p>
          <div className="mt-10">
            <WhatsAppCTA message={GENERIC_MESSAGE} label="Falar comigo no WhatsApp" />
          </div>
        </div>
        <div className="relative aspect-[4/5] border border-hairline hidden md:block">
          <Image
            src="/placeholders/foto-acompanhamento-online.jpg"
            alt="Bráulio Cavaco a acompanhar um plano online"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-t border-hairline py-20 md:py-24">
        <h2 className="font-serif text-2xl md:text-3xl text-ink mb-4 max-w-md">
          O que está incluído
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-10 max-w-3xl">
          {INCLUDES.map((item) => (
            <div key={item.title} className="border-l border-hairline pl-4">
              <p className="text-ink mb-2">{item.title}</p>
              <p className="text-ink2 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline py-20 md:py-24">
        <h2 className="font-serif text-2xl md:text-3xl text-ink mb-4 max-w-md">
          Planos e valores
        </h2>
        <p className="text-ink2 max-w-xl mb-14">
          Duas formas de começar, consoante o que precisas agora.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`border p-8 flex flex-col ${
                plan.featured ? "border-gold" : "border-hairline"
              }`}
            >
              {plan.featured && (
                <span className="text-xs text-gold mb-4">Mais completo</span>
              )}
              <h3 className="font-serif text-xl text-ink mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-serif text-3xl text-ink">{plan.price}</span>
                <span className="text-sm text-muted">/ {plan.period}</span>
              </div>
              <p className="text-sm text-ink2 leading-relaxed flex-1">{plan.text}</p>
              <WhatsAppCTA
                message={plan.message}
                label="Quero este plano"
                variant={plan.featured ? "primary" : "secondary"}
                className="mt-8 w-full"
              />
            </div>
          ))}
        </div>
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
        <div className="mt-10 flex justify-center">
          <WhatsAppCTA message={GENERIC_MESSAGE} label="Falar comigo no WhatsApp" />
        </div>
      </section>
    </div>
  );
}
