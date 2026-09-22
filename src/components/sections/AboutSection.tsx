"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n/LocaleProvider";

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  const t = useT();

  return (
    <section id="nosotros" className="scroll-mt-28 py-16 sm:py-24 lg:py-28">
      <div className="site-rail relative z-10">
        <p className="section-eyebrow">{t.about.eyebrow}</p>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="font-display mt-6 max-w-5xl text-[clamp(1.4rem,3.2vw,2.65rem)] font-bold leading-[1.28] tracking-[-0.03em] text-[var(--ink)] sm:mt-8"
        >
          {t.about.bodyBefore}{" "}
          <span className="mark-accent">{t.about.mark1}</span>
          {t.about.bodyMid} <span className="mark-accent">{t.about.mark2}</span>
          {t.about.bodyAfter}
        </motion.p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:mt-8 sm:text-lg lg:text-xl">
          {t.about.support}
        </p>
      </div>
    </section>
  );
}
