import Link from "next/link";
import { odooPlans } from "@/data/odoo-landing";

export function OdooPricingTeaser() {
  return (
    <section id="precios-resumen" className="scroll-mt-24 border-t border-[var(--line)] bg-[#f8f9fa] py-16 sm:py-24">
      <div className="odoo-rail">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(1.85rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[var(--ink)]">
            ¡No estás soñando!
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Un precio claro por plan. Sin sorpresas por “módulo escondido”. Los add-ons se
            contratan solo si los necesitas.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {odooPlans.map((plan) => (
            <article
              key={plan.id}
              className={`flex flex-col rounded-xl border bg-white p-7 ${
                plan.highlighted
                  ? "border-[var(--brand)] shadow-[0_12px_40px_rgba(59,191,247,0.18)] ring-1 ring-[var(--brand)]/30"
                  : "border-[var(--line)]"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-3 w-fit rounded bg-[var(--brand-soft)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--brand-deep)]">
                  Recomendado
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-[var(--ink)]">{plan.name}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{plan.tagline}</p>
              <p className="mt-6 font-display text-4xl font-extrabold text-[var(--ink)]">
                {plan.price}
                <span className="ml-1 text-base font-semibold text-[var(--muted)]">{plan.period}</span>
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">o {plan.annual}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-[var(--ink)]">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-[var(--brand-deep)]">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-[var(--brand)] text-white hover:bg-[var(--brand-deep)]"
                    : "border border-[var(--line)] text-[var(--ink)] hover:border-[var(--brand)] hover:text-[var(--brand-deep)]"
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[var(--muted)]">
          ¿Quieres comparar función a función?{" "}
          <Link href="/precios#comparativa" className="font-semibold text-[var(--brand-deep)] hover:underline">
            Ver comparativa completa →
          </Link>
        </p>
      </div>
    </section>
  );
}
