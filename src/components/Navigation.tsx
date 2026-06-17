"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Calculator, ChevronDown, Menu, X, House, Mail } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[300] flex items-center transition-all duration-300 bg-[rgba(30,58,138,0.95)] backdrop-blur-md border-b-2 border-accent ${scrolled ? 'h-20' : 'h-[90px]'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group no-underline">
          <img src="resources/aAjZbwdv-KGfMdCfT3y4Kj" alt="Envíos DosRuedas Logo" className="h-[60px] w-auto object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <div className="flex flex-col brand-text hidden sm:flex">
            <span className="font-headline text-2xl text-white leading-none uppercase">Envíos Dosruedas</span>
            <span className="text-accent text-[0.85rem] font-medium lowercase tracking-[0.5px]">tu solución confiable</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          <div className="h-full flex items-center">
            <Link href="/" className="font-subheadline text-xl text-white uppercase tracking-wider flex items-center gap-2 hover:text-accent transition-colors relative after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-accent after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
              <House className="w-5 h-5" /> Inicio
            </Link>
          </div>

          <div className="group h-full flex items-center relative">
            <button className="font-subheadline text-xl text-white uppercase tracking-wider flex items-center gap-1 hover:text-accent transition-colors">
              Nosotros <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 bg-[#1E3A8A] min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-5 group-hover:translate-y-0 transition-all duration-300 border-t-4 border-accent shadow-2xl p-2">
              <Link href="#nosotros" className="block px-6 py-4 text-white text-base hover:text-accent hover:pl-8 transition-all border-b border-white/5 last:border-0 relative z-10 overflow-hidden after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-white/5 hover:after:left-0 after:transition-all after:-z-10">Sobre Nosotros</Link>
              <Link href="#faq" className="block px-6 py-4 text-white text-base hover:text-accent hover:pl-8 transition-all border-b border-white/5 last:border-0 relative z-10 overflow-hidden after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-white/5 hover:after:left-0 after:transition-all after:-z-10">Preguntas Frecuentes</Link>
              <Link href="#redes" className="block px-6 py-4 text-white text-base hover:text-accent hover:pl-8 transition-all border-b border-white/5 last:border-0 relative z-10 overflow-hidden after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-white/5 hover:after:left-0 after:transition-all after:-z-10">Nuestras Redes</Link>
            </div>
          </div>

          <div className="group h-full flex items-center relative">
            <button className="font-subheadline text-xl text-white uppercase tracking-wider flex items-center gap-1 hover:text-accent transition-colors">
              Servicios <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 bg-[#1E3A8A] min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-5 group-hover:translate-y-0 transition-all duration-300 border-t-4 border-accent shadow-2xl p-2">
              <Link href="/servicios/envios-express" className="block px-6 py-4 text-white text-base hover:text-accent hover:pl-8 transition-all border-b border-white/5 last:border-0">Envíos Express</Link>
              <Link href="/servicios/envios-lowcost" className="block px-6 py-4 text-white text-base hover:text-accent hover:pl-8 transition-all border-b border-white/5 last:border-0">Envíos LowCost</Link>
              <Link href="/servicios/enviosflex" className="block px-6 py-4 text-white text-base hover:text-accent hover:pl-8 transition-all border-b border-white/5 last:border-0">Envíos Flex</Link>
              <Link href="/servicios/plan-emprendedores" className="block px-6 py-4 text-white text-base hover:text-accent hover:pl-8 transition-all border-b border-white/5 last:border-0">E-Commerce & 3PL</Link>
            </div>
          </div>

          <div className="h-full flex items-center">
            <Link href="#contacto" className="font-subheadline text-xl text-white uppercase tracking-wider flex items-center gap-2 hover:text-accent transition-colors relative after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-accent after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
              <Mail className="w-5 h-5" /> Contacto
            </Link>
          </div>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <a href="tel:+5492236602699" className="hidden xl:flex items-center gap-2 text-white font-subheadline text-[1.3rem] tracking-wider hover:text-accent transition-all hover:scale-105">
            <Phone className="w-6 h-6 text-accent animate-pulse" /> +54 223 660-2699
          </a>
          <Link href="/cotizar" className="btn btn-primary h-12 flex items-center gap-2 text-xl px-6">
            <Calculator className="w-5 h-5" /> <span className="hidden sm:inline">Cotizar Envío</span>
          </Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[90px] bg-primary z-[200] flex flex-col p-8 gap-8 animate-in slide-in-from-right lg:hidden">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="font-headline text-4xl text-white hover:text-accent uppercase">Inicio</Link>
          <Link href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="font-headline text-4xl text-white hover:text-accent uppercase">Nosotros</Link>
          <Link href="#servicios" onClick={() => setMobileMenuOpen(false)} className="font-headline text-4xl text-white hover:text-accent uppercase">Servicios</Link>
          <Link href="#contacto" onClick={() => setMobileMenuOpen(false)} className="font-headline text-4xl text-white hover:text-accent uppercase">Contacto</Link>
          <div className="mt-auto flex flex-col gap-6">
             <a href="tel:+5492236602699" className="flex items-center gap-4 text-white text-2xl font-subheadline tracking-wider">
               <Phone className="text-accent w-8 h-8" /> +54 223 660-2699
             </a>
          </div>
        </div>
      )}
    </header>
  );
}