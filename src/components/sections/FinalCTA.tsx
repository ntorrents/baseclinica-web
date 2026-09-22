"use client";

import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";

export function FinalCTA() {
  const t = useT();
  const waHref = `https://wa.me/34684347483?text=${encodeURIComponent(t.cta.waText)}`;

  return (
    <section id="hablar" className="relative scroll-mt-0 min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[var(--brand)]" aria-hidden />

      <div className="site-rail relative z-[20] flex min-h-[100svh] flex-col justify-center py-20 lg:max-w-[min(76rem,58%)] lg:py-24">
        <p className="section-eyebrow !text-[#0a0a0a]/6">{t.cta.eyebrow}</p>
        <h2 className="font-display mt-5 text-[clamp(2.2rem,6.5vw,5.25rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-[#0a0a0a] sm:mt-6">
          {t.cta.title}
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-[#0a0a0a]/70 sm:mt-6 sm:text-xl">
          {t.cta.lead}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12 sm:gap-4">
          <Link href="/contacto" className="btn-primary !bg-[#0a0a0a] hover:!bg-[#0a0a0a]/85">
            {t.cta.contact}
            <span className="btn-arrow">→</span>
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#0a0a0a] underline decoration-[#0a0a0a]/35 underline-offset-4 sm:text-base"
          >
            {t.cta.whatsapp}
          </a>
          <a
            href="mailto:hola@baseclinica.com"
            className="break-all text-sm font-semibold text-[#0a0a0a] underline decoration-[#0a0a0a]/35 underline-offset-4 sm:text-base"
          >
            hola@baseclinica.com
          </a>
        </div>
      </div>
    </section>
  );
}
