type PriceTaxNoteProps = {
  className?: string;
};

/** Aviso discreto: precios publicados sin IVA. */
export function PriceTaxNote({ className = "" }: PriceTaxNoteProps) {
  return (
    <p
      className={`text-xs leading-relaxed text-slate-500 ${className}`.trim()}
      role="note"
    >
      Los importes indicados no incluyen IVA; se aplicará en factura según la
      normativa vigente.
    </p>
  );
}
