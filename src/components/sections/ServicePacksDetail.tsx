import { SectionContainer } from "@/components/ui/SectionContainer";
import { ServicePackCategory } from "@/types/landing";

type ServicePacksDetailProps = {
  categories: ServicePackCategory[];
};

export function ServicePacksDetail({ categories }: ServicePacksDetailProps) {
  return (
    <SectionContainer id="servicios-detalle" className="bg-white/60">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          Servicios en detalle
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Planes por nivel dentro de cada linea de producto
        </h2>
        <p className="mt-4 text-slate-600">
          Las tarjetas superiores resumen las tres grandes opciones; aqui desglosamos
          variantes concretas para que elijas el punto de entrada (o el salto) que mejor
          encaje con tu clinica. Los importes son orientativos hasta cerrar alcance.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category) => (
          <div key={category.id}>
            <header className="mb-6 border-b border-slate-200 pb-4">
              <h3 className="text-2xl font-semibold text-slate-900">
                {category.title}
              </h3>
              <p className="mt-2 max-w-3xl text-slate-600">{category.subtitle}</p>
            </header>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {category.tiers.map((tier) => (
                <article
                  key={tier.name}
                  className={`relative flex flex-col rounded-2xl border p-6 shadow-sm ${
                    tier.recommended
                      ? "border-teal-300 bg-teal-50/80 ring-1 ring-teal-200"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {tier.recommended ? (
                    <span className="absolute -top-3 right-4 rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">
                      Recomendado
                    </span>
                  ) : null}
                  <h4 className="text-lg font-semibold text-slate-900">{tier.name}</h4>
                  <p className="mt-2 text-lg font-bold text-teal-800">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-700">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-0.5 text-teal-600" aria-hidden>
                          ·
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contacto"
                    className="mt-6 inline-flex justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-teal-400 hover:text-teal-800"
                  >
                    Solicitar este plan
                  </a>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
