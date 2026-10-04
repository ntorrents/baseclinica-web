import { OdooLandingShell } from "@/components/odoo/OdooLandingShell";
import type { LandingData } from "@/types/landing";

type LandingPageShellProps = {
  data: LandingData;
};

/**
 * Shell de la home.
 * Versión actual: rediseño estilo Odoo (rama de validación).
 * El shell anterior CRO queda en git history hasta validar.
 */
export function LandingPageShell({ data }: LandingPageShellProps) {
  return <OdooLandingShell data={data} />;
}
