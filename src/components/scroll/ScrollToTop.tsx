"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export function ScrollToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 480);
  });

  return (
    <motion.button
      type="button"
      aria-label="Volver arriba"
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12, scale: visible ? 1 : 0.9 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className={`fixed bottom-6 right-6 z-50 rounded-full border border-slate-200 bg-white/95 px-4 py-3 text-sm font-semibold text-slate-800 shadow-lg shadow-teal-100/80 backdrop-blur-sm ${
        visible ? "pointer-events-auto" : "pointer-events-none"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Subir
    </motion.button>
  );
}
