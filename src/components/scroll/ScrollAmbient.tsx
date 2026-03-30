"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollAmbient() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
    mass: 0.45,
  });

  const yA = useTransform(smooth, [0, 1], ["-5%", "18%"]);
  const yB = useTransform(smooth, [0, 1], ["2%", "-12%"]);
  const yC = useTransform(smooth, [0, 1], ["0%", "8%"]);
  const scaleA = useTransform(smooth, [0, 0.5, 1], [1, 1.12, 1.04]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        style={{ y: yA, scale: scaleA }}
        className="absolute -right-[20%] top-[8%] h-[min(28rem,50vw)] w-[min(28rem,50vw)] rounded-full bg-teal-300/25 blur-3xl"
      />
      <motion.div
        style={{ y: yB }}
        className="absolute -left-[15%] top-[38%] h-[min(22rem,45vw)] w-[min(22rem,45vw)] rounded-full bg-sky-400/20 blur-3xl"
      />
      <motion.div
        style={{ y: yC }}
        className="absolute left-[30%] bottom-[5%] h-[min(18rem,40vw)] w-[min(18rem,40vw)] rounded-full bg-cyan-200/30 blur-3xl"
      />
    </div>
  );
}
