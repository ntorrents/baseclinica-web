"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollConnector() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0.08, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 1], [0.15, 0.5, 0.9]);

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
          <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>

        <motion.path
          d="M860 0 C 730 260, 900 420, 760 740 C 620 1080, 820 1260, 700 1600 C 620 1840, 760 2060, 640 2400"
          fill="none"
          stroke="url(#connectorGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ pathLength, opacity }}
        />
      </svg>
    </div>
  );
}
