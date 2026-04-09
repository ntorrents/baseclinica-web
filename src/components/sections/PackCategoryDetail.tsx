"use client";

import { Fragment, useState } from "react";
import { PriceTaxNote } from "@/components/ui/PriceTaxNote";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ServicePackCategory } from "@/types/landing";
import { UnlockRow } from "@/data/services-packs";

type PackCategoryDetailProps = {
  category: ServicePackCategory;
  unlockRows: UnlockRow[];
};

function tierDisplayPrice(
  tier: ServicePackCategory["tiers"][number],
  billing: "monthly" | "annual",
): string {
  if (billing === "annual" && tier.priceAnnual) return tier.priceAnnual;
  return tier.price;
}

function categoryHasAnnualVariant(category: ServicePackCategory): boolean {
  return category.tiers.some((t) => t.priceAnnual != null && t.priceAnnual !== "");
}

export function CellContent({ value }: { value: string }) {
  const t = value.trim();
  if (t === "—" || t === "-" || t.toLowerCase() === "no") {
    return (
      <span className="text-slate-300 tabular-nums" aria-label="No incluido">
        —
      </span>
    );
  }
  if (t === "✓" || t.toLowerCase() === "sí" || t.toLowerCase() === "si") {
    return (
      <span className="text-teal-600" aria-label="Incluido">
        ✓
      </span>
    );
  }
  return <span className="text-slate-700">{value}</span>;
}

export function PackCategoryDetail({
  category,
  unlockRows,
}: PackCategoryDetailProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [mobilePlanIdx, setMobilePlanIdx] = useState(0);

  const showBillingToggle = categoryHasAnnualVariant(category);

  const sectionEyebrow =
    category.id === "web"
      ? "Solo Web Corporativa"
      : category.id === "erp"
        ? "Solo App de Gestión Interna"
        : "Pack Integral: Web + App de gestión";

  return (
    <SectionContainer id={`pack-${category.id}`} className="bg-white/60">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          {sectionEyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          {category.title}
        </h2>
        <p className="mt-4 text-slate-600">{category.subtitle}</p>
        {showBillingToggle ? (
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
        ) : null}
        <PriceTaxNote className="mt-4 max-w-xl" />
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
        {category.tiers.map((tier) => (
          <article
            key={tier.name}
            className={`relative flex h-full min-h-0 flex-col rounded-2xl border p-6 shadow-sm transition ${
              tier.recommended
                ? "border-teal-400 bg-teal-50/90 ring-2 ring-teal-200/80 shadow-md shadow-teal-100/50"
                : "border-slate-200 bg-white"
            }`}
          >
            {tier.recommended ? (
              <span className="absolute -top-3 right-4 rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">
                Recomendado
              </span>
            ) : null}
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
              {tier.name}
            </h3>
            <p className="mt-3 text-2xl font-bold tabular-nums text-slate-900 sm:text-3xl">
              {tierDisplayPrice(tier, billing)}
            </p>
            {tier.priceContext ? (
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {tier.priceContext}
              </p>
            ) : null}
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {tier.description}
            </p>
            <div className="flex-1 min-h-4" aria-hidden />
            <a
              href="#contacto"
              className={
                tier.recommended
                  ? "mt-4 inline-flex justify-center rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                  : "mt-4 inline-flex justify-center rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-teal-400 hover:text-teal-800"
              }
            >
              Solicitar este plan
            </a>
          </article>
        ))}
      </div>

      <div className="mt-14 max-w-3xl">
        <h3 className="text-2xl font-semibold text-slate-900">
          Compara funcionalidades
        </h3>
      </div>

      <div className="mt-6 lg:hidden">
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Planes"
        >
          {category.tiers.map((tier, i) => (
            <button
              key={tier.name}
              type="button"
              role="tab"
              aria-selected={mobilePlanIdx === i}
              onClick={() => setMobilePlanIdx(i)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                mobilePlanIdx === i
                  ? "bg-teal-700 text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-teal-300"
              }`}
            >
              {tier.name}
            </button>
          ))}
        </div>
        <div
          className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          role="tabpanel"
        >
          {unlockRows.map((row) => (
            <Fragment key={row.feature}>
              {row.sectionTitle ? (
                <div className="border-b border-slate-100 bg-slate-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-slate-600 first:rounded-t-xl">
                  {row.sectionTitle}
                </div>
              ) : null}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-4 py-3.5 last:border-b-0">
                <span className="text-sm text-slate-800">{row.feature}</span>
                <span className="shrink-0 text-right text-sm">
                  <CellContent value={row.values[mobilePlanIdx]} />
                </span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="mt-6 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-slate-700">
            <tr>
              <th className="px-4 py-4 font-semibold">Funcionalidad</th>
              {category.tiers.map((tier) => (
                <th
                  key={tier.name}
                  className="px-4 py-4 text-center font-semibold"
                >
                  {tier.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {unlockRows.map((row) => (
              <Fragment key={row.feature}>
                {row.sectionTitle ? (
                  <tr className="border-t border-slate-200 bg-slate-50/90">
                    <td
                      colSpan={1 + category.tiers.length}
                      className="px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-slate-600"
                    >
                      {row.sectionTitle}
                    </td>
                  </tr>
                ) : null}
                <tr className="border-t border-slate-100">
                  <td className="px-4 py-3.5 text-slate-800">{row.feature}</td>
                  {row.values.map((v, i) => (
                    <td
                      key={`${row.feature}-${i}`}
                      className="px-4 py-3.5 text-center"
                    >
                      <CellContent value={v} />
                    </td>
                  ))}
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </SectionContainer>
  );
}
