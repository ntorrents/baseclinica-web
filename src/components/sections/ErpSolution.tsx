import { DeviceMockup } from "@/components/ui/DeviceMockup";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ErpFeature } from "@/types/landing";

type ErpSolutionProps = {
  features: ErpFeature[];
  desktopShot: string;
  mobileShot: string;
};

export function ErpSolution({
  features,
  desktopShot,
  mobileShot,
}: ErpSolutionProps) {
  return (
    <SectionContainer id="erp">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          Solucion 2: ERP medico
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Automatiza agenda, facturacion y gestion clinica en una sola plataforma
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-3 text-slate-600">{feature.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <h3 className="text-xl font-semibold text-emerald-900">
          Ciberseguridad y proteccion de datos medicos
        </h3>
        <p className="mt-3 text-emerald-900/90">
          Arquitectura orientada a confidencialidad, control de acceso y trazabilidad
          para trabajar con datos sensibles bajo buenas practicas de cumplimiento
          legal.
        </p>
      </div>

      <div className="mt-12 grid items-end gap-8 lg:grid-cols-[2fr_1fr]">
        <DeviceMockup
          src={desktopShot}
          alt="Captura del ERP en vista de escritorio"
          device="laptop"
        />
        <DeviceMockup
          src={mobileShot}
          alt="Captura del ERP en vista movil"
          device="mobile"
        />
      </div>
    </SectionContainer>
  );
}
