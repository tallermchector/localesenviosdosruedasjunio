
import type { Metadata } from "next";
import { Anton, Bebas_Neue } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

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
      <body className={`${anton.variable} ${bebasNeue.variable} antialiased bg-background text-foreground transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
