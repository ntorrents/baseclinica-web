"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PainPoint } from "@/types/landing";

type PainPointsProps = {
  items: PainPoint[];
};

export function PainPoints({ items }: PainPointsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="problema" className="relative z-10 scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="section-eyebrow">El contexto</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
            Si te suena familiar, estás en el sitio correcto
          </h2>
        </div>

        <div className="space-y-0">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`grid items-start gap-4 border-t border-[var(--line)] py-10 md:grid-cols-[7rem_1fr] md:gap-10 ${
                i % 2 === 1 ? "md:pl-12 lg:pl-24" : ""
              }`}
            >
              <span className="font-display text-5xl font-extrabold leading-none text-[var(--brand)]/25 md:text-6xl">
                0{i + 1}
              </span>
              <div className={i % 2 === 1 ? "md:max-w-xl md:ml-auto" : "md:max-w-xl"}>
                <h3 className="font-display text-2xl font-bold text-[var(--ink)]">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
