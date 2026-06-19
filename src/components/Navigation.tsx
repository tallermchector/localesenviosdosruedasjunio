"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Phone,
  Calculator,
  ChevronDown,
  Menu,
  X,
  House,
  Mail,
  Users,
  Briefcase,
  Info,
  HelpCircle,
  Share2,
  Zap,
  Coins,
  Shuffle,
  ShoppingCart
} from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNosotrosOpen, setIsNosotrosOpen] = useState(false);
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);
  
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Click outside detection on desktop to auto-close submenus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNosotrosOpen(false);
        setIsServiciosOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Auto-close submenus and mobile menu on pathname change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsNosotrosOpen(false);
    setIsServiciosOpen(false);
  }, [pathname]);

  const isHomeActive = pathname === "/";
  const isContactoActive = pathname === "/contacto";
  const isNosotrosActive = pathname.startsWith("/nosotros");
  const isServiciosActive = pathname.startsWith("/servicios");

  return (
    <>
      <header 
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-40 flex items-center transition-all duration-300 bg-white/95 backdrop-blur-xl border-b-2 border-accent h-[90px]`}
      >
        <div className="container px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
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
              <span className="font-display text-2xl text-[#1E3A8A] leading-none uppercase">ENVIOS DOSRUEDAS</span>
              <span className="text-accent text-sm font-body uppercase tracking-[0.5px]">TU SOLUCION CONFIABLE</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            {/* Inicio */}
            <div className="relative h-full flex items-center">
              <Link 
                href="/" 
                className="flex items-center gap-3 text-[#1E3A8A] hover:text-[#EAB308] transition-colors font-subhead text-2xl uppercase tracking-wider group"
              >
                <House className={`w-5 h-5 transition-colors ${isHomeActive ? 'text-[#EAB308]' : 'text-[#1E3A8A] group-hover:text-[#EAB308]'}`} />
                <span>Inicio</span>
              </Link>
            </div>

            {/* Nosotros */}
            <div className="relative h-full flex items-center">
              <button 
                onClick={() => {
                  setIsNosotrosOpen(!isNosotrosOpen);
                  setIsServiciosOpen(false);
                }}
                aria-expanded={isNosotrosOpen}
                aria-controls="nosotros-submenu-desktop"
                className="flex items-center gap-3 text-[#1E3A8A] hover:text-[#EAB308] transition-colors font-subhead text-2xl uppercase tracking-wider group"
              >
                <Users className={`w-5 h-5 transition-colors ${isNosotrosActive || isNosotrosOpen ? 'text-[#EAB308]' : 'text-[#1E3A8A] group-hover:text-[#EAB308]'}`} />
                <span>Nosotros</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isNosotrosOpen ? 'rotate-180 text-[#EAB308]' : 'text-[#1E3A8A] group-hover:text-[#EAB308]'}`} />
              </button>

              {/* Nosotros Dropdown */}
              <div 
                id="nosotros-submenu-desktop"
                className={`absolute top-full left-0 bg-white min-w-[240px] transition-all duration-300 border-t-[3px] border-accent rounded-b-lg shadow-2xl z-50 ${
                  isNosotrosOpen 
                    ? "opacity-100 visible translate-y-0" 
                    : "opacity-0 invisible translate-y-2 pointer-events-none"
                }`}
              >
                <Link 
                  href="/nosotros/sobre-nosotros" 
                  className="flex items-center gap-3 px-6 py-4 text-[#1E3A8A] hover:text-[#EAB308] text-lg font-body hover:pl-8 transition-all border-b border-slate-100 last:border-0"
                >
                  <Info className="w-5 h-5 text-[#EAB308]" />
                  <span>Sobre Nosotros</span>
                </Link>
                <Link 
                  href="/nosotros/preguntas-frecuentes" 
                  className="flex items-center gap-3 px-6 py-4 text-[#1E3A8A] hover:text-[#EAB308] text-lg font-body hover:pl-8 transition-all border-b border-slate-100 last:border-0"
                >
                  <HelpCircle className="w-5 h-5 text-[#EAB308]" />
                  <span>Preguntas Frecuentes</span>
                </Link>
                <Link 
                  href="/nosotros/nuestras-redes" 
                  className="flex items-center gap-3 px-6 py-4 text-[#1E3A8A] hover:text-[#EAB308] text-lg font-body hover:pl-8 transition-all border-b border-slate-100 last:border-0"
                >
                  <Share2 className="w-5 h-5 text-[#EAB308]" />
                  <span>Nuestras Redes</span>
                </Link>
              </div>
            </div>

            {/* Servicios */}
            <div className="relative h-full flex items-center">
              <button 
                onClick={() => {
                  setIsServiciosOpen(!isServiciosOpen);
                  setIsNosotrosOpen(false);
                }}
                aria-expanded={isServiciosOpen}
                aria-controls="servicios-submenu-desktop"
                className="flex items-center gap-3 text-[#1E3A8A] hover:text-[#EAB308] transition-colors font-subhead text-2xl uppercase tracking-wider group"
              >
                <Briefcase className={`w-5 h-5 transition-colors ${isServiciosActive || isServiciosOpen ? 'text-[#EAB308]' : 'text-[#1E3A8A] group-hover:text-[#EAB308]'}`} />
                <span>Servicios</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServiciosOpen ? 'rotate-180 text-[#EAB308]' : 'text-[#1E3A8A] group-hover:text-[#EAB308]'}`} />
              </button>

              {/* Servicios Dropdown */}
              <div 
                id="servicios-submenu-desktop"
                className={`absolute top-full left-0 bg-white min-w-[240px] transition-all duration-300 border-t-[3px] border-accent rounded-b-lg shadow-2xl z-50 ${
                  isServiciosOpen 
                    ? "opacity-100 visible translate-y-0" 
                    : "opacity-0 invisible translate-y-2 pointer-events-none"
                }`}
              >
                <Link 
                  href="/servicios/envios-express" 
                  className="flex items-center gap-3 px-6 py-4 text-[#1E3A8A] hover:text-[#EAB308] text-lg font-body hover:pl-8 transition-all border-b border-slate-100 last:border-0"
                >
                  <Zap className="w-5 h-5 text-[#EAB308]" />
                  <span>Envíos Express</span>
                </Link>
                <Link 
                  href="/servicios/envios-lowcost" 
                  className="flex items-center gap-3 px-6 py-4 text-[#1E3A8A] hover:text-[#EAB308] text-lg font-body hover:pl-8 transition-all border-b border-slate-100 last:border-0"
                >
                  <Coins className="w-5 h-5 text-[#EAB308]" />
                  <span>Envíos LowCost</span>
                </Link>
                <Link 
                  href="/servicios/enviosflex" 
                  className="flex items-center gap-3 px-6 py-4 text-[#1E3A8A] hover:text-[#EAB308] text-lg font-body hover:pl-8 transition-all border-b border-slate-100 last:border-0"
                >
                  <Shuffle className="w-5 h-5 text-[#EAB308]" />
                  <span>Envíos Flex (MeLi)</span>
                </Link>
                <Link 
                  href="/servicios/plan-emprendedores" 
                  className="flex items-center gap-3 px-6 py-4 text-[#1E3A8A] hover:text-[#EAB308] text-lg font-body hover:pl-8 transition-all border-b border-slate-100 last:border-0"
                >
                  <ShoppingCart className="w-5 h-5 text-[#EAB308]" />
                  <span>E-Commerce & 3PL</span>
                </Link>
              </div>
            </div>

            {/* Contacto */}
            <div className="relative h-full flex items-center">
              <Link 
                href="/contacto" 
                className="flex items-center gap-3 text-[#1E3A8A] hover:text-[#EAB308] transition-colors font-subhead text-2xl uppercase tracking-wider group"
              >
                <Mail className={`w-5 h-5 transition-colors ${isContactoActive ? 'text-[#EAB308]' : 'text-[#1E3A8A] group-hover:text-[#EAB308]'}`} />
                <span>Contacto</span>
              </Link>
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:+5492236602699" 
              className="hidden xl:flex items-center gap-2 text-[#1E3A8A] font-subhead text-2xl tracking-widest hover:text-[#EAB308] transition-all hover:scale-105"
            >
              <Phone className="w-6 h-6 text-[#EAB308] animate-bounce" /> 
              <span>+54 223 660-2699</span>
            </a>
            <Link 
              href="/contacto" 
              className="btn btn-primary h-12 flex items-center gap-2 text-xl px-6 rounded-lg transition-transform active:scale-95 shadow-[4px_4px_0px_rgba(0,0,0,0.1)]"
            >
              <Calculator className="w-5 h-5" /> 
              <span className="hidden sm:inline">Cotizar Envío</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center text-[#1E3A8A] hover:text-[#EAB308] transition-colors"
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-8 h-8 text-[#EAB308]" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[90px] bg-white z-50 flex flex-col p-8 gap-6 overflow-y-auto md:hidden animate-in slide-in-from-right duration-300 border-t border-slate-100 shadow-2xl">
          {/* Inicio */}
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className="flex items-center gap-3 text-[#1E3A8A] hover:text-[#EAB308] transition-colors font-subhead text-3xl uppercase tracking-wider pb-2 border-b border-slate-100 group"
          >
            <House className={`w-6 h-6 transition-colors ${isHomeActive ? 'text-[#EAB308]' : 'text-[#1E3A8A] group-hover:text-[#EAB308]'}`} />
            <span>Inicio</span>
          </Link>

          {/* Nosotros Section */}
          <div className="space-y-2">
            <button 
              onClick={() => setIsNosotrosOpen(!isNosotrosOpen)}
              aria-expanded={isNosotrosOpen}
              aria-controls="nosotros-submenu-mobile"
              className="w-full flex items-center justify-between text-[#1E3A8A] hover:text-[#EAB308] transition-colors font-subhead text-2xl uppercase tracking-widest pb-1 border-b border-slate-100 group"
            >
              <div className="flex items-center gap-3">
                <Users className={`w-5 h-5 transition-colors ${isNosotrosActive || isNosotrosOpen ? 'text-[#EAB308]' : 'text-[#1E3A8A] group-hover:text-[#EAB308]'}`} />
                <span>Nosotros</span>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isNosotrosOpen ? 'rotate-180 text-[#EAB308]' : 'text-[#1E3A8A] group-hover:text-[#EAB308]'}`} />
            </button>
            <div 
              id="nosotros-submenu-mobile"
              className={`flex flex-col gap-2 pl-4 overflow-hidden transition-all duration-300 ${
                isNosotrosOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <Link 
                href="/nosotros/sobre-nosotros" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center gap-3 font-body text-lg py-2 text-[#1E3A8A] hover:text-[#EAB308]"
              >
                <Info className="w-4 h-4 text-[#EAB308]" />
                <span>Sobre Nosotros</span>
              </Link>
              <Link 
                href="/nosotros/preguntas-frecuentes" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center gap-3 font-body text-lg py-2 text-[#1E3A8A] hover:text-[#EAB308]"
              >
                <HelpCircle className="w-4 h-4 text-[#EAB308]" />
                <span>Preguntas Frecuentes</span>
              </Link>
              <Link 
                href="/nosotros/nuestras-redes" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center gap-3 font-body text-lg py-2 text-[#1E3A8A] hover:text-[#EAB308]"
              >
                <Share2 className="w-4 h-4 text-[#EAB308]" />
                <span>Nuestras Redes</span>
              </Link>
            </div>
          </div>

          {/* Servicios Section */}
          <div className="space-y-2">
            <button 
              onClick={() => setIsServiciosOpen(!isServiciosOpen)}
              aria-expanded={isServiciosOpen}
              aria-controls="servicios-submenu-mobile"
              className="w-full flex items-center justify-between text-[#1E3A8A] hover:text-[#EAB308] transition-colors font-subhead text-2xl uppercase tracking-widest pb-1 border-b border-slate-100 group"
            >
              <div className="flex items-center gap-3">
                <Briefcase className={`w-5 h-5 transition-colors ${isServiciosActive || isServiciosOpen ? 'text-[#EAB308]' : 'text-[#1E3A8A] group-hover:text-[#EAB308]'}`} />
                <span>Servicios</span>
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServiciosOpen ? 'rotate-180 text-[#EAB308]' : 'text-[#1E3A8A] group-hover:text-[#EAB308]'}`} />
            </button>
            <div 
              id="servicios-submenu-mobile"
              className={`flex flex-col gap-2 pl-4 overflow-hidden transition-all duration-300 ${
                isServiciosOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <Link 
                href="/servicios/envios-express" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center gap-3 font-body text-lg py-2 text-[#1E3A8A] hover:text-[#EAB308]"
              >
                <Zap className="w-4 h-4 text-[#EAB308]" />
                <span>Envíos Express</span>
              </Link>
              <Link 
                href="/servicios/envios-lowcost" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center gap-3 font-body text-lg py-2 text-[#1E3A8A] hover:text-[#EAB308]"
              >
                <Coins className="w-4 h-4 text-[#EAB308]" />
                <span>Envíos LowCost</span>
              </Link>
              <Link 
                href="/servicios/enviosflex" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center gap-3 font-body text-lg py-2 text-[#1E3A8A] hover:text-[#EAB308]"
              >
                <Shuffle className="w-4 h-4 text-[#EAB308]" />
                <span>Envíos Flex (MeLi)</span>
              </Link>
              <Link 
                href="/servicios/plan-emprendedores" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center gap-3 font-body text-lg py-2 text-[#1E3A8A] hover:text-[#EAB308]"
              >
                <ShoppingCart className="w-4 h-4 text-[#EAB308]" />
                <span>E-Commerce & 3PL</span>
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <Link 
            href="/contacto" 
            onClick={() => setMobileMenuOpen(false)} 
            className="flex items-center gap-3 text-[#1E3A8A] hover:text-[#EAB308] transition-colors font-subhead text-3xl uppercase tracking-wider pb-2 border-b border-slate-100 group"
          >
            <Mail className={`w-6 h-6 transition-colors ${isContactoActive ? 'text-[#EAB308]' : 'text-[#1E3A8A] group-hover:text-[#EAB308]'}`} />
            <span>Contacto</span>
          </Link>

          {/* Mobile Bottom Footer */}
          <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col gap-4">
            <a 
              href="tel:+5492236602699" 
              className="flex items-center gap-3 text-[#1E3A8A] text-2xl font-subhead tracking-widest hover:text-[#EAB308] transition-colors group"
            >
              <Phone className="text-[#EAB308] w-6 h-6 animate-bounce" /> 
              <span>+54 223 660-2699</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
