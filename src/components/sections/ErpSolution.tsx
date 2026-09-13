"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { FocalScanFrame } from "@/components/ui/FocalScanFrame";
import { ErpFeature } from "@/types/landing";

type ErpSolutionProps = {
  features: ErpFeature[];
  desktopShot: string;
  mobileShot: string;
  desktopPadColor?: string;
  mobilePadColor?: string;
};

export function ErpSolution({ features, desktopShot, desktopPadColor }: ErpSolutionProps) {
  const reduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(0);

  const current = features[activeTab];
  const currentImage = current?.image || desktopShot;
  const currentPadColor = current?.imagePadColor || desktopPadColor || "#f4f5f7";

  return (
    <section id="erp-solution" className="relative z-10 scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Solución 2 · Software ERP</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
              La clínica entera, en pantallas claras
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)] lg:text-right">
            Desliza por los módulos. Cada cambio lanza un barrido clínico sobre la captura real.
          </p>
        </div>

        {/* Filmstrip selector */}
        <div className="mt-10 -mx-6 overflow-x-auto px-6 pb-2 [scrollbar-width:thin]">
          <div className="flex min-w-max gap-2">
            {features.map((item, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[var(--brand)] text-white"
                      : "bg-white/70 text-[var(--muted)] hover:bg-white hover:text-[var(--ink)]"
                  }`}
                >
                  <span className="mr-2 opacity-60">{String(index + 1).padStart(2, "0")}</span>
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <FocalScanFrame
              src={currentImage}
              alt={`Pantalla del ERP: ${current?.title ?? "módulo"}`}
              padColor={currentPadColor}
              label={current?.title}
              priority={activeTab === 0}
            />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current?.title}
              initial={reduceMotion ? false : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -12 }}
              transition={{ duration: 0.35 }}
              className="lg:pl-4"
            >
              <p className="font-display text-6xl font-extrabold text-[var(--brand)]/15">
                {String(activeTab + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold text-[var(--ink)] sm:text-3xl">
                {current?.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                {current?.description}
              </p>
              <div className="mt-8 flex gap-2">
                <button
                  type="button"
                  aria-label="Módulo anterior"
                  disabled={activeTab === 0}
                  onClick={() => setActiveTab((t) => Math.max(0, t - 1))}
                  className="rounded-xl border border-[var(--line)] bg-white px-4 py-2.5 text-sm font-semibold disabled:opacity-40"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Módulo siguiente"
                  disabled={activeTab === features.length - 1}
                  onClick={() => setActiveTab((t) => Math.min(features.length - 1, t + 1))}
                  className="rounded-xl border border-[var(--line)] bg-white px-4 py-2.5 text-sm font-semibold disabled:opacity-40"
                >
                  →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 border-l-2 border-emerald-500 pl-5 text-sm leading-relaxed text-[var(--muted)] sm:text-base"
        >
          <strong className="text-[var(--ink)]">Migración asistida.</strong> ¿Vienes de Excel u otro
          software? Te ayudamos a migrar pacientes e historiales sin trauma operativo.
        </motion.p>
      </div>
    </section>
  );
}
