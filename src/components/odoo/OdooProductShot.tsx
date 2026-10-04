"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type OdooProductShotProps = {
  desktopShot: string;
  mobileShot: string;
};

export function OdooProductShot({ desktopShot, mobileShot }: OdooProductShotProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="odoo-rail">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-[var(--ink)]">
            Optimizado para productividad
          </h2>
          <p className="mt-4 text-base text-[var(--muted)] sm:text-lg">
            Menos clics, menos fricción. Agenda, expediente y caja en una interfaz rápida pensada
            para el día a día de la clínica.
          </p>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-12"
        >
          <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[#f1f3f5] p-2 shadow-[0_20px_50px_rgba(15,20,32,0.08)] sm:p-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white">
              <Image
                src={desktopShot}
                alt="Captura del software Base Clínica"
                fill
                className="object-cover object-top"
                sizes="(max-width:1024px) 100vw, 90rem"
                quality={90}
                unoptimized
              />
            </div>
          </div>
          <div className="absolute -bottom-4 left-4 w-[28%] max-w-[180px] overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-1.5 shadow-xl sm:left-8 sm:max-w-[220px]">
            <div className="relative aspect-[9/19] overflow-hidden rounded-xl bg-[#f8f9fa]">
              <Image
                src={mobileShot}
                alt="Vista móvil Base Clínica"
                fill
                className="object-cover object-top"
                sizes="220px"
                quality={95}
                unoptimized
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
