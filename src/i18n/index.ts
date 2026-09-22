import type { Locale } from "./config";
import { ca } from "./dictionaries/ca";
import { es, type Dictionary } from "./dictionaries/es";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { es, ca };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.es;
}
