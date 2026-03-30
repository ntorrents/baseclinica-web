import { ContactForm } from "@/components/forms/ContactForm";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function ContactSection() {
  return (
    <SectionContainer id="contacto" className="scroll-mt-6 pb-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Contacto
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Cuéntanos tu clínica y te proponemos el siguiente paso
          </h2>
          <p className="mt-4 text-slate-600">
            Respuesta orientativa en horario laboral. Si prefieres llamada o visita, indicalo en el
            mensaje y te proponemos franja.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li className="flex gap-2">
              <span className="text-teal-600" aria-hidden>
                —
              </span>
              Diagnostico rapido sin compromiso
            </li>
            <li className="flex gap-2">
              <span className="text-teal-600" aria-hidden>
                —
              </span>
              Mismo interlocutor para Pack Integral (web + ERP)
            </li>
            <li className="flex gap-2">
              <span className="text-teal-600" aria-hidden>
                —
              </span>
              Presupuesto cerrado antes de empezar
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
}
