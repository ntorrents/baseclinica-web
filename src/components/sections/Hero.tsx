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
              className="inline-flex justify-center items-center rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] transition hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
            >
              {data.primaryCta.label}
            </a>
            <a
              href={data.secondaryCta.href}
              target={data.secondaryCta.href.includes("wa.me") ? "_blank" : undefined}
              rel={data.secondaryCta.href.includes("wa.me") ? "noopener noreferrer" : undefined}
              className="inline-flex justify-center items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:border-green-500/50 hover:bg-slate-800"
            >
              {data.secondaryCta.href.includes("wa.me") && (
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              )}
              {data.secondaryCta.label}
            </a>
          </motion.div>
          
          <motion.div 
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 pt-6 border-t border-slate-800/60"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-5 text-center sm:text-left">
              <div className="flex -space-x-2 shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-slate-950 flex items-center justify-center text-sm font-bold text-white shadow-lg">CC</div>
                <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-sm font-bold text-slate-600 blur-[1px] relative overflow-hidden">
                  <span className="opacity-50">?</span>
                </div>
              </div>
              <div className="max-w-sm">
                <p className="text-sm font-semibold text-blue-300">De la clínica, para la clínica.</p>
                <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
                  No somos una mega-empresa de software genérico. BaseClinica nació de las necesidades precisas de una clínica real en activo. Por eso entendemos tus problemas diarios y somos 100% personalizables.
                </p>
              </div>
            </div>
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
