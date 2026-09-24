import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ErpSolution } from "@/components/sections/ErpSolution";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { KpiSection } from "@/components/sections/KpiSection";
import { PainPoints } from "@/components/sections/PainPoints";
import { Portfolio } from "@/components/sections/Portfolio";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { BluePath } from "@/components/scroll/BluePath";
import { ScrollToTop } from "@/components/scroll/ScrollToTop";
import { PageLoader } from "@/components/ui/PageLoader";
import { OfferBanner } from "@/components/ui/OfferBanner";
import type { LandingData } from "@/types/landing";

type LandingPageShellProps = {
  data: LandingData;
};

export function LandingPageShell({ data }: LandingPageShellProps) {
  return (
    <div className="page-shell relative min-h-screen text-[var(--ink)] selection:bg-[var(--brand-soft)] selection:text-[var(--brand-deep)]">
      <PageLoader />
      <Navbar />
      <OfferBanner />

      <main className="relative">
        {/* Línea: por encima de fondos claros/azul contacto; la tapa KPI/solución/imágenes (z-20) */}
        <BluePath />

        <Hero data={data.hero} />
        <AboutSection />
        <KpiSection />
        <PainPoints />
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
  );
}
