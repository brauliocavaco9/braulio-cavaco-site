// Cloudflare Pages Function — responde a POST /api/pedidos-presenciais

const CAMPOS_OBRIGATORIOS = ["name", "email", "goal", "message"];

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

  const linha = (rotulo, valor) =>
    `<p><strong>${rotulo}:</strong> ${escapeHtml(valor) || "—"}</p>`;

  const html = `
    <h2>Novo pedido de informações — treino presencial</h2>
    ${linha("Nome", dados.name)}
    ${linha("Email", dados.email)}
    ${linha("Telefone", dados.phone)}
    ${linha("Objectivo", dados.goal)}
    ${linha("Mensagem", dados.message)}
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
      subject: `Novo pedido presencial — ${dados.name}`,
      html,
    }),
  });

  if (!resposta.ok) {
    return Response.json({ error: "Não foi possível enviar" }, { status: 502 });
  }

  return Response.json({ ok: true }, { status: 201 });
}
