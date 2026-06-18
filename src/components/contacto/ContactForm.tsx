"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <div className="bg-white p-10 rounded-[32px] border-2 border-slate-100 shadow-xl">
      <h3 className="text-4xl font-display uppercase text-primary mb-2">¿Tenés alguna consulta?</h3>
      <p className="text-slate-500 mb-8 text-lg font-body">Completá el formulario y un asesor te responderá a la brevedad.</p>
      
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="nombre" className="font-subhead text-xl uppercase tracking-wider text-primary">Nombre completo</Label>
          <Input id="nombre" placeholder="Tu nombre" className="h-14 text-lg rounded-xl border-slate-200 focus:ring-primary" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-subhead text-xl uppercase tracking-wider text-primary">Email</Label>
            <Input id="email" type="email" placeholder="correo@ejemplo.com" className="h-14 text-lg rounded-xl border-slate-200 focus:ring-primary" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefono" className="font-subhead text-xl uppercase tracking-wider text-primary">Teléfono</Label>
            <Input id="telefono" placeholder="+54 ..." className="h-14 text-lg rounded-xl border-slate-200 focus:ring-primary" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensaje" className="font-subhead text-xl uppercase tracking-wider text-primary">Mensaje</Label>
          <Textarea id="mensaje" placeholder="¿Cómo podemos ayudarte?" className="min-h-[150px] text-lg rounded-xl border-slate-200 focus:ring-primary pt-4" />
        </div>

        <Button className="w-full h-16 bg-accent hover:bg-dark hover:text-accent text-dark font-subhead text-2xl uppercase tracking-widest transition-all duration-300 rounded-xl group shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]">
          <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          Enviar Mensaje
        </Button>
      </form>
    </div>
  );
}
