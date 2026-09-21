import { LinkButton } from "@/components/ui/Button";

export default function WhatsAppCTA({
  message,
  label = "Falar no WhatsApp",
  variant = "primary",
  className = "",
}: {
  message: string;
  label?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <LinkButton href={href} target="_blank" rel="noopener noreferrer" variant={variant} className={className}>
      {label}
    </LinkButton>
  );
}
