"use client";

import { motion, useReducedMotion } from "framer-motion";

const paths = [
  {
    id: "web",
    href: "#portfolio",
    title: "Web que capta pacientes",
    description:
      "Presencia premium, clara y orientada a citas. Ideal si ya gestionas bien por dentro pero tu web no convierte.",
    meta: "01 · Captación",
  },
  {
    id: "erp",
    href: "#erp-solution",
    title: "ERP que ordena la clínica",
    description:
      "Agenda, pacientes, stock, caja, facturas y fiscalidad en un solo sitio. Ideal si tu operación va a Excel o WhatsApp.",
    meta: "02 · Gestión",
  },
  {
    id: "integral",
    href: "#pricing",
    title: "Pack integral",
    description:
      "Web + software con el mismo interlocutor. Ideal para aperturas o cuando quieres digitalizarlo todo de una vez.",
    meta: "03 · Todo junto",
  },
] as const;

export function PathChooser() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="elige" className="relative z-10 scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Empieza por aquí</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
            ¿Qué te interesa ahora?
          </h2>
        </div>

        <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {paths.map((path, index) => (
            <motion.a
              key={path.id}
              href={path.href}
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col gap-3 py-8 transition sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:py-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-[var(--brand-soft)] transition-all duration-500 group-hover:w-full"
              />
              <div className="relative z-10 max-w-2xl">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
                  {path.meta}
                </p>
                <h3 className="font-display mt-2 text-2xl font-bold text-[var(--ink)] transition group-hover:translate-x-1 sm:text-3xl">
                  {path.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {path.description}
                </p>
              </div>
              <span className="relative z-10 inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[var(--brand)]">
                Ir
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
