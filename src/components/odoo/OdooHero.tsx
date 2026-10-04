"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { odooApps } from "@/data/odoo-landing";

export function OdooHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white pb-10 pt-12 sm:pb-14 sm:pt-16 lg:pt-20">
      <div className="odoo-rail text-center">
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="font-display mx-auto max-w-4xl text-[clamp(2.4rem,6vw,4.75rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]"
        >
          Sencillo, eficiente
          <br />
          y a buen precio
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)] sm:text-xl"
        >
          Una plataforma para tu clínica. Agenda, historias, firma, stock y fiscalidad
          en el mismo sitio — sin Excel, sin hilos de WhatsApp, sin papeles perdidos.
        </motion.p>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 font-display text-2xl font-bold text-[var(--ink)] sm:text-3xl"
        >
          Desde{" "}
          <span className="text-[var(--brand-deep)]">49 €/mes</span>
          <span className="mt-1 block text-base font-medium text-[var(--muted)] sm:inline sm:mt-0 sm:ml-2">
            · módulos extras desde 5 €
          </span>
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/contacto" className="odoo-btn-primary text-base">
            Empezar ahora
          </Link>
          <Link href="/precios" className="odoo-btn-secondary text-base">
            Ver precios
          </Link>
        </motion.div>
      </div>

      {/* Apps grid — patrón Odoo */}
      <div id="apps" className="odoo-rail mt-14 scroll-mt-24 sm:mt-16">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6 lg:grid-cols-8">
          {odooApps.map((app, i) => (
            <motion.a
              key={app.id}
              href="/precios#modulos"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.03 }}
              className="group flex flex-col items-center gap-2 rounded-lg p-2 transition hover:bg-[#f8f9fa]"
            >
              <span
                className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl shadow-sm transition group-hover:scale-105 sm:h-16 sm:w-16 sm:text-3xl"
                style={{ backgroundColor: `${app.color}18`, color: app.color }}
                aria-hidden
              >
                {app.icon}
              </span>
              <span className="text-center text-[11px] font-semibold leading-tight text-[var(--ink)] sm:text-xs">
                {app.name}
              </span>
            </motion.a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[var(--muted)]">
          Imagina todas las herramientas de tu clínica a un clic.{" "}
          <Link href="/precios" className="font-semibold text-[var(--brand-deep)] underline-offset-2 hover:underline">
            Ver qué incluye cada plan →
          </Link>
        </p>
      </div>
    </section>
  );
}
