"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { label: "Paciente", sub: "Descubre y pide cita" },
  { label: "Web", sub: "Captación y confianza" },
  { label: "ERP", sub: "Agenda, ficha, caja" },
  { label: "Clínica", sub: "Opera con claridad" },
];

export function SystemDiagram() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-6 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="box-panel relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 top-8 h-40 w-40 rounded-full border-[3px] border-[var(--brand)] opacity-70"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Cómo encaja</p>
          <h2 className="font-display mt-4 max-w-xl text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.04em]">
            Un flujo simple: de la primera visita a la caja diaria.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            {nodes.map((node, i) => (
              <motion.div
                key={node.label}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
              >
                {i < nodes.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[var(--brand)] sm:block"
                  >
                    →
                  </span>
                )}
                <p className="font-display text-xl font-bold">{node.label}</p>
                <p className="mt-2 text-sm text-white/55">{node.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
