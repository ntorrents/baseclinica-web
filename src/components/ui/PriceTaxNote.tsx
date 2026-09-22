"use client";

import { useT } from "@/i18n/LocaleProvider";

type PriceTaxNoteProps = {
  className?: string;
};

export function PriceTaxNote({ className = "" }: PriceTaxNoteProps) {
  const t = useT();
  return (
    <p
      className={`text-xs leading-relaxed text-slate-500 ${className}`.trim()}
      role="note"
    >
      {t.common.taxNote}
    </p>
  );
}
