"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function OfferBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!hasScrolled && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-40 overflow-hidden bg-gradient-to-r from-[#f07a3a] via-[#ff8c4a] to-[#f07a3a] text-white shadow-md"
        >
          <div className="relative">
            <div className="site-rail flex items-center justify-between gap-4 py-2.5 text-sm sm:text-base">
              <div className="flex flex-1 items-center justify-center gap-2 font-semibold">
                <span className="hidden sm:inline">🎉</span>
                <span className="text-center">
                  <strong className="font-extrabold">¡Oferta de lanzamiento!</strong> 10% de descuento en tu primera contratación
                  <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold">
                    Usa código: LAUNCH10
                  </span>
                </span>
                <span className="hidden sm:inline">🎉</span>
              </div>
              <Link
                href="/contacto?oferta=launch10"
                className="shrink-0 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#f07a3a] transition-all hover:scale-105 hover:shadow-md sm:text-sm"
              >
                Aprovechar
              </Link>
              <button
                type="button"
                onClick={handleClose}
                className="shrink-0 ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white text-xl leading-none transition-all hover:bg-white/30 hover:scale-110"
                aria-label="Cerrar oferta"
              >
                ×
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
