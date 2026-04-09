export function CtaStrip() {
  return (
    <section
      aria-labelledby="cta-final-heading"
      className="relative z-10 border-y border-teal-100 bg-teal-700"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
        <div>
          <h2
            id="cta-final-heading"
            className="text-2xl font-semibold text-white sm:text-3xl"
          >
            ¿Listo para unificar web y operaciones en tu clínica?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-teal-100">
            Cuéntanos tu caso y te recomendamos el nivel Esencial, Crecimiento o
            Profesional — en web, app o Pack Integral.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap justify-center gap-3">
          <a
            href="#servicios-detalle"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-800 shadow-sm transition hover:bg-teal-50"
          >
            Ver planes detallados
          </a>
          <a
            href="#contacto"
            className="rounded-xl border border-teal-200 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
