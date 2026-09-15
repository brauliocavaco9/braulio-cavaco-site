import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/livros/ProductCard";

export const metadata: Metadata = {
  title: "Livros",
  description: "Guias práticos de treino, alimentação e composição corporal — individuais ou em pack.",
};

export default function LivrosPage() {
  const individuals = PRODUCTS.filter((p) => p.kind === "individual");
  const packs = PRODUCTS.filter((p) => p.kind === "pack").sort((a, b) =>
    a.featured ? -1 : b.featured ? 1 : 0
  );

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <h1 className="font-serif text-4xl text-ink mb-3">Livros</h1>
      <p className="text-ink2 max-w-xl mb-14">
        Guias práticos para compreender melhor treino, alimentação e composição corporal —
        sem fórmulas milagrosas. Compra individual ou em pack, com poupança.
      </p>

      <section className="mb-20">
        <h2 className="font-serif text-2xl text-ink mb-8">Packs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packs.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-ink mb-8">Livros individuais</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {individuals.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
