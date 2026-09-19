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
  return (
    <html lang="pt-PT" className={`${newsreader.variable} ${manrope.variable}`}>
      <body className="bg-base text-ink font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
