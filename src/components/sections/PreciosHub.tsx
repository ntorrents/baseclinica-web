"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import type { PricingPlan, ServicePackCategory } from "@/types/landing";
import type { PreciosTabId } from "@/components/sections/PreciosSegmentNav";
import type { UnlockRow } from "@/data/services-packs";
import { PackCategoryDetail } from "@/components/sections/PackCategoryDetail";
import { PreciosSegmentNav } from "@/components/sections/PreciosSegmentNav";
import { Pricing } from "@/components/sections/Pricing";

function tabFromHash(): PreciosTabId {
  if (typeof window === "undefined") return "overview";
  const h = window.location.hash.slice(1).toLowerCase();
  if (h === "web" || h === "erp" || h === "integral") return h;
  return "overview";
}

type PreciosHubProps = {
  plans: PricingPlan[];
  categories: ServicePackCategory[];
  unlockTables: Record<ServicePackCategory["id"], UnlockRow[]>;
};

export function PreciosHub({ plans, categories, unlockTables }: PreciosHubProps) {
  const [tab, setTab] = useState<PreciosTabId>("overview");

  useLayoutEffect(() => {
    setTab(tabFromHash());
  }, []);

  useEffect(() => {
    const sync = () => setTab(tabFromHash());
    window.addEventListener("hashchange", sync);
    window.addEventListener("precios:location", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("precios:location", sync);
    };
  }, []);

  const web = categories.find((c) => c.id === "web");
  const erp = categories.find((c) => c.id === "erp");
  const integral = categories.find((c) => c.id === "integral");

  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            {tab === "overview"
              ? "Comparativa rápida de líneas de producto."
              : tab === "integral"
                ? "Pack integral: misma implantación, web y app alineadas."
                : tab === "web"
                  ? "Planes de web corporativa y mantenimiento por niveles."
                  : "Planes de software para el día a día de la clínica."}
          </p>
          <PreciosSegmentNav active={tab} onSelect={setTab} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {tab === "overview" ? (
            <div id="precios-overview">
              <Pricing plans={plans} ctaHref="#contacto" showDetailLink={false} />
            </div>
          ) : null}

          {tab === "web" && web ? (
            <PackCategoryDetail category={web} unlockRows={unlockTables.web} />
          ) : null}

          {tab === "erp" && erp ? (
            <PackCategoryDetail category={erp} unlockRows={unlockTables.erp} />
          ) : null}

          {tab === "integral" && integral ? (
            <PackCategoryDetail category={integral} unlockRows={unlockTables.integral} />
          ) : null}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
