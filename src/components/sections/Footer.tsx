"use client";

import Link from "next/link";
import { CONTACT_EMAIL } from "@/config/contact";
import { PriceTaxNote } from "@/components/ui/PriceTaxNote";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-black tracking-tight text-white">
                <span className="text-blue-500">Base</span>Clinica
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Transformando la gestión clínica con software moderno, intuitivo y adaptado a las necesidades de tu centro.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Producto</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <Link href="/precios" className="hover:text-white transition-colors">Precios</Link>
              </li>
              <li>
                <Link href="/#erp-solution" className="hover:text-white transition-colors">Software ERP</Link>
              </li>
              <li>
                <Link href="/precios#configurador" className="hover:text-white transition-colors">Configurador a Medida</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Especialidades</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <Link href="/fisio" className="hover:text-white transition-colors">Fisioterapia y Rehab</Link>
              </li>
              <li>
                <Link href="/dermo" className="hover:text-white transition-colors">Dermatología</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Legal y Contacto</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso legal</Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-white transition-colors">Política de privacidad</Link>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} BaseClinica. Todos los derechos reservados.
          </p>
        </div>
      </div>
      
      <div className="border-t border-white/5 bg-slate-950 mt-8">
        <div className="mx-auto max-w-6xl px-6 py-3 lg:px-8">
          <PriceTaxNote className="text-center text-slate-500 lg:text-left" />
        </div>
      </div>
    </footer>
  );
}
