"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SectionContainer } from "@/components/ui/SectionContainer";

type Module = {
  id: string;
  label: string;
  description: string;
  monthlyPrice: number;
  setupPrice: number;
};

const WEB_MODULES: Module[] = [
  { id: "web", label: "Web Corporativa Base", description: "Diseño Health-Tech premium y SEO técnico inicial.", monthlyPrice: 0, setupPrice: 890 },
  { id: "seo", label: "SEO & Copy Avanzado", description: "Estrategia de keywords clínicas y redacción persuasiva.", monthlyPrice: 0, setupPrice: 400 },
  { id: "blog", label: "Módulo Blog Salud", description: "Sistema de noticias y artículos listos para posicionar.", monthlyPrice: 0, setupPrice: 250 },
  { id: "mantenimiento", label: "Mantenimiento Premium", description: "Evolución mensual, cambios ilimitados y métricas.", monthlyPrice: 40, setupPrice: 0 },
];

const ERP_MODULES: Module[] = [
  { id: "erp_base", label: "Software Gestión Starter", description: "Agenda, facturación y pacientes (1 profesional activo).", monthlyPrice: 49, setupPrice: 0 },
  { id: "erp_plus", label: "Módulo Multi-profesional", description: "Hasta 5 profesionales, roles, permisos y analítica avanzada.", monthlyPrice: 40, setupPrice: 0 },
  { id: "multisede", label: "Licencia Multi-sede", description: "Múltiples centros conectados con vistas consolidadas.", monthlyPrice: 160, setupPrice: 0 },
  { id: "citas_online", label: "Citas Online Automáticas", description: "Sincronizado al 100% con web y app (requiere app).", monthlyPrice: 20, setupPrice: 0 },
  { id: "whatsapp", label: "Integración WhatsApp", description: "Recordatorios automatizados a pacientes.", monthlyPrice: 30, setupPrice: 150 },
  { id: "firma_digital", label: "Firma Digital Biométrica", description: "Consentimientos informados y RGPD sin papel.", monthlyPrice: 25, setupPrice: 100 },
  { id: "portal_paciente", label: "Portal del Paciente", description: "Área privada para ver facturas, citas y documentos.", monthlyPrice: 50, setupPrice: 300 },
  { id: "finanzas", label: "Módulo Finanzas Pro", description: "Ver facturas, contabilidad y control de gastos avanzado.", monthlyPrice: 20, setupPrice: 0 },
  { id: "proveedores", label: "Gestión de Proveedores", description: "Control de stock clínico, pedidos y proveedores.", monthlyPrice: 15, setupPrice: 0 },
];

export function InteractivePriceBuilder() {
  const router = useRouter();
  const [selectedModules, setSelectedModules] = useState<string[]>(["web", "erp_base"]);

  const toggleModule = (id: string) => {
    setSelectedModules((prev) => {
      let next = [...prev];
      const isCurrentlySelected = prev.includes(id);

      if (isCurrentlySelected) {
        next = next.filter((m) => m !== id);
        // Si se quita el base, se quitan todos los del ERP
        if (id === "erp_base") {
          const erpModuleIds = ERP_MODULES.map(m => m.id);
          next = next.filter(m => !erpModuleIds.includes(m));
        }
      } else {
        next.push(id);
        // Si se añade cualquier módulo de ERP, activar también el base
        const isErpModule = ERP_MODULES.some(m => m.id === id);
        if (isErpModule && id !== "erp_base" && !next.includes("erp_base")) {
          next.push("erp_base");
        }
      }
      return next;
    });
  };

  const getAllModules = () => [...WEB_MODULES, ...ERP_MODULES];

  const setupTotal = getAllModules().filter((m) => selectedModules.includes(m.id)).reduce((acc, curr) => acc + curr.setupPrice, 0);
  const monthlyTotal = getAllModules().filter((m) => selectedModules.includes(m.id)).reduce((acc, curr) => acc + curr.monthlyPrice, 0);

  // Descuento por pack integral (si tiene web y erp_base)
  const isIntegral = selectedModules.includes("web") && selectedModules.includes("erp_base");
  const finalSetup = isIntegral ? setupTotal - 140 : setupTotal;

  const handleContact = () => {
    const searchParams = new URLSearchParams();
    searchParams.set("modules", selectedModules.join(","));
    searchParams.set("source", "builder");
    
    // Smooth scroll if on the same page, or push to contact page
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `?${searchParams.toString()}#contacto`);
    } else {
      router.push(`/?${searchParams.toString()}#contacto`);
    }
  };

  const renderModule = (mod: Module) => {
    const isSelected = selectedModules.includes(mod.id);
    return (
      <button
        key={mod.id}
        onClick={() => toggleModule(mod.id)}
        className={`flex items-start text-left gap-3 p-4 rounded-xl border transition-all w-full backdrop-blur-md ${
          isSelected 
            ? "bg-slate-800/80 border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.15)] ring-1 ring-blue-500" 
            : "bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-800/40"
        }`}
      >
        <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
          isSelected ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)]" : "border-white/10 bg-slate-800/50"
        }`}>
          {isSelected && (
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-slate-100 leading-tight">{mod.label}</h4>
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{mod.description}</p>
          <div className="mt-2 pt-2 border-t border-white/10 flex gap-3 text-xs">
            {mod.setupPrice > 0 && <span className="text-slate-500">+{mod.setupPrice}€ setup</span>}
            {mod.monthlyPrice > 0 && <span className="font-semibold text-blue-400">+{mod.monthlyPrice}€/mes</span>}
          </div>
        </div>
      </button>
    );
  };

  return (
    <SectionContainer id="configurador" className="bg-slate-950 border-y border-white/5 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-blue-900/20 to-transparent blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-violet-900/20 to-transparent blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">Presupuesto a tu medida</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Escala tu clínica a tu ritmo</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Olvídate de tablas complejas. Selecciona exactamente lo que tu clínica necesita hoy, y añade módulos conforme vayas creciendo.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          
          <div className="flex flex-col gap-10">
            {/* Bloque Web */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/30 text-blue-400 border border-blue-500/20">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Área de Captación (Web)</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {WEB_MODULES.map(renderModule)}
              </div>
            </div>

            {/* Bloque ERP */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-900/30 text-indigo-400 border border-indigo-500/20">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Área de Gestión (App Clínica)</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {ERP_MODULES.map(renderModule)}
              </div>
            </div>
          </div>

          <div className="sticky top-28 bg-slate-900 p-7 rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
            <h3 className="font-semibold text-lg text-white border-b border-white/10 pb-4 mb-5">Resumen de tu selección</h3>
            
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-slate-400">Coste de implantación</span>
              <span className="font-semibold text-white">{setupTotal}€</span>
            </div>
            {isIntegral && (
              <div className="flex justify-between items-center mb-3 text-indigo-400 text-sm bg-indigo-950/40 border border-indigo-500/20 px-3 py-1.5 rounded-lg -mx-3">
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Descuento Integral
                </span>
                <span className="font-bold">-140€</span>
              </div>
            )}
            <div className="flex justify-between items-center mb-6 pt-4 border-t border-white/10">
              <span className="font-semibold text-white">Total Setup (Único)</span>
              <span className="text-2xl font-bold text-white tabular-nums">{finalSetup}€</span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-white">Cuota Mensual</span>
              <span className="text-2xl font-bold text-blue-400 tabular-nums">{monthlyTotal}€<span className="text-sm text-blue-400/60 font-normal">/mes</span></span>
            </div>
            
            <p className="text-[11px] text-slate-500 mb-6 leading-relaxed mt-3 bg-slate-950/50 p-3 rounded-lg border border-white/5">
              * Estimación orientativa sin impuestos. El precio mensual tiene un <strong className="text-slate-300">10% de descuento</strong> si eliges facturación anual del software.
            </p>

            <button
              onClick={handleContact}
              className="w-full py-4 px-4 bg-white hover:bg-slate-200 text-slate-900 rounded-xl font-bold shadow-md transition-colors flex items-center justify-center gap-2 group"
            >
              Contactar con esta configuración
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
