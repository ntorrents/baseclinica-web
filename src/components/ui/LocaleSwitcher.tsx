"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/config";

export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  const btn = (code: Locale) => (
    <button
      type="button"
      onClick={() => setLocale(code)}
      className={`rounded-full px-2.5 py-1 text-xs font-bold tracking-wide transition ${
        locale === code
          ? "bg-[var(--ink)] text-white"
          : "text-[var(--muted)] hover:text-[var(--ink)]"
      }`}
      aria-pressed={locale === code}
      aria-label={t.locale.label}
    >
      {code === "es" ? t.locale.es : t.locale.ca}
    </button>
  );

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-[var(--line)] bg-white/90 p-0.5 backdrop-blur-md ${className}`}
      role="group"
      aria-label={t.locale.label}
    >
      {btn("es")}
      {btn("ca")}
    </div>
  );
}

/** Variante para menú oscuro */
export function LocaleSwitcherDark({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  const btn = (code: Locale) => (
    <button
      type="button"
      onClick={() => setLocale(code)}
      className={`rounded-full px-2.5 py-1 text-xs font-bold tracking-wide transition ${
        locale === code ? "bg-white text-[#1c1c1c]" : "text-white/50 hover:text-white"
      }`}
      aria-pressed={locale === code}
    >
      {code === "es" ? t.locale.es : t.locale.ca}
    </button>
  );

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-white/20 bg-white/5 p-0.5 ${className}`}
      role="group"
      aria-label={t.locale.label}
    >
      {btn("es")}
      {btn("ca")}
    </div>
  );
}
