export type Product = {
  slug: string;
  kind: "individual" | "pack";
  title: string;
  shortDesc: string;
  description: string;
  audience: string;
  whatsInside: string;
  whatYouLearn: string;
  structure: { title: string; items: string[] }[];
  faq: { question: string; answer: string }[];
  priceCents: number;
  originalPriceCents?: number; // usado nos packs para mostrar a poupança
  currency: string;
  coverUrl: string;
  includesSlugs?: string[]; // para packs: slugs dos produtos individuais incluídos
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "guia-emagrecimento",
    kind: "individual",
    title: "Guia de Emagrecimento",
    shortDesc: "Protocolo de 12 semanas para perda de gordura sustentável.",
    description:
      "Um guia prático de 12 semanas para perder gordura sem dietas extremas — défice calórico bem calculado, alimentação social e treino que cabe na tua rotina real.",
    audience:
      "Pessoas iniciantes a intermédias que querem perder gordura de forma sustentável, sem restrições impossíveis de manter.",
    whatsInside:
      "Protocolo estruturado em 12 semanas, tabelas de acompanhamento, orientação para refeições sociais e glossário de termos.",
    whatYouLearn:
      "Como calcular o teu défice calórico, ajustar macros ao longo do processo e manter consistência quando a motivação falha.",
    structure: [
      { title: "Fundamentos", items: ["Défice calórico", "Macronutrientes", "Adesão a longo prazo"] },
      { title: "As 12 semanas", items: ["Semanas 1-4", "Semanas 5-8", "Semanas 9-12"] },
      { title: "Extras", items: ["Alimentação social", "Glossário"] },
    ],
    faq: [
      { question: "Preciso de ginásio?", answer: "Não — o guia é adaptável a treino em casa ou em ginásio." },
      { question: "Serve para quem nunca treinou?", answer: "Sim, foi pensado para iniciantes e intermédios." },
    ],
    priceCents: 2200,
    currency: "eur",
    coverUrl: "/placeholders/capa-emagrecimento.svg",
  },
  {
    slug: "guia-hipertrofia",
    kind: "individual",
    title: "Guia de Hipertrofia",
    shortDesc: "Protocolo de 20 semanas de ganho de massa muscular com progressão estruturada.",
    description:
      "Um guia de 20 semanas para ganhar massa muscular com progressão de carga bem planeada e orientação alimentar prática — sem platôs desnecessários.",
    audience: "Praticantes iniciantes a intermédios que querem ganhar massa muscular de forma estruturada.",
    whatsInside: "Protocolo de hipertrofia de 20 semanas, trackers de progressão, guia de creatina e reverse diet.",
    whatYouLearn: "Como progredir carga e volume ao longo do tempo, ajustar alimentação para hipertrofia e evitar estagnação.",
    structure: [
      { title: "Fundamentos da hipertrofia", items: ["Volume e intensidade", "Progressão de carga"] },
      { title: "As 20 semanas", items: ["Fase de adaptação", "Fase de progressão", "Reverse diet"] },
    ],
    faq: [{ question: "Serve para mulheres?", answer: "Sim, inclui nuance específica para o público feminino." }],
    priceCents: 2500,
    currency: "eur",
    coverUrl: "/placeholders/capa-hipertrofia.svg",
  },
  {
    slug: "receitas-fitness",
    kind: "individual",
    title: "100 Receitas Fitness",
    shortDesc: "100 receitas fitness com macros validados, organizadas por refeição.",
    description:
      "100 receitas fitness organizadas em quatro capítulos — pequenos-almoços, snacks, refeições principais e sobremesas — todas com macros calculados e fotografia.",
    audience: "Quem já segue um dos guias e quer variedade prática no dia a dia, sem perder o rumo dos objectivos.",
    whatsInside: "100 receitas com fotografia, macros por 100g e instruções claras de preparação.",
    whatYouLearn: "Como variar refeições mantendo os teus objectivos de treino e alimentação.",
    structure: [
      { title: "Pequenos-almoços", items: ["25 receitas"] },
      { title: "Snacks", items: ["25 receitas"] },
      { title: "Refeições principais", items: ["25 receitas"] },
      { title: "Sobremesas", items: ["25 receitas"] },
    ],
    faq: [{ question: "Tem valores nutricionais?", answer: "Sim, todas as receitas têm macros validados por 100g." }],
    priceCents: 1900,
    currency: "eur",
    coverUrl: "/placeholders/capa-receitas.svg",
  },
  {
    slug: "pack-definicao",
    kind: "pack",
    title: "Pack Definição",
    shortDesc: "Guia de Emagrecimento + 100 Receitas Fitness.",
    description:
      "A combinação para quem quer perder gordura com um plano claro e ter, ao mesmo tempo, variedade de refeições sem sair do objectivo.",
    audience: "Quem quer emagrecer com método e não abrir mão de comer bem no processo.",
    whatsInside: "Os dois guias completos: protocolo de 12 semanas + 100 receitas fitness.",
    whatYouLearn: "Tudo o que está nos dois guias individuais, com o benefício de aplicares as receitas directamente ao teu défice calórico.",
    structure: [
      { title: "Guia de Emagrecimento", items: ["Protocolo completo de 12 semanas"] },
      { title: "100 Receitas Fitness", items: ["100 receitas com macros validados"] },
    ],
    faq: [{ question: "Recebo os dois PDFs separados?", answer: "Sim, recebes ambos os ficheiros completos." }],
    priceCents: 3100,
    originalPriceCents: 4100,
    currency: "eur",
    coverUrl: "/placeholders/capa-pack-definicao.svg",
    includesSlugs: ["guia-emagrecimento", "receitas-fitness"],
  },
  {
    slug: "pack-volume",
    kind: "pack",
    title: "Pack Volume",
    shortDesc: "Guia de Hipertrofia + 100 Receitas Fitness.",
    description:
      "A combinação para quem quer ganhar massa muscular com uma progressão bem definida e ter receitas práticas para sustentar o volume alimentar necessário.",
    audience: "Quem quer ganhar massa muscular sem cair em refeições repetitivas.",
    whatsInside: "Os dois guias completos: protocolo de 20 semanas + 100 receitas fitness.",
    whatYouLearn: "Tudo o que está nos dois guias individuais, com o benefício de aplicares as receitas directamente ao teu plano de hipertrofia.",
    structure: [
      { title: "Guia de Hipertrofia", items: ["Protocolo completo de 20 semanas"] },
      { title: "100 Receitas Fitness", items: ["100 receitas com macros validados"] },
    ],
    faq: [{ question: "Recebo os dois PDFs separados?", answer: "Sim, recebes ambos os ficheiros completos." }],
    priceCents: 3400,
    originalPriceCents: 4400,
    currency: "eur",
    coverUrl: "/placeholders/capa-pack-volume.svg",
    includesSlugs: ["guia-hipertrofia", "receitas-fitness"],
  },
  {
    slug: "pack-nutricao",
    kind: "pack",
    title: "Pack Nutrição",
    shortDesc: "Guia de Emagrecimento + Guia de Hipertrofia.",
    description:
      "Para quem quer os dois protocolos — perder gordura agora e ganhar massa muscular depois — ou já concluiu um ciclo e quer continuar para a fase seguinte.",
    audience: "Quem planeia fazer os dois ciclos (definição e depois volume), ou já passou por um e quer continuar.",
    whatsInside: "Os dois guias completos: protocolo de 12 semanas de emagrecimento + protocolo de 20 semanas de hipertrofia.",
    whatYouLearn: "As duas estratégias completas, para usares na ordem que fizer sentido para o teu objectivo actual.",
    structure: [
      { title: "Guia de Emagrecimento", items: ["Protocolo completo de 12 semanas"] },
      { title: "Guia de Hipertrofia", items: ["Protocolo completo de 20 semanas"] },
    ],
    faq: [{ question: "Posso usar os dois ao mesmo tempo?", answer: "Não — são pensados para fases distintas: primeiro define, depois ganha volume." }],
    priceCents: 3600,
    originalPriceCents: 4700,
    currency: "eur",
    coverUrl: "/placeholders/capa-pack-nutricao.svg",
    includesSlugs: ["guia-emagrecimento", "guia-hipertrofia"],
  },
  {
    slug: "pack-completo",
    kind: "pack",
    title: "Pack Completo",
    shortDesc: "Os 3 produtos: Emagrecimento + Hipertrofia + Receitas Fitness.",
    description:
      "Tudo o que preciso para trabalhar contigo em qualquer fase: perder gordura, ganhar massa muscular e ter sempre receitas práticas para sustentar o processo.",
    audience: "Quem quer a biblioteca completa, sem ter de decidir agora qual vai precisar primeiro.",
    whatsInside: "Os três guias completos, sem exclusões.",
    whatYouLearn: "As duas estratégias completas de treino e alimentação, mais 100 receitas para aplicar em qualquer uma delas.",
    structure: [
      { title: "Guia de Emagrecimento", items: ["Protocolo completo de 12 semanas"] },
      { title: "Guia de Hipertrofia", items: ["Protocolo completo de 20 semanas"] },
      { title: "100 Receitas Fitness", items: ["100 receitas com macros validados"] },
    ],
    faq: [{ question: "É a opção mais vantajosa?", answer: "Sim — é sempre mais barata do que comprar os produtos em separado ou em qualquer outra combinação." }],
    priceCents: 4700,
    originalPriceCents: 6600,
    currency: "eur",
    coverUrl: "/placeholders/capa-pack-completo.svg",
    includesSlugs: ["guia-emagrecimento", "guia-hipertrofia", "receitas-fitness"],
    featured: true,
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getIncludedProducts(product: Product) {
  return (product.includesSlugs ?? [])
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));
}
