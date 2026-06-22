"use client";

import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail, ShieldHalf, Bolt, Globe, Radio } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-light pt-20 pb-8 border-t-4 border-accent">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col items-start">
            <div className="relative h-[50px] w-[50px] mb-4 transition-transform hover:scale-105 border-2 border-accent bg-light p-1 shadow-brutal-sm">
              <Image src="/logo_envios.webp" alt="Envíos DosRuedas Logo" fill className="object-contain" />
            </div>
            <h3 className="text-light mb-0 text-3xl font-display tracking-wide uppercase">Envíos DosRuedas</h3>
            <p className="text-accent text-lg mb-6 tracking-widest font-subhead uppercase bg-primary-navy px-2 py-1 border border-accent mt-2">TU SOLUCIÓN CONFIABLE</p>
            <p className="text-light/90 leading-relaxed mb-6 font-body">La mensajería y logística de última milla líder en Mar del Plata, impulsando el crecimiento de negocios locales con tecnología y precisión.</p>
            <div className="flex gap-4">
              <a href="https://instagram.com/enviosdosruedas" target="_blank" className="w-12 h-12 bg-primary-navy border-2 border-accent flex items-center justify-center transition-all hover:bg-accent hover:text-primary hover:-translate-y-1 shadow-brutal-sm">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/enviosdosruedas" target="_blank" className="w-12 h-12 bg-primary-navy border-2 border-accent flex items-center justify-center transition-all hover:bg-accent hover:text-primary hover:-translate-y-1 shadow-brutal-sm">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Nav Col */}
          <div>
            <h4 className="font-display text-2xl text-accent mb-8 uppercase tracking-wider">Nosotros</h4>
            <ul className="space-y-4">
              <li><Link href="/nosotros/sobre-nosotros" className="text-light/80 hover:text-accent hover:translate-x-2 transition-all block font-subhead text-xl tracking-wide uppercase">Sobre Nosotros</Link></li>
              <li><Link href="/nosotros/preguntas-frecuentes" className="text-light/80 hover:text-accent hover:translate-x-2 transition-all block font-subhead text-xl tracking-wide uppercase">Preguntas Frecuentes</Link></li>
              <li><Link href="/nosotros/nuestras-redes" className="text-light/80 hover:text-accent hover:translate-x-2 transition-all block font-subhead text-xl tracking-wide uppercase">Nuestras Redes</Link></li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="font-display text-2xl text-accent mb-8 uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-4">
              <li><Link href="/servicios/envios-express" className="text-light/80 hover:text-accent hover:translate-x-2 transition-all block font-subhead text-xl tracking-wide uppercase">Envíos Express</Link></li>
              <li><Link href="/servicios/envios-lowcost" className="text-light/80 hover:text-accent hover:translate-x-2 transition-all block font-subhead text-xl tracking-wide uppercase">Envíos LowCost</Link></li>
              <li><Link href="/servicios/enviosflex" className="text-light/80 hover:text-accent hover:translate-x-2 transition-all block font-subhead text-xl tracking-wide uppercase">Envíos Flex (MeLi)</Link></li>
              <li><Link href="/servicios/plan-emprendedores" className="text-light/80 hover:text-accent hover:translate-x-2 transition-all block font-subhead text-xl tracking-wide uppercase">E-Commerce & 3PL</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-display text-2xl text-accent mb-8 uppercase tracking-wider">Contacto</h4>
            <div className="space-y-6 text-light/90 font-body">
              <p className="flex items-start gap-4 transition-colors hover:text-accent">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" /> <span>Friuli 1972, Mar del Plata<br/>Buenos Aires, AR</span>
              </p>
              <p className="flex items-center gap-4 transition-colors hover:text-accent">
                <Phone className="w-6 h-6 text-accent shrink-0" /> <span>+54 9 2236 60-2699</span>
              </p>
              <p className="flex items-center gap-4 transition-colors hover:text-accent break-all">
                <Mail className="w-6 h-6 text-accent shrink-0" /> <span>matiascejas@enviosdosruedas.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Trust Banners */}
        <div className="flex flex-wrap justify-center gap-10 py-12 border-y-2 border-primary-navy mb-8 bg-primary/50">
          <span className="flex items-center gap-3 font-subhead text-2xl tracking-widest text-accent transition-transform hover:scale-105 border border-accent/30 px-4 py-2 bg-primary-navy">
            <ShieldHalf className="w-6 h-6 shrink-0" /> SEGURIDAD CERTIFICADA
          </span>
          <span className="flex items-center gap-3 font-subhead text-2xl tracking-widest text-accent transition-transform hover:scale-105 border border-accent/30 px-4 py-2 bg-primary-navy">
            <Bolt className="w-6 h-6 shrink-0" /> VELOCIDAD MÁXIMA
          </span>
          <span className="flex items-center gap-3 font-subhead text-2xl tracking-widest text-accent transition-transform hover:scale-105 border border-accent/30 px-4 py-2 bg-primary-navy">
            <Globe className="w-6 h-6 shrink-0" /> COBERTURA DISTRITAL
          </span>
          <span className="flex items-center gap-3 font-subhead text-2xl tracking-widest text-accent transition-transform hover:scale-105 border border-accent/30 px-4 py-2 bg-primary-navy">
            <Radio className="w-6 h-6 shrink-0" /> STATUS ONLINE
          </span>
        </div>

        <div className="text-center text-light/60 text-sm pt-8 font-body">
          <p>&copy; 2026 Envios DosRuedas. Todos los derechos reservados. | <Link href="/politica-de-privacidad" className="hover:text-accent underline font-subhead tracking-wider text-base">Privacidad</Link> | <Link href="/terminos-y-condiciones" className="hover:text-accent underline font-subhead tracking-wider text-base">Términos</Link></p>
        </div>
      </div>
    </footer>
  );
}
