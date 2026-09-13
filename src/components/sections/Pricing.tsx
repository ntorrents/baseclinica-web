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

export function Pricing({ plans, ctaHref = "/contacto" }: PricingProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <SectionContainer id="pricing">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="section-eyebrow">Precios</p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
          Elige el alcance, no un paquete opaco
        </h2>
        <p className="mt-4 text-[var(--muted)]">
          Web, ERP o ambas. Precios transparentes y un configurador si quieres módulos a medida.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-xl border border-[var(--line)] bg-white p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition-colors ${
                billing === "monthly"
                  ? "bg-[var(--brand)] text-white"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition-colors ${
                billing === "annual"
                  ? "bg-[var(--brand)] text-white"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              Anual
            </button>
          </div>
        </div>
        <PriceTaxNote className="mt-5 max-w-xl mx-auto text-[var(--muted)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-stretch gap-5 lg:grid-cols-3">
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
            className={`relative flex min-h-0 flex-col rounded-2xl border p-6 lg:p-7 ${
              plan.highlighted
                ? "border-[var(--brand)] bg-white shadow-[0_24px_60px_-30px_rgba(143,29,58,0.4)]"
                : "border-[var(--line)] bg-white/80"
            }`}
          >
            {plan.badge ? (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-lg bg-[var(--brand)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                {plan.badge}
              </span>
            ) : null}

            <div className="min-h-[84px] text-center">
              <h3 className="font-display text-xl font-bold text-[var(--ink)]">{plan.name}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{plan.target}</p>
            </div>

            <div className="mt-4 text-center">
              <p className="font-display text-3xl font-extrabold tracking-tight text-[var(--ink)]">
                {billing === "monthly" ? plan.monthlyPrice : plan.annualPrice}
              </p>
              {billing === "annual" && plan.id !== "web" ? (
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-[var(--brand)]">
                  10% dto. anual
                </p>
              ) : (
                <div className="mt-2 h-4" />
              )}
            </div>

            {plan.priceCaption ? (
              <p className="mt-2 text-center text-xs text-[var(--muted)]">{plan.priceCaption}</p>
            ) : null}

            <p className="mt-5 border-t border-[var(--line)] pt-5 text-sm leading-relaxed text-[var(--muted)]">
              {plan.description}
            </p>

            <ul className="mt-5 flex flex-col gap-3">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-[var(--ink)]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span className="leading-tight">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 mb-4">
              <button
                type="button"
                onClick={() =>
                  setExpandedCard(expandedCard === plan.name ? null : plan.name)
                }
                className="flex w-full items-center justify-between rounded-xl border border-[var(--line)] bg-[#f7f8fa] px-4 py-3 text-sm font-medium text-[var(--muted)] hover:text-[var(--ink)]"
              >
                <span>Ver detalle</span>
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
                    <div className="space-y-2 px-2 pb-2 pt-4 text-xs text-[var(--muted)]">
                      {plan.id === "web" && (
                        <ul className="list-disc space-y-1.5 pl-4 marker:text-[var(--brand)]">
                          <li>Diseño responsive adaptado a móviles</li>
                          <li>Optimización Core Web Vitals</li>
                          <li>SEO técnico y URLs amigables</li>
                          <li>Analytics y formularios protegidos</li>
                          <li>Cookies y páginas legales</li>
                        </ul>
                      )}
                      {plan.id === "erp" && (
                        <ul className="list-disc space-y-1.5 pl-4 marker:text-[var(--brand)]">
                          <li>Pacientes sin límite</li>
                          <li>Agenda diaria, semanal y mensual</li>
                          <li>Recordatorios automáticos</li>
                          <li>Historial clínico y facturación</li>
                          <li>Control de stock básico</li>
                        </ul>
                      )}
                      {plan.id === "integral" && (
                        <ul className="list-disc space-y-1.5 pl-4 marker:text-[var(--brand)]">
                          <li>Todo Web + todo ERP</li>
                          <li>Citas web conectadas a la agenda</li>
                          <li>Onboarding premium</li>
                          <li>Soporte prioritario</li>
                        </ul>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-auto pt-2">
              <a
                href={plan.cta.href || ctaHref}
                className={`inline-flex w-full justify-center rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                  plan.highlighted
                    ? "bg-[var(--brand)] text-white hover:bg-[var(--brand-deep)]"
                    : "border border-[var(--line)] bg-white text-[var(--ink)] hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]"
                }`}
              >
                {plan.cta.label}
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-[var(--line)] bg-white px-8 py-10 text-center">
        <h3 className="font-display text-2xl font-bold text-[var(--ink)]">
          ¿Prefieres un traje a medida?
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--muted)]">
          Selecciona solo los módulos que necesita tu clínica y calcula el coste en tiempo real.
        </p>
        <Link href="/precios#configurador" className="btn-primary mt-6">
          Configurar mi solución
        </Link>
      </div>
    </SectionContainer>
  );
}
