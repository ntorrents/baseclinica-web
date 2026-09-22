"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { useT } from "@/i18n/LocaleProvider";

export function ScrollToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const t = useT();

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 480);
  });

  return (
    <motion.button
      type="button"
      aria-label={t.common.scrollTopAria}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12, scale: visible ? 1 : 0.9 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-4 z-40 rounded-full border border-[var(--line)] bg-white/95 px-4 py-3 text-sm font-semibold text-[var(--ink)] shadow-lg backdrop-blur-sm sm:left-auto sm:right-10 ${
        visible ? "pointer-events-auto" : "pointer-events-none"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {t.common.scrollTop}
    </motion.button>
  );
}
