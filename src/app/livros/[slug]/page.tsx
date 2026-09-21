import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProduct, getIncludedProducts } from "@/data/products";
import WhatsAppBuyButton from "@/components/livros/WhatsAppBuyButton";

function formatPrice(cents: number, currency: string) {
  return new Intl.NumberFormat("pt-PT", { style: "currency", currency }).format(cents / 100);
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.shortDesc,
    openGraph: { images: [product.coverUrl] },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const included = getIncludedProducts(product);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.shortDesc,
    image: `https://brauliocavaco.com${product.coverUrl}`,
    brand: { "@type": "Person", name: "Bráulio Cavaco" },
    offers: {
      "@type": "Offer",
      priceCurrency: product.currency.toUpperCase(),
      price: (product.priceCents / 100).toFixed(2),
      availability: "https://schema.org/InStock",
      url: `https://brauliocavaco.com/livros/${product.slug}`,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="grid md:grid-cols-[320px_1fr] gap-14">
        <div>
          <div className="relative aspect-[3/4] border border-hairline">
            <Image
              src={product.coverUrl}
              alt={`Capa de ${product.title}`}
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>

          <div className="mt-8 sticky top-24">
            <div className="flex items-baseline gap-3 mb-6">
              {product.originalPriceCents && (
                <span className="text-lg text-muted line-through">
                  {formatPrice(product.originalPriceCents, product.currency)}
                </span>
              )}
              <p className="font-serif text-3xl text-ink">
                {formatPrice(product.priceCents, product.currency)}
              </p>
            </div>
            <WhatsAppBuyButton
              productTitle={product.title}
              priceCents={product.priceCents}
              currency={product.currency}
            />
            <p className="text-xs text-muted mt-4">
              Produto digital (PDF) — enviado por WhatsApp após confirmação do pagamento. Sem envio físico.
            </p>
          </div>
        </div>

        <div>
          <h1 className="font-serif text-3xl md:text-4xl text-ink mb-4">{product.title}</h1>
          <p className="text-ink2 leading-relaxed max-w-xl mb-12">{product.description}</p>

          {included.length > 0 && (
            <section className="mb-12">
              <h2 className="font-serif text-xl text-ink mb-4">Este pack inclui</h2>
              <div className="flex flex-col gap-3">
                {included.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/livros/${item.slug}`}
                    className="border border-hairline hover:border-gold transition-colors p-4 flex items-center justify-between"
                  >
                    <span className="text-ink2">{item.title}</span>
                    <span className="text-sm text-gold">Ver individualmente</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="mb-12">
            <h2 className="font-serif text-xl text-ink mb-4">Para quem é</h2>
            <p className="text-ink2 leading-relaxed max-w-xl">{product.audience}</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-xl text-ink mb-4">O que vais encontrar</h2>
            <p className="text-ink2 leading-relaxed max-w-xl">{product.whatsInside}</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-xl text-ink mb-4">O que vais aprender</h2>
            <p className="text-ink2 leading-relaxed max-w-xl">{product.whatYouLearn}</p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-xl text-ink mb-6">Estrutura</h2>
            <div className="flex flex-col gap-6">
              {product.structure.map((s) => (
                <div key={s.title} className="border-l border-hairline pl-5">
                  <p className="text-ink mb-2">{s.title}</p>
                  <ul className="flex flex-col gap-1">
                    {s.items.map((item) => (
                      <li key={item} className="text-sm text-ink2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink mb-6">Perguntas frequentes</h2>
            <div className="flex flex-col divide-y divide-hairline border-t border-hairline">
              {product.faq.map((f) => (
                <details key={f.question} className="py-5 group">
                  <summary className="cursor-pointer text-ink marker:content-none flex justify-between items-center">
                    {f.question}
                    <span className="text-gold ml-4 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-ink2 text-sm leading-relaxed mt-3">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
