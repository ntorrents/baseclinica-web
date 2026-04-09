import { SectionContainer } from "@/components/ui/SectionContainer";

const rows = [
  {
    feature: "Agenda y recordatorios automáticos",
    web: "No",
    app: "Starter",
    pack: "Incluido",
  },
  {
    feature: "Facturación y control de cobros",
    web: "No",
    app: "Starter",
    pack: "Incluido",
  },
  {
    feature: "Roles y permisos por equipo",
    web: "No",
    app: "Clinic",
    pack: "Integral Plus",
  },
  {
    feature: "Informes avanzados y métricas",
    web: "Básico",
    app: "Clinic",
    pack: "Integral Plus",
  },
  {
    feature: "Multi-sede",
    web: "No",
    app: "Multi-sede",
    pack: "Integral Avanzado",
  },
  {
    feature: "Cambios mensuales en la web",
    web: "Profesional",
    app: "No",
    pack: "Integral Plus",
  },
];

export function PricingFeatureMatrix() {
  return (
    <SectionContainer id="comparativa" className="bg-white/60">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          Comparativa rápida
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Qué funcionalidades se desbloquean al subir de plan
        </h2>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-slate-700">
            <tr>
              <th className="px-4 py-3 font-semibold">Funcionalidad</th>
              <th className="px-4 py-3 font-semibold">Solo Web</th>
              <th className="px-4 py-3 font-semibold">App de gestión</th>
              <th className="px-4 py-3 font-semibold">Pack integral</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature} className="border-t border-slate-100">
                <td className="px-4 py-3 text-slate-800">{row.feature}</td>
                <td className="px-4 py-3 text-slate-600">{row.web}</td>
                <td className="px-4 py-3 text-slate-600">{row.app}</td>
                <td className="px-4 py-3 font-semibold text-teal-700">{row.pack}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionContainer>
  );
}
