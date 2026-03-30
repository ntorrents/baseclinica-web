"use client";

import { motion } from "framer-motion";

function IconShield() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function IconBackup() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </svg>
  );
}

function IconLock() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

const pillars = [
  {
    title: "Cumplimiento RGPD",
    description:
      "Procesos y documentación alineados al tratamiento lícito de datos personales y de salud, con base para tu responsabilidad proactiva.",
    Icon: IconShield,
  },
  {
    title: "Copias de seguridad diarias",
    description:
      "Respaldo automatizado de la información crítica para minimizar el riesgo de pérdida y acelerar la recuperación ante incidentes.",
    Icon: IconBackup,
  },
  {
    title: "Cifrado de datos médicos",
    description:
      "Protección en tránsito y en reposo según buenas prácticas sectoriales, reduciendo la exposición de historiales y documentación clínica.",
    Icon: IconLock,
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function SecurityTrust() {
  return (
    <section
      id="confianza-seguridad"
      className="relative z-10 scroll-mt-24 border-y border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(20,184,166,0.18),transparent)]" />
      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/90">
            Infraestructura de confianza
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Seguridad y gobernanza pensadas para entornos clínicos
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            Transparencia operativa y controles que comunican seriedad a tu equipo y a tus
            pacientes.
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <motion.li
              key={pillar.title}
              variants={item}
              className="group rounded-2xl border border-slate-700/80 bg-slate-900/60 p-7 shadow-xl shadow-black/30 backdrop-blur-sm transition duration-300 hover:border-teal-500/40 hover:bg-slate-900/80"
            >
              <div className="mb-5 inline-flex rounded-xl border border-teal-500/25 bg-teal-500/10 p-3 text-teal-300 transition group-hover:border-teal-400/50 group-hover:text-teal-200">
                <pillar.Icon />
              </div>
              <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{pillar.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
