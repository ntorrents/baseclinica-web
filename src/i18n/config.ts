export const locales = ["es", "ca"] as const;
export type Locale = (typeof locales)[number];
export const DEFAULT_LOCALE: Locale = "es";
export const LOCALE_STORAGE_KEY = "bc-locale";
