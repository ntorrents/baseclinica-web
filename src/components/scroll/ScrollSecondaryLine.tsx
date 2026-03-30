"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollSecondaryLine() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 32,
    mass: 0.55,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0.05, 0.92]);
  const opacity = useTransform(smoothProgress, [0, 0.15, 1], [0.08, 0.35, 0.55]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden xl:block"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 2400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="scrollLineSecondaryGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#99f6e4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <motion.path
          d="M120 120 Q 280 480 100 900 T 220 1500 Q 360 1900 140 2340"
          fill="none"
          stroke="url(#scrollLineSecondaryGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="6 14"
          style={{ pathLength, opacity }}
        />
      </svg>
    </div>
  );
}
