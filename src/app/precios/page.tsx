import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { PricingHoldedLayout } from "@/components/sections/PricingHoldedLayout";
import { OdooSavingsCalculator } from "@/components/odoo/OdooSavingsCalculator";
import { ScrollToTop } from "@/components/scroll/ScrollToTop";
import { faqItems } from "@/data/pricing-page";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Web corporativa, software de gestión (Gestión, Clínica 360, Elite) y extras. Precios claros para clínicas.",
};

export default function PricingPage() {
  return (
    <div className="page-shell odoo-theme relative min-h-screen bg-white text-[var(--ink)]">
      <Navbar />
      <main className="relative z-10 pb-8">
        <PricingHoldedLayout />
        {/* Configurador sencillo estilo Odoo — sin repetir listados de módulos */}
        <OdooSavingsCalculator />
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
