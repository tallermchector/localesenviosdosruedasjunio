"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-dark h-full" />
          ))}
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[40px] border-4 border-dark shadow-[15px_15px_0px_rgba(15,23,42,1)] text-center">
          <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <Mail className="w-10 h-10" />
          </div>
          <h2 className="text-primary text-5xl md:text-7xl font-display uppercase mb-4">Suscribite a nuestro Newsletter</h2>
          <p className="text-slate-600 text-xl font-body mb-10 max-w-2xl mx-auto">
            Recibí las últimas novedades del sector logístico, promociones exclusivas y consejos para potenciar tu PyME en tu email.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="tuemail@ejemplo.com" 
              className="h-16 px-8 text-xl rounded-2xl border-2 border-slate-200 focus:border-primary transition-all"
            />
            <Button className="h-16 px-10 bg-primary hover:bg-dark text-white font-subhead text-2xl uppercase tracking-widest rounded-2xl shadow-[6px_6px_0px_rgba(234,179,8,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
              Suscribirse
            </Button>
          </form>
          <p className="mt-8 text-sm text-slate-400 font-body italic">
            Prometemos no enviarte spam. Solo contenido de valor.
          </p>
        </div>
      </div>
    </section>
  );
}
