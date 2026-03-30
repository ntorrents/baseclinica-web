"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { CSSProperties } from "react";

type DriftMarkProps = {
  smooth: ReturnType<typeof useSpring>;
  className?: string;
  style: CSSProperties;
  x0: number;
  x1: number;
  y0: number;
  y1: number;
};

function DriftMark({ smooth, className, style, x0, x1, y0, y1 }: DriftMarkProps) {
  const x = useTransform(smooth, [0, 1], [x0, x1]);
  const y = useTransform(smooth, [0, 1], [y0, y1]);
  return (
    <motion.div
      className={className}
      style={{ ...style, x, y }}
      aria-hidden
    />
  );
}

type DriftSheenProps = {
  smooth: ReturnType<typeof useSpring>;
};

function DriftSheen({ smooth }: DriftSheenProps) {
  const x = useTransform(smooth, [0, 0.5, 1], [0, 32, -14]);
  const opacity = useTransform(smooth, [0, 0.35, 0.7, 1], [0.06, 0.14, 0.1, 0.16]);
  return (
    <motion.div
      className="pointer-events-none absolute left-[12%] top-[22%] h-px w-[min(72vw,520px)] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent blur-[0.5px]"
      style={{ x, opacity }}
      aria-hidden
    />
  );
}

export function ScrollFlowDrift() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 38,
    mass: 0.55,
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden max-lg:opacity-70"
    >
      <DriftSheen smooth={smooth} />

      <DriftMark
        smooth={smooth}
        className="absolute h-2 w-2 rounded-full bg-teal-500/35 shadow-sm shadow-teal-600/20"
        style={{ top: "11%", left: "14%" }}
        x0={0}
        x1={42}
        y0={0}
        y1={6}
      />
      <DriftMark
        smooth={smooth}
        className="absolute h-1.5 w-1.5 rounded-full bg-sky-400/40"
        style={{ top: "24%", right: "18%", left: "auto" }}
        x0={0}
        x1={-36}
        y0={0}
        y1={14}
      />
      <DriftMark
        smooth={smooth}
        className="absolute h-2.5 w-2.5 rounded-full bg-cyan-500/30"
        style={{ top: "48%", left: "20%" }}
        x0={0}
        x1={28}
        y0={0}
        y1={-12}
      />
      <DriftMark
        smooth={smooth}
        className="absolute h-1.5 w-1.5 rounded-full bg-teal-600/30"
        style={{ top: "68%", right: "22%", left: "auto" }}
        x0={0}
        x1={-22}
        y0={0}
        y1={10}
      />
      <DriftMark
        smooth={smooth}
        className="absolute h-2 w-2 rounded-full bg-teal-400/25"
        style={{ top: "86%", left: "28%" }}
        x0={0}
        x1={38}
        y0={0}
        y1={-8}
      />

      <DriftMark
        smooth={smooth}
        className="absolute h-px w-14 rounded-full bg-gradient-to-r from-teal-400/0 via-teal-400/35 to-teal-400/0"
        style={{ top: "33%", left: "55%" }}
        x0={0}
        x1={-52}
        y0={0}
        y1={4}
      />
      <DriftMark
        smooth={smooth}
        className="absolute h-px w-12 rounded-full bg-gradient-to-r from-sky-400/0 via-sky-400/30 to-sky-400/0"
        style={{ top: "76%", left: "42%" }}
        x0={0}
        x1={44}
        y0={0}
        y1={-6}
      />
    </div>
  );
}
