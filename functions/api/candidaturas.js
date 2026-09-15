// Cloudflare Pages Function — responde a POST /api/candidaturas
// Não precisa de instalação nem configuração: a Cloudflare corre automaticamente
// qualquer ficheiro dentro da pasta /functions.

const CAMPOS_OBRIGATORIOS = [
  "name",
  "email",
  "age",
  "sex",
  "weightKg",
  "heightCm",
  "mainGoal",
  "trainingExperience",
  "sessionsPerWeek",
  "timeAvailable",
  "mainDifficulties",
  "currentDiet",
  "whyCoaching",
  "expectations",
];

// Evita que texto escrito pelo utilizador seja interpretado como HTML no email.
function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function onRequestPost({ request, env }) {
  let dados;
  try {
    dados = await request.json();
  } catch {
    return Response.json({ error: "Pedido inválido" }, { status: 400 });
  }

  for (const campo of CAMPOS_OBRIGATORIOS) {
    if (!dados[campo] || String(dados[campo]).trim() === "") {
      return Response.json({ error: "Faltam campos obrigatórios" }, { status: 400 });
    }
  }

  if (!String(dados.email).includes("@")) {
    return Response.json({ error: "Email inválido" }, { status: 400 });
  }

  if (dados.consentGiven !== "true") {
    return Response.json({ error: "Consentimento obrigatório" }, { status: 400 });
  }

  const linha = (rotulo, valor) =>
    `<p><strong>${rotulo}:</strong> ${escapeHtml(valor) || "—"}</p>`;

  const html = `
    <h2>Nova candidatura ao acompanhamento online</h2>
    ${linha("Nome", dados.name)}
    ${linha("Email", dados.email)}
    ${linha("Idade", dados.age)}
    ${linha("Sexo", dados.sex)}
    ${linha("Peso (kg)", dados.weightKg)}
    ${linha("Altura (cm)", dados.heightCm)}
    ${linha("Objectivo principal", dados.mainGoal)}
    ${linha("Experiência de treino", dados.trainingExperience)}
    ${linha("Sessões por semana", dados.sessionsPerWeek)}
    ${linha("Tempo disponível", dados.timeAvailable)}
    ${linha("Principais dificuldades", dados.mainDifficulties)}
    ${linha("Histórico de lesões", dados.injuryHistory)}
    ${linha("Alimentação actual", dados.currentDiet)}
    ${linha("Porque quer acompanhamento", dados.whyCoaching)}
    ${linha("Expectativas", dados.expectations)}
  `;

  const resposta = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.EMAIL_FROM || "onboarding@resend.dev",
      to: env.NOTIFY_EMAIL_TO,
      reply_to: dados.email,
      subject: `Nova candidatura — ${dados.name}`,
      html,
    }),
  });

  if (!resposta.ok) {
    return Response.json({ error: "Não foi possível enviar" }, { status: 502 });
  }

  return Response.json({ ok: true }, { status: 201 });
}
