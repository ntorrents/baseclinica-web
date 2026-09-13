"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type FocalScanFrameProps = {
  src: string;
  alt: string;
  padColor?: string;
  label?: string;
  priority?: boolean;
};

/**
 * Barrido clínico solo al cambiar de módulo; se desmonta al terminar.
 */
export function FocalScanFrame({
  src,
  alt,
  padColor = "#f4f5f7",
  label,
  priority = false,
}: FocalScanFrameProps) {
  const reduceMotion = useReducedMotion();
  const [scanning, setScanning] = useState(false);
  const isFirstSrc = useRef(true);

  useEffect(() => {
    if (isFirstSrc.current) {
      isFirstSrc.current = false;
      return;
    }
    if (reduceMotion) return;

    setScanning(true);
    const timer = window.setTimeout(() => setScanning(false), 1100);
    return () => window.clearTimeout(timer);
  }, [src, reduceMotion]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-[#eceff3] p-2.5 sm:p-3 shadow-[0_28px_70px_-32px_rgba(20,24,31,0.4)]">
      <div className="mb-2.5 flex items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d5dae2]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d5dae2]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d5dae2]" />
        </div>
        {label ? (
          <p className="truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            {label}
          </p>
        ) : null}
      </div>

      <div
        className="relative aspect-[1024/606] w-full overflow-hidden rounded-xl border border-[var(--line)]/70"
        style={{ backgroundColor: padColor }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={src}
            initial={reduceMotion ? false : { opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-contain object-center"
              priority={priority}
            />
          </motion.div>
        </AnimatePresence>

        {scanning ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[28%] animate-clinical-scan"
            onAnimationEnd={() => setScanning(false)}
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(143,29,58,0.08) 35%, rgba(255,255,255,0.55) 50%, rgba(143,29,58,0.1) 65%, transparent 100%)",
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
