"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useT } from "@/i18n/LocaleProvider";

type PageLoaderProps = {
  brand?: string;
  durationMs?: number;
};

/** Loader sencillo: contador 000→100, sin marco. */
export function PageLoader({ brand = "BASECLINICA", durationMs = 1400 }: PageLoaderProps) {
  const t = useT();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 2.4);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
        window.setTimeout(() => setVisible(false), 380);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prev;
    };
  }, [durationMs]);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  const digits = String(progress).padStart(3, "0");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex bg-[var(--background)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={!done}
          role="status"
          aria-live="polite"
          aria-label={`${t.common.loading} ${progress}%`}
        >
          <div className="relative flex flex-1 flex-col justify-end">
            <div className="flex items-end gap-3 px-6 pb-6 sm:gap-4 sm:px-8 sm:pb-8">
              <p className="font-display text-[clamp(3.5rem,12vw,6.5rem)] font-extrabold leading-none tracking-[-0.05em] text-[var(--ink)] tabular-nums">
                {digits}
              </p>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--ink)] sm:mb-3 sm:text-[11px]">
                {brand}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
