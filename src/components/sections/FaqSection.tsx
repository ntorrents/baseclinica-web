import { SectionContainer } from "@/components/ui/SectionContainer";
import { FaqItem } from "@/types/landing";

type FaqSectionProps = {
  items: FaqItem[];
};

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <SectionContainer id="faq">
      <div className="mb-10 max-w-3xl">
        <p className="section-eyebrow">FAQ</p>
        <h2 className="font-display mt-3 text-3xl font-bold text-[var(--ink)] sm:text-4xl">
          Dudas habituales antes de contratar
        </h2>
      </div>
      <div className="mx-auto max-w-3xl divide-y divide-[var(--line)] rounded-2xl border border-[var(--line)] bg-white">
        {items.map((item) => (
          <details key={item.question} className="group px-6 py-4">
            <summary className="cursor-pointer list-none font-semibold text-[var(--ink)] group-open:text-[var(--brand)]">
              <span className="flex items-center justify-between gap-4">
                {item.question}
                <span className="text-xl text-[var(--muted)] transition-transform group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionContainer>
  );
}
