"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export function PathChooser() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="producto" className="scroll-mt-28 px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow">06 / Productos</p>
        <h2 className="font-display mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.3rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
          Dos productos.{" "}
          <span className="mark-accent">Claros</span>.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          Web para captar. ERP para operar. No son lo mismo — y se nota en la propuesta.
        </p>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="box-plain relative z-10 p-8 sm:p-10 lg:translate-y-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Web</p>
            <h3 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-[var(--ink)]">
              Presencia que convierte
            </h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--muted)]">
              Diseño responsive, servicios claros, formularios y SEO técnico. Tu clínica se entiende
              en segundos.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[var(--ink)]">
              <li>— Secciones clave y móvil impecable</li>
              <li>— Captación por formulario / WhatsApp</li>
              <li>— Base legal y cookies listas</li>
            </ul>
            <Link href="/precios#web" className="btn-primary mt-8">
              Ver precio web
              <span className="btn-arrow">→</span>
            </Link>
          </motion.article>

          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="box-panel relative z-20 p-8 sm:p-10 lg:-translate-y-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">ERP</p>
            <h3 className="font-display mt-3 text-3xl font-extrabold tracking-tight">
              Gestión del día a día
            </h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-white/60">
              Agenda, pacientes, stock, facturas y finanzas.{" "}
              <span className="text-white">Basic 35 €/mes</span> o{" "}
              <span className="text-white">Premium 49 €/mes</span>.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/85">
              <li>— Agenda y fichas clínicas</li>
              <li>— Caja e informes</li>
              <li>— Roles y módulos ampliables</li>
            </ul>
            <Link href="/precios#erp" className="btn-ghost-light mt-8">
              Ver planes ERP
            </Link>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
