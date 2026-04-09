"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import type { PricingPlan, ServicePackCategory } from "@/types/landing";
import type { UnlockRow } from "@/data/services-packs";
import { PackCategoryDetail } from "@/components/sections/PackCategoryDetail";
import { Pricing } from "@/components/sections/Pricing";

type TabId = "overview" | "web" | "erp" | "integral";

function tabFromHash(): TabId {
  if (typeof window === "undefined") return "overview";
  const h = window.location.hash.slice(1).toLowerCase();
  if (h === "web" || h === "erp" || h === "integral") return h;
  if (h === "overview" || h === "pricing" || h === "") return "overview";
  return "overview";
}

type PreciosHubProps = {
  plans: PricingPlan[];
  categories: ServicePackCategory[];
  unlockTables: Record<ServicePackCategory["id"], UnlockRow[]>;
};

export function PreciosHub({ plans, categories, unlockTables }: PreciosHubProps) {
  const [tab, setTab] = useState<TabId>("overview");

  useLayoutEffect(() => {
    setTab(tabFromHash());
  }, []);

  useEffect(() => {
    const onHash = () => setTab(tabFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const web = categories.find((c) => c.id === "web");
  const erp = categories.find((c) => c.id === "erp");
  const integral = categories.find((c) => c.id === "integral");

  return (
    <>
      <div>
        {tab === "overview" ? (
          <div id="precios-overview">
            <Pricing plans={plans} ctaHref="#contacto" showDetailLink={false} />
          </div>
        ) : null}

        {tab === "web" && web ? (
          <PackCategoryDetail
            category={web}
            unlockRows={unlockTables.web}
          />
        ) : null}

        {tab === "erp" && erp ? (
          <PackCategoryDetail
            category={erp}
            unlockRows={unlockTables.erp}
          />
        ) : null}

        {tab === "integral" && integral ? (
          <PackCategoryDetail
            category={integral}
            unlockRows={unlockTables.integral}
          />
        ) : null}
      </div>
    </>
  );
}
