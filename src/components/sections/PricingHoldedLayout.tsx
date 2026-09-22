"use client";

import Link from "next/link";
import { Fragment, useMemo, useState } from "react";
import { erpPlans as erpPlanPrices, webPlan as webPlanPrice } from "@/data/pricing-page";
import { useT } from "@/i18n/LocaleProvider";

type PlanView = {
  id: string;
  kind: "web" | "erp";
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  priceAnnual?: string;
  features: readonly string[];
  recommended?: boolean;
  ctaLabel: string;
  ctaHref: string;
};

function PlanCard({
  plan,
  billing,
  labels,
}: {
  plan: PlanView;
  billing?: "monthly" | "annual";
  labels: { recommended: string; annualBilling: string; orAnnual: string };
}) {
  const showAnnual = plan.kind === "erp" && billing === "annual" && plan.priceAnnual;

  return (
    <article
      className={`relative flex h-full flex-col rounded-[1.35rem] border p-7 sm:p-8 ${
        plan.recommended
          ? "border-[var(--brand)] bg-[var(--panel)] text-white shadow-[0_24px_60px_rgba(15,20,32,0.18)]"
          : "border-[var(--line)] bg-white text-[var(--ink)]"
      }`}
    >
      {plan.recommended && (
        <span className="absolute -top-3 left-7 rounded-full bg-[var(--brand)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
          {labels.recommended}
        </span>
      )}
      <p
        className={`text-xs font-semibold uppercase tracking-[0.16em] ${
          plan.recommended
            ? "text-[var(--brand)]"
            : plan.kind === "web"
              ? "text-[var(--accent)]"
              : "text-[var(--brand)]"
        }`}
      >
        {plan.kind === "web" ? "Web" : "ERP"}
      </p>
      <h3 className="font-display mt-3 text-3xl font-extrabold tracking-tight">{plan.name}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${plan.recommended ? "text-white/60" : "text-[var(--muted)]"}`}>
        {plan.tagline}
      </p>

      <div className="mt-7">
        <p className="font-display text-4xl font-extrabold tracking-tight">
          {showAnnual ? plan.priceAnnual : plan.price}
          {!showAnnual && (
            <span
              className={`ml-1 text-base font-semibold ${plan.recommended ? "text-white/55" : "text-[var(--muted)]"}`}
            >
              {plan.priceNote}
            </span>
          )}
        </p>
        {showAnnual && (
          <p className={`mt-1 text-sm ${plan.recommended ? "text-white/55" : "text-[var(--muted)]"}`}>
            {labels.annualBilling}
          </p>
        )}
        {!showAnnual && plan.priceAnnual && billing === "monthly" && (
          <p className={`mt-1 text-sm ${plan.recommended ? "text-white/55" : "text-[var(--muted)]"}`}>
            {labels.orAnnual.replace("{price}", plan.priceAnnual)}
          </p>
        )}
      </div>

      <ul className="mt-7 flex-1 space-y-2.5 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="text-[var(--brand)]">✓</span>
            <span className={plan.recommended ? "text-white/85" : "text-[var(--ink)]"}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={plan.ctaHref}
        className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
          plan.recommended
            ? "bg-white text-[var(--ink)] hover:bg-[var(--brand-soft)]"
            : "bg-[var(--panel)] text-white hover:bg-[var(--brand)]"
        }`}
      >
        {plan.ctaLabel}
      </Link>
    </article>
  );
}

export function PricingHoldedLayout() {
  const t = useT();
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const webPlan: PlanView = useMemo(
    () => ({
      id: webPlanPrice.id,
      kind: "web",
      name: t.pricing.webPlan.name,
      tagline: t.pricing.webPlan.tagline,
      price: webPlanPrice.price,
      priceNote: t.pricing.webPlan.priceNote,
      features: t.pricing.webPlan.features,
      ctaLabel: t.pricing.webPlan.ctaLabel,
      ctaHref: webPlanPrice.ctaHref,
    }),
    [t],
  );

  const erpPlans: PlanView[] = useMemo(
    () =>
      t.pricing.erpPlans.map((plan, i) => {
        const base = erpPlanPrices[i];
        return {
          id: plan.id,
          kind: "erp" as const,
          name: plan.name,
          tagline: plan.tagline,
          price: base.price,
          priceNote: plan.priceNote,
          priceAnnual: base.priceAnnual,
          features: plan.features,
          recommended: base.recommended,
          ctaLabel: plan.ctaLabel,
          ctaHref: base.ctaHref,
        };
      }),
    [t],
  );

  return (
    <div className="site-rail">
      <header className="mx-auto max-w-4xl pt-28 text-center sm:pt-36">
        <p className="section-eyebrow">{t.pricing.eyebrow}</p>
        <h1 className="font-display mt-4 text-balance text-[clamp(2.2rem,5.5vw,4.25rem)] font-extrabold tracking-[-0.04em] text-[var(--ink)]">
          {t.pricing.title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          {t.pricing.lead}
        </p>
      </header>

      <section id="web" className="scroll-mt-28 pt-16 sm:pt-20">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              {t.pricing.product1}
            </p>
            <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-[var(--ink)]">
              {t.pricing.webTitle}
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-[var(--muted)] sm:block">
            {t.pricing.webSide}
          </p>
        </div>
        <div className="max-w-md">
          <PlanCard
            plan={webPlan}
            labels={{
              recommended: t.pricing.recommended,
              annualBilling: t.pricing.annualBilling,
              orAnnual: t.pricing.orAnnual,
            }}
          />
        </div>
      </section>

      <section id="erp" className="scroll-mt-28 pt-20 sm:pt-28">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              {t.pricing.product2}
            </p>
            <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-[var(--ink)]">
              {t.pricing.erpTitle}
            </h2>
            <p className="mt-2 max-w-lg text-sm text-[var(--muted)]">{t.pricing.erpLead}</p>
          </div>
          <div className="inline-flex rounded-full border border-[var(--line)] bg-white p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                billing === "monthly" ? "bg-[var(--panel)] text-white" : "text-[var(--muted)]"
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                billing === "annual" ? "bg-[var(--panel)] text-white" : "text-[var(--muted)]"
              }`}
            >
              {t.pricing.annual}
            </button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {erpPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              billing={billing}
              labels={{
                recommended: t.pricing.recommended,
                annualBilling: t.pricing.annualBilling,
                orAnnual: t.pricing.orAnnual,
              }}
            />
          ))}
        </div>
      </section>

      <section id="comparativa" className="scroll-mt-28 pt-20 sm:pt-28">
        <div className="mb-8 max-w-2xl">
          <p className="section-eyebrow">{t.pricing.compareEyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">
            {t.pricing.compareTitle}
          </h2>
          <p className="mt-3 text-[var(--muted)]">{t.pricing.compareLead}</p>
        </div>

        <div className="overflow-x-auto rounded-[1.35rem] border border-[var(--line)] bg-white">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--line)] bg-[#faf9f6]">
                <th className="px-5 py-4 font-semibold text-[var(--ink)]">{t.pricing.featureCol}</th>
                <th className="px-5 py-4 font-semibold text-[var(--ink)]">Basic</th>
                <th className="px-5 py-4 font-semibold text-[var(--ink)]">
                  Premium
                  <span className="ml-2 rounded-full bg-[var(--brand-soft)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--brand-deep)]">
                    Top
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {t.pricing.compareRows.map((row) => {
                const sectionTitle = "sectionTitle" in row ? row.sectionTitle : undefined;
                return (
                <Fragment key={`${sectionTitle ?? ""}-${row.feature}`}>
                  {sectionTitle ? (
                    <tr className="bg-[#f7f5f0]">
                      <td
                        colSpan={3}
                        className="px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]"
                      >
                        {sectionTitle}
                      </td>
                    </tr>
                  ) : null}
                  <tr className="border-t border-[var(--line)]">
                    <td className="px-5 py-3.5 font-medium text-[var(--ink)]">{row.feature}</td>
                    <td className="px-5 py-3.5 text-[var(--muted)]">{row.basic}</td>
                    <td className="px-5 py-3.5 font-medium text-[var(--ink)]">{row.premium}</td>
                  </tr>
                </Fragment>
              );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section id="modulos" className="scroll-mt-28 pt-20 sm:pt-28">
        <div className="mb-8 max-w-2xl">
          <p className="section-eyebrow">{t.pricing.modulesEyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">
            {t.pricing.modulesTitle}
          </h2>
          <p className="mt-3 text-[var(--muted)]">{t.pricing.modulesLead}</p>
        </div>

        <div className="mb-4 flex gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
          <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[var(--accent)]">Web</span>
          <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-[var(--brand-deep)]">ERP</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.pricing.modules.map((mod) => (
            <article key={mod.id} className="box-plain p-6">
              <p
                className={`text-[11px] font-bold uppercase tracking-[0.16em] ${
                  mod.kind === "web" ? "text-[var(--accent)]" : "text-[var(--brand)]"
                }`}
              >
                {mod.kind === "web" ? "Web" : "ERP"}
              </p>
              <h3 className="font-display mt-2 text-xl font-bold tracking-tight text-[var(--ink)]">
                {mod.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{mod.description}</p>
              <p className="mt-5 text-sm font-semibold text-[var(--ink)]">{mod.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="combo" className="scroll-mt-28 pt-20 sm:pt-28">
        <div className="box-panel relative overflow-hidden px-8 py-12 sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 top-10 h-36 w-36 rounded-full border-[3px] border-[var(--brand)]"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            {t.pricing.jointOffer}
          </p>
          <h2 className="font-display mt-4 max-w-xl text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.04em]">
            {t.pricing.combo.title}
          </h2>
          <p className="mt-4 max-w-xl text-white/60">{t.pricing.combo.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-end gap-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/45">{t.pricing.setupWeb}</p>
              <p className="font-display text-4xl font-extrabold">750 €</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/45">ERP Basic</p>
              <p className="font-display text-4xl font-extrabold">35 €/mes</p>
            </div>
          </div>
          <p className="mt-4 text-sm font-medium text-[var(--brand)]">{t.pricing.combo.savingsNote}</p>

          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {t.pricing.combo.benefits.map((b) => (
              <li key={b} className="flex gap-2 text-sm text-white/85">
                <span className="text-[var(--brand)]">✓</span>
                {b}
              </li>
            ))}
          </ul>

          <Link href="/contacto?interes=combo" className="btn-ghost-light mt-10 inline-flex">
            {t.pricing.combo.ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
