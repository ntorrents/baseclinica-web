"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ErpFeature } from "@/types/landing";
import { useT } from "@/i18n/LocaleProvider";

type ErpSolutionProps = {
  features: ErpFeature[];
  desktopShot: string;
  mobileShot: string;
  desktopPadColor?: string;
  mobilePadColor?: string;
};

export function ErpSolution({ desktopShot, mobileShot }: ErpSolutionProps) {
  const reduceMotion = useReducedMotion();
  const t = useT();

  return (
    <section id="erp-solution" className="scroll-mt-28 overflow-x-clip py-16 sm:py-24">
      <div className="site-rail relative z-10">
        <p className="section-eyebrow">{t.erp.eyebrow}</p>
        <h2 className="font-display mt-5 max-w-3xl text-[clamp(1.85rem,3.8vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[var(--ink)]">
          {t.erp.titleBefore} <span className="mark-accent">{t.erp.titleMark}</span>
          {t.erp.titleAfter}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg lg:text-xl">
          {t.erp.lead}
        </p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-10 pb-16 sm:mt-12 sm:pb-20"
        >
          <div className="box-plain relative z-[20] overflow-hidden p-2 sm:p-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#f7f6f3]">
              <Image
                src={desktopShot}
                alt={t.erp.altDesktop}
                fill
                className="object-cover object-top"
                sizes="(max-width:1024px) 100vw, 90rem"
                quality={90}
                unoptimized
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-3 z-[21] w-[32%] max-w-[180px] overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-1.5 shadow-[0_20px_50px_rgba(15,20,32,0.14)] sm:left-6 sm:w-[28%] sm:max-w-[220px] sm:p-2">
            <div className="relative aspect-[9/19] overflow-hidden rounded-xl bg-[#f7f6f3]">
              <Image
                src={mobileShot}
                alt={t.erp.altMobile}
                fill
                className="object-cover object-top"
                sizes="220px"
                quality={95}
                unoptimized
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
