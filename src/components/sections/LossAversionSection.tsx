"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";

const losses = [
  {
    icon: "⏰",
    color: "red",
    gradient: "from-red-500 to-orange-500",
    bgSoft: "bg-red-50",
    textColor: "text-red-600",
    title: "Tiempo",
    bigNumber: "13.5h",
    subtitle: "perdidas cada semana",
    description: "en buscar expedientes, hacer facturas y cuadrar números en Excel",
    detail: "= 650 horas al año = 27 días completos de tu vida",
    cta: "Recupera tu tiempo",
  },
  {
    icon: "💸",
    color: "orange",
    gradient: "from-orange-500 to-amber-500",
    bgSoft: "bg-orange-50",
    textColor: "text-orange-600",
    title: "Dinero",
    bigNumber: "29.250€",
    subtitle: "al año en productividad",
    description: "por el coste de oportunidad de tareas que deberían ser automáticas",
    detail: "~2.430€ cada mes que podrían ir a reinversión o salario",
    cta: "Recupera tu dinero",
  },
  {
    icon: "📉",
    color: "amber",
    gradient: "from-amber-500 to-yellow-500",
    bgSoft: "bg-amber-50",
    textColor: "text-amber-600",
    title: "Pacientes",
    bigNumber: "1 de 4",
    subtitle: "no vuelve por fricción",
    description: "mala experiencia administrativa: retrasos, confirmaciones tardías, documentos perdidos",
    detail: "Podrías atender 9+ pacientes más por semana con el tiempo recuperado",
    cta: "Recupera tus pacientes",
  },
];

export function LossAversionSection() {
  const reduceMotion = useReducedMotion();
  const t = useT();

  return (
    <section id="perdidas" className="scroll-mt-28 py-16 sm:py-24 lg:py-32">
      <div className="site-rail relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            Lo que está pasando AHORA
          </motion.p>
          
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display mt-5 text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink"
          >
            ¿Cuánto estás{" "}
            <span className="relative inline-block">
              <span className="mark-accent">perdiendo</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-1 left-0 right-0 h-1 bg-red-500 origin-left"
              />
            </span>{" "}
            en este momento?
          </motion.h2>
          
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            Cada día sin automatización es tiempo, dinero y pacientes que se te escapan.
            Aquí están los números reales (duelen, pero son necesarios):
          </motion.p>
        </div>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {losses.map((loss, i) => (
            <motion.div
              key={loss.title}
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Gradient header */}
              <div className={`relative h-28 bg-gradient-to-br ${loss.gradient} p-6`}>
                <div className="flex items-start justify-between">
                  <span className="text-5xl drop-shadow-sm">{loss.icon}</span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    Estás perdiendo
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 lg:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                  {loss.title}
                </p>
                
                <motion.div
                  initial={reduceMotion ? false : { scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                  className="mt-3"
                >
                  <p className={`font-display text-5xl font-black ${loss.textColor} lg:text-6xl`}>
                    {loss.bigNumber}
                  </p>
                  <p className={`mt-1 text-lg font-semibold ${loss.textColor}/80`}>
                    {loss.subtitle}
                  </p>
                </motion.div>

                <p className="mt-5 leading-relaxed text-ink/80">
                  {loss.description}
                </p>

                <div className={`mt-5 rounded-xl ${loss.bgSoft} p-4`}>
                  <p className="text-sm font-medium text-ink/70">
                    {loss.detail}
                  </p>
                </div>

                <Link
                  href="/contacto"
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${loss.gradient} px-5 py-3 font-semibold text-white shadow-md transition hover:shadow-xl hover:scale-[1.02]`}
                >
                  {loss.cta}
                  <span className="text-lg">→</span>
                </Link>
              </div>

              {/* Decorative corner */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-16 max-w-3xl rounded-3xl border-2 border-brand/30 bg-gradient-to-br from-brand-soft/50 to-white p-8 text-center shadow-xl lg:mt-20 lg:p-12"
        >
          <p className="font-display text-3xl font-bold text-ink lg:text-4xl">
            Deja de sangrar recursos cada día.
          </p>
          <p className="mt-4 text-lg text-muted">
            En 30 minutos de demo verás cómo recuperar{" "}
            <span className="font-bold text-brand">todo esto</span>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contacto" className="btn-primary text-lg">
              Ver demo ahora
              <span className="btn-arrow">→</span>
            </Link>
            <Link href="/precios" className="btn-secondary text-lg">
              Ver precios
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">
            ⚡ Implementación en &lt; 1 semana · Sin permanencia · Soporte incluido
          </p>
        </motion.div>
      </div>
    </section>
  );
}
