"use client";

import { motion, useReducedMotion } from "framer-motion";
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
    <span className="inline-flex items-center rounded-full border border-sky-200/80 bg-sky-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-700">
      10% anual
    </span>
  );
}

export function Pricing({
  plans,
  ctaHref = "/precios",
  showDetailLink = true,
}: PricingProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const reduceMotion = useReducedMotion();

  const detailHash = (name: string) => {
    if (name.includes("Web")) return "/precios#web";
    if (name.includes("App")) return "/precios#erp";
    if (name.includes("Integral")) return "/precios#integral";
    return "/precios";
  };

  return (
    <SectionContainer id="pricing">
      <div className="mb-12 max-w-3xl">
        {showDetailLink ? (
          <>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Precios
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Tres formas de trabajar con BaseClinica
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600">
              Misma calidad en todos los niveles; cambia el alcance (web, operativa o ambos).
            </p>
          </>
        ) : (
          <p className="text-sm leading-relaxed text-slate-600">
            Cifras orientativas. Para niveles Esencial / Crecimiento / Profesional (y equivalentes en
            app e integral), abre cada pestaña de arriba.
          </p>
        )}

        <div className={`flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center ${showDetailLink ? "mt-8" : "mt-6"}`}>
          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                billing === "monthly"
                  ? "bg-teal-700 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                billing === "annual"
                  ? "bg-teal-700 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Anual
            </button>
          </div>
        </div>

        {showDetailLink ? (
          <p className="mt-6 text-slate-600">
            <Link
              href="/precios"
              className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-900"
            >
              Ver precios y tablas por plan
            </Link>
          </p>
        ) : null}
        <PriceTaxNote className="mt-4 max-w-xl" />
      </div>

      <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
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
            className={`relative flex min-h-0 flex-col rounded-2xl border p-6 shadow-sm transition-shadow duration-300 hover:shadow-md ${
              plan.highlighted
                ? "border-teal-200 bg-gradient-to-b from-teal-50/90 to-white ring-1 ring-teal-200/60"
                : "border-slate-200/90 bg-white hover:border-slate-300"
            }`}
          >
            {plan.badge ? (
              <span className="absolute -top-2.5 left-5 rounded-full bg-teal-800 px-3 py-0.5 text-[11px] font-semibold text-white shadow-sm">
                {plan.badge}
              </span>
            ) : null}

            <h3 className="pr-2 text-lg font-semibold text-slate-900">{plan.name}</h3>
            <p className="mt-3 text-2xl font-bold tabular-nums tracking-tight text-slate-900">
              {billing === "monthly" ? plan.monthlyPrice : plan.annualPrice}
            </p>
            {billing === "annual" ? (
              <div className="mt-2">
                <AnnualDiscountPill />
              </div>
            ) : null}
            {plan.priceCaption ? (
              <p className="mt-1 text-xs font-medium text-slate-500">{plan.priceCaption}</p>
            ) : null}
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{plan.description}</p>
            {plan.unlockHint ? (
              <p className="mt-2 border-l-2 border-teal-200 pl-3 text-xs leading-relaxed text-slate-500">
                {plan.unlockHint}
              </p>
            ) : null}

            <ul className="mt-5 flex flex-col gap-2.5">
              {plan.features.slice(0, 4).map((f) => (
                <li key={f} className="flex gap-2 text-sm text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-slate-500">{plan.target}</p>

            <div className="flex-1 min-h-3" aria-hidden />

            <div className="mt-5 flex flex-col gap-2">
              <a
                href={ctaHref}
                className={`inline-flex w-full justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-teal-700 text-white hover:bg-teal-800"
                    : "border border-slate-300 bg-white text-slate-900 hover:border-teal-400 hover:text-teal-800"
                }`}
              >
                {plan.cta.label}
              </a>
              {!showDetailLink ? (
                <Link
                  href={detailHash(plan.name)}
                  scroll={false}
                  className="text-center text-xs font-semibold text-teal-700 hover:text-teal-900"
                >
                  Ver niveles y comparativa
                </Link>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionContainer>
  );
}
