export function ScrollArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none text-[var(--muted)]/50 ${className}`}
      width="64"
      height="96"
      viewBox="0 0 64 96"
      fill="none"
      aria-hidden
    >
      {/* Lazo arriba; trazo final más largo hacia abajo para no solaparse */}
      <path
        d="M32 4
           C32 20 30 28 24 36
           C16 46 10 50 14 58
           C18 66 30 66 36 58
           C40 52 38 46 30 48
           C24 50 26 56 32 64
           C34 68 34 74 34 82"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M26 78 L34 90 L42 78"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ScribbleUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute -bottom-1 left-0 w-full ${className}`}
      height="8"
      viewBox="0 0 120 8"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
    >
      <path d="M2 5c30-4 60 2 116-2" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
