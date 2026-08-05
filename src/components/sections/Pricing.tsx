"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { PriceTaxNote } from "@/components/ui/PriceTaxNote";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { PricingPlan } from "@/types/landing";

type PricingProps = {
  plans: PricingPlan[];
  ctaHref?: string;
  showDetailLink?: boolean;
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
    </svg>
  );
}

function AnnualDiscountPill() {
  return (
    <span className="inline-flex items-center rounded-full border border-indigo-200/80 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-indigo-700">
      10% anual
    </span>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function Pricing({
  plans,
  ctaHref = "/precios",
  showDetailLink = true,
}: PricingProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const toggleExpand = (planName: string) => {
    setExpandedCard(expandedCard === planName ? null : planName);
  };

  return (
    <SectionContainer id="pricing">
      <div className="mb-12 max-w-3xl text-center mx-auto">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full border border-white/10 bg-slate-900/50 p-1 shadow-sm backdrop-blur-md">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                billing === "monthly"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                billing === "annual"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Anual
            </button>
          </div>
        </div>
        <PriceTaxNote className="mt-6 max-w-xl mx-auto text-slate-500" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3 items-stretch max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.35,
              delay: reduceMotion ? 0 : index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`relative flex min-h-0 flex-col rounded-2xl border p-6 lg:p-8 transition-all duration-300 backdrop-blur-md ${
              plan.highlighted
                ? "border-blue-500/30 bg-slate-900/80 shadow-[0_0_30px_rgba(37,99,235,0.15)] ring-1 ring-blue-500/50"
                : "border-white/10 bg-slate-900/40 shadow-xl hover:border-white/20 hover:bg-slate-900/60"
            }`}
          >
            {plan.badge ? (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-blue-400/50">
                {plan.badge}
              </span>
            ) : null}

            <div className="flex flex-col min-h-[90px] items-center justify-start">
              <h3 className="text-xl font-bold text-white text-center">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-400 text-center">{plan.target}</p>
            </div>
            
            <div className="mt-6 flex flex-col items-center justify-center">
              <p className="text-4xl font-extrabold tabular-nums tracking-tight text-white text-center">
                {billing === "monthly" ? plan.monthlyPrice : plan.annualPrice}
              </p>
              <div className="h-8 mt-2 flex items-center justify-center">
                {billing === "annual" && plan.id !== "web" ? (
                  <AnnualDiscountPill />
                ) : null}
              </div>
            </div>
            
            {plan.priceCaption ? (
              <p className="mt-2 text-center text-xs font-medium text-slate-500">{plan.priceCaption}</p>
            ) : null}
            
            <p className="mt-5 text-sm leading-relaxed text-slate-300 border-t border-white/10 pt-5">{plan.description}</p>

            <ul className="mt-5 flex flex-col gap-3">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-950 border border-blue-500/30 text-blue-400">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span className="leading-tight">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 mb-4">
              <button
                onClick={() => toggleExpand(plan.name)}
                className="flex w-full items-center justify-between rounded-lg bg-white/5 px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-colors border border-transparent hover:border-white/5"
              >
                <span>Ver detalle de características</span>
                <ChevronIcon isOpen={expandedCard === plan.name} />
              </button>
              
              <AnimatePresence>
                {expandedCard === plan.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-2 px-2 text-xs text-slate-400 space-y-3">
                      {plan.id === "web" && (
                        <ul className="list-disc pl-4 space-y-1.5 marker:text-slate-600">
                          <li>Diseño responsive adaptado a móviles</li>
                          <li>Optimización de velocidad de carga (Core Web Vitals)</li>
                          <li>Estructura de URLs amigable para SEO</li>
                          <li>Integración con Google Analytics 4</li>
                          <li>Formulario de contacto protegido por reCAPTCHA</li>
                          <li>Banners de cookies y páginas de política de privacidad</li>
                        </ul>
                      )}
                      {plan.id === "erp" && (
                        <ul className="list-disc pl-4 space-y-1.5 marker:text-slate-600">
                          <li>Gestión de pacientes sin límite</li>
                          <li>Agenda con vista diaria, semanal y mensual</li>
                          <li>Recordatorios automáticos por email</li>
                          <li>Historial clínico estructurado</li>
                          <li>Facturación y emisión de tickets</li>
                          <li>Control de stock de productos básicos</li>
                        </ul>
                      )}
                      {plan.id === "integral" && (
                        <ul className="list-disc pl-4 space-y-1.5 marker:text-slate-600">
                          <li>Incluye todas las características de Web & Captación</li>
                          <li>Incluye todas las características de Software ERP</li>
                          <li>Formulario de citas web conectado directamente a la agenda del ERP</li>
                          <li>Onboarding premium de 2 horas</li>
                          <li>Soporte prioritario</li>
                        </ul>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-auto pt-4">
              <a
                href={ctaHref}
                className={`inline-flex w-full justify-center rounded-xl px-5 py-3.5 text-sm font-semibold transition-all shadow-sm ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]"
                    : "border border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/5"
                }`}
              >
                {plan.cta.label}
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Banner de Configurador a Medida */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="rounded-2xl border border-blue-500/30 bg-blue-900/10 p-8 text-center backdrop-blur-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-violet-600/10 opacity-50 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">¿Prefieres un traje a medida?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              No pagues por lo que no usas. Usa nuestro configurador interactivo para seleccionar únicamente los módulos que necesita tu clínica y calcula tu coste exacto en tiempo real.
            </p>
            <Link 
              href="/precios#configurador"
              className="inline-flex justify-center items-center rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
            >
              Configurar Mi Solución
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
