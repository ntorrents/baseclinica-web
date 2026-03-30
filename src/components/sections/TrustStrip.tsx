import { SectionContainer } from "@/components/ui/SectionContainer";

const items = [
  "Enfoque sector salud y estetica",
  "Datos y cumplimiento en el centro del diseno",
  "Propuestas cerradas antes de desarrollar",
  "Misma interlocucion web + software en Pack Integral",
];

export function TrustStrip() {
  return (
    <SectionContainer className="py-12 sm:py-14">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-teal-50/50 px-6 py-8 sm:px-10">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-slate-600">
          Por que confiar en esta propuesta
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-700">
          {items.map((text) => (
            <li key={text} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
