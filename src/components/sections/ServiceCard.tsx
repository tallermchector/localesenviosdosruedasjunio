import React from 'react';

interface ServiceCardProps {
    title: string;
    subtitle: string;
    description: string;
}

export default function ServiceCard({ title, subtitle, description }: ServiceCardProps) {
    return (
        <div className="bg-light border-2 border-primary p-6 flex flex-col justify-between items-start max-w-sm transition-all duration-200 hover:border-accent shadow-brutal-sm hover:shadow-brutal hover:-translate-x-1 hover:-translate-y-1">
            <div className="w-full">
                <span className="font-subhead text-accent text-lg tracking-widest block uppercase mb-1">
                    {subtitle}
                </span>
                <h3 className="font-display text-primary text-3xl uppercase tracking-normal leading-none mb-4">
                    {title}
                </h3>
                <p className="text-dark font-body text-sm leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            <button className="w-full bg-accent text-primary font-subhead text-xl py-3 px-4 uppercase tracking-wider text-center font-bold border-2 border-primary transition-all duration-150 hover:bg-primary hover:text-accent shadow-brutal-sm focus:outline-none">
                SOLICITAR ALTA DE COMERCIO
            </button>
        </div>
    );
}
