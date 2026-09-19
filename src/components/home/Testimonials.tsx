import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h2 className="font-serif text-2xl md:text-3xl text-ink mb-14 max-w-md">
          Quem já trabalhou comigo
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="bg-base p-8 flex flex-col">
              <blockquote className="text-ink2 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-hairline">
                <p className="text-ink text-sm">{t.name}</p>
                {t.context && <p className="text-muted text-xs mt-1">{t.context}</p>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
