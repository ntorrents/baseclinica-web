"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { PainPoint } from "@/types/landing";

type PainPointsProps = {
  items: PainPoint[];
};

export function PainPoints({ items }: PainPointsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionContainer id="problema">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
          El problema
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          La mayoría de clínicas pierde tiempo y oportunidades por procesos desconectados
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-32px" }}
            transition={{
              duration: 0.38,
              delay: reduceMotion ? 0 : i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-2xl border border-white/10/90 bg-slate-900 p-6 shadow-none transition-shadow duration-300 hover:border-slate-300 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionContainer>
  );
}
