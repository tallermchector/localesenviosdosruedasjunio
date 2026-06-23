"use client";

import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail, ShieldHalf, Bolt, Globe, Radio } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-white pt-20 pb-8 border-t-4 border-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Columna de marca */}
          <div className="flex flex-col items-start">
            <div className="relative h-[50px] w-[50px] mb-4 transition-transform hover:scale-105 border-2 border-secondary bg-white p-1 shadow-hard-secondary">
              <Image src="/logo_envios.webp" alt="Envíos DosRuedas Logo" fill className="object-contain" />
            </div>
            <h3 className="text-white mb-0 text-3xl font-title tracking-[0.02em] uppercase">Envíos DosRuedas</h3>
            <p className="text-secondary text-lg mb-6 tracking-[0.05em] font-subtitle uppercase bg-primary px-2 py-1 border border-secondary mt-2">TU SOLUCIÓN CONFIABLE</p>
            <p className="text-white/90 leading-relaxed mb-6 font-subtitle tracking-[0.03em]">La mensajería y logística de última milla líder en Mar del Plata, impulsando el crecimiento de negocios locales con tecnología y precisión.</p>
            <div className="flex gap-4">
              <a href="https://instagram.com/enviosdosruedas" target="_blank" className="w-12 h-12 bg-primary border-2 border-secondary flex items-center justify-center text-secondary transition-all hover:bg-secondary hover:text-primary hover:-translate-y-1 shadow-hard-secondary">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/enviosdosruedas" target="_blank" className="w-12 h-12 bg-primary border-2 border-secondary flex items-center justify-center text-secondary transition-all hover:bg-secondary hover:text-primary hover:-translate-y-1 shadow-hard-secondary">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Columna de navegación */}
          <div>
            <h4 className="font-title text-2xl text-secondary mb-8 uppercase tracking-[0.02em]">Nosotros</h4>
            <ul className="space-y-4">
              <li><Link href="/nosotros/sobre-nosotros" className="text-white/80 hover:text-secondary hover:translate-x-2 transition-all block font-subtitle text-xl tracking-[0.05em] uppercase">Sobre Nosotros</Link></li>
              <li><Link href="/nosotros/preguntas-frecuentes" className="text-white/80 hover:text-secondary hover:translate-x-2 transition-all block font-subtitle text-xl tracking-[0.05em] uppercase">Preguntas Frecuentes</Link></li>
              <li><Link href="/nosotros/nuestras-redes" className="text-white/80 hover:text-secondary hover:translate-x-2 transition-all block font-subtitle text-xl tracking-[0.05em] uppercase">Nuestras Redes</Link></li>
            </ul>
          </div>

          {/* Columna de servicios */}
          <div>
            <h4 className="font-title text-2xl text-secondary mb-8 uppercase tracking-[0.02em]">Servicios</h4>
            <ul className="space-y-4">
              <li><Link href="/servicios/envios-express" className="text-white/80 hover:text-secondary hover:translate-x-2 transition-all block font-subtitle text-xl tracking-[0.05em] uppercase">Envíos Express</Link></li>
              <li><Link href="/servicios/envios-lowcost" className="text-white/80 hover:text-secondary hover:translate-x-2 transition-all block font-subtitle text-xl tracking-[0.05em] uppercase">Envíos LowCost</Link></li>
              <li><Link href="/servicios/enviosflex" className="text-white/80 hover:text-secondary hover:translate-x-2 transition-all block font-subtitle text-xl tracking-[0.05em] uppercase">Envíos Flex (MeLi)</Link></li>
              <li><Link href="/servicios/plan-emprendedores" className="text-white/80 hover:text-secondary hover:translate-x-2 transition-all block font-subtitle text-xl tracking-[0.05em] uppercase">E-Commerce & 3PL</Link></li>
            </ul>
          </div>

          {/* Columna de contacto */}
          <div>
            <h4 className="font-title text-2xl text-secondary mb-8 uppercase tracking-[0.02em]">Contacto</h4>
            <div className="space-y-6 text-white/90 font-subtitle tracking-[0.03em]">
              <p className="flex items-start gap-4 transition-colors hover:text-secondary">
                <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" /> <span>Friuli 1972, Mar del Plata<br/>Buenos Aires, AR</span>
              </p>
              <p className="flex items-center gap-4 transition-colors hover:text-secondary">
                <Phone className="w-6 h-6 text-secondary shrink-0" /> <span>+54 9 2236 60-2699</span>
              </p>
              <p className="flex items-center gap-4 transition-colors hover:text-secondary break-all">
                <Mail className="w-6 h-6 text-secondary shrink-0" /> <span>matiascejas@enviosdosruedas.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Banners de confianza */}
        <div className="flex flex-wrap justify-center gap-10 py-12 border-y-2 border-white/10 mb-8 bg-white/5">
          <span className="flex items-center gap-3 font-subtitle text-2xl tracking-[0.05em] text-secondary transition-transform hover:scale-105 border border-secondary/30 px-4 py-2 bg-primary">
            <ShieldHalf className="w-6 h-6 shrink-0" /> SEGURIDAD CERTIFICADA
          </span>
          <span className="flex items-center gap-3 font-subtitle text-2xl tracking-[0.05em] text-secondary transition-transform hover:scale-105 border border-secondary/30 px-4 py-2 bg-primary">
            <Bolt className="w-6 h-6 shrink-0" /> VELOCIDAD MÁXIMA
          </span>
          <span className="flex items-center gap-3 font-subtitle text-2xl tracking-[0.05em] text-secondary transition-transform hover:scale-105 border border-secondary/30 px-4 py-2 bg-primary">
            <Globe className="w-6 h-6 shrink-0" /> COBERTURA DISTRITAL
          </span>
          <span className="flex items-center gap-3 font-subtitle text-2xl tracking-[0.05em] text-secondary transition-transform hover:scale-105 border border-secondary/30 px-4 py-2 bg-primary">
            <Radio className="w-6 h-6 shrink-0" /> STATUS ONLINE
          </span>
        </div>

        <div className="text-center text-white/60 text-sm pt-8 font-subtitle tracking-[0.03em]">
          <p>&copy; 2026 Envios DosRuedas. Todos los derechos reservados. | <Link href="/politica-de-privacidad" className="hover:text-secondary underline font-subtitle tracking-[0.05em] text-base">Privacidad</Link> | <Link href="/terminos-y-condiciones" className="hover:text-secondary underline font-subtitle tracking-[0.05em] text-base">Términos</Link></p>
        </div>
      </div>
    </footer>
  );
}
