"use client";

import { Building2, Box, Laptop, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function CorporateSolutions() {
  const corps = [
    {
      title: "Soluciones Corporativas",
      img: PlaceHolderImages.find(img => img.id === 'corp-plans'),
      icon: <Building2 className="w-8 h-8" />,
      features: ["Cuenta Corriente Flexible", "Facturación simplificada", "Gestión multi-usuario", "Reportes de impacto"]
    },
    {
      title: "Envíos Flex MercadoLibre",
      img: PlaceHolderImages.find(img => img.id === 'envios-flex'),
      icon: <Box className="w-8 h-8" />,
      features: ["Cumplimiento de SLAs", "Mejora tu reputación", "Tarifas competitivas", "Soporte Flex dedicado"]
    },
    {
      title: "Logística E-Commerce",
      img: PlaceHolderImages.find(img => img.id === 'ecommerce-logistics'),
      icon: <Laptop className="w-8 h-8" />,
      features: ["Integración tecnológica", "Rutas optimizadas", "Flota especializada", "Seguimiento en tiempo real"]
    }
  ];

  return (
    <section className="corp-solutions py-16 md:py-24 bg-light border-b-4 border-primary utility-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-accent text-primary px-5 py-2 font-subhead text-[1.4rem] uppercase tracking-wider font-bold border-2 border-primary shadow-brutal-sm">
            <Building2 className="w-6 h-6" /> Soluciones Corporativas y PyME
          </div>
          <h2 className="text-primary font-display text-[clamp(2.5rem,5vw,4rem)] uppercase leading-none">
            Potencia tu Logística con DosRuedas
          </h2>
          <p className="text-xl md:text-2xl max-w-[700px] px-4 font-subhead tracking-wider text-dark">
            TRANSFORMAMOS LA ÚLTIMA MILLA DE TU EMPRESA CON UNA FLOTA ÁGIL Y ESPECIALIZADA DE ALTA PRECISIÓN.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12 mt-6 md:mt-8">
            <span className="flex items-center gap-3 text-xl md:text-2xl font-subhead uppercase tracking-wider text-dark border-2 border-primary bg-white px-4 py-2 shadow-brutal-sm">
              <strong className="font-display text-[2.5rem] md:text-[3rem] text-accent stroke-primary" style={{ WebkitTextStroke: '2px #002276' }}>500+</strong> Empresas
            </span>
            <span className="flex items-center gap-3 text-xl md:text-2xl font-subhead uppercase tracking-wider text-dark border-2 border-primary bg-white px-4 py-2 shadow-brutal-sm">
              <strong className="font-display text-[2.5rem] md:text-[3rem] text-accent stroke-primary" style={{ WebkitTextStroke: '2px #002276' }}>24/7</strong> Operativa
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-12">
          {corps.map((c, i) => (
            <div key={i} className="corp-card group bg-white border-2 border-primary flex flex-col overflow-hidden transition-all duration-300 shadow-[4px_4px_0px_0px_#002276] hover:shadow-[8px_8px_0px_0px_#f5e300] hover:-translate-y-2 hover:-translate-x-2">
              <div className="corp-img relative h-[200px] md:h-[240px] bg-dark overflow-hidden border-b-2 border-primary">
                {c.img && (
                  <Image 
                    src={c.img.imageUrl} 
                    alt={c.title} 
                    fill 
                    data-ai-hint={c.img.imageHint}
                    className="object-cover opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                  />
                )}
                {/* Overlay to ensure hard contrast */}
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-300" />

                <div className="absolute -bottom-[20px] md:-bottom-[25px] right-4 md:right-5 w-[44px] h-[44px] md:w-[50px] md:h-[50px] bg-accent border-2 border-primary text-primary flex items-center justify-center text-xl md:text-2xl shadow-brutal-sm z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-primary group-hover:text-accent">
                  {c.icon}
                </div>
              </div>
              <div className="corp-content p-6 md:p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-primary font-display uppercase text-[1.8rem] md:text-[2rem] leading-none mb-6 group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
                <ul className="list-none flex-grow mb-8">
                  {c.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 mb-3 text-dark group-hover:translate-x-[5px] transition-all text-base md:text-lg font-body font-medium">
                      <Check className="text-accent bg-primary p-0.5 border border-primary w-5 h-5 shrink-0" />
                      <span className="uppercase tracking-wide">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/servicios/plan-emprendedores" className="btn btn-primary w-full text-center">
                  Conocer más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
