"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CONTACT_EMAIL } from "@/config/contact";

export function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative z-10 scroll-mt-24 overflow-hidden bg-[var(--brand)] py-24 sm:py-32"
    >
      <motion.div
        aria-hidden
        animate={reduceMotion ? undefined : { x: ["-5%", "5%", "-5%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-1/4 top-0 font-display text-[clamp(6rem,22vw,16rem)] font-extrabold leading-none text-white/[0.06] whitespace-nowrap"
      >
        BaseClinica · BaseClinica · BaseClinica
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
            Siguiente paso
          </p>
          <h2
            id="final-cta-title"
            className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Agenda una reunión de 20 minutos sin compromiso
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
            Repasamos tu clínica, te mostramos el software y valoramos si el Pack Integral encaja.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[var(--brand-deep)] transition hover:bg-[var(--brand-soft)]"
            >
              Ir a contacto
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Demo BaseClinica")}`}
              className="inline-flex rounded-xl border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Escribir por correo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
