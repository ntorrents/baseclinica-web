import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";
import { PreciosHub } from "@/components/sections/PreciosHub";
import { InteractivePriceBuilder } from "@/components/sections/InteractivePriceBuilder";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ScrollAmbient } from "@/components/scroll/ScrollAmbient";
import { ScrollConnector } from "@/components/scroll/ScrollConnector";
import { ScrollFlowDrift } from "@/components/scroll/ScrollFlowDrift";
import { ScrollSecondaryLine } from "@/components/scroll/ScrollSecondaryLine";
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
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
      <ScrollAmbient />
      <ScrollFlowDrift />
      <ScrollSecondaryLine />
      <ScrollConnector />
      <Navbar />
      <main className="relative z-10">
        <header className="mx-auto max-w-4xl px-6 pb-0 pt-28 text-center sm:px-8 sm:pb-2 sm:pt-36">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            Precios Transparentes
          </p>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            La tecnología que tu clínica necesita
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-400">
            Empieza por captar más pacientes con una web moderna, organiza tu operativa interna con nuestro ERP, o lánzalo todo a la vez. Escala a tu ritmo sin costes ocultos.
          </p>
        </header>
        
        <PreciosHub plans={data.pricingPlans} />
        
        <div className="py-16 sm:py-24">
          <InteractivePriceBuilder />
        </div>

        <ProcessSection steps={processSteps} />
        <FaqSection items={faqItems} />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
