"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { DeviceMockup } from "@/components/ui/DeviceMockup";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ErpFeature } from "@/types/landing";

type ErpSolutionProps = {
  features: ErpFeature[];
  desktopShot: string;
  mobileShot: string;
  desktopPadColor?: string;
  mobilePadColor?: string;
};

export function ErpSolution({ features, desktopShot, mobileShot, desktopPadColor, mobilePadColor }: ErpSolutionProps) {
  const reduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(0);

  const currentImage = features[activeTab]?.image || desktopShot;
  const currentPadColor = features[activeTab]?.imagePadColor || desktopPadColor || "#0f172a";

  return (
    <SectionContainer id="erp-solution" className="bg-slate-950 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">Todo Integrado</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Software Médico Intuitivo</h2>
          <p className="mt-4 text-slate-400">Olvídate de sistemas anticuados. Nuestro ERP está diseñado para que tu equipo aprenda a usarlo en 10 minutos, centralizando toda la gestión de tu clínica.</p>
        </div>

        <div className="flex flex-col gap-12">
          
          {/* Fila superior: Lista de tabs/features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full z-20 relative">
            {features.map((item, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={item.title}
                  onClick={() => setActiveTab(index)}
                  className={`group flex flex-col items-start text-left gap-4 p-5 rounded-2xl border transition-all duration-300 backdrop-blur-md ${
                    isActive
                      ? "bg-blue-900/20 border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.15)] ring-1 ring-blue-500/50 -translate-y-1"
                      : "bg-slate-900/50 border-white/5 hover:bg-slate-800/80 hover:border-white/20 opacity-70 hover:opacity-100 hover:-translate-y-0.5"
                  }`}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all border ${
                    isActive 
                      ? "bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]" 
                      : "bg-slate-800/80 text-slate-400 border-white/10 group-hover:bg-slate-700 group-hover:text-white"
                  }`}>
                    <span className="text-lg font-black">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className={`font-semibold transition-colors ${isActive ? "text-blue-100" : "text-slate-200"}`}>
                      {item.title}
                    </h3>
                    <p className={`mt-1.5 text-sm leading-relaxed transition-colors ${isActive ? "text-slate-300" : "text-slate-400"}`}>
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Fila inferior: Galería de imágenes en formato panorámico grande */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full lg:max-w-6xl mx-auto h-full min-h-[400px] flex items-center justify-center z-10"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-600/10 rounded-full blur-[100px] -z-10" />
            
            <div className="relative w-full rounded-[2rem] bg-slate-900 p-2 shadow-2xl ring-1 ring-white/10 sm:p-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <DeviceMockup 
                    src={currentImage} 
                    alt={`Pantalla del ERP: ${features[activeTab]?.title}`}
                    padColor={currentPadColor}
                    size="large"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </SectionContainer>
  );
}
