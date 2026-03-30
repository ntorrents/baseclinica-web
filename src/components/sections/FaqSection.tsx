import { SectionContainer } from "@/components/ui/SectionContainer";
import { FaqItem } from "@/types/landing";

type FaqSectionProps = {
  items: FaqItem[];
};

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <SectionContainer id="faq" className="bg-white/60">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Dudas habituales antes de contratar
        </h2>
      </div>
      <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {items.map((item) => (
          <details key={item.question} className="group px-6 py-4">
            <summary className="cursor-pointer list-none font-semibold text-slate-900 group-open:text-teal-800">
              <span className="flex items-center justify-between gap-4">
                {item.question}
                <span className="text-slate-400 text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionContainer>
  );
}
