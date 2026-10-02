import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ErpSolution } from "@/components/sections/ErpSolution";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { KpiSection } from "@/components/sections/KpiSection";
import { LossAversionSection } from "@/components/sections/LossAversionSection";
import { Portfolio } from "@/components/sections/Portfolio";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ScrollToTop } from "@/components/scroll/ScrollToTop";
import { PageLoader } from "@/components/ui/PageLoader";
import { CalculatorProvider } from "@/contexts/CalculatorContext";
import type { LandingData } from "@/types/landing";

type LandingPageShellProps = {
  data: LandingData;
};

export function LandingPageShell({ data }: LandingPageShellProps) {
  return (
    <CalculatorProvider>
      <div className="page-shell relative min-h-screen text-[var(--ink)] selection:bg-[var(--brand-soft)] selection:text-[var(--brand-deep)]">
        <PageLoader />
        <Navbar />

        <main className="relative">

          <Hero data={data.hero} />
          <AboutSection />
          <KpiSection />
          <LossAversionSection />
          <SolutionSection />
          <ErpSolution
            features={data.erpFeatures}
            desktopShot={data.erpScreens.desktop.src}
            mobileShot={data.erpScreens.mobile.src}
          />

          <Portfolio data={data.portfolio} />
          <FinalCTA />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </CalculatorProvider>
  );
}
