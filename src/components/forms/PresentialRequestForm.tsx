"use client";

import { FormEvent, useState } from "react";
import { Input, Textarea, Label, FieldGroup } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

export default function PresentialRequestForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/pedidos-presenciais", {
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
        <p className="font-serif text-xl text-ink mb-2">Pedido enviado</p>
        <p className="text-ink2">
          Obrigado pelo teu interesse. Entro em contacto assim que possível para confirmar a
          disponibilidade.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <FieldGroup>
        <Label htmlFor="name">Nome</Label>
        <Input id="name" name="name" required />
      </FieldGroup>
      <FieldGroup>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </FieldGroup>
      <FieldGroup>
        <Label htmlFor="phone">Telefone (opcional)</Label>
        <Input id="phone" name="phone" type="tel" />
      </FieldGroup>
      <FieldGroup>
        <Label htmlFor="goal">Objectivo</Label>
        <Input id="goal" name="goal" required />
      </FieldGroup>
      <FieldGroup>
        <Label htmlFor="message">Mensagem</Label>
        <Textarea id="message" name="message" required />
      </FieldGroup>

      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "A enviar..." : "Pedir informações"}
      </Button>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-400">Não foi possível enviar. Tenta novamente.</p>
      )}
    </form>
  );
}
