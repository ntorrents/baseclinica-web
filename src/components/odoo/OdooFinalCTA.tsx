import Link from "next/link";

export function OdooFinalCTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="odoo-rail">
        <div className="rounded-2xl bg-[var(--panel)] px-8 py-12 text-center text-white sm:px-12 sm:py-16">
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-tight">
            Únete a las clínicas que ya trabajan en una sola plataforma
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/65">
            Demo personalizada en 30 minutos. Sin compromiso. Te enseñamos tu flujo real:
            agenda → expediente → factura → AEAT.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contacto"
              className="inline-flex rounded-md bg-[var(--brand)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-deep)]"
            >
              Solicitar demo
            </Link>
            <Link
              href="/precios"
              className="inline-flex rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver precios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
