import Link from "next/link";

const pillars = [
  {
    title: "Captación",
    body: "Web, citas online y WhatsApp conectados a la agenda. El paciente reserva; tú atiendes.",
  },
  {
    title: "Gestión",
    body: "Historias, firma digital, fotos clínicas, stock y facturación en un solo expediente.",
  },
  {
    title: "Cumplimiento",
    body: "Trazabilidad de lotes y modelos AEAT listos. Menos estrés fiscal, más clínica.",
  },
];

export function OdooPlatform() {
  return (
    <section id="plataforma" className="scroll-mt-24 border-t border-[var(--line)] bg-[#f8f9fa] py-16 sm:py-24">
      <div className="odoo-rail">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-deep)]">
          Una sola plataforma
        </p>
        <h2 className="font-display mx-auto mt-4 max-w-3xl text-center text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-[var(--ink)]">
          Si lo simplificas todo, puedes centrarte en el paciente
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          Base Clínica une captación, operación y cumplimiento. Cada módulo alimenta al siguiente:
          sin duplicar datos ni saltar entre herramientas.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-[var(--line)] bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <h3 className="font-display text-xl font-bold text-[var(--ink)]">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contacto" className="odoo-btn-primary">
            Ver demo en 30 minutos
          </Link>
        </div>
      </div>
    </section>
  );
}
