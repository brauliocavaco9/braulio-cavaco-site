export type Testimonial = {
  name: string;
  context?: string; // ex: "Acompanhamento online, 4 meses"
  quote: string;
};

// Edita esta lista com os testemunhos reais dos teus alunos.
// Para adicionares um novo, copia um bloco e ajusta os campos.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ana Margarida Pereira",
    quote:
      "The BEST PT ever! Competence, honesty, motivation, knowledge, encouragement! Incredible - no words to describe it!",
  },
  {
    name: "Paula Matos Almeida",
    quote:
      "Profissionalismo, seriedade, versatilidade e muita energia positiva contagiante. Recomendo vivamente a quem pretende treinar e atingir objetivos, pois o Bráulio não deixa desistir nunca e é super inspirador.",
  },
  {
    name: "Nuno Alexandre",
    quote: "Grande profissional, atento, assertivo e objectivo.",
  },
  {
    name: "Patrícia Morais",
    context: "Acompanhamento online",
    quote: "Nunca pensei que um acompanhamento online fosse tão presencial. Se soubesse, já tinha começado mais cedo.",
  },
];
