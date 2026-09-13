"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Cumplimiento RGPD",
    description:
      "Procesos y documentación alineados al tratamiento lícito de datos personales y de salud.",
  },
  {
    title: "Copias de seguridad diarias",
    description:
      "Respaldo automatizado de la información crítica para minimizar el riesgo de pérdida.",
  },
  {
    title: "Cifrado de datos médicos",
    description:
      "Protección en tránsito y en reposo según buenas prácticas del sector clínico.",
  },
] as const;

export function SecurityTrust() {
  return (
    <section
      id="confianza-seguridad"
      className="relative z-10 scroll-mt-24 border-y border-[var(--line)] py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="section-eyebrow">Confianza</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
            Seguridad pensada para entornos clínicos
          </h2>
        </motion.div>

        <ol className="mt-14">
          {pillars.map((pillar, i) => (
            <motion.li
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid gap-3 border-t border-[var(--line)] py-8 sm:grid-cols-[12rem_1fr] sm:gap-10"
            >
              <span className="font-display text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
                {pillar.title}
              </span>
              <p className="text-base leading-relaxed text-[var(--muted)]">{pillar.description}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--line)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <strong className="text-[var(--ink)]">RGPD y LOPD-GDD</strong> · nivel sanitario
          </span>
          <span>
            <strong className="text-[var(--ink)]">Veri*Factu</strong> · facturación electrónica
          </span>
        </div>
      </div>
    </section>
  );
}
