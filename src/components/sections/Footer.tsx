
"use client";

import Link from "next/link";
import { Truck, MapPin, Phone, Mail, Instagram, Facebook, ShieldCheck, Zap, Globe, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-white pt-24 pb-12 border-t-4 border-accent">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Truck className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-3xl font-headline">DosRuedas</h3>
            </div>
            <p className="text-accent font-medium lowercase tracking-wider text-sm -mt-4 italic">tu solución confiable</p>
            <p className="text-slate-300 font-medium">
              Líderes en logística de última milla para e-commerce en Mar del Plata. Velocidad, confianza y tecnología aplicada al transporte.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-accent hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-accent hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-subheadline text-accent mb-8">Nosotros</h4>
            <ul className="space-y-4 font-body">
              {["Sobre Nosotros", "FAQ", "Redes"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-slate-300 hover:text-accent flex items-center gap-2 group">
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-subheadline text-accent mb-8">Servicios</h4>
            <ul className="space-y-4 font-body">
              {["Envíos Express", "Envíos LowCost", "Envíos Flex (MeLi)", "E-Commerce & 3PL"].map((link) => (
                <li key={link}>
                  <Link href="#servicios" className="text-slate-300 hover:text-accent flex items-center gap-2 group">
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-2xl font-subheadline text-accent mb-8">Contacto</h4>
            <div className="space-y-4 text-slate-300 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Friuli 1972, Mar del Plata<br />Buenos Aires, AR</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+54 9 223 660-2699</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-xs break-all">matiascejas@enviosdosruedas.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-12 py-12 border-y border-white/10 mb-8">
          <div className="flex items-center gap-2 font-subheadline text-2xl text-accent">
            <ShieldCheck className="w-6 h-6" /> SEGURIDAD CERTIFICADA
          </div>
          <div className="flex items-center gap-2 font-subheadline text-2xl text-accent">
            <Zap className="w-6 h-6" /> VELOCIDAD MÁXIMA
          </div>
          <div className="flex items-center gap-2 font-subheadline text-2xl text-accent">
            <Globe className="w-6 h-6" /> COBERTURA DISTRITAL
          </div>
        </div>

        <div className="text-center text-slate-500 text-sm font-bold">
          <p>© 2026 ENVIOS DOSRUEDAS. TODOS LOS DERECHOS RESERVADOS. | <Link href="#" className="hover:text-white">PRIVACIDAD</Link> | <Link href="#" className="hover:text-white">TÉRMINOS</Link></p>
        </div>
      </div>
    </footer>
  );
}
