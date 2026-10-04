import Link from "next/link";
import { ScribbleUnderline } from "@/components/odoo/Decor";

const cards = [
  {
    title: "Hecho para clínicas, no genérico",
    body: "Historias clínicas, firma biométrica, bóveda fotográfica, lotes y AEAT no son “plugins” improvisados: forman parte del diseño. Otros sistemas intentan servir a cualquier sector; nosotros partimos del día a día de una clínica.",
    cta: { label: "Ver módulos", href: "/#modulos" },
  },
  {
    title: "Personalizable de verdad",
    body: "Flujos, plantillas de consentimiento, roles y reportes se adaptan a tu centro. No te encorsetamos en un molde cerrado: la plataforma crece contigo.",
    cta: { label: "Pedir demo", href: "/contacto" },
  },
  {
    title: "Un buen precio, sin sorpresas",
    body: "Planes claros. Sin cobrarte cada clic. Los extras se activan solo si los necesitas — y en Elite van incluidos.",
    cta: { label: "Ver precios", href: "/precios" },
  },
  {
    title: "Todo conectado",
    body: "La cita alimenta el expediente, el expediente la factura, la factura los informes. Una sola base de datos: menos errores, menos horas perdidas.",
    cta: null,
  },
];

export function OdooWellDesigned() {
  return (
    <section className="relative border-t border-[var(--line)] bg-[#f8f9fa] py-16 sm:py-24">
      <div className="odoo-rail">
        <h2 className="font-script mx-auto max-w-3xl text-center text-[clamp(2rem,4.5vw,3.25rem)] leading-tight text-[var(--ink)]">
          Un software clínico{" "}
          <span className="relative inline-block font-semibold">
            bien diseñado
            <ScribbleUnderline />
          </span>
          .
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--muted)]">
          No vendemos cientos de apps genéricas. Vendemos el sistema operativo de tu clínica —
          con la profundidad que exige un centro sanitario o de bienestar.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-2xl border border-[var(--line)] bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-8"
            >
              <h3 className="font-display text-xl font-bold text-[var(--ink)]">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                {card.body}
              </p>
              {card.cta && (
                <Link href={card.cta.href} className="odoo-btn-primary mt-6 w-fit">
                  {card.cta.label}
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
