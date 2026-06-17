"use client";

import { Building2, Box, Laptop, Check } from "lucide-react";
import Link from "next/link";

const corps = [
  {
    title: "Soluciones Corporativas",
    img: "resources/auHzaMFScwRfa6f8eT8_cX",
    icon: <Building2 className="w-8 h-8" />,
    features: ["Cuenta Corriente Flexible", "Facturación simplificada", "Gestión multi-usuario", "Reportes de impacto"]
  },
  {
    title: "Envíos Flex MercadoLibre",
    img: "resources/bSarC8GVoRO4BjG_G4ROIr",
    icon: <Box className="w-8 h-8" />,
    features: ["Cumplimiento de SLAs", "Mejora tu reputación", "Tarifas competitivas", "Soporte Flex dedicado"]
  },
  {
    title: "Logística E-Commerce",
    img: "resources/brbGQiFjedd1sjtRqxQ_Dl",
    icon: <Laptop className="w-8 h-8" />,
    features: ["Integración tecnológica", "Rutas optimizadas", "Flota especializada", "Seguimiento en tiempo real"]
  }
];

export function CorporateSolutions() {
  return (
    <section className="corp-solutions py-24 bg-light utility-bg">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16 space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full font-subheadline text-[1.2rem] font-bold border border-primary/20"><Building2 className="w-5 h-5" /> Soluciones Corporativas y PyME</div>
          <h2 className="text-primary font-headline">Potencia tu Logística con DosRuedas</h2>
          <p className="text-[1.2rem] max-w-[700px]">Transformamos la última milla de tu empresa con una flota ágil y especializada de alta precisión.</p>
          <div className="flex justify-center gap-12 mt-8">
            <span className="flex items-center gap-3 text-[1.2rem] hover:scale-105 transition-transform"><strong className="font-headline text-[2.5rem] text-primary">500+</strong> Empresas</span>
            <span className="flex items-center gap-3 text-[1.2rem] hover:scale-105 transition-transform"><strong className="font-headline text-[2.5rem] text-primary">24/7</strong> Operativa</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {corps.map((c, i) => (
            <div key={i} className="corp-card group bg-white border border-[#e2e8f0] flex flex-col overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(30,58,138,0.1)] hover:-translate-y-2">
              <div className="corp-img relative h-[240px] bg-dark overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:contrast-110 group-hover:scale-110" />
                <div className="absolute -bottom-[25px] right-5 w-[50px] h-[50px] bg-accent text-dark flex items-center justify-center text-2xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-12 group-hover:bg-primary group-hover:text-accent">
                  {c.icon}
                </div>
              </div>
              <div className="corp-content p-12 flex flex-col flex-grow">
                <h3 className="text-primary text-[1.6rem] mb-6 transition-colors group-hover:text-secondary">{c.title}</h3>
                <ul className="list-none flex-grow mb-8">
                  {c.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 mb-3 text-[#475569] group-hover:translate-x-[5px] group-hover:text-primary transition-all">
                      <Check className="text-secondary w-4 h-4" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/servicios/plan-emprendedores" className="btn-link-solid block py-3 text-center bg-[#f1f5f9] text-primary font-bold font-subheadline text-xl tracking-wider uppercase transition-all duration-300 relative z-10 overflow-hidden after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-primary after:transition-all after:-z-10 hover:text-white hover:after:left-0 hover:shadow-[0_5px_15px_rgba(30,58,138,0.2)]">
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
