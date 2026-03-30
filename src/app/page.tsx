import { ErpSolution } from "@/components/sections/ErpSolution";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { ScrollConnector } from "@/components/scroll/ScrollConnector";
import {
  erpFeatures,
  heroData,
  painPoints,
  portfolioCase,
  pricingPlans,
} from "@/data/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f0fdfa,_#f8fafc_45%,_#ffffff_80%)]">
      <ScrollConnector />
      <main>
        <Hero data={heroData} />
        <PainPoints items={painPoints} />
        <Portfolio data={portfolioCase} />
        <ErpSolution
          features={erpFeatures}
          desktopShot="/images/erp-desktop.svg"
          mobileShot="/images/erp-mobile.svg"
        />
        <Pricing plans={pricingPlans} />
      </main>
      <Footer />
    </div>
  );
}
