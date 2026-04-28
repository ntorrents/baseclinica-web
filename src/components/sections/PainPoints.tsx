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
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          El problema
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
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
            className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-shadow duration-300 hover:border-slate-300 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionContainer>
  );
}
