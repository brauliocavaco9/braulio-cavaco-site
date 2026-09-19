import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-hairline mt-24">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg text-ink mb-2">Bráulio Cavaco</p>
          <p className="text-sm text-muted max-w-xs">
            Ciência traduzida em treino. Sem milagres. Com método.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/acompanhamento-online" className="text-ink2 hover:text-gold">
            Acompanhamento Online
          </Link>
          <Link href="/acompanhamento-presencial" className="text-ink2 hover:text-gold">
            Acompanhamento Presencial
          </Link>
          <Link href="/livros" className="text-ink2 hover:text-gold">
            Livros
          </Link>
          <Link href="/sobre-mim" className="text-ink2 hover:text-gold">
            Sobre Mim
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a
            href="https://instagram.com/brauliocavaco_personaltrainer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink2 hover:text-gold"
          >
            Instagram
          </a>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim através do site e gostava de falar contigo.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink2 hover:text-gold"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-hairline px-5 py-6 text-xs text-muted text-center">
        © {new Date().getFullYear()} Bráulio Cavaco. Todos os direitos reservados.
      </div>
    </footer>
  );
}
