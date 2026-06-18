"use client";

import React from "react";

export function ContactMap() {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="rounded-[40px] overflow-hidden border-4 border-white shadow-2xl h-[500px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.3456789!2d-57.576543!3d-38.012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAwJzQ0LjQiUyA1N8KwMzQnMzUuNSJX!5e0!3m2!1ses!2sar!4v1234567890" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-125 invert-[0.1]"
          ></iframe>
          <div className="absolute top-8 left-8 p-6 bg-white shadow-2xl rounded-2xl border-l-8 border-accent max-w-xs hidden md:block">
            <h4 className="font-display text-2xl text-primary mb-2 uppercase leading-none">Oficina Central</h4>
            <p className="text-slate-600 font-body">Vení a conocernos y charlar sobre tu próximo plan logístico.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
