import React from 'react';

interface ServiceCardProps {
    title: string;
    subtitle: string;
    description: string;
}

export default function ServiceCard({ title, subtitle, description }: ServiceCardProps) {
    return (
        <div className="bg-[#F8FAFC] border-2 border-[#1E3A8A] p-6 flex flex-col justify-between items-start max-w-sm transition-all duration-200 hover:border-[#3B82F6]">
            <div className="w-full">
                <span className="font-['Bebas_Neue'] text-[#3B82F6] text-lg tracking-widest block uppercase mb-1">
                    {subtitle}
                </span>
                <h3 className="font-['Anton'] text-[#1E3A8A] text-3xl uppercase tracking-normal leading-none mb-4">
                    {title}
                </h3>
                <p className="text-gray-700 font-sans text-sm leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            <button className="w-full bg-[#EAB308] text-[#1E3A8A] font-['Bebas_Neue'] text-xl py-3 px-4 uppercase tracking-wider text-center font-bold transition-colors duration-150 hover:bg-[#1E3A8A] hover:text-[#F8FAFC] focus:outline-none">
                SOLICITAR ALTA DE COMERCIO
            </button>
        </div>
    );
}
