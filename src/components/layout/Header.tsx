"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Início" },
  { href: "/acompanhamento-online", label: "Acompanhamento Online" },
  { href: "/acompanhamento-presencial", label: "Acompanhamento Presencial" },
  { href: "/livros", label: "Livros" },
  { href: "/sobre-mim", label: "Sobre Mim" },
];

const WA_MESSAGE = "Olá! Vim através do site e gostava de falar contigo.";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-base/95 backdrop-blur border-b border-hairline">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg text-ink" onClick={() => setOpen(false)}>
          Bráulio Cavaco
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink2 hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
          >
            <span className="md:hidden">WhatsApp</span>
            <span className="hidden md:inline">Falar comigo</span>
          </a>

          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          >
            <span
              className={`block h-px w-6 bg-ink transition-transform ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-hairline bg-base px-5 py-6 flex flex-col gap-5">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base text-ink2 hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
          >
            Falar comigo
          </a>
        </nav>
      )}
    </header>
  );
}
