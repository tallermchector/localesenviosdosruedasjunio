"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Phone, Calculator, ChevronDown, Menu, X, House, Mail } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[300] flex items-center transition-all duration-300 bg-primary/95 backdrop-blur-xl border-b-2 border-accent h-[90px]`}>
      <div className="container flex justify-between items-center h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group no-underline">
          <div className="relative h-[60px] w-[60px]">
            <Image
              src="/logo_envios.webp"
              alt="Envíos DosRuedas Logo"
              fill
              sizes="(max-width: 768px) 60px, 60px"
              className="object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              priority
            />
          </div>
          <div className="flex flex-col brand-text hidden xl:flex">
            <span className="font-display text-2xl text-white leading-none uppercase">ENVIOS DOSRUEDAS</span>
            <span className="text-accent text-sm font-body uppercase tracking-[0.5px]">TU SOLUCION CONFIABLE</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          <div className="relative h-full flex items-center group">
            <Link href="/" className="font-subhead text-2xl text-white uppercase tracking-wider flex items-center gap-2 hover:text-accent transition-colors relative after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-accent after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
              <House className="w-5 h-5" /> Inicio
            </Link>
          </div>

          <div className="relative h-full flex items-center group">
            <button className="font-subhead text-2xl text-white uppercase tracking-wider flex items-center gap-1 hover:text-accent transition-colors">
              Nosotros <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 bg-primary min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-5 group-hover:translate-y-0 transition-all duration-300 border-t-[3px] border-accent shadow-2xl">
              <Link href="/nosotros/sobre-nosotros" className="block px-6 py-4 text-white text-lg font-body hover:text-accent hover:pl-8 transition-all border-b border-white/5 last:border-0 relative z-10 overflow-hidden after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-white/5 hover:after:left-0 after:transition-all after:-z-10">Sobre Nosotros</Link>
              <Link href="/nosotros/preguntas-frecuentes" className="block px-6 py-4 text-white text-lg font-body hover:text-accent hover:pl-8 transition-all border-b border-white/5 last:border-0 relative z-10 overflow-hidden after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-white/5 hover:after:left-0 after:transition-all after:-z-10">Preguntas Frecuentes</Link>
              <Link href="/nosotros/nuestras-redes" className="block px-6 py-4 text-white text-lg font-body hover:text-accent hover:pl-8 transition-all border-b border-white/5 last:border-0 relative z-10 overflow-hidden after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-white/5 hover:after:left-0 after:transition-all after:-z-10">Nuestras Redes</Link>
            </div>
          </div>

          <div className="relative h-full flex items-center group">
            <button className="font-subhead text-2xl text-white uppercase tracking-wider flex items-center gap-1 hover:text-accent transition-colors">
              Servicios <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 bg-primary min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-5 group-hover:translate-y-0 transition-all duration-300 border-t-[3px] border-accent shadow-2xl">
              <Link href="/servicios/envios-express" className="block px-6 py-4 text-white text-lg font-body hover:text-accent hover:pl-8 transition-all border-b border-white/5 last:border-0 relative z-10 overflow-hidden after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-white/5 hover:after:left-0 after:transition-all after:-z-10">Envíos Express</Link>
              <Link href="/servicios/envios-lowcost" className="block px-6 py-4 text-white text-lg font-body hover:text-accent hover:pl-8 transition-all border-b border-white/5 last:border-0 relative z-10 overflow-hidden after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-white/5 hover:after:left-0 after:transition-all after:-z-10">Envíos LowCost</Link>
              <Link href="/servicios/enviosflex" className="block px-6 py-4 text-white text-lg font-body hover:text-accent hover:pl-8 transition-all border-b border-white/5 last:border-0 relative z-10 overflow-hidden after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-white/5 hover:after:left-0 after:transition-all after:-z-10">Envíos Flex (MeLi)</Link>
              <Link href="/servicios/plan-emprendedores" className="block px-6 py-4 text-white text-lg font-body hover:text-accent hover:pl-8 transition-all border-b border-white/5 last:border-0 relative z-10 overflow-hidden after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-white/5 hover:after:left-0 after:transition-all after:-z-10">E-Commerce & 3PL</Link>
            </div>
          </div>

          <div className="relative h-full flex items-center group">
            <Link href="/contacto" className="font-subhead text-2xl text-white uppercase tracking-wider flex items-center gap-2 hover:text-accent transition-colors relative after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-accent after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
              <Mail className="w-5 h-5" /> Contacto
            </Link>
          </div>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <a href="tel:+5492236602699" className="hidden xl:flex items-center gap-2 text-white font-subhead text-2xl tracking-widest hover:text-accent transition-all hover:scale-105">
            <Phone className="w-6 h-6 text-accent animate-bounce" /> +54 223 660-2699
          </a>
          <Link href="/contacto" className="btn btn-primary h-12 flex items-center gap-2 text-xl px-6 rounded-lg transition-transform active:scale-95 shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
            <Calculator className="w-5 h-5" /> <span className="hidden sm:inline">Cotizar Envío</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-accent transition-colors"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[90px] bg-primary z-[200] flex flex-col p-8 gap-6 overflow-y-auto lg:hidden animate-in slide-in-from-right duration-300">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="font-display text-4xl text-white hover:text-accent border-b border-white/10 pb-2">Inicio</Link>

          <div className="space-y-4">
            <p className="font-subhead text-2xl text-accent uppercase tracking-widest">Nosotros</p>
            <div className="flex flex-col gap-3 pl-4">
              <Link href="/nosotros/sobre-nosotros" onClick={() => setMobileMenuOpen(false)} className="font-body text-xl text-white hover:text-accent">Sobre Nosotros</Link>
              <Link href="/nosotros/preguntas-frecuentes" onClick={() => setMobileMenuOpen(false)} className="font-body text-xl text-white hover:text-accent">Preguntas Frecuentes</Link>
              <Link href="/nosotros/nuestras-redes" onClick={() => setMobileMenuOpen(false)} className="font-body text-xl text-white hover:text-accent">Nuestras Redes</Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-subhead text-2xl text-accent uppercase tracking-widest">Servicios</p>
            <div className="flex flex-col gap-3 pl-4">
              <Link href="/servicios/envios-express" onClick={() => setMobileMenuOpen(false)} className="font-body text-xl text-white hover:text-accent">Envíos Express</Link>
              <Link href="/servicios/envios-lowcost" onClick={() => setMobileMenuOpen(false)} className="font-body text-xl text-white hover:text-accent">Envíos LowCost</Link>
              <Link href="/servicios/enviosflex" onClick={() => setMobileMenuOpen(false)} className="font-body text-xl text-white hover:text-accent">Envíos Flex (MeLi)</Link>
              <Link href="/servicios/plan-emprendedores" onClick={() => setMobileMenuOpen(false)} className="font-body text-xl text-white hover:text-accent">E-Commerce & 3PL</Link>
            </div>
          </div>

          <Link href="/contacto" onClick={() => setMobileMenuOpen(false)} className="font-display text-4xl text-white hover:text-accent border-b border-white/10 pb-2">Contacto</Link>

          <div className="mt-auto pt-8 border-t border-white/10">
            <a href="tel:+5492236602699" className="flex items-center gap-4 text-white text-2xl font-subhead tracking-widest">
              <Phone className="text-accent w-8 h-8" /> +54 223 660-2699
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
