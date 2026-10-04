import { Navbar } from "@/components/layout/Navbar";
import { OdooHero } from "@/components/odoo/OdooHero";
import { OdooWellDesigned } from "@/components/odoo/OdooWellDesigned";
import { OdooEcosystem } from "@/components/odoo/OdooEcosystem";
import { OdooModuleGroups } from "@/components/odoo/OdooModuleGroups";
import { OdooProductShot } from "@/components/odoo/OdooProductShot";
import { OdooPricingTeaser } from "@/components/odoo/OdooPricingTeaser";
import { OdooSavingsCalculator } from "@/components/odoo/OdooSavingsCalculator";
import { OdooFinalCTA } from "@/components/odoo/OdooFinalCTA";
import { Footer } from "@/components/sections/Footer";
import type { LandingData } from "@/types/landing";

type OdooLandingShellProps = {
  data: LandingData;
};

export function OdooLandingShell({ data }: OdooLandingShellProps) {
  return (
    <div className="page-shell odoo-theme min-h-screen bg-white text-[var(--ink)]">
      <Navbar />
      <main>
        <OdooHero />
        <OdooWellDesigned />
        <OdooEcosystem />
        <OdooModuleGroups />
        <OdooProductShot
          desktopShot={data.erpScreens.desktop.src}
          mobileShot={data.erpScreens.mobile.src}
        />
        <OdooPricingTeaser />
        <OdooSavingsCalculator />
        <OdooFinalCTA />
      </main>
      <Footer />
    </div>
  );
}
