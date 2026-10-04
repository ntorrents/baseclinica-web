export type OdooApp = {
  id: string;
  name: string;
  icon: string;
  color: string;
  href?: string;
};

/** Grid de apps estilo Odoo — módulos Base Clínica */
export const odooApps: OdooApp[] = [
  { id: "agenda", name: "Agenda", icon: "📅", color: "#714B67" },
  { id: "pacientes", name: "Pacientes", icon: "👤", color: "#017E84" },
  { id: "historia", name: "Historia clínica", icon: "📋", color: "#5D8DA8" },
  { id: "facturacion", name: "Facturación", icon: "💶", color: "#3B82F6" },
  { id: "caja", name: "Caja", icon: "🧾", color: "#875A7B" },
  { id: "stock", name: "Stock", icon: "📦", color: "#F59E0B" },
  { id: "firma", name: "Firma digital", icon: "✍️", color: "#10B981" },
  { id: "fotos", name: "Bóveda fotos", icon: "📸", color: "#EC4899" },
  { id: "aeat", name: "Fiscal AEAT", icon: "🏛️", color: "#6366F1" },
  { id: "informes", name: "Informes", icon: "📊", color: "#0EA5E9" },
  { id: "citas", name: "Citas online", icon: "🌐", color: "#14B8A6" },
  { id: "whatsapp", name: "WhatsApp", icon: "💬", color: "#22C55E" },
  { id: "portal", name: "Portal paciente", icon: "🔐", color: "#8B5CF6" },
  { id: "productos", name: "Venta productos", icon: "🛍️", color: "#F97316" },
  { id: "marketing", name: "Marketing", icon: "🎯", color: "#EF4444" },
  { id: "multisede", name: "Multi-sede", icon: "🏥", color: "#64748B" },
];

export const odooPlans = [
  {
    id: "gestion",
    name: "Gestión",
    price: "49",
    period: "€/mes",
    annual: "529 €/año",
    tagline: "Las bases operativas de tu clínica.",
    features: [
      "Agenda inteligente",
      "Pacientes e historias clínicas",
      "Facturación básica",
      "Cierres de caja",
      "Soporte técnico",
    ],
    cta: "Empezar",
    href: "/contacto?interes=plan-gestion",
    highlighted: false,
  },
  {
    id: "360",
    name: "Clínica 360",
    price: "89",
    period: "€/mes",
    annual: "961 €/año",
    tagline: "Firma, fotos, stock y autopiloto fiscal.",
    features: [
      "Todo lo de Gestión",
      "Firma digital biométrica",
      "Bóveda fotográfica",
      "Inventario y lotes",
      "Módulo fiscal AEAT",
      "Soporte prioritario",
    ],
    cta: "Elegir 360",
    href: "/contacto?interes=plan-clinica-360",
    highlighted: true,
  },
  {
    id: "elite",
    name: "Elite",
    price: "179",
    period: "€/mes",
    annual: "1.933 €/año",
    tagline: "Todos los módulos + multi-sede + consultoría.",
    features: [
      "Todo lo de Clínica 360",
      "Todos los módulos incluidos",
      "Multi-sede",
      "Consultoría mensual",
      "Soporte 24/7",
    ],
    cta: "Hablar con nosotros",
    href: "/contacto?interes=plan-elite",
    highlighted: false,
  },
] as const;
