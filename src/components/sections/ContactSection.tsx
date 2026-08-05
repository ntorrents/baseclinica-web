import { ContactForm } from "@/components/forms/ContactForm";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function ContactSection() {
  return (
    <SectionContainer id="contacto" className="scroll-mt-6 pb-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Contacto
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Cuéntanos tu clínica y te proponemos el siguiente paso
          </h2>
          <p className="mt-4 text-slate-400">
            Respuesta orientativa en horario laboral. Si prefieres llamada o visita, indícalo en el
            mensaje y te proponemos franja.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-400">
            <li className="flex gap-2">
              <span className="text-blue-600" aria-hidden>
                —
              </span>
              Diagnóstico rápido sin compromiso
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600" aria-hidden>
                —
              </span>
              Mismo interlocutor para Pack Integral (web + app)
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600" aria-hidden>
                —
              </span>
              Presupuesto cerrado antes de empezar
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-none sm:p-8">
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
}
