import { Navbar } from "@/components/layout/Navbar";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { ErpSolution } from "@/components/sections/ErpSolution";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SecurityTrust } from "@/components/sections/SecurityTrust";
import { ServicePacksDetail } from "@/components/sections/ServicePacksDetail";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollAmbient } from "@/components/scroll/ScrollAmbient";
import { ScrollConnector } from "@/components/scroll/ScrollConnector";
import { ScrollSecondaryLine } from "@/components/scroll/ScrollSecondaryLine";
import { ScrollToTop } from "@/components/scroll/ScrollToTop";
import {
  erpFeatures,
  erpScreens,
  heroData,
  painPoints,
  portfolioCase,
  pricingPlans,
} from "@/data/landing";
import {
  faqItems,
  processSteps,
  servicePackCategories,
} from "@/data/services-packs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f0fdfa,_#f8fafc_45%,_#ffffff_80%)]">
      <ScrollAmbient />
      <ScrollSecondaryLine />
      <ScrollConnector />
      <Navbar />
      <main>
        <Hero data={heroData} />
        <PainPoints items={painPoints} />
        <Portfolio data={portfolioCase} />
        <ErpSolution
          features={erpFeatures}
          desktopShot={erpScreens.desktop.src}
          mobileShot={erpScreens.mobile.src}
          desktopPadColor={erpScreens.desktop.padColor}
          mobilePadColor={erpScreens.mobile.padColor}
        />
        <SecurityTrust />
        <Pricing plans={pricingPlans} />
        <ServicePacksDetail categories={servicePackCategories} />
        <TrustStrip />
        <ProcessSection steps={processSteps} />
        <FaqSection items={faqItems} />
        <CtaStrip />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
