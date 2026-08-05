import { SectionContainer } from "@/components/ui/SectionContainer";

const items = [
  "Enfoque sector salud y estética",
  "Datos y cumplimiento en el centro del diseño",
  "Propuestas cerradas antes de desarrollar",
  "Misma interlocución web + software en Pack Integral",
];

export function TrustStrip() {
  return (
    <SectionContainer className="py-12 sm:py-14">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/50 to-blue-900/20 px-6 py-8 sm:px-10">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-blue-400">
          Por qué confiar en esta propuesta
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-300">
          {items.map((text) => (
            <li key={text} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900/200" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
