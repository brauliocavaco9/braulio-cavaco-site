import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { notifyNewApplication } from "@/lib/mailer";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().default(""),
  goal: z.string().min(1),
  message: z.string().min(1),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
  }

  const d = parsed.data;

  await notifyNewApplication(
    `Novo pedido presencial — ${d.name}`,
    `<h2>Novo pedido de informações — treino presencial</h2>
     <p><strong>Nome:</strong> ${d.name}</p>
     <p><strong>Email:</strong> ${d.email}</p>
     <p><strong>Telefone:</strong> ${d.phone || "—"}</p>
     <p><strong>Objectivo:</strong> ${d.goal}</p>
     <p><strong>Mensagem:</strong> ${d.message}</p>`
  );

  return NextResponse.json({ ok: true }, { status: 201 });
}
