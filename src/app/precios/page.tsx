import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";
import { PreciosHub } from "@/components/sections/PreciosHub";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ScrollAmbient } from "@/components/scroll/ScrollAmbient";
import { ScrollConnector } from "@/components/scroll/ScrollConnector";
import { ScrollFlowDrift } from "@/components/scroll/ScrollFlowDrift";
import { ScrollSecondaryLine } from "@/components/scroll/ScrollSecondaryLine";
import { ScrollToTop } from "@/components/scroll/ScrollToTop";
import { landingByNiche, NICHE_DEFAULT_KEY } from "@/data/landing";
import {
  categoryUnlockTables,
  faqItems,
  processSteps,
  servicePackCategories,
} from "@/data/services-packs";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Precios de web corporativa, app de gestión interna y pack integral. Facturación mensual o anual del software con descuento en anual.",
};

export default function PricingPage() {
  const data = landingByNiche[NICHE_DEFAULT_KEY];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f0fdfa,_#f8fafc_45%,_#ffffff_80%)]">
      <ScrollAmbient />
      <ScrollFlowDrift />
      <ScrollSecondaryLine />
      <ScrollConnector />
      <Navbar />
      <main>
        <PreciosHub
          plans={data.pricingPlans}
          categories={servicePackCategories}
          unlockTables={categoryUnlockTables}
        />
        <ProcessSection steps={processSteps} />
        <FaqSection items={faqItems} />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
