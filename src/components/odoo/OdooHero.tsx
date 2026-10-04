"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroApps } from "@/data/odoo-landing";
import { moduleIconMap } from "@/components/odoo/ModuleIcons";
import { ScrollArrow, ScribbleUnderline } from "@/components/odoo/Decor";

export function OdooHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative bg-white pb-6 pt-28 sm:pb-10 sm:pt-32 lg:pt-36">
      <div className="odoo-rail text-center">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-script text-xl text-[var(--brand-deep)] sm:text-2xl"
        >
          Pensado solo para clínicas
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="font-display mx-auto mt-3 max-w-4xl text-[clamp(2.4rem,6vw,4.75rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]"
        >
          Todo tu negocio
          <br />
          <span className="relative inline-block">
            en una sola plataforma
            <ScribbleUnderline />
          </span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)] sm:text-xl"
        >
          No es un software genérico que “sirve para todo”. Base Clínica está diseñado para
          el flujo real de una clínica médico-estética — y se adapta a cómo trabajas tú,
          no al revés.
        </motion.p>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 font-display text-2xl font-bold text-[var(--ink)] sm:text-3xl"
        >
          Desde{" "}
          <span className="text-[var(--brand-deep)]">49 €/mes</span>
          <span className="mt-1 block text-base font-medium text-[var(--muted)] sm:ml-2 sm:mt-0 sm:inline">
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
            Pruébalo gratis
          </Link>
          <Link href="/precios" className="odoo-btn-secondary text-base">
            Ver precios
          </Link>
        </motion.div>
      </div>

      <div id="apps" className="odoo-rail relative mt-14 scroll-mt-28 sm:mt-16">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6">
          {heroApps.map((app, i) => {
            const Icon = moduleIconMap[app.icon];
            return (
              <motion.a
                key={app.id}
                href="/#modulos"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.03 }}
                className="group flex flex-col items-center gap-2 rounded-xl bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.06)] ring-1 ring-[var(--line)] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
                  <Icon className="h-full w-full" />
                </span>
                <span className="text-center text-[11px] font-semibold leading-tight text-[var(--ink)] sm:text-xs">
                  {app.name}
                </span>
              </motion.a>
            );
          })}
        </div>
        <ScrollArrow className="absolute -bottom-10 right-4 hidden sm:block lg:right-10" />
      </div>
    </section>
  );
}
