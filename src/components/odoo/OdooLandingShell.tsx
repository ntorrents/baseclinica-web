import { OdooNavbar } from "@/components/odoo/OdooNavbar";
import { OdooHero } from "@/components/odoo/OdooHero";
import { OdooPlatform } from "@/components/odoo/OdooPlatform";
import { OdooProductShot } from "@/components/odoo/OdooProductShot";
import { OdooPricingTeaser } from "@/components/odoo/OdooPricingTeaser";
import { OdooFinalCTA } from "@/components/odoo/OdooFinalCTA";
import { Footer } from "@/components/sections/Footer";
import type { LandingData } from "@/types/landing";

type OdooLandingShellProps = {
  data: LandingData;
};

/**
 * Landing estilo Odoo — versión de validación local.
 * No publicar en main hasta OK explícito.
 */
export function OdooLandingShell({ data }: OdooLandingShellProps) {
  return (
    <div className="page-shell odoo-theme min-h-screen bg-white text-[var(--ink)]">
      <OdooNavbar />
      <main>
        <OdooHero />
        <OdooPlatform />
        <OdooProductShot
          desktopShot={data.erpScreens.desktop.src}
          mobileShot={data.erpScreens.mobile.src}
        />
        <OdooPricingTeaser />
        <OdooFinalCTA />
      </main>
      <Footer />
    </div>
  );
}
