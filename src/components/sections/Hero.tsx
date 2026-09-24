"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroData } from "@/types/landing";
import { useT } from "@/i18n/LocaleProvider";

type HeroProps = {
  data: HeroData;
};

export function Hero({ data }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const t = useT();

  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
      <div className="site-rail relative z-10 grid lg:grid-cols-[minmax(0,1fr)_minmax(140px,240px)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(160px,280px)]">
        <div className="max-w-[56rem] xl:max-w-[64rem]">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-eyebrow"
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.65 }}
            className="font-display mt-5 text-[clamp(2.15rem,5.5vw,5rem)] font-extrabold leading-[1.2] tracking-[-0.04em] text-[var(--ink)] sm:mt-6 sm:leading-[1.18]"
          >
            {t.hero.titleBefore}{" "}
            <span className="mark-accent">{t.hero.titleMark}</span> {t.hero.titleAfter}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-6 max-w-[40ch] text-base leading-relaxed text-[var(--muted)] sm:mt-7 sm:text-xl lg:text-[1.35rem]"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-3 sm:mt-10"
          >
            <a href={data.primaryCta.href} className="btn-primary">
              {t.hero.primaryCta}
              <span className="btn-arrow">→</span>
            </a>
            <a href={data.secondaryCta.href} className="btn-secondary">
              {t.hero.secondaryCta}
            </a>
          </motion.div>
        </div>
        <div className="hidden lg:block" aria-hidden />
      </div>
    </section>
  );
}
