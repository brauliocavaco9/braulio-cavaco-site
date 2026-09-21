import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brauliocavaco.com"),
  title: {
    default: "Bráulio Cavaco | Personal Trainer — Treino com Método",
    template: "%s | Bráulio Cavaco",
  },
  description:
    "Se o teu corpo não muda, há uma razão. Acompanhamento online e presencial baseado em ciência, método e resultados sustentáveis.",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Bráulio Cavaco — Personal Trainer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bráulio Cavaco — Personal Trainer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://brauliocavaco.com/#pessoa",
        name: "Bráulio Cavaco",
        jobTitle: "Personal Trainer",
        description:
          "Personal Trainer com Mestrado em Educação Física e Mestrado em Ciências do Desporto, com mais de 10 anos de experiência e trabalho científico publicado na área do treino de força.",
        url: "https://brauliocavaco.com",
        image: "https://brauliocavaco.com/braulio-cavaco-original.jpg",
        sameAs: ["https://instagram.com/brauliocavaco_personaltrainer"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Viseu",
          addressCountry: "PT",
        },
      },
      {
        "@type": "Service",
        serviceType: "Acompanhamento de treino online",
        provider: { "@id": "https://brauliocavaco.com/#pessoa" },
        areaServed: "PT",
        url: "https://brauliocavaco.com/acompanhamento-online",
      },
      {
        "@type": "Service",
        serviceType: "Treino presencial (Personal Trainer)",
        provider: { "@id": "https://brauliocavaco.com/#pessoa" },
        areaServed: {
          "@type": "City",
          name: "Viseu",
        },
        url: "https://brauliocavaco.com/acompanhamento-presencial",
      },
    ],
  };

  return (
    <html lang="pt-PT" className={`${newsreader.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-base text-ink font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
