export function ScrollArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none text-[var(--muted)]/55 ${className}`}
      width="56"
      height="72"
      viewBox="0 0 56 72"
      fill="none"
      aria-hidden
    >
      {/* Curva tipo doodle Odoo: entra, hace un lazo y baja */}
      <path
        d="M28 6
           C28 18 28 26 22 34
           C14 44 8 48 12 56
           C16 64 28 62 34 54
           C38 48 36 42 28 44
           C22 46 24 54 28 60"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Punta de flecha clara hacia abajo */}
      <path
        d="M22 56 L28 66 L34 56"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ScribbleUnderline({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute -bottom-1 left-0 w-full ${className}`} height="8" viewBox="0 0 120 8" fill="none" aria-hidden preserveAspectRatio="none">
      <path d="M2 5c30-4 60 2 116-2" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
