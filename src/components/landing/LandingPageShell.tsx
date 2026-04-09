import { Navbar } from "@/components/layout/Navbar";
import { ErpSolution } from "@/components/sections/ErpSolution";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { SecurityTrust } from "@/components/sections/SecurityTrust";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollAmbient } from "@/components/scroll/ScrollAmbient";
import { ScrollConnector } from "@/components/scroll/ScrollConnector";
import { ScrollFlowDrift } from "@/components/scroll/ScrollFlowDrift";
import { ScrollSecondaryLine } from "@/components/scroll/ScrollSecondaryLine";
import { ScrollToTop } from "@/components/scroll/ScrollToTop";
import type { LandingData } from "@/types/landing";

type LandingPageShellProps = {
  data: LandingData;
};

export function LandingPageShell({ data }: LandingPageShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f0fdfa,_#f8fafc_45%,_#ffffff_80%)]">
      <ScrollAmbient />
      <ScrollFlowDrift />
      <ScrollSecondaryLine />
      <ScrollConnector />
      <Navbar />
      <main>
        <Hero data={data.hero} />
        <Pricing plans={data.pricingPlans} />
        <PainPoints items={data.painPoints} />
        <Portfolio data={data.portfolio} />
        <ErpSolution
          features={data.erpFeatures}
          desktopShot={data.erpScreens.desktop.src}
          mobileShot={data.erpScreens.mobile.src}
          desktopPadColor={data.erpScreens.desktop.padColor}
          mobilePadColor={data.erpScreens.mobile.padColor}
        />
        <SecurityTrust />
        <TrustStrip />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
