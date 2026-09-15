"use client";

import { FormEvent, useState } from "react";
import { Input, Textarea, Select, Label, FieldGroup } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

export default function OnlineApplicationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/candidaturas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Falha no envio");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-hairline p-8 max-w-xl">
        <p className="font-serif text-xl text-ink mb-2">Candidatura enviada</p>
        <p className="text-ink2">
          Obrigado pela tua candidatura. Vou analisar as informações e entrar em contacto caso
          o acompanhamento seja adequado ao teu caso.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <div className="grid sm:grid-cols-2 gap-x-6">
        <FieldGroup>
          <Label htmlFor="name">Nome</Label>
          <Input id="name" name="name" required />
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="age">Idade</Label>
          <Input id="age" name="age" type="number" min={16} max={100} required />
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="sex">Sexo</Label>
          <Select id="sex" name="sex" required defaultValue="">
            <option value="" disabled>
              Seleciona
            </option>
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="outro">Outro</option>
          </Select>
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="weightKg">Peso (kg)</Label>
          <Input id="weightKg" name="weightKg" type="number" step="0.1" required />
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="heightCm">Altura (cm)</Label>
          <Input id="heightCm" name="heightCm" type="number" required />
        </FieldGroup>
      </div>

      <FieldGroup>
        <Label htmlFor="mainGoal">Objectivo principal</Label>
        <Textarea id="mainGoal" name="mainGoal" required />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="trainingExperience">Experiência de treino</Label>
        <Textarea id="trainingExperience" name="trainingExperience" required />
      </FieldGroup>

      <div className="grid sm:grid-cols-2 gap-x-6">
        <FieldGroup>
          <Label htmlFor="sessionsPerWeek">Quantas vezes treina actualmente</Label>
          <Input id="sessionsPerWeek" name="sessionsPerWeek" required />
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="timeAvailable">Tempo disponível para treinar</Label>
          <Input id="timeAvailable" name="timeAvailable" required />
        </FieldGroup>
      </div>

      <FieldGroup>
        <Label htmlFor="mainDifficulties">Principais dificuldades</Label>
        <Textarea id="mainDifficulties" name="mainDifficulties" required />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="injuryHistory">Histórico de lesões</Label>
        <Textarea id="injuryHistory" name="injuryHistory" />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="currentDiet">Descreve a tua alimentação actual</Label>
        <Textarea id="currentDiet" name="currentDiet" required />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="whyCoaching">Porque queres acompanhamento</Label>
        <Textarea id="whyCoaching" name="whyCoaching" required />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="expectations">Expectativas</Label>
        <Textarea id="expectations" name="expectations" required />
      </FieldGroup>

      <label className="flex items-start gap-3 mb-8 text-sm text-ink2">
        <input type="checkbox" name="consentGiven" value="true" required className="mt-1" />
        Autorizo o tratamento dos dados enviados neste formulário para efeitos de avaliação
        da candidatura, de acordo com a política de privacidade.
      </label>

      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "A enviar..." : "Enviar candidatura"}
      </Button>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-400">
          Não foi possível enviar a candidatura. Tenta novamente.
        </p>
      )}
    </form>
  );
}
