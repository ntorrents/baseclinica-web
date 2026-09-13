import { MarqueeBand } from "@/components/ui/MarqueeBand";

const items = [
  "Enfoque sector salud",
  "Cumplimiento en el diseño",
  "Propuestas cerradas",
  "Web + software unificados",
  "Migración asistida",
  "Soporte cercano",
];

export function TrustStrip() {
  return <MarqueeBand items={items} className="my-4" />;
}
