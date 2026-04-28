"use client";

import { motion, useReducedMotion } from "framer-motion";
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
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-300"
        aria-label="No incluido"
      >
        <span className="text-sm leading-none">—</span>
      </span>
    );
  }
  if (t === "✓" || t.toLowerCase() === "sí" || t.toLowerCase() === "si") {
    return (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-teal-700"
        aria-label="Incluido"
      >
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3.5 8.5 6.5 11.5 12.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  return (
    <span className="text-sm font-medium leading-snug text-slate-700 tabular-nums">{value}</span>
  );
}

function TierFeatureLine({ text }: { text: string }) {
  return (
    <li className="flex gap-2 text-xs leading-relaxed text-slate-600">
      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500/80" aria-hidden />
      <span>{text}</span>
    </li>
  );
}

function AnnualDiscountPill() {
  return (
    <span className="inline-flex items-center rounded-full border border-sky-200/80 bg-sky-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-700">
      10% anual
    </span>
  );
}

export function PackCategoryDetail({ category, unlockRows }: PackCategoryDetailProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [mobilePlanIdx, setMobilePlanIdx] = useState(0);
  const reduceMotion = useReducedMotion();

  const showBillingToggle = categoryHasAnnualVariant(category);

  const sectionEyebrow =
    category.id === "web"
      ? "Solo web corporativa"
      : category.id === "erp"
        ? "Solo app de gestión"
        : "Pack integral";

  return (
    <SectionContainer id={`pack-${category.id}`} className="bg-transparent">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 max-w-3xl"
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">{sectionEyebrow}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {category.title}
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600">{category.subtitle}</p>
        {showBillingToggle ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
        ) : null}
        <PriceTaxNote className="mt-4 max-w-xl" />
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
        {category.tiers.map((tier, ti) => (
          <motion.article
            key={tier.name}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-24px" }}
            transition={{ duration: 0.32, delay: reduceMotion ? 0 : ti * 0.05 }}
            className={`relative flex min-h-0 flex-col rounded-2xl border p-6 shadow-sm transition-shadow duration-300 hover:shadow-md ${
              tier.recommended
                ? "border-teal-300 bg-gradient-to-b from-teal-50/80 to-white ring-1 ring-teal-200/70"
                : "border-slate-200/90 bg-white hover:border-slate-300"
            }`}
          >
            {tier.recommended ? (
              <span className="absolute -top-2.5 right-4 rounded-full bg-teal-800 px-3 py-0.5 text-[11px] font-semibold text-white shadow-sm">
                Recomendado
              </span>
            ) : null}
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">{tier.name}</h3>
            <p className="mt-3 text-2xl font-bold tabular-nums tracking-tight text-slate-900 sm:text-3xl">
              {tierDisplayPrice(tier, billing)}
            </p>
            {billing === "annual" ? (
              <div className="mt-2">
                <AnnualDiscountPill />
              </div>
            ) : null}
            {tier.priceContext ? (
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{tier.priceContext}</p>
            ) : null}
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{tier.description}</p>

            <ul className="mt-5 flex flex-col gap-2 border-t border-slate-100 pt-4">
              {tier.features.slice(0, 5).map((f) => (
                <TierFeatureLine key={f} text={f} />
              ))}
            </ul>

            <div className="flex-1 min-h-3" aria-hidden />
            <a
              href="#contacto"
              className={
                tier.recommended
                  ? "mt-4 inline-flex justify-center rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
                  : "mt-4 inline-flex justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-teal-400 hover:text-teal-800"
              }
            >
              Solicitar este plan
            </a>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 border-t border-slate-200/80 pt-14">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
            Qué incluye cada nivel
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Misma tabla en escritorio; en móvil elige el plan arriba y revisa fila a fila.
          </p>
        </div>

        <div className="mt-8 lg:hidden">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Planes">
            {category.tiers.map((tier, i) => (
              <button
                key={tier.name}
                type="button"
                role="tab"
                aria-selected={mobilePlanIdx === i}
                onClick={() => setMobilePlanIdx(i)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
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
            className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/[0.04]"
            role="tabpanel"
          >
            {unlockRows.map((row) => (
              <Fragment key={row.feature}>
                {row.sectionTitle ? (
                  <div className="border-b border-teal-100 bg-gradient-to-r from-teal-50 to-white px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide text-teal-900">
                    {row.sectionTitle}
                  </div>
                ) : null}
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-4 py-3.5 last:border-b-0">
                  <span className="text-sm text-slate-800">{row.feature}</span>
                  <span className="shrink-0 text-right">
                    <CellContent value={row.values[mobilePlanIdx]} />
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="mt-8 hidden lg:block">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-900/[0.06] ring-1 ring-slate-900/[0.04]">
              <table className="w-full table-fixed border-separate border-spacing-0 text-left text-xs">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="w-[34%] border-b border-r border-slate-200 bg-slate-50 px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500"
                    >
                      Incluido
                    </th>
                    {category.tiers.map((tier, colIdx) => (
                      <th
                        key={tier.name}
                        scope="col"
                        className={`w-[22%] border-b border-slate-200 px-3 py-3 text-center text-[11px] font-bold uppercase tracking-wide ${
                          tier.recommended
                            ? "bg-teal-50 text-teal-900"
                            : "bg-slate-50 text-slate-700"
                        } ${colIdx === category.tiers.length - 1 ? "" : "border-r border-slate-100"}`}
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
                        <tr>
                          <td
                            colSpan={1 + category.tiers.length}
                            className="border-b border-teal-100 bg-gradient-to-r from-teal-50 via-teal-50/80 to-white px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide text-teal-900"
                          >
                            {row.sectionTitle}
                          </td>
                        </tr>
                      ) : null}
                      <tr className="group border-b border-slate-100 transition-colors hover:bg-teal-50/[0.25]">
                        <th scope="row" className="border-r border-slate-100 bg-white px-3 py-3 text-left text-xs font-medium text-slate-800 group-hover:bg-teal-50/40">
                          {row.feature}
                        </th>
                        {row.values.map((v, i) => {
                          const tier = category.tiers[i];
                          const isRec = tier?.recommended;
                          return (
                            <td
                              key={`${row.feature}-${i}`}
                              className={`px-3 py-3 text-center group-hover:bg-teal-50/20 ${
                                isRec ? "bg-teal-50/30 group-hover:bg-teal-50/45" : ""
                              } ${i < row.values.length - 1 ? "border-r border-slate-100/80" : ""}`}
                            >
                              <div className="flex justify-center">
                                <CellContent value={v} />
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    </Fragment>
                  ))}
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
