"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/config";

export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  const btn = (code: Locale, icon: string) => (
    <button
      type="button"
      onClick={() => setLocale(code)}
      className={`group relative overflow-hidden rounded-lg px-3.5 py-2 text-xs font-bold tracking-wide transition-all duration-300 ${
        locale === code
          ? "bg-gradient-to-br from-[var(--brand)] to-[var(--brand)]/80 text-white shadow-md shadow-[var(--brand)]/25"
          : "bg-white/60 text-[var(--muted)] hover:bg-white/90 hover:text-[var(--ink)]"
      }`}
      aria-pressed={locale === code}
      aria-label={`${t.locale.label}: ${code === "es" ? t.locale.es : t.locale.ca}`}
    >
      <span className="relative z-10 flex items-center gap-1.5">
        <span className="text-sm">{icon}</span>
        {code === "es" ? t.locale.es : t.locale.ca}
      </span>
      {locale === code && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      )}
    </button>
  );

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-xl border border-[var(--line)]/50 bg-gradient-to-b from-white/95 to-white/90 p-1.5 shadow-sm backdrop-blur-md ${className}`}
      role="group"
      aria-label={t.locale.label}
    >
      {btn("es", "🇪🇸")}
      {btn("ca", "🇨🇦")}
    </div>
  );
}

/** Variante para menú oscuro */
export function LocaleSwitcherDark({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  const btn = (code: Locale, icon: string) => (
    <button
      type="button"
      onClick={() => setLocale(code)}
      className={`group relative overflow-hidden rounded-lg px-3.5 py-2 text-xs font-bold tracking-wide transition-all duration-300 ${
        locale === code
          ? "bg-white text-[#1c1c1c] shadow-lg"
          : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
      }`}
      aria-pressed={locale === code}
      aria-label={`${t.locale.label}: ${code === "es" ? t.locale.es : t.locale.ca}`}
    >
      <span className="relative z-10 flex items-center gap-1.5">
        <span className="text-sm">{icon}</span>
        {code === "es" ? t.locale.es : t.locale.ca}
      </span>
      {locale === code && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      )}
    </button>
  );

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/5 p-1.5 backdrop-blur-sm ${className}`}
      role="group"
      aria-label={t.locale.label}
    >
      {btn("es", "🇪🇸")}
      {btn("ca", "🇨🇦")}
    </div>
  );
}
