import { SectionContainer } from "@/components/ui/SectionContainer";
import { ProcessStep } from "@/types/landing";

type ProcessSectionProps = {
  steps: ProcessStep[];
};

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <SectionContainer id="proceso">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          Cómo trabajamos
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          De la idea al sistema en uso, sin sorpresas
        </h2>
      </div>
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((item) => (
          <li
            key={item.step}
            className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <span className="text-3xl font-bold text-teal-200">{item.step}</span>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
}
