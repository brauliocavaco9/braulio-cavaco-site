import { Resend } from "resend";

export async function notifyNewApplication(subject: string, html: string) {
  const to = process.env.NOTIFY_EMAIL_TO;
  const apiKey = process.env.RESEND_API_KEY;

  // Não bloqueia o fluxo (nem o build) se o email ainda não estiver configurado —
  // útil em previews/deploys iniciais antes de teres a chave da Resend.
  if (!to || !apiKey) return;

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: "Site <notificacoes@brauliocavaco.pt>",
    to,
    subject,
    html,
  });
}
