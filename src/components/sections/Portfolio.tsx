"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { PortfolioCase } from "@/types/landing";

type PortfolioProps = {
  data: PortfolioCase;
};

export function Portfolio({ data }: PortfolioProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const moveX = useMotionValue(0);
  const moveY = useMotionValue(0);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const mx = useSpring(moveX, { stiffness: 140, damping: 18 });
  const my = useSpring(moveY, { stiffness: 140, damping: 18 });
  const rx = useSpring(rotX, { stiffness: 140, damping: 18 });
  const ry = useSpring(rotY, { stiffness: 140, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    moveX.set(px * 18);
    moveY.set(py * 12);
    rotY.set(px * 6);
    rotX.set(-py * 6);
  }

  function onLeave() {
    moveX.set(0);
    moveY.set(0);
    rotX.set(0);
    rotY.set(0);
  }

  const transform = useMotionTemplate`perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(${mx}px, ${my}px, 0)`;

  return (
    <section id="portfolio" className="relative z-10 scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10 lg:-mr-8"
          >
            <p className="section-eyebrow">Solución 1 · Web corporativa</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
              Una web que deja claro qué vendes y cómo pedir cita
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">{data.description}</p>
            <div className="mt-8">
              <p className="text-sm font-semibold text-[var(--ink)]">
                Caso real: {data.name} — {data.category}
              </p>
              <a
                href={data.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand)] underline decoration-2 underline-offset-4"
              >
                Ver en vivo · www.c3linic.com
              </a>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, rotate: -2 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_40%_30%,rgba(143,29,58,0.18),transparent_65%)] blur-2xl" />
            <motion.div
              style={reduceMotion ? undefined : { transform }}
              className="relative aspect-[1024/605] w-full overflow-hidden rounded-2xl border border-[var(--line)] shadow-[0_40px_90px_-40px_rgba(20,24,31,0.5)] will-change-transform lg:rotate-1"
            >
              <div
                className="absolute inset-0"
                style={{ backgroundColor: data.imagePadColor ?? "#f4f5f7" }}
              />
              <Image
                src={data.image}
                alt={`Preview del proyecto ${data.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain object-center"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
