"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Module = {
  id: string;
  name: string;
  price: number;
  icon: string;
  description: string;
  includedIn360?: boolean;
};

const modules: Module[] = [
  {
    id: "recordatorios",
    name: "Recordatorios WhatsApp",
    price: 20,
    icon: "💬",
    description: "Automatiza confirmaciones y reduce absentismo",
  },
  {
    id: "citas-online",
    name: "Citas Online",
    price: 10,
    icon: "📅",
    description: "Reservas 24/7 desde tu web",
  },
  {
    id: "firma",
    name: "Firma Digital",
    price: 0,
    icon: "✍️",
    description: "Incluido en Plan Clínica 360",
    includedIn360: true,
  },
  {
    id: "historia-foto",
    name: "Historia Fotográfica",
    price: 0,
    icon: "📸",
    description: "Incluido en Plan Clínica 360",
    includedIn360: true,
  },
  {
    id: "marketing",
    name: "Pack Marketing",
    price: 15,
    icon: "🎯",
    description: "Fidelización + reseñas + tarjetas regalo",
  },
  {
    id: "portal",
    name: "Portal Paciente",
    price: 20,
    icon: "👤",
    description: "Acceso del paciente a sus datos y citas",
  },
];

export function PlanBuilder() {
  const [selectedPlan, setSelectedPlan] = useState<"gestion" | "360">("360");
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const basePrices = {
    gestion: 49,
    360: 89,
  };

  const { totalPrice, savings, modulesAdded } = useMemo(() => {
    const basePrice = basePrices[selectedPlan];
    
    let modulesPrice = 0;
    let modulesCount = 0;

    selectedModules.forEach((modId) => {
      const module = modules.find((m) => m.id === modId);
      if (module && !(selectedPlan === "360" && module.includedIn360)) {
        modulesPrice += module.price;
        modulesCount++;
      }
    });

    const total = basePrice + modulesPrice;
    const potentialSavings = modulesCount > 2 ? 10 : 0;

    return {
      totalPrice: total,
      savings: potentialSavings,
      modulesAdded: modulesCount,
    };
  }, [selectedPlan, selectedModules]);

  const toggleModule = (moduleId: string) => {
    setSelectedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleSaveConfig = () => {
    const config = {
      plan: selectedPlan,
      modules: selectedModules.join(","),
      price: totalPrice.toString(),
    };
    const params = new URLSearchParams(config);
    window.location.href = `/contacto?${params.toString()}`;
  };

  return (
    <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-white via-blue-50/30 to-white p-6 shadow-xl lg:p-10">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2">
          <span className="text-2xl">🏗️</span>
          <span className="text-sm font-bold uppercase tracking-wider text-brand-deep">
            Constructor Interactivo
          </span>
        </div>
        
        <h3 className="font-display mt-4 text-3xl font-extrabold text-ink lg:text-4xl">
          Construye tu plan perfecto
        </h3>
        
        <p className="mt-2 text-muted">
          Empieza con una base y añade solo lo que necesitas
        </p>
      </div>

      {/* Base Plan Selection */}
      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted">
          1. Elige tu base
        </p>
        
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => setSelectedPlan("gestion")}
            className={`relative rounded-2xl border-2 p-6 text-left transition ${
              selectedPlan === "gestion"
                ? "border-brand bg-brand-soft/30 ring-2 ring-brand/20"
                : "border-gray-200 bg-white hover:border-brand/40"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-display text-xl font-bold text-ink">Plan Gestión</p>
                <p className="font-display mt-1 text-3xl font-black text-brand">49€</p>
                <p className="text-sm text-muted">/ mes</p>
              </div>
              {selectedPlan === "gestion" && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
                  ✓
                </div>
              )}
            </div>
            <ul className="mt-4 space-y-1.5 text-sm text-ink/80">
              <li>✓ Agenda inteligente</li>
              <li>✓ Pacientes e historias</li>
              <li>✓ Facturación básica</li>
            </ul>
          </button>

          <button
            onClick={() => setSelectedPlan("360")}
            className={`relative rounded-2xl border-2 p-6 text-left transition ${
              selectedPlan === "360"
                ? "border-brand bg-brand-soft/30 ring-2 ring-brand/20"
                : "border-gray-200 bg-white hover:border-brand/40"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-block rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  Recomendado
                </span>
                <p className="font-display mt-2 text-xl font-bold text-ink">Plan Clínica 360</p>
                <p className="font-display mt-1 text-3xl font-black text-brand">89€</p>
                <p className="text-sm text-muted">/ mes</p>
              </div>
              {selectedPlan === "360" && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
                  ✓
                </div>
              )}
            </div>
            <ul className="mt-4 space-y-1.5 text-sm text-ink/80">
              <li>✓ Todo de Gestión</li>
              <li>✓ Firma digital integrada</li>
              <li>✓ Historia fotográfica</li>
              <li>✓ AEAT automático</li>
            </ul>
          </button>
        </div>
      </div>

      {/* Modules Selection */}
      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted">
          2. Añade módulos extras (opcional)
        </p>
        
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {modules.map((module) => {
            const isIncluded = selectedPlan === "360" && module.includedIn360;
            const isSelected = selectedModules.includes(module.id);

            return (
              <button
                key={module.id}
                onClick={() => !isIncluded && toggleModule(module.id)}
                disabled={isIncluded}
                className={`relative rounded-xl border-2 p-4 text-left transition ${
                  isIncluded
                    ? "border-green-200 bg-green-50 opacity-75"
                    : isSelected
                      ? "border-brand bg-brand-soft/20 ring-1 ring-brand/30"
                      : "border-gray-200 bg-white hover:border-brand/40"
                } ${isIncluded ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{module.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-bold text-ink">{module.name}</p>
                      {isIncluded ? (
                        <span className="rounded-full bg-green-600 px-2 py-0.5 text-[10px] font-bold text-white">
                          ✓ Incluido
                        </span>
                      ) : isSelected ? (
                        <div className="flex h-5 w-5 items-center justify-center rounded bg-brand text-xs text-white">
                          ✓
                        </div>
                      ) : null}
                    </div>
                    <p className="mt-1 text-xs text-muted">{module.description}</p>
                    {!isIncluded && (
                      <p className="mt-2 text-sm font-bold text-brand">+{module.price}€/mes</p>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Summary */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedPlan}-${selectedModules.join(",")}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-8 rounded-2xl bg-gradient-to-br from-brand to-brand-deep p-6 text-white lg:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                Tu plan personalizado
              </p>
              <p className="font-display mt-2 text-2xl font-bold">
                {selectedPlan === "gestion" ? "Plan Gestión" : "Plan Clínica 360"}
                {modulesAdded > 0 && ` + ${modulesAdded} módulo${modulesAdded > 1 ? "s" : ""}`}
              </p>
            </div>
            <div className="text-right">
              <p className="font-display text-5xl font-black">{totalPrice}€</p>
              <p className="text-sm text-white/70">/ mes</p>
              {savings > 0 && (
                <p className="mt-1 text-xs font-semibold text-green-300">
                  Ahorras ~{savings}€ vs. módulos sueltos
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handleSaveConfig}
              className="flex-1 rounded-xl bg-white px-6 py-3 font-bold text-brand transition hover:bg-white/90 sm:flex-none"
            >
              💾 Solicitar este plan
            </button>
            <Link
              href="/precios"
              className="flex-1 rounded-xl border-2 border-white/30 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10 sm:flex-none"
            >
              Ver comparativa completa
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      <p className="mt-4 text-center text-xs text-muted">
        💡 Tu configuración se guardará para cuando hables con nosotros
      </p>
    </div>
  );
}
