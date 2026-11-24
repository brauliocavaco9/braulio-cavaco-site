import { LinkButton } from "@/components/ui/Button";

function formatPrice(cents: number, currency: string) {
  return new Intl.NumberFormat("pt-PT", { style: "currency", currency }).format(cents / 100);
}

export default function WhatsAppBuyButton({
  productTitle,
  priceCents,
  currency,
}: {
  productTitle: string;
  priceCents: number;
  currency: string;
}) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; // ex: 351912345678, sem "+"
  const price = formatPrice(priceCents, currency);
  const message = `Olá! Quero comprar o livro "${productTitle}" (${price}). Como posso pagar?`;
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <LinkButton href={href} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
      Comprar via WhatsApp
    </LinkButton>
  );
}
