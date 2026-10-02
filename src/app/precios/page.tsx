import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { PricingHoldedLayout } from "@/components/sections/PricingHoldedLayout";
import { PlanBuilder } from "@/components/interactive/PlanBuilder";
import { ScrollToTop } from "@/components/scroll/ScrollToTop";
import { faqItems } from "@/data/pricing-page";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Web corporativa, software de gestión (Gestión, Clínica 360, Elite), módulos extra y combo. Precios claros para clínicas.",
};

export default function PricingPage() {
  return (
    <div className="page-shell relative min-h-screen text-[var(--ink)]">
      <Navbar />
      <main className="relative z-10 pb-8">
        <PricingHoldedLayout />
        
        {/* Interactive Plan Builder - arriba de todo en precios */}
        <section className="site-rail py-16 sm:py-20">
          <PlanBuilder />
        </section>

        <div className="pt-10">
          <FaqSection items={faqItems} />
        </div>
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
