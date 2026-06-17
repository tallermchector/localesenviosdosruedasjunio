
"use client";

import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail, ShieldHalf, Bolt, Globe, Radio } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-white pt-20 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="footer-col">
            <img src="/logo_envios.webp" alt="Envíos DosRuedas Logo" className="h-[50px] mb-4 transition-transform hover:scale-105" />
            <h3 className="text-white mb-0 font-headline text-[1.8rem]">Envíos DosRuedas</h3>
            <p className="text-accent text-[0.95rem] mb-6 tracking-[0.5px]">tu solución confiable</p>
            <p className="text-white/80 leading-relaxed mb-6">La mensajería y logística de última milla líder en Mar del Plata, impulsando el crecimiento de negocios locales con tecnología y precisión.</p>
            <div className="flex gap-4">
              <a href="#" target="_blank" className="w-11 h-11 bg-white/10 flex items-center justify-center rounded-full transition-all hover:bg-accent hover:text-primary hover:-translate-y-1 hover:scale-115">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" className="w-11 h-11 bg-white/10 flex items-center justify-center rounded-full transition-all hover:bg-accent hover:text-primary hover:-translate-y-1 hover:scale-115">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav Col */}
          <div className="footer-col">
            <h4 className="font-subheadline text-2xl text-accent mb-8 uppercase tracking-wider">Nosotros</h4>
            <ul className="list-none space-y-3">
              <li><Link href="#" className="text-white/80 hover:text-accent hover:translate-x-2 transition-all block relative">Sobre Nosotros</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-accent hover:translate-x-2 transition-all block relative">Preguntas Frecuentes</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-accent hover:translate-x-2 transition-all block relative">Nuestras Redes</Link></li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="footer-col">
            <h4 className="font-subheadline text-2xl text-accent mb-8 uppercase tracking-wider">Servicios</h4>
            <ul className="list-none space-y-3">
              <li><Link href="#" className="text-white/80 hover:text-accent hover:translate-x-2 transition-all block">Envíos Express</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-accent hover:translate-x-2 transition-all block">Envíos LowCost</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-accent hover:translate-x-2 transition-all block">Envíos Flex (MeLi)</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-accent hover:translate-x-2 transition-all block">E-Commerce & 3PL</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-col">
            <h4 className="font-subheadline text-2xl text-accent mb-8 uppercase tracking-wider">Contacto</h4>
            <div className="space-y-4 text-white/80">
              <p className="flex items-start gap-4 transition-colors hover:text-accent">
                <MapPin className="w-5 h-5 text-accent shrink-0" /> Friuli 1972, Mar del Plata<br/>Buenos Aires, AR
              </p>
              <p className="flex items-center gap-4 transition-colors hover:text-accent">
                <Phone className="w-5 h-5 text-accent shrink-0" /> +54 9 2236 60-2699
              </p>
              <p className="flex items-center gap-4 transition-colors hover:text-accent">
                <Mail className="w-5 h-5 text-accent shrink-0" /> matiascejas@enviosdosruedas.com
              </p>
            </div>
          </div>
        </div>

        {/* Trust Banners */}
        <div className="flex flex-wrap justify-center gap-10 py-12 border-y border-white/10 mb-8">
          <span className="flex items-center gap-3 font-subheadline text-[1.3rem] tracking-wider text-accent transition-transform hover:scale-105 hover:-translate-y-[3px]">
            <ShieldHalf className="w-6 h-6" /> SEGURIDAD CERTIFICADA
          </span>
          <span className="flex items-center gap-3 font-subheadline text-[1.3rem] tracking-wider text-accent transition-transform hover:scale-105 hover:-translate-y-[3px]">
            <Bolt className="w-6 h-6" /> VELOCIDAD MÁXIMA
          </span>
          <span className="flex items-center gap-3 font-subheadline text-[1.3rem] tracking-wider text-accent transition-transform hover:scale-105 hover:-translate-y-[3px]">
            <Globe className="w-6 h-6" /> COBERTURA DISTRITAL
          </span>
          <span className="flex items-center gap-3 font-subheadline text-[1.3rem] tracking-wider text-accent transition-transform hover:scale-105 hover:-translate-y-[3px]">
            <Radio className="w-6 h-6" /> STATUS ONLINE
          </span>
        </div>

        <div className="text-center text-white/60 text-[0.9rem] pt-8 border-t border-white/10 font-bold">
          <p>&copy; 2026 Envios DosRuedas. Todos los derechos reservados. | <Link href="#" className="hover:text-accent underline">Privacidad</Link> | <Link href="#" className="hover:text-accent underline">Términos</Link></p>
        </div>
      </div>
    </footer>
  );
}
