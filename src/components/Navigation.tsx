
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, Calculator, Truck } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      label: "Nosotros",
      href: "#nosotros",
      dropdown: [
        { label: "Sobre Nosotros", href: "#nosotros" },
        { label: "FAQ", href: "#faq" },
        { label: "Redes", href: "#redes" },
      ],
    },
    { label: "Servicios", href: "#servicios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className={`glass-header ${scrolled ? 'py-2 h-16' : 'py-4 h-24'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Truck className="w-8 h-8 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-2xl text-white leading-none">Envíos Dosruedas</span>
            <span className="text-accent text-xs font-medium lowercase leading-none mt-1">tu solución confiable</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.dropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 font-subheadline text-xl text-white hover:text-accent transition-colors outline-none">
                    {link.label} <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-primary border-accent border-t-4 text-white p-2">
                    {link.dropdown.map((sub) => (
                      <DropdownMenuItem key={sub.label} asChild>
                        <Link href={sub.href} className="w-full font-body text-sm hover:bg-white/10 hover:text-accent cursor-pointer">
                          {sub.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href={link.href} className="font-subheadline text-xl text-white hover:text-accent transition-colors">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+542236602699" className="flex items-center gap-2 text-white font-subheadline text-xl hover:text-accent transition-colors group">
            <Phone className="w-5 h-5 text-accent animate-bounce group-hover:animate-none" />
            +54 223 660-2699
          </a>
          <Link href="/cotizar" className="brutalist-button">
            <Calculator className="w-5 h-5" />
            Cotizar Envío
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-24 bg-primary z-40 p-6 flex flex-col gap-8 animate-in slide-in-from-right">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="font-headline text-4xl text-white hover:text-accent">
              {link.label}
            </Link>
          ))}
          <div className="mt-auto flex flex-col gap-4">
            <a href="tel:+542236602699" className="flex items-center gap-4 text-white text-2xl font-subheadline">
              <Phone className="text-accent w-8 h-8" /> +54 223 660-2699
            </a>
            <Button className="brutalist-button w-full h-16 text-2xl">
              Cotizar Envío
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
