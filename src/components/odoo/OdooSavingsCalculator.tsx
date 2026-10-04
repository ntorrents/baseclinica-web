"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { allClinicModules } from "@/data/odoo-landing";
import { moduleIconMap } from "@/components/odoo/ModuleIcons";
import { ScribbleUnderline } from "@/components/odoo/Decor";

const DEFAULT_SELECTED = ["agenda", "pacientes", "historia", "facturacion", "whatsapp", "citas"];

export function OdooSavingsCalculator() {
  const [selected, setSelected] = useState<string[]>(DEFAULT_SELECTED);
  const [users, setUsers] = useState(3);

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const { replaceYear, baseYear, savings } = useMemo(() => {
    const mods = allClinicModules.filter((m) => selected.includes(m.id));
    const replaceMonth = mods.reduce((s, m) => s + m.replaceCost, 0) * Math.max(users, 1);
    // Base Clínica: plan 360 ancla + addons seleccionados que cuestan
    const addonMonth = mods.reduce((s, m) => s + (m.addonPrice > 0 ? m.addonPrice : 0), 0);
    const planMonth = 89; // Clínica 360 como referencia integrada
    const replaceYear = Math.round(replaceMonth * 12);
    const baseYear = Math.round((planMonth + addonMonth) * 12);
    return {
      replaceYear,
      baseYear,
      savings: Math.max(0, replaceYear - baseYear),
    };
  }, [selected, users]);

  const selectable = allClinicModules.filter((m) => m.id !== "web" && m.id !== "seo");

  return (
    <section id="configurador" className="scroll-mt-28 border-t border-[var(--line)] bg-[#f8f9fa] py-16 sm:py-24">
      <div className="odoo-rail">
        <h2 className="font-script mx-auto max-w-3xl text-center text-[clamp(2rem,4.5vw,3.25rem)] leading-tight text-[var(--ink)]">
          Reduce{" "}
          <span className="relative inline-block">
            costes
            <ScribbleUnderline className="[&_path]:stroke-[#F59E0B]" />
          </span>{" "}
          con Base Clínica
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-[var(--muted)]">
          ¿Qué piezas usas hoy por separado? Márcalas y mira el ahorro de unificarlas.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.9fr]">
          <div className="rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8">
            <p className="font-display text-lg font-bold text-[var(--ink)]">¿Qué aplicaciones utilizas?</p>
            <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {selectable.map((mod) => {
                const Icon = moduleIconMap[mod.icon];
                const on = selected.includes(mod.id);
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => toggle(mod.id)}
                    className={`relative flex flex-col items-center gap-2 rounded-xl border-2 p-3 text-center transition ${
                      on ? "border-[var(--brand)] bg-[var(--brand-soft)]/40" : "border-transparent bg-[#f8f9fa] hover:bg-[#f1f3f5]"
                    }`}
                  >
                    {on && (
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--panel)] text-[10px] text-white">
                        ✓
                      </span>
                    )}
                    <Icon className="h-10 w-10" />
                    <span className="text-[11px] font-semibold leading-tight text-[var(--ink)]">{mod.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <p className="font-semibold text-[var(--ink)]">¿Cuántos usuarios?</p>
              <div className="inline-flex items-center rounded-lg border border-[var(--line)]">
                <button
                  type="button"
                  className="px-3 py-2 text-lg font-bold text-[var(--muted)] hover:text-[var(--ink)]"
                  onClick={() => setUsers((u) => Math.max(1, u - 1))}
                  aria-label="Menos usuarios"
                >
                  −
                </button>
                <span className="min-w-[3rem] text-center font-display text-xl font-bold">{users}</span>
                <button
                  type="button"
                  className="px-3 py-2 text-lg font-bold text-[var(--muted)] hover:text-[var(--ink)]"
                  onClick={() => setUsers((u) => Math.min(50, u + 1))}
                  aria-label="Más usuarios"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
              Aplicaciones a sustituir
            </p>
            <ul className="mt-3 max-h-32 space-y-1.5 overflow-y-auto text-sm text-[var(--ink)]">
              {selectable
                .filter((m) => selected.includes(m.id))
                .map((m) => (
                  <li key={m.id} className="flex justify-between gap-2">
                    <span>{m.name}</span>
                    <span className="text-[var(--muted)]">~{m.replaceCost} €/usuario</span>
                  </li>
                ))}
            </ul>
            <p className="mt-4 border-t border-[var(--line)] pt-3 text-sm text-[var(--muted)]">
              TOTAL suelto{" "}
              <span className="font-semibold text-[var(--ink)]">
                {replaceYear.toLocaleString("es-ES")} € al año
              </span>
            </p>

            {/* Precio Base Clínica — mensual grande, anual pequeño */}
            <div className="mt-6 rounded-xl border-2 border-[var(--brand)] bg-[var(--brand-soft)]/50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-deep)]">
                Con Base Clínica
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">Plan Clínica 360 + extras seleccionados</p>
              <p className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[var(--ink)] sm:text-5xl">
                {Math.round(baseYear / 12).toLocaleString("es-ES")} €
                <span className="ml-1 text-base font-semibold text-[var(--muted)]">/ mes</span>
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {baseYear.toLocaleString("es-ES")} € al año · todo integrado
              </p>
            </div>

            <div className="mt-4 rounded-xl bg-[#fff8e8] px-5 py-4">
              <p className="font-script text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
                Te ahorras
              </p>
              <p className="relative mt-1 inline-block font-display text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
                <span className="relative z-10">{savings.toLocaleString("es-ES")} € al año</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0.5 z-0 h-2.5 rounded bg-[#F59E0B]/45"
                />
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                ≈ {Math.round(savings / 12).toLocaleString("es-ES")} €/mes frente a herramientas sueltas
              </p>
            </div>

            <Link href="/contacto" className="odoo-btn-primary mt-6 w-full text-center">
              Quiero este plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
