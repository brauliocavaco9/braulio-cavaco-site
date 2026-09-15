import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { notifyNewApplication } from "@/lib/mailer";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.coerce.number().int().min(16).max(100),
  sex: z.string().min(1),
  weightKg: z.coerce.number().positive(),
  heightCm: z.coerce.number().positive(),
  mainGoal: z.string().min(3),
  trainingExperience: z.string().min(1),
  sessionsPerWeek: z.string().min(1),
  timeAvailable: z.string().min(1),
  mainDifficulties: z.string().min(1),
  injuryHistory: z.string().optional().default(""),
  currentDiet: z.string().min(1),
  whyCoaching: z.string().min(1),
  expectations: z.string().min(1),
  consentGiven: z.literal("true"),
});

// Sem base de dados: cada candidatura é apenas enviada por email. O histórico
// de candidaturas fica na tua caixa de correio (podes arquivar/organizar lá).
export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
  }

  const d = parsed.data;

  await notifyNewApplication(
    `Nova candidatura — ${d.name}`,
    `<h2>Nova candidatura ao acompanhamento online</h2>
     <p><strong>Nome:</strong> ${d.name}</p>
     <p><strong>Email:</strong> ${d.email}</p>
     <p><strong>Idade:</strong> ${d.age} · <strong>Sexo:</strong> ${d.sex}</p>
     <p><strong>Peso:</strong> ${d.weightKg}kg · <strong>Altura:</strong> ${d.heightCm}cm</p>
     <p><strong>Objectivo principal:</strong> ${d.mainGoal}</p>
     <p><strong>Experiência de treino:</strong> ${d.trainingExperience}</p>
     <p><strong>Sessões/semana actualmente:</strong> ${d.sessionsPerWeek}</p>
     <p><strong>Tempo disponível:</strong> ${d.timeAvailable}</p>
     <p><strong>Principais dificuldades:</strong> ${d.mainDifficulties}</p>
     <p><strong>Histórico de lesões:</strong> ${d.injuryHistory || "—"}</p>
     <p><strong>Alimentação actual:</strong> ${d.currentDiet}</p>
     <p><strong>Porque quer acompanhamento:</strong> ${d.whyCoaching}</p>
     <p><strong>Expectativas:</strong> ${d.expectations}</p>`
  );

  return NextResponse.json({ ok: true }, { status: 201 });
}
