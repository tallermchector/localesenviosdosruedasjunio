
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Envíos DosRuedas | Logística E-commerce y Mensajería MDP",
  description: "Líderes en logística de última milla para e-commerce en Mar del Plata. Velocidad, confianza y tecnología aplicada al transporte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
