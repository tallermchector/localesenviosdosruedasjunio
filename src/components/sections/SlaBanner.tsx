import React from 'react';

export default function SlaBanner() {
    return (
        <div className="w-full bg-[#1E3A8A] text-[#F8FAFC] py-4 px-6 border-b-4 border-[#EAB308]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col">
                    <h2 className="font-['Anton'] text-2xl md:text-3xl uppercase tracking-wider text-[#F8FAFC]">
                        LOGÍSTICA E-COMMERCE READY
                    </h2>
                    <p className="font-['Bebas_Neue'] text-lg md:text-xl text-[#3B82F6] tracking-wide mt-1">
                        DESPACHOS EFICIENTES DESDE NUESTRA BASE EN FRIULI 1972
                    </p>
                </div>

                <div className="flex gap-6 items-center">
                    <div className="bg-[#3B82F6] px-4 py-2 rounded-none border border-[#F8FAFC]">
                        <span className="font-['Bebas_Neue'] text-sm block text-[#F8FAFC] opacity-90">CORTE LOWCOST</span>
                        <span className="font-['Bebas_Neue'] text-2xl block text-[#EAB308] font-bold">13:00 HS</span>
                    </div>
                    <div className="bg-[#3B82F6] px-4 py-2 rounded-none border border-[#F8FAFC]">
                        <span className="font-['Bebas_Neue'] text-sm block text-[#F8FAFC] opacity-90">CORTE FLEX EXPRESS</span>
                        <span className="font-['Bebas_Neue'] text-2xl block text-[#EAB308] font-bold">15:00 HS</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
