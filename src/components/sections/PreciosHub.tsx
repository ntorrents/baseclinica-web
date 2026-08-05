"use client";

import { motion } from "framer-motion";
import type { PricingPlan } from "@/types/landing";
import { Pricing } from "@/components/sections/Pricing";

type PreciosHubProps = {
  plans: PricingPlan[];
};

export function PreciosHub({ plans }: PreciosHubProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="mt-8 relative z-10"
    >
      <div id="precios-overview">
        <Pricing plans={plans} ctaHref="#contacto" showDetailLink={false} />
      </div>
    </motion.div>
  );
}
