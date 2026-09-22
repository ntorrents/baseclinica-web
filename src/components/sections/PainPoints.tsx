"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n/LocaleProvider";

const styles = [
  { bg: "bg-[#1a5c5a]", graphic: "bg-[#3aa8ff]" },
  { bg: "bg-[#8a5a2b]", graphic: "bg-[#f07a3a]" },
  { bg: "bg-[#1e3a5f]", graphic: "bg-[#22c55e]" },
];

export function PainPoints() {
  const reduceMotion = useReducedMotion();
  const t = useT();

  return (
    <section id="problema" className="scroll-mt-28 py-16 sm:py-24">
      <div className="site-rail relative z-10">
        <p className="section-eyebrow">{t.problem.eyebrow}</p>
        <h2 className="font-display mt-5 max-w-3xl text-[clamp(1.85rem,4vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[var(--ink)]">
          {t.problem.titleBefore}{" "}
          <span className="mark-accent">{t.problem.titleMark}</span>
          {t.problem.titleAfter}
        </h2>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-2">
          {t.problem.reasons.map((r, i) => (
            <motion.div
              key={r.n}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: i * 0.07 }}
              className={`relative z-10 grid overflow-hidden rounded-[1.4rem] text-white sm:grid-cols-[1.2fr_0.8fr] ${i === 2 ? "lg:col-span-2" : ""}`}
            >
              <div className={`${styles[i]?.bg ?? styles[0].bg} p-6 sm:p-9`}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-xs">
                  {t.problem.eyebrow} · {t.problem.reasonLabel} {r.n}
                </p>
                <h3 className="font-display mt-3 text-xl font-extrabold tracking-tight sm:mt-4 sm:text-3xl">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75 sm:mt-4 sm:text-base">{r.body}</p>
              </div>
              <div className={`${styles[i]?.graphic ?? styles[0].graphic} relative min-h-[100px] sm:min-h-full`}>
                <span className="font-display absolute -bottom-3 -right-1 text-[6rem] font-extrabold leading-none text-white/25 sm:-bottom-4 sm:-right-2 sm:text-[10rem]">
                  {r.n}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
