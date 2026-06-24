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
  metadataBase: new URL("https://enviosdosruedas.com.ar"),
  openGraph: {
    title: "Envíos DosRuedas | Logística E-commerce y Mensajería MDP",
    description: "Líderes en logística de última milla para e-commerce en Mar del Plata. Velocidad, confianza y tecnología aplicada al transporte.",
    url: "https://enviosdosruedas.com.ar",
    siteName: "Envíos DosRuedas",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Envíos DosRuedas",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Envíos DosRuedas | Logística E-commerce MDP",
    description: "Líderes en logística de última milla para e-commerce en Mar del Plata.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${anton.variable} ${bebasNeue.variable} antialiased bg-background text-foreground transition-colors duration-300`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
