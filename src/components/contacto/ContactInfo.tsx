"use client";

import React from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-primary text-4xl mb-8 font-display uppercase">Información de Contacto</h2>
      <div className="grid gap-6">
        <div className="flex items-start gap-6 p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-secondary transition-all group">
          <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-subhead text-2xl text-primary uppercase mb-1">Ubicación</h4>
            <p className="text-slate-600 text-lg">Friuli 1972, Mar del Plata, Buenos Aires, AR</p>
          </div>
        </div>

        <div className="flex items-start gap-6 p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-secondary transition-all group">
          <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-subhead text-2xl text-primary uppercase mb-1">Teléfono</h4>
            <p className="text-slate-600 text-lg">+54 223 660-2699</p>
          </div>
        </div>

        <div className="flex items-start gap-6 p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-secondary transition-all group">
          <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-subhead text-2xl text-primary uppercase mb-1">Email</h4>
            <p className="text-slate-600 text-lg">matiascejas@enviosdosruedas.com</p>
          </div>
        </div>

        <a 
          href="https://api.whatsapp.com/send/?phone=5492236602699" 
          target="_blank"
          className="flex items-start gap-6 p-6 bg-[#25D366]/5 border-2 border-[#25D366]/20 rounded-2xl hover:bg-[#25D366]/10 transition-all group"
        >
          <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-subhead text-2xl text-[#128C7E] uppercase mb-1">WhatsApp</h4>
            <p className="text-[#128C7E] text-lg font-bold">+54 9 223 660-2699</p>
          </div>
        </a>
      </div>
    </div>
  );
}
