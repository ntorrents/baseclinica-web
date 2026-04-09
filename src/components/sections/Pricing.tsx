"use client";

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

export function Pricing({
  plans,
  ctaHref = "/precios",
  showDetailLink = true,
}: PricingProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <SectionContainer id="pricing">
      <div className="mb-10 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          Precios & Packs
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Elige entre Web, App de gestión interna o Pack Integral
        </h2>
        <p className="mt-4 text-slate-600">
          Elige el punto de partida y amplía alcance cuando tu clínica lo necesite.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
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
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                billing === "annual"
                  ? "bg-teal-700 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Anual
            </button>
          </div>
          <span className="inline-flex -rotate-1 rounded-md border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-amber-900 shadow-sm">
            10% dto. en software al facturar en anual
          </span>
        </div>
        {showDetailLink ? (
          <p className="mt-4 text-slate-600">
            <Link
              href="/precios"
              className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-900"
            >
              Ver precios y planes en detalle
            </Link>
          </p>
        ) : null}
        <PriceTaxNote className="mt-4 max-w-xl" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative flex h-full min-h-0 flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 ease-out will-change-transform hover:z-10 hover:scale-[1.02] hover:shadow-xl ${
              plan.highlighted
                ? "border-teal-300 bg-teal-50 shadow-teal-100 hover:shadow-teal-200/80"
                : "border-slate-200 bg-white hover:shadow-slate-200/90"
            }`}
          >
            {plan.badge ? (
              <span className="absolute -top-3 left-6 rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">
                {plan.badge}
              </span>
            ) : null}

            <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
            <p className="mt-2 text-2xl font-bold text-slate-900">
              {billing === "monthly" ? plan.monthlyPrice : plan.annualPrice}
            </p>
            {plan.priceCaption ? (
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                {plan.priceCaption}
              </p>
            ) : null}
            <p className="mt-3 text-slate-600">{plan.description}</p>
            <p className="mt-4 text-sm text-slate-500">{plan.target}</p>

            <div className="flex-1 min-h-4" aria-hidden />

            <a
              href={ctaHref}
              className={`mt-4 inline-flex w-full justify-center rounded-xl px-4 py-3 text-sm font-semibold ${
                plan.highlighted
                  ? "bg-teal-700 text-white hover:bg-teal-800"
                  : "border-2 border-slate-300 bg-white text-slate-900 hover:border-teal-400 hover:text-teal-800"
              }`}
            >
              {plan.cta.label}
            </a>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
