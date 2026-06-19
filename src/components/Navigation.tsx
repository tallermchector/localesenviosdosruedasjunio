"use client";

import React, { useState, useEffect } from "react";
import { 
  Phone, Calculator, ChevronDown, Menu, X, Landmark, Compass, Shield, MapPin, 
  Inbox, Truck, UserCheck, Zap, Clock, Package, Building2, ShieldCheck, Mail, Share2,
  Home
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const navGroups = [
  {
    label: 'Servicios',
    basePath: '/servicios',
    icon: Truck,
    items: [
      { label: 'Envíos Express', href: '#servicios', icon: Zap },
      { label: 'Envíos LowCost', href: '#servicios', icon: Clock },
      { label: 'Envíos Flex (MeLi)', href: '#servicios', icon: Package },
      { label: 'E-Commerce & 3PL', href: '#soluciones', icon: Building2 },
    ],
  },
  {
    label: 'Nosotros',
    basePath: '/nosotros',
    icon: Building2,
    items: [
      { label: 'Sobre Nosotros', href: '#vision', icon: ShieldCheck },
      { label: 'Preguntas Frecuentes', href: '#vision', icon: Mail },
      { label: 'Nuestras Redes', href: '#social-community', icon: Share2 },
    ],
  },
];

interface HeaderProps {
  onQuoteClick?: () => void;
  onTrackingClick?: () => void;
}

export function Navigation({ onQuoteClick, onTrackingClick }: HeaderProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<{ [key: string]: boolean }>({
    'Servicios': false,
    'Nosotros': false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        setMobileMenuOpen(false);
      }
    }
  };

  const handleQuoteClickAction = () => {
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      const element = document.getElementById("contacto");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        window.location.href = "/contacto";
      }
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 border-b-4 border-accent ${
        scrolled 
          ? "bg-primary/95 backdrop-blur-md shadow-neo h-[80px]" 
          : "bg-primary h-[90px]"
      } flex items-center`}>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-full">
          {/* Brand Logo & Slogan */}
          <a href="/" className="flex items-center gap-3 group focus:outline-none select-none">
            <div className="w-12 h-12 bg-accent rounded-xl border-2 border-primary-navy shadow-neo flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              <Truck className="w-7 h-7 text-primary-navy" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl tracking-wider text-white uppercase leading-none">
                ENVÍOS DOSRUEDAS
              </span>
              <span className="font-sans text-xs font-semibold text-accent uppercase tracking-widest mt-0.5">
                TU SOLUCIÓN CONFIABLE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            <div className="relative group">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="font-subhead text-xl tracking-wider text-white hover:text-accent flex items-center gap-1.5 transition-colors duration-200"
              >
                <Home className="w-4 h-4 text-accent transition-transform duration-300 group-hover:rotate-12" />
                <span>INICIO</span>
              </a>
            </div>

            {/* Dynamically Render navGroups */}
            {navGroups.map((group) => {
              const GroupIcon = group.icon;
              return (
                <div key={group.label} className="relative group">
                  <button 
                    onClick={() => toggleDropdown(group.label)}
                    className="font-subhead text-xl tracking-wider text-white hover:text-accent flex items-center gap-1.5 focus:outline-none cursor-pointer"
                  >
                    <GroupIcon className="w-4 h-4 text-accent transition-transform duration-300 group-hover:rotate-12" />
                    <span>{group.label.toUpperCase()}</span> 
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180 text-accent/80" />
                  </button>
                  
                  {/* Visual dropdown card with neo-brutal shadow and smooth translation transition */}
                  <div className="absolute top-[calc(100%+8px)] left-0 w-64 bg-primary-navy border-2 border-accent rounded-xl shadow-neo opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 overflow-hidden z-50 before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 before:content-['']">
                    <div className="divide-y-2 divide-primary-container">
                      {group.items.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <a 
                            key={item.label}
                            href={item.href} 
                            onClick={(e) => handleSmoothScroll(e, item.href)}
                            className="group/item flex items-center justify-between px-5 py-3.5 text-white bg-primary-navy hover:bg-primary transition-all duration-200 border-l-4 border-transparent hover:border-accent"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-primary-container/40 flex items-center justify-center transition-colors duration-200 group-hover/item:bg-accent/15">
                                <ItemIcon className="w-4.5 h-4.5 text-accent transition-transform duration-200 group-hover/item:scale-110 group-hover/item:rotate-3" />
                              </div>
                              <span className="font-sans text-sm font-bold tracking-wide transition-colors duration-200 group-hover/item:text-accent">
                                {item.label}
                              </span>
                            </div>
                            
                            {/* Sledding arrow indicator */}
                            <span className="opacity-0 -translate-x-2 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-accent font-sans text-base font-bold">
                              &rarr;
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="relative group">
              <a 
                href="#contacto" 
                onClick={(e) => handleSmoothScroll(e, "#contacto")}
                className="font-subhead text-xl tracking-wider text-white hover:text-accent flex items-center gap-1.5 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-accent transition-transform duration-300 group-hover:rotate-12" />
                <span>CONTACTO</span>
              </a>
            </div>
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-3">
            <a 
              href="tel:+5492236602699" 
              className="hidden sm:flex items-center gap-2 text-white hover:text-accent font-subhead text-lg tracking-wider transition-all duration-300"
              aria-label="Llamar a Envíos DosRuedas"
            >
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                <Phone className="w-4 h-4 text-accent animate-bounce" />
              </div>
              <span className="whitespace-nowrap">+54 223 660-2699</span>
            </a>

            {/* Cotizar CTA */}
            <button
              onClick={handleQuoteClickAction}
              className="px-4 sm:px-5 py-2.5 bg-accent text-primary-navy font-subhead text-base sm:text-lg tracking-wider border-2 border-primary-navy rounded-xl shadow-neo transition-all duration-200 hover:-translate-y-1 hover:translate-x-[-1px] hover:shadow-neo-yellow active:translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <Calculator className="w-4.5 h-4.5 shrink-0" />
              <span className="hidden xs:inline">COTIZAR ENVÍO</span>
              <span className="xs:hidden">COTIZAR</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-white hover:bg-primary-container rounded-xl border-2 border-transparent hover:border-accent active:bg-primary transition-all cursor-pointer"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-[1050]"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer Slide-in Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            className="lg:hidden fixed right-0 top-0 bottom-0 h-full w-[85%] max-w-[380px] bg-primary border-l-4 border-accent shadow-[-8px_0_0px_0px_#111c38] z-[1100] flex flex-col overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 bg-primary-navy border-b-4 border-accent shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-accent rounded-xl border-2 border-primary-navy shadow-neo flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary-navy" />
                </div>
                <span className="font-display text-lg tracking-wider text-white">DOSRUEDAS</span>
              </div>
              
              {/* Close button with chunky neo-brutalist feel */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 bg-accent text-primary-navy border-2 border-primary-navy rounded-xl shadow-neo transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0.5 active:translate-x-0.5 active:shadow-none cursor-pointer flex items-center justify-center"
                aria-label="Cerrar menú"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable drawer body */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 pb-16">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}
                className="flex items-center justify-between px-4 py-3.5 bg-primary-navy/20 border-2 border-primary-navy rounded-xl shadow-neo text-white hover:text-accent font-subhead text-lg tracking-wide uppercase transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Home className="w-5 h-5 text-accent animate-pulse" />
                  <span>INICIO</span>
                </div>
              </a>
              
              {navGroups.map((group) => {
                const GroupIcon = group.icon;
                const isOpen = !!mobileDropdownOpen[group.label];
                return (
                  <div key={group.label} className="flex flex-col bg-primary-navy/40 border-2 border-primary-navy rounded-xl overflow-hidden shadow-neo transition-all duration-300">
                    <button 
                      onClick={() => toggleMobileDropdown(group.label)}
                      className="flex items-center justify-between px-4 py-3.5 bg-primary-navy/20 text-white hover:text-accent font-subhead text-lg tracking-wide uppercase transition-colors text-left focus:outline-none cursor-pointer w-full"
                    >
                      <div className="flex items-center gap-2.5">
                        <GroupIcon className="w-5 h-5 text-accent" />
                        <span>{group.label}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden bg-primary-navy/10 border-t border-primary-navy"
                        >
                          <div className="px-3.5 py-3.5 flex flex-col gap-3">
                            {group.items.map((item) => {
                              const ItemIcon = item.icon;
                              return (
                                <a 
                                  key={item.label}
                                  href={item.href} 
                                  onClick={(e) => handleSmoothScroll(e, item.href)}
                                  className="flex items-center gap-3.5 text-white hover:text-accent font-sans text-sm py-1.5 transition-colors group/item"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-primary-container/40 flex items-center justify-center border border-white/5 shrink-0">
                                    <ItemIcon className="w-4 h-4 text-accent" />
                                  </div>
                                  <span className="font-semibold">{item.label}</span>
                                </a>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <a 
                href="#contacto" 
                onClick={(e) => handleSmoothScroll(e, "#contacto")}
                className="flex items-center justify-between px-4 py-3.5 bg-primary-navy/20 border-2 border-primary-navy rounded-xl shadow-neo text-white hover:text-accent font-subhead text-lg tracking-wide uppercase transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>CONTACTO</span>
                </div>
              </a>

              <div className="mt-6 flex flex-col gap-4">
                <a 
                  href="tel:+5492236602699" 
                  className="flex items-center gap-3 text-white font-subhead text-lg tracking-wide justify-center bg-primary-navy/40 py-3.5 border-2 border-primary-navy rounded-xl shadow-neo hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent animate-bounce" />
                  <span>+54 223 660-2699</span>
                </a>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleQuoteClickAction();
                  }}
                  className="w-full text-center bg-accent text-primary-navy font-subhead text-lg py-3.5 rounded-xl border-2 border-primary-navy shadow-neo hover:translate-x-[-1px] hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer uppercase tracking-wider font-bold transition-all duration-200"
                >
                  CALCULAR ENVÍO AHORA
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export { Navigation as Header };
export default Navigation;
