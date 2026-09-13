import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";
import { PreciosHub } from "@/components/sections/PreciosHub";
import { InteractivePriceBuilder } from "@/components/sections/InteractivePriceBuilder";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollProgress } from "@/components/scroll/ScrollProgress";
import { ScrollToTop } from "@/components/scroll/ScrollToTop";
import { landingByNiche, NICHE_DEFAULT_KEY } from "@/data/landing";
import { faqItems, processSteps } from "@/data/services-packs";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Precios de web corporativa, app de gestión interna y pack integral. Facturación mensual o anual del software con descuento en anual.",
};

export default function PricingPage() {
  const data = landingByNiche[NICHE_DEFAULT_KEY];

  return (
    <div className="page-atmosphere min-h-screen text-[var(--ink)]">
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <header className="mx-auto max-w-4xl px-6 pb-0 pt-28 text-center sm:px-8 sm:pb-2 sm:pt-36">
          <p className="section-eyebrow">Precios transparentes</p>
          <h1 className="font-display mt-4 text-balance text-4xl font-extrabold tracking-tight text-[var(--ink)] sm:text-6xl">
            La tecnología que tu clínica necesita
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--muted)]">
            Empieza por captar más pacientes con una web moderna, organiza tu operativa con el ERP, o
            lánzalo todo a la vez.
          </p>
        </header>

        <PreciosHub plans={data.pricingPlans} />

        <div className="py-16 sm:py-24">
          <InteractivePriceBuilder />
        </div>

        <ProcessSection steps={processSteps} />
        <FaqSection items={faqItems} />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
