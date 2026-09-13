"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HeroData } from "@/types/landing";

type HeroProps = {
  data: HeroData;
};

export function Hero({ data }: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-x-clip">
      {/* Fondo abstracto: sin capturas del ERP */}
      <div className="absolute inset-0 bg-[#f3f5f7]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_15%_-5%,rgba(143,29,58,0.11),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_95%_20%,rgba(180,200,220,0.35),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8f9fb_0%,#f3f5f7_55%,#eef1f5_100%)]" />

      {!reduceMotion ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            animation: "grain-drift 18s linear infinite",
          }}
        />
      ) : null}

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32 sm:px-8 sm:pb-20 lg:justify-center lg:pb-24 lg:pt-28">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="max-w-xl overflow-visible pr-2">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-display whitespace-nowrap text-4xl font-extrabold tracking-[-0.02em] text-[var(--brand)] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              BaseClinica
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mt-5 text-balance text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-[var(--ink)] sm:text-4xl lg:text-[2.65rem]"
            >
              {data.title}
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-[var(--muted)] sm:text-lg"
            >
              {data.subtitle}
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href={data.primaryCta.href} className="btn-primary">
                {data.primaryCta.label}
              </a>
              <a
                href={data.secondaryCta.href}
                target={data.secondaryCta.href.includes("wa.me") ? "_blank" : undefined}
                rel={data.secondaryCta.href.includes("wa.me") ? "noopener noreferrer" : undefined}
                className="btn-secondary"
              >
                {data.secondaryCta.label}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24, rotate: 1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`relative ${reduceMotion ? "" : "animate-float-soft"}`}
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(143,29,58,0.16),transparent_70%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-white/70 p-2 shadow-[0_30px_80px_-36px_rgba(20,24,31,0.45)] backdrop-blur-sm">
              <div className="relative aspect-[1024/606] overflow-hidden rounded-xl bg-[#f4f5f7]">
                <Image
                  src="/images/erp-dashboard.png"
                  alt="Vista de inicio del ERP BaseClinica"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 44vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
