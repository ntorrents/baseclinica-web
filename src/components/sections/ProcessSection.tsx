import { SectionContainer } from "@/components/ui/SectionContainer";
import { ProcessStep } from "@/types/landing";

type ProcessSectionProps = {
  steps: ProcessStep[];
};

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <SectionContainer id="proceso">
      <div className="mb-10 max-w-3xl">
        <p className="section-eyebrow">Cómo trabajamos</p>
        <h2 className="font-display mt-3 text-3xl font-bold text-[var(--ink)] sm:text-4xl">
          De la idea al sistema en uso, sin sorpresas
        </h2>
      </div>
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((item) => (
          <li
            key={item.step}
            className="relative rounded-2xl border border-[var(--line)] bg-white p-6"
          >
            <span className="font-display text-3xl font-bold text-[var(--brand)]">{item.step}</span>
            <h3 className="mt-2 font-display text-lg font-bold text-[var(--ink)]">{item.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{item.description}</p>
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
}
