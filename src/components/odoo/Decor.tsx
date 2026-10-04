export function ScrollArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none text-[var(--muted)] opacity-50 ${className}`}
      width="48"
      height="64"
      viewBox="0 0 48 64"
      fill="none"
      aria-hidden
    >
      <path
        d="M24 4c0 20-14 28-14 40 0 8 6 14 14 14s12-5 12-12c0-10-8-14-12-22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M30 50l8 2-4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
