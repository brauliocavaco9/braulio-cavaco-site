import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

function formatPrice(cents: number, currency: string) {
  return new Intl.NumberFormat("pt-PT", { style: "currency", currency }).format(cents / 100);
}

export default function ProductCard({ product }: { product: Product }) {
  const savingsPercent = product.originalPriceCents
    ? Math.round((1 - product.priceCents / product.originalPriceCents) * 100)
    : null;

  return (
    <Link
      href={`/livros/${product.slug}`}
      className={`group border flex flex-col hover:border-gold transition-colors ${
        product.featured ? "border-gold" : "border-hairline"
      }`}
    >
      <div className="relative aspect-[3/4] bg-panel overflow-hidden">
        <Image
          src={product.coverUrl}
          alt={`Capa de ${product.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-gold text-base text-xs px-2 py-1">
            Melhor valor
          </span>
        )}
        {savingsPercent !== null && !product.featured && (
          <span className="absolute top-3 left-3 bg-base/90 border border-gold text-gold text-xs px-2 py-1">
            -{savingsPercent}%
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-lg text-ink mb-1">{product.title}</h3>
        <p className="text-xs text-muted mb-3">Ebook · Formato PDF</p>
        <p className="text-sm text-ink2 leading-relaxed flex-1">{product.shortDesc}</p>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            {product.originalPriceCents && (
              <span className="text-sm text-muted line-through">
                {formatPrice(product.originalPriceCents, product.currency)}
              </span>
            )}
            <span className="text-ink font-serif">
              {formatPrice(product.priceCents, product.currency)}
            </span>
          </div>
          <span className="text-sm text-gold group-hover:underline underline-offset-4">
            {product.kind === "pack" ? "Ver pack" : "Ver livro"}
          </span>
        </div>
      </div>
    </Link>
  );
}
