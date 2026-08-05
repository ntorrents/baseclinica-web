"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroData } from "@/types/landing";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { DeviceMockup } from "@/components/ui/DeviceMockup";

type HeroProps = {
  data: HeroData;
};

export function Hero({ data }: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionContainer className="pt-28 sm:pt-36 overflow-hidden bg-slate-950">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
        
        {/* Left Column: Text Content */}
        <div className="max-w-3xl lg:max-w-xl mx-auto text-center lg:text-left">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex rounded-full border border-blue-900/50 bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-400"
          >
            {data.eyebrow}
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-pretty text-lg leading-relaxed text-slate-400"
          >
            {data.subtitle}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href={data.primaryCta.href}
              className="inline-flex justify-center items-center rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
            >
              {data.primaryCta.label}
            </a>
            <a
              href={data.secondaryCta.href}
              className="inline-flex justify-center items-center rounded-xl border border-slate-800 bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:border-slate-700 hover:bg-slate-800"
            >
              {data.secondaryCta.label}
            </a>
          </motion.div>
          
          <motion.div 
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500"
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-slate-400">JP</div>
              <div className="w-8 h-8 rounded-full bg-blue-900 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-blue-200">MC</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-slate-400">AL</div>
            </div>
            <p className="text-slate-400">Clínicas que ya confían en nuestra tecnología</p>
          </motion.div>
        </div>

        {/* Right Column: Visual Mockup */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:-mr-12 xl:-mr-24"
        >
          {/* Decorative background blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-900/20 to-violet-900/20 rounded-full blur-3xl -z-10 opacity-70" />
          
          <DeviceMockup 
            src="/images/erp-dashboard.png" 
            alt="Software ERP Clínico Dashboard"
            padColor="#fbf9f7"
          />
        </motion.div>
        
      </div>
    </SectionContainer>
  );
}
