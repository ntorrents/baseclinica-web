import { SectionContainer } from "@/components/ui/SectionContainer";
import { PainPoint } from "@/types/landing";

type PainPointsProps = {
  items: PainPoint[];
};

export function PainPoints({ items }: PainPointsProps) {
  return (
    <SectionContainer id="problema">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          El problema
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          La mayoria de clinicas pierde tiempo y oportunidades por procesos desconectados
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
