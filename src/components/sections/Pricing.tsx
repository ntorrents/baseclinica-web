import { SectionContainer } from "@/components/ui/SectionContainer";
import { PricingPlan } from "@/types/landing";

type PricingProps = {
  plans: PricingPlan[];
};

export function Pricing({ plans }: PricingProps) {
  return (
    <SectionContainer id="pricing">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          Pricing & Packs
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Elige el servicio que necesites o maximiza valor con el Pack Integral
        </h2>
        <p className="mt-4 text-slate-600">
          <a
            href="#servicios-detalle"
            className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-900"
          >
            Ver desglose completo por niveles y precios orientativos
          </a>
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative rounded-2xl border p-6 shadow-sm ${
              plan.highlighted
                ? "border-teal-300 bg-teal-50 shadow-teal-100"
                : "border-slate-200 bg-white"
            }`}
          >
            {plan.badge ? (
              <span className="absolute -top-3 left-6 rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">
                {plan.badge}
              </span>
            ) : null}

            <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
            <p className="mt-2 text-2xl font-bold text-slate-900">{plan.price}</p>
            <p className="mt-3 text-slate-600">{plan.description}</p>

            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              {plan.features.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>

            <a
              href={plan.cta.href}
              className={`mt-7 inline-flex rounded-lg px-4 py-2.5 text-sm font-semibold ${
                plan.highlighted
                  ? "bg-teal-700 text-white hover:bg-teal-800"
                  : "bg-slate-900 text-white hover:bg-slate-700"
              }`}
            >
              {plan.cta.label}
            </a>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
