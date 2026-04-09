"use client";

import { motion } from "framer-motion";
import { CONTACT_EMAIL } from "@/config/contact";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative z-10 scroll-mt-24 overflow-hidden py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-teal-500/30 bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 px-8 py-12 shadow-2xl shadow-teal-900/40 sm:px-12 sm:py-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-100/90">
              Siguiente paso
            </p>
            <h2
              id="final-cta-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Agenda una reunión de 20 minutos sin compromiso
            </h2>
            <p className="mt-4 text-base leading-relaxed text-teal-50/95 sm:text-lg">
              Repasamos tu clínica, te mostramos el software y valoramos si el Pack Integral encaja.
              Recibes resumen y, si procede, propuesta cerrada.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contacto"
                className="inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-teal-900 shadow-lg transition hover:scale-[1.03] hover:bg-teal-50 active:scale-[0.98]"
              >
                Pedir reunión
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Demo BaseClinica")}`}
                className="inline-flex rounded-xl border-2 border-white/35 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/15"
              >
                Escribir por correo
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
