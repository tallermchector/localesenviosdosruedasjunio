"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Info,
  HelpCircle,
  Share2,
  Zap,
  DollarSign,
  PackageCheck,
  Building,
  Calculator,
  Briefcase,
  Users,
  House,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// WhatsApp Icon
function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const NOSOTROS_LINKS = [
  { title: "Sobre Nosotros", href: "/nosotros/sobre-nosotros", description: "Conocé nuestra historia, misión y equipo.", icon: Info },
  { title: "Preguntas Frecuentes", href: "/nosotros/preguntas-frecuentes", description: "Respuestas a tus dudas sobre nuestros servicios.", icon: HelpCircle },
  { title: "Nuestras Redes", href: "/nosotros/nuestras-redes", description: "Seguinos para enterarte de las últimas novedades.", icon: Share2 },
];

const SERVICIOS_LINKS = [
  { title: "Envíos Express", href: "/servicios/envios-express", description: "Entregas prioritarias en el día para tus urgencias.", icon: Zap },
  { title: "Envíos LowCost", href: "/servicios/envios-lowcost", description: "Opción económica con entrega asegurada.", icon: DollarSign },
  { title: "Envíos Flex (MeLi)", href: "/servicios/enviosflex", description: "Cumplí con tus SLAs de MercadoLibre Flex.", icon: PackageCheck },
  { title: "E-Commerce & 3PL", href: "/servicios/plan-emprendedores", description: "Soluciones corporativas, cuentas y distribución.", icon: Building },
];

const COTIZAR_LINKS = [
  { title: "Cotizar Express", href: "/cotizar/express", description: "Calculá el valor de tu envío urgente al instante.", icon: Zap },
  { title: "Cotizar LowCost", href: "/cotizar/lowcost", description: "Tarifas competitivas para envíos programados.", icon: DollarSign },
];

const DesktopDropdown = ({ label, links, pathname, icon: Icon }: { label: string; links: any[]; pathname: string; icon: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = links.some((link) => pathname === link.href);

  return (
    <div className="relative h-full flex items-center group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className={`font-subtitle text-[22px] uppercase tracking-[0.05em] flex items-center gap-1.5 transition-colors duration-200 py-2 relative after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-secondary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${isActive || isOpen ? "text-secondary after:scale-x-100" : "text-white hover:text-secondary"}`}>
        {label}
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.2, ease: "easeOut" }} className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[320px]">
            <div className="bg-primary border-2 border-secondary shadow-hard-secondary p-2 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
              <div className="flex flex-col gap-1 mt-1">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className={`flex items-start gap-3 p-3 transition-all duration-200 hover:bg-white/10 group/item ${pathname === link.href ? "bg-white/10" : ""}`}>
                    <div className={`p-2 shrink-0 transition-colors duration-200 border-2 border-transparent group-hover/item:border-secondary ${pathname === link.href ? "text-secondary" : "text-white group-hover/item:text-secondary"}`}>
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`font-subtitle text-xl uppercase tracking-[0.05em] mb-1 ${pathname === link.href ? "text-secondary" : "text-white group-hover/item:text-secondary"}`}>
                        {link.title}
                      </div>
                      <div className="text-white/70 text-sm font-subtitle leading-snug group-hover/item:text-white/90">
                        {link.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileAccordion = ({ label, icon: Icon, links, pathname, delay, onLinkClick }: { label: string; icon: any; links: any[]; pathname: string; delay: number; onLinkClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = links.some((link) => pathname === link.href);

  return (
    <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay }} className="border-b-2 border-white/10">
      <button onClick={() => setIsOpen(!isOpen)} className={`w-full flex items-center justify-between py-4 transition-colors ${isActive ? "text-secondary" : "text-white hover:text-secondary"}`}>
        <div className="flex items-center gap-3 font-title text-3xl uppercase tracking-[0.02em]">
          <Icon className="w-6 h-6" />
          {label}
        </div>
        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
            <div className="flex flex-col gap-2 pb-4 pl-9 pr-2">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={onLinkClick} className={`flex items-center gap-3 p-3 transition-colors duration-200 border-l-4 border-transparent hover:border-secondary hover:bg-white/5 ${pathname === link.href ? "border-secondary bg-white/5" : ""}`}>
                  <div className={`${pathname === link.href ? "text-secondary" : "text-white/70"}`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <div className={`font-subtitle text-xl uppercase tracking-[0.05em] ${pathname === link.href ? "text-secondary" : "text-white/90"}`}>
                    {link.title}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) { document.body.style.overflow = "hidden"; }
    else { document.body.style.overflow = "unset"; }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b-4 border-secondary ${scrolled ? "bg-primary shadow-hard-secondary py-2" : "bg-primary/95 backdrop-blur-md py-4"}`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 relative z-10 group">
            <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden border-2 border-secondary bg-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-hard-secondary p-1">
              <Image src="/logo_envios.webp" alt="Envíos DosRuedas Logo" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-title text-secondary text-2xl md:text-3xl tracking-[0.02em] uppercase leading-none group-hover:text-white transition-colors duration-300">
                DOSRUEDAS
              </span>
              <span className="text-white text-[10px] md:text-xs font-subtitle uppercase tracking-[1px] md:tracking-[2px] mt-0.5 opacity-90">
                Logística E-Commerce
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 h-full">
            <div className="relative h-full flex items-center">
              <Link href="/" className={`font-subtitle text-[22px] uppercase tracking-[0.05em] flex items-center gap-2 transition-colors duration-200 relative after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-secondary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${pathname === "/" ? "text-secondary after:scale-x-100" : "text-white hover:text-secondary"}`}>
                <House className="w-5 h-5" /> Inicio
              </Link>
            </div>
            <DesktopDropdown label="Nosotros" links={NOSOTROS_LINKS} pathname={pathname} icon={Users} />
            <DesktopDropdown label="Servicios" links={SERVICIOS_LINKS} pathname={pathname} icon={Briefcase} />
            <DesktopDropdown label="Cotizar" links={COTIZAR_LINKS} pathname={pathname} icon={Calculator} />
            <div className="relative h-full flex items-center">
              <Link href="/contacto" className={`font-subtitle text-[22px] uppercase tracking-[0.05em] flex items-center gap-2 transition-colors duration-200 relative after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-secondary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${pathname === "/contacto" ? "text-secondary after:scale-x-100" : "text-white hover:text-secondary"}`}>
                <Mail className="w-5 h-5" /> Contacto
              </Link>
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <a href="https://api.whatsapp.com/send/?phone=5492236602699" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white hover:bg-secondary hover:text-primary border-2 border-secondary transition-all duration-300 shadow-hard-secondary active:scale-95 hover:-translate-y-1 hover:-translate-x-1" title="Escribinos por WhatsApp" aria-label="WhatsApp">
              <WhatsAppIcon className="w-6 h-6" />
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden flex items-center text-white hover:text-secondary transition-colors duration-200 p-2 -mr-2 bg-primary border-2 border-secondary shadow-hard-secondary" aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}>
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-8 h-8 text-secondary" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-8 h-8 text-secondary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-primary/80 z-[50] md:hidden" onClick={closeMobileMenu} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed right-0 top-0 bottom-0 w-full max-w-sm z-[60] flex flex-col md:hidden bg-primary border-l-4 border-secondary shadow-hard-secondary">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b-4 border-secondary bg-primary">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden border-2 border-secondary bg-white flex-shrink-0 shadow-hard-secondary p-1">
                    <Image src="/logo_envios.webp" alt="Envíos DosRuedas Logo" fill className="object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title text-secondary text-2xl leading-none uppercase tracking-[0.02em]">
                      DOSRUEDAS
                    </span>
                    <span className="text-white text-[10px] sm:text-xs font-subtitle uppercase tracking-[0.05em] mt-1">
                      TU SOLUCIÓN CONFIABLE
                    </span>
                  </div>
                </div>
                <button onClick={closeMobileMenu} className="text-white hover:text-secondary p-2 -mr-2 transition-colors border-2 border-secondary bg-primary shadow-hard-secondary" aria-label="Cerrar menú">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu items */}
              <nav className="flex-1 overflow-y-auto p-6 gap-2 flex flex-col bg-primary">
                <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                  <Link href="/" onClick={closeMobileMenu} className={`flex items-center gap-3 font-title text-4xl uppercase py-4 border-b-2 border-white/10 transition-colors ${pathname === "/" ? "text-secondary" : "text-white hover:text-secondary"}`}>
                    <House className="w-8 h-8" /> Inicio
                  </Link>
                </motion.div>
                <MobileAccordion label="Nosotros" icon={Users} links={NOSOTROS_LINKS} pathname={pathname} delay={0.15} onLinkClick={closeMobileMenu} />
                <MobileAccordion label="Servicios" icon={Briefcase} links={SERVICIOS_LINKS} pathname={pathname} delay={0.2} onLinkClick={closeMobileMenu} />
                <MobileAccordion label="Cotizar" icon={Calculator} links={COTIZAR_LINKS} pathname={pathname} delay={0.22} onLinkClick={closeMobileMenu} />
                <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.25 }} className="pt-3">
                  <Link href="/contacto" onClick={closeMobileMenu} className={`flex items-center gap-3 font-title text-4xl uppercase py-4 border-b-2 border-white/10 transition-colors ${pathname === "/contacto" ? "text-secondary" : "text-white hover:text-secondary"}`}>
                    <Mail className="w-8 h-8" /> Contacto
                  </Link>
                </motion.div>
              </nav>

              {/* Bottom CTA */}
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }} className="p-6 border-t-4 border-secondary bg-primary">
                <div className="flex flex-col gap-3">
                  <a href="https://api.whatsapp.com/send/?phone=5492236602699" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 text-xl font-title uppercase tracking-[0.02em] bg-[#25D366] text-white hover:bg-secondary hover:text-primary border-2 border-secondary transition-all active:scale-95 shadow-hard-secondary">
                    <WhatsAppIcon className="w-8 h-8" /> WhatsApp
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
