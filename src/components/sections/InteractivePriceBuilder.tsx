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
  {
    id: "web",
    label: "Web Corporativa Base",
    description: "Diseño Health-Tech premium y SEO técnico inicial.",
    monthlyPrice: 0,
    setupPrice: 890,
  },
  {
    id: "seo",
    label: "SEO & Copy Avanzado",
    description: "Estrategia de keywords clínicas y redacción persuasiva.",
    monthlyPrice: 0,
    setupPrice: 400,
  },
  {
    id: "blog",
    label: "Módulo Blog Salud",
    description: "Sistema de noticias y artículos listos para posicionar.",
    monthlyPrice: 0,
    setupPrice: 250,
  },
  {
    id: "mantenimiento",
    label: "Mantenimiento Premium",
    description: "Evolución mensual, cambios ilimitados y métricas.",
    monthlyPrice: 40,
    setupPrice: 0,
  },
];

const ERP_MODULES: Module[] = [
  {
    id: "erp_base",
    label: "Software Gestión Starter",
    description: "Agenda, facturación y pacientes (1 profesional activo).",
    monthlyPrice: 49,
    setupPrice: 0,
  },
  {
    id: "erp_plus",
    label: "Módulo Multi-profesional",
    description: "Hasta 5 profesionales, roles, permisos y analítica avanzada.",
    monthlyPrice: 40,
    setupPrice: 0,
  },
  {
    id: "multisede",
    label: "Licencia Multi-sede",
    description: "Múltiples centros conectados con vistas consolidadas.",
    monthlyPrice: 160,
    setupPrice: 0,
  },
  {
    id: "citas_online",
    label: "Citas Online Automáticas",
    description: "Sincronizado al 100% con web y app (requiere app).",
    monthlyPrice: 20,
    setupPrice: 0,
  },
  {
    id: "whatsapp",
    label: "Integración WhatsApp",
    description: "Recordatorios automatizados a pacientes.",
    monthlyPrice: 30,
    setupPrice: 150,
  },
  {
    id: "firma_digital",
    label: "Firma Digital Biométrica",
    description: "Consentimientos informados y RGPD sin papel.",
    monthlyPrice: 25,
    setupPrice: 100,
  },
  {
    id: "portal_paciente",
    label: "Portal del Paciente",
    description: "Área privada para ver facturas, citas y documentos.",
    monthlyPrice: 50,
    setupPrice: 300,
  },
  {
    id: "finanzas",
    label: "Módulo Finanzas Pro",
    description: "Ver facturas, contabilidad y control de gastos avanzado.",
    monthlyPrice: 20,
    setupPrice: 0,
  },
  {
    id: "proveedores",
    label: "Gestión de Proveedores",
    description: "Control de stock clínico, pedidos y proveedores.",
    monthlyPrice: 15,
    setupPrice: 0,
  },
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
        if (id === "erp_base") {
          const erpModuleIds = ERP_MODULES.map((m) => m.id);
          next = next.filter((m) => !erpModuleIds.includes(m));
        }
      } else {
        next.push(id);
        const isErpModule = ERP_MODULES.some((m) => m.id === id);
        if (isErpModule && id !== "erp_base" && !next.includes("erp_base")) {
          next.push("erp_base");
        }
      }
      return next;
    });
  };

  const getAllModules = () => [...WEB_MODULES, ...ERP_MODULES];

  const setupTotal = getAllModules()
    .filter((m) => selectedModules.includes(m.id))
    .reduce((acc, curr) => acc + curr.setupPrice, 0);
  const monthlyTotal = getAllModules()
    .filter((m) => selectedModules.includes(m.id))
    .reduce((acc, curr) => acc + curr.monthlyPrice, 0);

  const isIntegral = selectedModules.includes("web") && selectedModules.includes("erp_base");
  const finalSetup = isIntegral ? setupTotal - 140 : setupTotal;

  const handleContact = () => {
    const searchParams = new URLSearchParams();
    searchParams.set("modules", selectedModules.join(","));
    searchParams.set("source", "builder");

    router.push(`/contacto?${searchParams.toString()}`);
  };

  const renderModule = (mod: Module) => {
    const isSelected = selectedModules.includes(mod.id);
    return (
      <button
        key={mod.id}
        type="button"
        onClick={() => toggleModule(mod.id)}
        className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all ${
          isSelected
            ? "border-[var(--brand)] bg-[var(--brand-soft)] shadow-[0_12px_30px_-18px_rgba(143,29,58,0.35)]"
            : "border-[var(--line)] bg-white hover:border-[color-mix(in_oklab,var(--brand)_30%,var(--line))]"
        }`}
      >
        <div
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
            isSelected
              ? "border-[var(--brand)] bg-[var(--brand)] text-white"
              : "border-[var(--line)] bg-[#f7f8fa]"
          }`}
        >
          {isSelected && (
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold leading-tight text-[var(--ink)]">{mod.label}</h4>
          <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">{mod.description}</p>
          <div className="mt-2 flex gap-3 border-t border-[var(--line)] pt-2 text-xs">
            {mod.setupPrice > 0 && <span className="text-[var(--muted)]">+{mod.setupPrice}€ setup</span>}
            {mod.monthlyPrice > 0 && (
              <span className="font-semibold text-[var(--brand)]">+{mod.monthlyPrice}€/mes</span>
            )}
          </div>
        </div>
      </button>
    );
  };

  return (
    <SectionContainer id="configurador" className="relative overflow-hidden border-y border-[var(--line)] bg-white/50">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="section-eyebrow">Presupuesto a tu medida</p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Escala tu clínica a tu ritmo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
            Selecciona exactamente lo que necesitas hoy y añade módulos cuando crezcas.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_360px]">
          <div className="flex flex-col gap-10">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--brand)]/15 bg-[var(--brand-soft)] text-[var(--brand)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--ink)]">Área de captación (Web)</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">{WEB_MODULES.map(renderModule)}</div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--brand)]/15 bg-[var(--brand-soft)] text-[var(--brand)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--ink)]">Área de gestión (App clínica)</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">{ERP_MODULES.map(renderModule)}</div>
            </div>
          </div>

          <div className="sticky top-28 rounded-2xl border border-[var(--line)] bg-white p-7 shadow-[0_24px_60px_-32px_rgba(20,24,31,0.35)]">
            <h3 className="mb-5 border-b border-[var(--line)] pb-4 font-display text-lg font-bold text-[var(--ink)]">
              Resumen de tu selección
            </h3>

            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-[var(--muted)]">Coste de implantación</span>
              <span className="font-semibold text-[var(--ink)]">{setupTotal}€</span>
            </div>
            {isIntegral && (
              <div className="-mx-3 mb-3 flex items-center justify-between rounded-lg border border-[var(--brand)]/20 bg-[var(--brand-soft)] px-3 py-1.5 text-sm text-[var(--brand-deep)]">
                <span className="flex items-center gap-1.5 font-medium">Descuento integral</span>
                <span className="font-bold">-140€</span>
              </div>
            )}
            <div className="mb-6 flex items-center justify-between border-t border-[var(--line)] pt-4">
              <span className="font-semibold text-[var(--ink)]">Total setup (único)</span>
              <span className="font-display text-2xl font-bold tabular-nums text-[var(--ink)]">
                {finalSetup}€
              </span>
            </div>

            <div className="mb-2 flex items-center justify-between">
              <span className="font-semibold text-[var(--ink)]">Cuota mensual</span>
              <span className="font-display text-2xl font-bold tabular-nums text-[var(--brand)]">
                {monthlyTotal}€
                <span className="text-sm font-normal text-[var(--brand)]/70">/mes</span>
              </span>
            </div>

            <p className="mb-6 mt-3 rounded-lg border border-[var(--line)] bg-[#f7f8fa] p-3 text-[11px] leading-relaxed text-[var(--muted)]">
              * Estimación orientativa sin impuestos. El precio mensual tiene un{" "}
              <strong className="text-[var(--ink)]">10% de descuento</strong> con facturación anual del
              software.
            </p>

            <button
              type="button"
              onClick={handleContact}
              className="btn-primary group flex w-full items-center justify-center gap-2 py-4"
            >
              Contactar con esta configuración
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
