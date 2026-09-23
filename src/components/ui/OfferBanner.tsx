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

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!hasScrolled && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-[70] bg-gradient-to-r from-[#f07a3a] via-[#ff8c4a] to-[#f07a3a] text-white shadow-lg"
        >
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
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
                onClick={() => setIsVisible(false)}
                className="shrink-0 ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/30"
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
