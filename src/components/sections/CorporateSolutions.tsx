
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Building2, Package, Laptop, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const corps = [
  {
    id: "corp-plans",
    title: "Soluciones Corporativas",
    icon: <Building2 />,
    features: ["Cuenta Corriente Flexible", "Facturación simplificada", "Gestión multi-usuario", "Reportes de impacto"]
  },
  {
    id: "meli-flex",
    title: "Envíos Flex MercadoLibre",
    icon: <Package />,
    features: ["Cumplimiento de SLAs", "Mejora tu reputación", "Tarifas competitivas", "Soporte Flex dedicado"]
  },
  {
    id: "ecommerce-logistics",
    title: "Logística E-Commerce",
    icon: <Laptop />,
    features: ["Integración tecnológica", "Rutas optimizadas", "Flota especializada", "Seguimiento en tiempo real"]
  }
];

export function CorporateSolutions() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="section-badge">Soluciones Corporativas y PyME</div>
          <h2 className="text-5xl md:text-6xl text-primary font-headline">Potencia tu Logística</h2>
          <div className="flex justify-center gap-12 mt-8">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-headline text-primary">500+</span>
              <span className="text-slate-500 font-bold">EMPRESAS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-headline text-primary">24/7</span>
              <span className="text-slate-500 font-bold">OPERATIVA</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {corps.map((corp) => {
            const img = PlaceHolderImages.find(i => i.id === corp.id);
            return (
              <div key={corp.id} className="group bg-white border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <Image 
                    src={img?.imageUrl || ""} 
                    alt={corp.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute -bottom-6 right-6 w-14 h-14 bg-accent flex items-center justify-center text-primary text-2xl shadow-lg group-hover:bg-primary group-hover:text-accent group-hover:-translate-y-2 transition-all duration-500">
                    {corp.icon}
                  </div>
                </div>
                
                <div className="p-8 pt-12 space-y-6">
                  <h3 className="text-2xl font-headline text-primary group-hover:text-secondary transition-colors">{corp.title}</h3>
                  <ul className="space-y-3">
                    {corp.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-600 group-hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle2 className="w-4 h-4 text-secondary" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/nosotros" className="block w-full text-center py-4 bg-slate-100 font-subheadline text-xl text-primary hover:bg-primary hover:text-white transition-all">
                    Conocer más
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
