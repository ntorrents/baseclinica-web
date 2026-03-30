export function Footer() {
  return (
    <footer
      id="contacto"
      className="relative z-10 mt-8 border-t border-slate-200 bg-white/80 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>BaseClinica - Soluciones digitales para profesionales de la salud.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-slate-900">
            Aviso Legal
          </a>
          <a href="#" className="hover:text-slate-900">
            Politica de Privacidad
          </a>
          <a href="mailto:hola@baseclinica.com" className="hover:text-slate-900">
            hola@baseclinica.com
          </a>
        </div>
      </div>
    </footer>
  );
}
