"use client";

import Link from "next/link";
import { CONTACT_EMAIL } from "@/config/contact";
import { PriceTaxNote } from "@/components/ui/PriceTaxNote";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-white pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/" className="inline-block">
              <span className="font-display text-xl font-extrabold tracking-tight text-[var(--ink)]">
                <span className="text-[var(--brand)]">Base</span>Clinica
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Software y web para clínicas que quieren claridad operativa y captación sin fricción.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--ink)]">Producto</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
              <li>
                <Link href="/precios" className="transition-colors hover:text-[var(--brand)]">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/#erp-solution" className="transition-colors hover:text-[var(--brand)]">
                  Software ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/precios#configurador"
                  className="transition-colors hover:text-[var(--brand)]"
                >
                  Configurador a medida
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="transition-colors hover:text-[var(--brand)]">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--ink)]">Especialidades</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
              <li>
                <Link href="/fisio" className="transition-colors hover:text-[var(--brand)]">
                  Fisioterapia y Rehab
                </Link>
              </li>
              <li>
                <Link href="/dermo" className="transition-colors hover:text-[var(--brand)]">
                  Dermatología / estética
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--ink)]">Legal y contacto</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
              <li>
                <Link href="/aviso-legal" className="transition-colors hover:text-[var(--brand)]">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-privacidad"
                  className="transition-colors hover:text-[var(--brand)]"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-[var(--brand)]"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--line)] pt-8 sm:flex-row">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} BaseClinica. Todos los derechos reservados.
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-[var(--line)] bg-[#f7f8fa]">
        <div className="mx-auto max-w-6xl px-6 py-3 lg:px-8">
          <PriceTaxNote className="text-center text-[var(--muted)] lg:text-left" />
        </div>
      </div>
    </footer>
  );
}
