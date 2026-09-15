import type { Metadata } from "next";
import OnlineApplicationForm from "@/components/forms/OnlineApplicationForm";

export const metadata: Metadata = {
  title: "Candidatura — Acompanhamento Online",
};

export default function CandidaturaPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <h1 className="font-serif text-3xl md:text-4xl text-ink mb-3">Candidatura</h1>
      <p className="text-ink2 mb-12 max-w-xl">
        Preenche o formulário com atenção — quanto mais completa for a informação, melhor
        consigo perceber se o acompanhamento faz sentido para o teu caso.
      </p>
      <OnlineApplicationForm />
    </div>
  );
}
