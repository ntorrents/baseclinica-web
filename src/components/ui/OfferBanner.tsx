"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function OfferBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-30 overflow-hidden bg-gradient-to-r from-[#f07a3a] via-[#ff8c4a] to-[#f07a3a] text-white"
        >
          <div className="relative">
            <div className="mx-auto flex max-w-[76rem] items-center justify-between gap-3 px-4 py-2.5 text-xs sm:gap-4 sm:px-10 sm:text-sm lg:px-14 xl:px-[4.5rem]">
              <div className="flex flex-1 items-center justify-center gap-2 font-semibold">
                <span className="hidden sm:inline">🎉</span>
                <span className="text-center">
                  <strong className="font-extrabold">¡Oferta de lanzamiento!</strong> 
                  <span className="hidden sm:inline"> 10% de descuento en tu primera contratación</span>
                  <span className="ml-1.5 rounded-full bg-white/20 px-2 py-0.5 text-[0.7rem] font-bold sm:ml-2 sm:text-xs">
                    LAUNCH10
                  </span>
                </span>
                <span className="hidden sm:inline">🎉</span>
              </div>
              <Link
                href="/contacto?oferta=launch10"
                className="shrink-0 rounded-full bg-white px-3 py-1.5 text-[0.7rem] font-bold text-[#f07a3a] transition-all hover:scale-105 hover:shadow-md sm:px-4 sm:text-xs"
              >
                Usar
              </Link>
              <button
                type="button"
                onClick={handleClose}
                className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white text-lg leading-none transition-all hover:bg-white/30 hover:scale-110 sm:h-7 sm:w-7 sm:text-xl"
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
