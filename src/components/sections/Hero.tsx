import { HeroData } from "@/types/landing";
import { SectionContainer } from "@/components/ui/SectionContainer";

type HeroProps = {
  data: HeroData;
};

export function Hero({ data }: HeroProps) {
  return (
    <SectionContainer className="pt-28 sm:pt-36">
      <div className="max-w-4xl">
        <p className="mb-4 inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-4 py-1.5 text-sm font-medium text-cyan-700">
          {data.eyebrow}
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
          {data.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {data.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={data.primaryCta.href}
            className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700"
          >
            {data.primaryCta.label}
          </a>
          <a
            href={data.secondaryCta.href}
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-800 transition hover:border-teal-300 hover:text-teal-700"
          >
            {data.secondaryCta.label}
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}
