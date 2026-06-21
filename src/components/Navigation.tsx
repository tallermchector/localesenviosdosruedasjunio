"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  Phone,
  Calculator,
  ChevronDown,
  Menu,
  X,
  House,
  Mail,
  ArrowRight,
  Users,
  HelpCircle,
  Share2,
  Zap,
  Wallet,
  ShoppingBag,
  Truck,
  Briefcase,
  DollarSign,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// ── Static data ──────────────────────────────────────────────
type NavLink = { href: string; label: string; icon: LucideIcon };

const NOSOTROS_LINKS: NavLink[] = [
  { href: "/nosotros/sobre-nosotros", label: "Sobre Nosotros", icon: Users },
  { href: "/nosotros/preguntas-frecuentes", label: "Preguntas Frecuentes", icon: HelpCircle },
  { href: "/nosotros/nuestras-redes", label: "Nuestras Redes", icon: Share2 },
];

const SERVICIOS_LINKS: NavLink[] = [
  { href: "/servicios/envios-express", label: "Envíos Express", icon: Zap },
  { href: "/servicios/envios-lowcost", label: "Envíos LowCost", icon: Wallet },
  { href: "/servicios/enviosflex", label: "Envíos Flex (MeLi)", icon: Truck },
  { href: "/servicios/plan-emprendedores", label: "E-Commerce & 3PL", icon: ShoppingBag },
];

const COTIZAR_LINKS: NavLink[] = [
  { href: "/cotizar/express", label: "Cotizar Express", icon: Zap },
  { href: "/cotizar/lowcost", label: "Cotizar LowCost", icon: DollarSign },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12.012 2c-5.506 0-9.987 4.479-9.987 9.987 0 1.763.46 3.42 1.262 4.876L2 22l5.282-1.386c1.4.762 3.003 1.199 4.714 1.199 5.506 0 9.987-4.479 9.987-9.987 0-5.506-4.48-9.987-9.972-9.987zm6.059 13.916c-.247.697-1.246 1.365-1.724 1.455-.472.09-1.07.165-1.724-.045-.412-.135-.93-.315-1.605-.597-2.857-1.19-4.71-4.084-4.852-4.275-.143-.19-1.147-1.52-1.147-2.905 0-1.386.727-2.067.986-2.337.259-.27.569-.337.76-.337.19 0 .385.004.55.012.176.007.412-.067.643.483.242.576.822 1.996.892 2.14.072.143.12.31.025.5-.095.19-.142.307-.282.472-.142.164-.298.366-.425.49-.142.14-.293.292-.127.575.166.28.736 1.21 1.579 1.96.76.678 1.401.888 1.723 1.05.321.162.51.139.7-.08.19-.22.822-.958 1.042-1.285.22-.327.44-.27.74-.158.3.112 1.905.897 2.234 1.062.33.165.55.247.632.39.083.142.083.824-.165 1.522z" />
    </svg>
  );
}

// ── Subcomponents ────────────────────────────────────────────

function DropdownItem({
  href,
  label,
  icon: Icon,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group/item flex items-center gap-3 px-5 py-3.5 text-[15px] font-body transition-all duration-200 border-b border-white/[0.06] last:border-0 ${isActive
        ? "text-accent bg-white/[0.08] pl-6"
        : "text-white/90 hover:text-accent hover:bg-white/[0.06] hover:pl-6"
        }`}
    >
      <Icon
        className={`w-4 h-4 transition-all duration-200 ${isActive
          ? "text-accent"
          : "text-white/50 group-hover/item:text-accent"
          }`}
      />
      {label}
    </Link>
  );
}

function DesktopDropdown({
  label,
  links,
  pathname,
  icon: Icon,
}: {
  label: string;
  links: NavLink[];
  icon: LucideIcon;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }, []);

  const handleLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }, []);

  const isGroupActive = links.some((l) => pathname.startsWith(l.href));

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={`font-subhead text-[22px] uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-200 ${isGroupActive ? "text-accent" : "text-white hover:text-accent"
          }`}
        aria-expanded={open}
        onClick={() => setOpen((p) => !p)}
      >
        <Icon className="w-5 h-5" />
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-full left-0 min-w-[240px] origin-top-left rounded-b-xl overflow-hidden border-t-[3px] border-accent shadow-2xl shadow-black/30"
            style={{
              background:
                "linear-gradient(135deg, rgba(30,58,138,0.97) 0%, rgba(17,28,56,0.98) 100%)",
              backdropFilter: "blur(16px)",
            }}
          >
            {links.map((link) => (
              <DropdownItem
                key={link.href}
                href={link.href}
                label={link.label}
                icon={link.icon}
                isActive={pathname.startsWith(link.href)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({
  label,
  icon: Icon,
  links,
  pathname,
  delay,
  onLinkClick,
}: {
  label: string;
  icon: LucideIcon;
  links: NavLink[];
  pathname: string;
  delay: number;
  onLinkClick: () => void;
}) {
  const [open, setOpen] = useState(false);
  const isGroupActive = links.some((l) => pathname.startsWith(l.href));

  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className={`flex items-center gap-3 w-full font-display text-3xl uppercase py-3 border-b border-white/[0.08] transition-colors ${isGroupActive ? "text-accent" : "text-white hover:text-accent"
          }`}
      >
        <Icon className="w-6 h-6" />
        {label}
        <ChevronDown
          className={`w-5 h-5 ml-auto transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pl-3 py-2 border-l-2 border-accent/20 ml-3">
              {links.map((link) => {
                const SubIcon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onLinkClick}
                    className={`flex items-center gap-3 font-body text-lg py-2.5 pl-3 rounded-r-lg transition-all duration-200 ${pathname.startsWith(link.href)
                      ? "text-accent bg-accent/[0.08] border-l-2 border-accent -ml-[2px]"
                      : "text-white/80 hover:text-accent hover:bg-white/[0.04]"
                      }`}
                  >
                    <SubIcon
                      className={`w-4 h-4 flex-shrink-0 ${pathname.startsWith(link.href)
                        ? "text-accent"
                        : "text-white/40"
                        }`}
                    />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Main component ───────────────────────────────────────────

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      {/* ─── Header ─── */}
      <header
        className={`fixed top-0 left-0 w-full z-40 flex items-center border-b-2 border-accent transition-all duration-500 ease-out ${scrolled
          ? "h-[70px] shadow-xl shadow-black/20"
          : "h-[90px] shadow-none"
          }`}
        style={{
          background: scrolled
            ? "linear-gradient(135deg, rgba(17,28,56,0.98) 0%, rgba(30,58,138,0.95) 100%)"
            : "linear-gradient(135deg, rgba(30,58,138,0.95) 0%, rgba(17,28,56,0.90) 100%)",
          backdropFilter: "blur(20px) saturate(1.8)",
          WebkitBackdropFilter: "blur(20px) saturate(1.8)",
        }}
      >
        {/* Subtle top gradient line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-4 group no-underline relative p-2 -m-2"
          >
            <div
              className={`relative transition-all duration-500 ease-out ${scrolled
                ? "h-[42px] w-[42px] sm:h-[48px] sm:w-[48px]"
                : "h-[50px] w-[50px] sm:h-[60px] sm:w-[60px]"
                }`}
            >
              <Image
                src="/logo_envios.webp"
                alt="Envíos DosRuedas Logo"
                fill
                sizes="(max-width: 768px) 50px, 60px"
                className="object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex-col brand-text hidden xl:flex">
              <span
                className={`font-display text-white leading-none uppercase transition-all duration-500 ${scrolled ? "text-xl" : "text-2xl"
                  }`}
              >
                ENVIOS DOSRUEDAS
              </span>
              <span className="text-accent text-sm font-body uppercase tracking-[0.5px]">
                TU SOLUCION CONFIABLE
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-5 xl:gap-6 h-full">
            <div className="relative h-full flex items-center">
              <Link
                href="/"
                className={`font-subhead text-[22px] uppercase tracking-wider flex items-center gap-2 transition-colors duration-200 relative after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-accent after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${pathname === "/"
                  ? "text-accent after:scale-x-100"
                  : "text-white hover:text-accent"
                  }`}
              >
                <House className="w-5 h-5" /> Inicio
              </Link>
            </div>

            <DesktopDropdown
              label="Nosotros"
              links={NOSOTROS_LINKS}
              pathname={pathname}
              icon={Users}
            />
            <DesktopDropdown
              label="Servicios"
              links={SERVICIOS_LINKS}
              pathname={pathname}
              icon={Briefcase}
            />
            <DesktopDropdown
              label="Cotizar"
              links={COTIZAR_LINKS}
              pathname={pathname}
              icon={Calculator}
            />

            <div className="relative h-full flex items-center">
              <Link
                href="/contacto"
                className={`font-subhead text-[22px] uppercase tracking-wider flex items-center gap-2 transition-colors duration-200 relative after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-accent after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${pathname === "/contacto"
                  ? "text-accent after:scale-x-100"
                  : "text-white hover:text-accent"
                  }`}
              >
                <Mail className="w-5 h-5" /> Contacto
              </Link>
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <a
              href="https://api.whatsapp.com/send/?phone=5492236602699"
              target="_blank; noreferrer"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:bg-[#22c35e] transition-all duration-300 shadow-md active:scale-95 hover:scale-105"
              title="Escribinos por WhatsApp"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            <Link
              href="/contacto"
              className={`btn btn-primary flex items-center gap-2 text-base px-4 rounded-lg transition-all duration-200 active:scale-95 shadow-md lg:text-xl lg:px-6 lg:shadow-[4px_4px_0px_rgba(0,0,0,0.1)] ${scrolled ? "h-9 lg:h-10" : "h-10 lg:h-12"
                }`}
            >
              <Calculator className="w-5 h-5" />
              <span className="hidden sm:inline">Cotizar Envío</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center text-white hover:text-accent transition-colors duration-200 p-2 -mr-2"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-8 h-8 text-accent" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-8 h-8" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 z-[50] md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm z-[60] flex flex-col md:hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(17,28,56,0.99) 0%, rgba(30,58,138,0.98) 50%, rgba(17,28,56,0.99) 100%)",
                backdropFilter: "blur(24px)",
              }}
            >
              {/* Header inside Mobile Menu Panel */}
              <div className="flex items-center justify-between p-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/20 bg-slate-900/50 flex-shrink-0">
                    <Image
                      src="/logo_envios.webp"
                      alt="Envíos DosRuedas Logo"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-accent text-xl leading-none uppercase">
                      ENVIOS DOSRUEDAS
                    </span>
                    <span className="text-white/80 text-[10px] sm:text-xs font-body uppercase tracking-[0.5px] mt-1">
                      TU SOLUCION CONFIABLE
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="text-white/70 hover:text-accent p-2 -mr-2 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Accent line */}
              <div className="h-[3px] bg-gradient-to-r from-accent via-accent/50 to-transparent" />

              {/* Scrollable menu items */}
              <nav className="flex-1 overflow-y-auto p-6 gap-2 flex flex-col">
                {/* Inicio */}
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={`flex items-center gap-3 font-display text-3xl uppercase py-3 border-b border-white/[0.08] transition-colors ${pathname === "/" ? "text-accent" : "text-white hover:text-accent"
                      }`}
                  >
                    <House className="w-6 h-6" />
                    Inicio
                  </Link>
                </motion.div>

                {/* Nosotros Accordion */}
                <MobileAccordion
                  label="Nosotros"
                  icon={Users}
                  links={NOSOTROS_LINKS}
                  pathname={pathname}
                  delay={0.15}
                  onLinkClick={closeMobileMenu}
                />

                {/* Servicios Accordion */}
                <MobileAccordion
                  label="Servicios"
                  icon={Briefcase}
                  links={SERVICIOS_LINKS}
                  pathname={pathname}
                  delay={0.2}
                  onLinkClick={closeMobileMenu}
                />

                {/* Cotizar Accordion */}
                <MobileAccordion
                  label="Cotizar"
                  icon={Calculator}
                  links={COTIZAR_LINKS}
                  pathname={pathname}
                  delay={0.22}
                  onLinkClick={closeMobileMenu}
                />

                {/* Contacto */}
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="pt-3"
                >
                  <Link
                    href="/contacto"
                    onClick={closeMobileMenu}
                    className={`flex items-center gap-3 font-display text-3xl uppercase py-3 border-b border-white/[0.08] transition-colors ${pathname === "/contacto"
                      ? "text-accent"
                      : "text-white hover:text-accent"
                      }`}
                  >
                    <Mail className="w-6 h-6" />
                    Contacto
                  </Link>
                </motion.div>
              </nav>

              {/* Phone & WhatsApp CTA at bottom */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="p-6 border-t border-white/[0.08] bg-slate-950/20"
              >
                <div className="flex flex-col gap-3">
                  <a
                    href="https://api.whatsapp.com/send/?phone=5492236602699"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full h-12 rounded-xl text-lg font-bold bg-[#25D366] text-white hover:bg-[#22c35e] transition-all active:scale-95 shadow-md"
                  >
                    <WhatsAppIcon className="w-6 h-6" />
                    WhatsApp
                  </a>

                  <Link
                    href="/contacto"
                    onClick={closeMobileMenu}
                    className="btn btn-primary w-full h-12 rounded-xl text-lg justify-center gap-2"
                  >
                    <Calculator className="w-5 h-5" />
                    Cotizar Envío
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
