import { SectionContainer } from "@/components/ui/SectionContainer";
import { ProcessStep } from "@/types/landing";

type ProcessSectionProps = {
  steps: ProcessStep[];
};

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <SectionContainer id="proceso">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-violet-700">
          Cómo trabajamos
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          De la idea al sistema en uso, sin sorpresas
        </h2>
      </div>
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((item) => (
          <li
            key={item.step}
            className="relative rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-none"
          >
            <span className="text-3xl font-bold text-blue-200">{item.step}</span>
            <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{item.description}</p>
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
}
