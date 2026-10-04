"use client";

import { motion, useReducedMotion } from "framer-motion";

const comparisons = [
  {
    theme: "Citas",
    others: "Un hueco en el calendario. Y poco más.",
    base: "Crear la cita descuenta el vial, prepara el consentimiento, calcula el beneficio y agenda el seguimiento a 15 días.",
  },
  {
    theme: "Stock",
    others: "Inventario genérico, desconectado del tratamiento.",
    base: "El lote correcto se mueve solo: trazabilidad clínica sin hojas Excel ni olvidos.",
  },
  {
    theme: "Legal",
    others: "PDFs sueltos y firmas a mano, si da tiempo.",
    base: "Consentimiento médico listo para firmar en el momento de la sesión.",
  },
  {
    theme: "Seguimiento",
    others: "Post-its, memoria y “ya te llamo”.",
    base: "Alerta automática para recuperar al paciente cuando toca — no cuando te acuerdas.",
  },
] as const;

export function OdooEcosystem() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="ecosistema"
      className="relative scroll-mt-24 overflow-hidden border-t border-[var(--line)] bg-white py-16 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(59,191,247,0.11),transparent_52%),radial-gradient(ellipse_at_92%_28%,rgba(240,122,58,0.07),transparent_42%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "linear-gradient(to bottom, black 8%, transparent 92%)",
        }}
      />

      <div className="odoo-rail relative">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-deep)]">
            Ecosistema, no herramientas
          </p>
          <h2 className="font-display mt-4 text-[clamp(1.85rem,4.2vw,3.15rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[var(--ink)]">
            Una cita no es un hueco.
            <br className="hidden sm:block" />{" "}
            Es el inicio de la cadena.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            Otros softwares o un calendario básico te dejan módulos sueltos. Base Clínica
            convierte cada sesión en stock, firma, margen y seguimiento — sin que tengas
            que acordarte.
          </p>
        </motion.div>

        {/* Column labels (desktop) */}
        <div className="mx-auto mt-12 hidden max-w-4xl grid-cols-[7.5rem_minmax(0,1fr)_2.5rem_minmax(0,1.2fr)] gap-x-4 sm:mt-14 sm:grid">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
            Tema
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
            Lo que hacen otros
          </span>
          <span aria-hidden />
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--brand-deep)]">
            Lo que hace Base Clínica
          </span>
        </div>

        <ul className="mx-auto mt-4 max-w-4xl divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {comparisons.map((row, i) => (
            <motion.li
              key={row.theme}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : i * 0.06 }}
              className="grid gap-3 py-6 sm:grid-cols-[7.5rem_minmax(0,1fr)_2.5rem_minmax(0,1.2fr)] sm:items-start sm:gap-x-4 sm:py-7"
            >
              <p className="font-display text-lg font-bold tracking-tight text-[var(--ink)]">
                {row.theme}
              </p>

              <div>
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--muted)] sm:hidden">
                  Otros
                </p>
                <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
                  {row.others}
                </p>
              </div>

              <div className="flex items-center sm:justify-center sm:pt-1" aria-hidden>
                <span className="text-xs font-extrabold tracking-wide text-[var(--line)] sm:text-[var(--muted)]/50">
                  →
                </span>
              </div>

              <div className="relative pl-3 sm:pl-4">
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 top-0 w-[3px] rounded-full bg-[var(--brand)]"
                />
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--brand-deep)] sm:hidden">
                  Base Clínica
                </p>
                <p className="text-sm font-medium leading-relaxed text-[var(--ink)] sm:text-[15px]">
                  {row.base}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mx-auto mt-10 max-w-2xl text-center text-sm font-medium text-[var(--muted)] sm:text-base"
        >
          Menos saltos entre apps. Más tiempo clínico. Control total de lo que pasa —
          y de lo que deja de pasar — en tu centro.
        </motion.p>
      </div>
    </section>
  );
}
