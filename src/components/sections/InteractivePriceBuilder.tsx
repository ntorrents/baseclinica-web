"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type Module = {
  id: string;
  label: string;
  hint: string;
  monthlyPrice: number;
  setupPrice: number;
  requires?: string;
};

type BaseKey = "web" | "software" | "ambos";

const BASES: {
  id: BaseKey;
  title: string;
  line: string;
  modules: string[];
}[] = [
  {
    id: "web",
    title: "Solo Web",
    line: "Captar pacientes online",
    modules: ["web"],
  },
  {
    id: "software",
    title: "Solo Software",
    line: "Ordenar la clínica por dentro",
    modules: ["software_base"],
  },
  {
    id: "ambos",
    title: "Web + Software",
    line: "Ecosistema completo (−140€ setup)",
    modules: ["web", "software_base"],
  },
];

const ADDONS: Module[] = [
  {
    id: "seo",
    label: "SEO & copy",
    hint: "Keywords clínicas + textos persuasivos",
    monthlyPrice: 0,
    setupPrice: 400,
    requires: "web",
  },
  {
    id: "blog",
    label: "Blog salud",
    hint: "Artículos listos para posicionar",
    monthlyPrice: 0,
    setupPrice: 250,
    requires: "web",
  },
  {
    id: "mantenimiento",
    label: "Mantenimiento web",
    hint: "Cambios y evolución mensual",
    monthlyPrice: 40,
    setupPrice: 0,
    requires: "web",
  },
  {
    id: "erp_plus",
    label: "Multi-profesional",
    hint: "Hasta 5 roles y permisos",
    monthlyPrice: 40,
    setupPrice: 0,
    requires: "erp_base",
  },
  {
    id: "citas_online",
    label: "Citas online",
    hint: "Reservas sincronizadas con la agenda",
    monthlyPrice: 20,
    setupPrice: 0,
    requires: "erp_base",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    hint: "Recordatorios automáticos",
    monthlyPrice: 30,
    setupPrice: 150,
    requires: "erp_base",
  },
  {
    id: "firma_digital",
    label: "Firma digital",
    hint: "Consentimientos sin papel",
    monthlyPrice: 25,
    setupPrice: 100,
    requires: "erp_base",
  },
  {
    id: "finanzas",
    label: "Finanzas Pro",
    hint: "Facturas y control avanzado",
    monthlyPrice: 20,
    setupPrice: 0,
    requires: "erp_base",
  },
  {
    id: "proveedores",
    label: "Proveedores & stock",
    hint: "Pedidos y materiales",
    monthlyPrice: 15,
    setupPrice: 0,
    requires: "erp_base",
  },
  {
    id: "portal_paciente",
    label: "Portal del paciente",
    hint: "Área privada citas y documentos",
    monthlyPrice: 50,
    setupPrice: 300,
    requires: "erp_base",
  },
  {
    id: "multisede",
    label: "Multi-sede",
    hint: "Varios centros conectados",
    monthlyPrice: 160,
    setupPrice: 0,
    requires: "erp_base",
  },
];

const CATALOG: Record<string, { label: string; monthlyPrice: number; setupPrice: number }> = {
  web: { label: "Web corporativa base", monthlyPrice: 0, setupPrice: 890 },
  software_base: { label: "Software gestión starter", monthlyPrice: 49, setupPrice: 0 },
  ...Object.fromEntries(ADDONS.map((a) => [a.id, a])),
};

export function InteractivePriceBuilder() {
  const router = useRouter();
  const [base, setBase] = useState<BaseKey>("ambos");
  const [addons, setAddons] = useState<string[]>([]);

  const selectedModules = useMemo(() => {
    const baseMods = BASES.find((b) => b.id === base)?.modules ?? [];
    return [...baseMods, ...addons.filter((id) => {
      const mod = ADDONS.find((a) => a.id === id);
      if (!mod?.requires) return true;
      return baseMods.includes(mod.requires);
    })];
  }, [base, addons]);

  const visibleAddons = ADDONS.filter((a) => {
    if (!a.requires) return true;
    return selectedModules.includes(a.requires) || (BASES.find((b) => b.id === base)?.modules.includes(a.requires) ?? false);
  });

  const setupRaw = selectedModules.reduce((acc, id) => acc + (CATALOG[id]?.setupPrice ?? 0), 0);
  const monthlyTotal = selectedModules.reduce((acc, id) => acc + (CATALOG[id]?.monthlyPrice ?? 0), 0);
  const isIntegral = selectedModules.includes("web") && selectedModules.includes("erp_base");
  const finalSetup = isIntegral ? setupRaw - 140 : setupRaw;

  function chooseBase(next: BaseKey) {
    setBase(next);
    const allowed = new Set(BASES.find((b) => b.id === next)?.modules ?? []);
    setAddons((prev) =>
      prev.filter((id) => {
        const mod = ADDONS.find((a) => a.id === id);
        return mod?.requires ? allowed.has(mod.requires) : true;
      }),
    );
  }

  function toggleAddon(id: string) {
    setAddons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function handleContact() {
    const searchParams = new URLSearchParams();
    searchParams.set("modules", selectedModules.join(","));
    searchParams.set("source", "builder");
    searchParams.set("base", base);
    router.push(`/contacto?${searchParams.toString()}`);
  }

  return (
    <section id="configurador" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Configurador</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
            Arma tu presupuesto en 2 pasos
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Primero eliges la base. Luego solo ves los extras que encajan. El total se actualiza al momento.
          </p>
        </div>

        {/* Pasos */}
        <ol className="mt-10 flex items-center gap-3 text-sm font-semibold">
          <li className="flex items-center gap-2 text-[var(--brand)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand)] text-xs text-white">
              1
            </span>
            Base
          </li>
          <li className="h-px flex-1 max-w-[4rem] bg-[var(--line)]" />
          <li className="flex items-center gap-2 text-[var(--muted)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--line)] text-xs">
              2
            </span>
            Extras
          </li>
        </ol>

        {/* Paso 1 */}
        <div className="mt-8">
          <h3 className="font-display text-lg font-bold text-[var(--ink)]">¿Qué necesitas de base?</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {BASES.map((b) => {
              const active = base === b.id;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => chooseBase(b.id)}
                  className={`rounded-2xl border px-5 py-5 text-left transition ${
                    active
                      ? "border-[var(--ink)] bg-[var(--ink)] text-white shadow-[0_20px_50px_-28px_rgba(28,21,32,0.55)]"
                      : "border-[var(--line)] bg-[var(--surface)]/80 text-[var(--ink)] hover:border-[var(--brand)]"
                  }`}
                >
                  <span className="font-display text-xl font-bold">{b.title}</span>
                  <span className={`mt-2 block text-sm ${active ? "text-white/70" : "text-[var(--muted)]"}`}>
                    {b.line}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Paso 2 */}
          <div>
            <h3 className="font-display text-lg font-bold text-[var(--ink)]">Añade solo lo que uses</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Opcional. Puedes dejarlo vacío y ampliar más adelante.
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={base}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="mt-5 flex flex-col gap-2"
              >
                {visibleAddons.length === 0 ? (
                  <p className="rounded-xl border border-dashed border-[var(--line)] px-4 py-8 text-center text-sm text-[var(--muted)]">
                    Con esta base no hay extras disponibles.
                  </p>
                ) : (
                  visibleAddons.map((mod) => {
                    const on = addons.includes(mod.id);
                    return (
                      <button
                        key={mod.id}
                        type="button"
                        onClick={() => toggleAddon(mod.id)}
                        className={`flex items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition ${
                          on
                            ? "border-[var(--brand)] bg-[var(--brand-soft)]"
                            : "border-[var(--line)] bg-[var(--surface)]/70 hover:border-[var(--brand)]/40"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                            on ? "bg-[var(--brand)] text-white" : "bg-[var(--line)]/60 text-[var(--muted)]"
                          }`}
                        >
                          {on ? "✓" : "+"}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-semibold text-[var(--ink)]">{mod.label}</span>
                          <span className="block text-xs text-[var(--muted)]">{mod.hint}</span>
                        </span>
                        <span className="shrink-0 text-right text-xs font-semibold text-[var(--ink)]">
                          {mod.setupPrice > 0 && <span className="block">+{mod.setupPrice}€</span>}
                          {mod.monthlyPrice > 0 && (
                            <span className="block text-[var(--brand)]">+{mod.monthlyPrice}€/mes</span>
                          )}
                          {mod.setupPrice === 0 && mod.monthlyPrice === 0 && <span>—</span>}
                        </span>
                      </button>
                    );
                  })
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Resumen */}
          <aside className="sticky top-28 rounded-3xl border border-[var(--ink)]/10 bg-[var(--ink)] p-6 text-white shadow-[0_30px_70px_-36px_rgba(28,21,32,0.6)] sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              Tu estimación
            </p>

            <ul className="mt-4 space-y-2 border-b border-white/10 pb-4 text-sm text-white/75">
              {selectedModules.map((id) => (
                <li key={id} className="flex justify-between gap-3">
                  <span>{CATALOG[id]?.label ?? id}</span>
                  <span className="tabular-nums text-white/50">
                    {(CATALOG[id]?.setupPrice ?? 0) > 0
                      ? `${CATALOG[id].setupPrice}€`
                      : (CATALOG[id]?.monthlyPrice ?? 0) > 0
                        ? `${CATALOG[id].monthlyPrice}€/m`
                        : "incluido"}
                  </span>
                </li>
              ))}
            </ul>

            {isIntegral && (
              <p className="mt-3 text-sm font-medium text-[var(--glow)]">Descuento pack integral −140€</p>
            )}

            <div className="mt-5 space-y-3">
              <div className="flex items-end justify-between">
                <span className="text-sm text-white/55">Setup (único)</span>
                <span className="font-display text-3xl font-bold tabular-nums">{finalSetup}€</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-sm text-white/55">Cuota mensual</span>
                <span className="font-display text-3xl font-bold tabular-nums text-[var(--glow)]">
                  {monthlyTotal}€
                  <span className="text-base font-medium text-white/40">/mes</span>
                </span>
              </div>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-white/40">
              Orientativo sin impuestos. 10% dto. si facturas el software anual.
            </p>

            <button type="button" onClick={handleContact} className="mt-6 w-full rounded-full bg-white py-3.5 text-sm font-bold text-[var(--ink)] transition hover:bg-[var(--brand-soft)]">
              Enviar esta configuración
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
