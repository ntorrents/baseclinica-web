/** Iconos SVG minimalistas estilo Odoo — colores distintos por módulo */

type IconProps = { className?: string };

export function IconAgenda({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="8" y="10" width="32" height="30" rx="4" fill="#017E84" />
      <path d="M8 18h32" stroke="#fff" strokeWidth="2" />
      <rect x="14" y="6" width="4" height="8" rx="1" fill="#F59E0B" />
      <rect x="30" y="6" width="4" height="8" rx="1" fill="#F59E0B" />
      <circle cx="18" cy="28" r="2.5" fill="#fff" />
      <circle cx="24" cy="28" r="2.5" fill="#fff" opacity=".7" />
      <circle cx="30" cy="28" r="2.5" fill="#fff" opacity=".4" />
    </svg>
  );
}

export function IconPacientes({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="16" r="8" fill="#714B67" />
      <path d="M10 40c2-10 10-14 14-14s12 4 14 14" fill="#3B82F6" />
    </svg>
  );
}

export function IconHistoria({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="12" y="6" width="24" height="36" rx="3" fill="#5D8DA8" />
      <path d="M18 16h12M18 22h12M18 28h8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 10h-2a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h2" fill="#F07A3A" />
    </svg>
  );
}

export function IconFacturacion({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="16" fill="#F59E0B" />
      <path d="M24 14v20M19 18h7a4 4 0 0 1 0 8h-5a4 4 0 0 0 0 8h8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCaja({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="6" y="14" width="36" height="24" rx="3" fill="#875A7B" />
      <rect x="10" y="20" width="16" height="12" rx="2" fill="#fff" opacity=".9" />
      <circle cx="34" cy="26" r="4" fill="#F59E0B" />
    </svg>
  );
}

export function IconStock({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M24 8L40 16v16L24 40 8 32V16L24 8z" fill="#6366F1" />
      <path d="M24 24L40 16M24 24v16M24 24L8 16" stroke="#fff" strokeWidth="2" opacity=".8" />
    </svg>
  );
}

export function IconFirma({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M8 32c6-10 10-4 14-8s4-10 10-6 6 12 8 10"
        stroke="#3B82F6"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M10 38h28" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconFotos({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="6" y="12" width="36" height="28" rx="4" fill="#EC4899" />
      <circle cx="24" cy="26" r="8" fill="#fff" opacity=".95" />
      <circle cx="24" cy="26" r="4" fill="#EC4899" />
      <path d="M16 12l3-4h10l3 4" fill="#F59E0B" />
    </svg>
  );
}

export function IconAeat({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M8 38V20l16-12 16 12v18H8z" fill="#0EA5E9" />
      <rect x="20" y="26" width="8" height="12" fill="#fff" />
      <rect x="12" y="24" width="6" height="6" fill="#fff" opacity=".7" />
      <rect x="30" y="24" width="6" height="6" fill="#fff" opacity=".7" />
    </svg>
  );
}

export function IconInformes({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="8" y="28" width="8" height="12" rx="1.5" fill="#714B67" />
      <rect x="20" y="18" width="8" height="22" rx="1.5" fill="#F07A3A" />
      <rect x="32" y="10" width="8" height="30" rx="1.5" fill="#017E84" />
    </svg>
  );
}

export function IconCitas({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="16" fill="#14B8A6" />
      <path d="M16 24l5 5 11-12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWhatsapp({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 8c-9 0-16 7-16 16 0 2.8.7 5.4 2 7.7L8 40l8.5-2.2A15.8 15.8 0 0 0 24 40c9 0 16-7 16-16S33 8 24 8z"
        fill="#22C55E"
      />
      <path d="M18 20c2 6 8 10 12 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function IconPortal({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="14" y="20" width="20" height="18" rx="3" fill="#8B5CF6" />
      <path d="M18 20v-4a6 6 0 1 1 12 0v4" stroke="#8B5CF6" strokeWidth="3" fill="none" />
      <circle cx="24" cy="29" r="2.5" fill="#fff" />
    </svg>
  );
}

export function IconProductos({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M12 16h24l-2 22H14L12 16z" fill="#F97316" />
      <path d="M18 16a6 6 0 0 1 12 0" stroke="#F97316" strokeWidth="3" fill="none" />
      <path d="M12 16h24" stroke="#fff" strokeWidth="2" opacity=".5" />
    </svg>
  );
}

export function IconMarketing({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="6" fill="#EF4444" />
      <circle cx="24" cy="24" r="12" stroke="#F59E0B" strokeWidth="3" fill="none" />
      <circle cx="24" cy="24" r="18" stroke="#3B82F6" strokeWidth="2.5" fill="none" opacity=".7" />
    </svg>
  );
}

export function IconMultisede({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="6" y="18" width="14" height="22" rx="2" fill="#64748B" />
      <rect x="28" y="10" width="14" height="30" rx="2" fill="#017E84" />
      <path d="M20 28h8" stroke="#F07A3A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function IconWeb({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="16" fill="#0EA5E9" />
      <ellipse cx="24" cy="24" rx="8" ry="16" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M8 24h32M10 16h28M10 32h28" stroke="#fff" strokeWidth="1.5" opacity=".8" />
    </svg>
  );
}

export function IconSeo({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M8 34l10-12 8 6 14-16" stroke="#EF4444" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="40" cy="12" r="4" fill="#F59E0B" />
    </svg>
  );
}

export function IconEcommerce({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M14 14h4l3 20h16l4-14H20" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="22" cy="40" r="2.5" fill="#8B5CF6" />
      <circle cx="34" cy="40" r="2.5" fill="#F07A3A" />
    </svg>
  );
}

export const moduleIconMap = {
  agenda: IconAgenda,
  pacientes: IconPacientes,
  historia: IconHistoria,
  facturacion: IconFacturacion,
  caja: IconCaja,
  stock: IconStock,
  firma: IconFirma,
  fotos: IconFotos,
  aeat: IconAeat,
  informes: IconInformes,
  citas: IconCitas,
  whatsapp: IconWhatsapp,
  portal: IconPortal,
  productos: IconProductos,
  marketing: IconMarketing,
  multisede: IconMultisede,
  web: IconWeb,
  seo: IconSeo,
  ecommerce: IconEcommerce,
} as const;

export type ModuleIconId = keyof typeof moduleIconMap;
