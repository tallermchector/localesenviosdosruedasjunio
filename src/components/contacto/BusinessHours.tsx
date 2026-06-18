"use client";

import React from "react";
import { Clock } from "lucide-react";

export function BusinessHours() {
  return (
    <div className="p-8 bg-primary text-white rounded-3xl relative overflow-hidden mt-12">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 translate-x-10 -translate-y-10 rounded-full" />
      <div className="flex items-center gap-4 mb-6">
        <Clock className="w-8 h-8 text-accent" />
        <h3 className="text-3xl text-white mb-0">Horarios de Atención</h3>
      </div>
      <ul className="space-y-4 font-body text-xl">
        <li className="flex justify-between border-b border-white/10 pb-2">
          <span>Lunes a Viernes</span>
          <span className="font-bold">08:00 - 18:00</span>
        </li>
        <li className="flex justify-between border-b border-white/10 pb-2">
          <span>Sábados</span>
          <span className="font-bold">09:00 - 15:00</span>
        </li>
        <li className="flex justify-between text-accent">
          <span>Domingos</span>
          <span className="font-bold">Cerrado</span>
        </li>
      </ul>
    </div>
  );
}
