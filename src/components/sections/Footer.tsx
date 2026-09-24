"use client";

import Link from "next/link";
import { CONTACT_EMAIL } from "@/config/contact";
import { PriceTaxNote } from "@/components/ui/PriceTaxNote";
import { useT } from "@/i18n/LocaleProvider";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[20] bg-[#1c1c1c] pt-16 text-white sm:pt-20">
      <div className="site-rail flex flex-col">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr] md:gap-12">
          <div>
            <p className="max-w-sm text-base leading-relaxed text-white/50 sm:text-lg">
              {t.footer.blurb}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 inline-block text-sm font-semibold text-white underline decoration-[var(--brand)] underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <p className="section-eyebrow !text-white/40">{t.footer.navigate}</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/55">
              <li>
                <Link href="/#soluciones" className="transition-colors hover:text-white">
                  {t.footer.solutions}
                </Link>
              </li>
              <li>
                <Link href="/precios" className="transition-colors hover:text-white">
                  {t.footer.pricing}
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="transition-colors hover:text-white">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="section-eyebrow !text-white/40">{t.footer.legal}</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/55">
              <li>
                <Link href="/aviso-legal" className="transition-colors hover:text-white">
                  {t.footer.legalNotice}
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="transition-colors hover:text-white">
                  {t.footer.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:mt-20">
          <p className="font-display w-full whitespace-nowrap pb-[0.12em] text-[clamp(2.75rem,min(15vw,calc((100vw-5.5rem)/6.35)),12rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-white">
            base<span className="text-[var(--brand)]">clinica</span>
          </p>
          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 sm:flex-row sm:items-center">
            <p className="text-sm text-white/40">
              {t.footer.rights.replace("{year}", String(year))}
            </p>
            <PriceTaxNote className="!text-white/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
