"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n/LocaleProvider";

export function KpiSection() {
  const reduceMotion = useReducedMotion();
  const t = useT();

  return (
    <section className="relative z-[20] bg-[var(--panel)] py-16 text-white sm:py-20 lg:py-24">
      <div className="site-rail">
        <p className="section-eyebrow !text-white/55">{t.kpi.eyebrow}</p>
        <h2 className="font-display mt-4 max-w-3xl text-[clamp(1.75rem,3.8vw,3.1rem)] font-extrabold leading-[1.1] tracking-[-0.04em]">
          {t.kpi.title}
        </h2>
        <div className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {t.kpi.items.map((k, i) => (
            <motion.div
              key={k.label}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="border-t border-white/15 pt-6"
            >
              <p className="font-display text-4xl font-extrabold tracking-tight text-[var(--brand)] sm:text-5xl lg:text-6xl">
                {k.value}
              </p>
              <p className="mt-3 text-base font-semibold sm:text-lg">{k.label}</p>
              <p className="mt-1 text-sm text-white/50">{k.hint}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
