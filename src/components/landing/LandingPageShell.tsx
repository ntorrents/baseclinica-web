import { Navbar } from "@/components/layout/Navbar";
import { ErpSolution } from "@/components/sections/ErpSolution";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { PathChooser } from "@/components/sections/PathChooser";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { SecurityTrust } from "@/components/sections/SecurityTrust";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { MarqueeBand } from "@/components/ui/MarqueeBand";
import { ScrollProgress } from "@/components/scroll/ScrollProgress";
import { ScrollToTop } from "@/components/scroll/ScrollToTop";
import type { LandingData } from "@/types/landing";

type LandingPageShellProps = {
  data: LandingData;
};

const MARQUEE_MODULES = [
  "Agenda",
  "Pacientes",
  "Stock",
  "Caja",
  "Facturas",
  "Fiscalidad",
  "Web premium",
  "Pack integral",
];

export function LandingPageShell({ data }: LandingPageShellProps) {
  return (
    <div className="page-atmosphere min-h-screen text-[var(--ink)] selection:bg-[var(--brand-soft)] selection:text-[var(--brand-deep)]">
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero data={data.hero} />
        <MarqueeBand items={MARQUEE_MODULES} tone="brand" />
        <PathChooser />
        <PainPoints items={data.painPoints} />
        <Portfolio data={data.portfolio} />
        <ErpSolution
          features={data.erpFeatures}
          desktopShot={data.erpScreens.desktop.src}
          mobileShot={data.erpScreens.mobile.src}
          desktopPadColor={data.erpScreens.desktop.padColor}
          mobilePadColor={data.erpScreens.mobile.padColor}
        />
        <Pricing plans={data.pricingPlans} />
        <SecurityTrust />
        <TrustStrip />
        <FinalCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
