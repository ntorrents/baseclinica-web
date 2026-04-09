import Link from "next/link";
import { CONTACT_EMAIL } from "@/config/contact";
import { PriceTaxNote } from "@/components/ui/PriceTaxNote";

export function Footer() {
  return (
    <footer className="relative z-10 mt-8 border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>BaseClinica - Soluciones digitales para profesionales de la salud.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/aviso-legal" className="hover:text-slate-900">
            Aviso legal
          </Link>
          <Link href="/politica-privacidad" className="hover:text-slate-900">
            Política de privacidad
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-slate-900">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
      <div className="border-t border-slate-100 bg-slate-50/50">
        <div className="mx-auto max-w-6xl px-6 py-3 lg:px-8">
          <PriceTaxNote className="text-center text-slate-500 lg:text-left" />
        </div>
      </div>
    </footer>
  );
}
