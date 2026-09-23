export type PricingPlanCard = {
  id: string;
  kind: "web" | "erp";
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  priceAnnual?: string;
  features: string[];
  recommended?: boolean;
  ctaLabel: string;
  ctaHref: string;
};

export type ErpCompareRow = {
  sectionTitle?: string;
  feature: string;
  basic: string;
  premium: string;
};

export type ExtraModule = {
  id: string;
  kind: "web" | "erp";
  name: string;
  description: string;
  price: string;
};

export type ComboOffer = {
  title: string;
  subtitle: string;
  setupPrice: string;
  monthlyPrice: string;
  savingsNote: string;
  benefits: string[];
  ctaLabel: string;
  ctaHref: string;
};

/** Una web + dos ERP (Basic / Premium), estilo Holded. */
export const webPlan: PricingPlanCard = {
  id: "web",
  kind: "web",
  name: "Web corporativa",
  tagline: "Presencia online clara para captar pacientes.",
  price: "890 €",
  priceNote: "pago único · puesta en marcha",
  features: [
    "Diseño responsive orientado a clínicas",
    "Hasta 5 secciones clave + legales",
    "Formularios y enlace a WhatsApp / citas",
    "SEO técnico base (títulos, meta, velocidad)",
    "1 ronda de revisiones incluida",
  ],
  ctaLabel: "Quiero la web",
  ctaHref: "/contacto?interes=web",
};

export const erpPlans: PricingPlanCard[] = [
  {
    id: "erp-basic",
    kind: "erp",
    name: "Basic",
    tagline: "Para arrancar la gestión diaria con orden.",
    price: "35 €",
    priceNote: "/ mes",
    priceAnnual: "378 € / año",
    features: [
      "1 profesional activo",
      "Agenda y recordatorios básicos",
      "Pacientes y documentación esencial",
      "Stock, tratamientos y finanzas diarias",
      "Facturación esencial",
      "Soporte por email",
    ],
    ctaLabel: "Empezar Basic",
    ctaHref: "/contacto?interes=erp-basic",
  },
  {
    id: "erp-premium",
    kind: "erp",
    name: "Premium",
    tagline: "Para equipos que necesitan más control y módulos.",
    price: "49 €",
    priceNote: "/ mes",
    priceAnnual: "530 € / año",
    recommended: true,
    features: [
      "Hasta 5 profesionales",
      "Todo lo de Basic",
      "Roles y permisos",
      "Bonos, documentación avanzada y fiscalidad",
      "Informes de actividad y ocupación",
      "Desbloqueo de módulos según necesidad",
      "Soporte prioritario",
    ],
    ctaLabel: "Empezar Premium",
    ctaHref: "/contacto?interes=erp-premium",
  },
];

export const erpCompareRows: ErpCompareRow[] = [
  { sectionTitle: "Núcleo operativo", feature: "Dashboard", basic: "✓", premium: "✓" },
  { feature: "Agenda", basic: "✓", premium: "✓" },
  { feature: "Pacientes / fichas", basic: "Esencial", premium: "Ampliado" },
  { feature: "Stock y tratamientos", basic: "✓", premium: "✓" },
  { feature: "Finanzas del día a día", basic: "✓", premium: "✓" },
  { feature: "Facturación", basic: "Esencial", premium: "Avanzada" },
  {
    sectionTitle: "Equipo y alcance",
    feature: "Profesionales activos",
    basic: "1",
    premium: "Hasta 5",
  },
  { feature: "Roles y permisos", basic: "—", premium: "✓" },
  { feature: "Informes de ocupación", basic: "—", premium: "✓" },
  {
    sectionTitle: "Módulos Premium",
    feature: "Bonos",
    basic: "—",
    premium: "✓",
  },
  { feature: "Documentación (consentimientos, presupuestos)", basic: "—", premium: "✓" },
  { feature: "Fiscalidad (resumen trimestral)", basic: "—", premium: "✓" },
  { feature: "Recordatorios ampliados", basic: "Básicos", premium: "Plantillas y reglas" },
  { feature: "Exportar gastos (Excel / CSV)", basic: "—", premium: "✓" },
  { feature: "Añadir módulos extra", basic: "Bajo petición", premium: "Incluido en roadmap" },
];

export const extraModules: ExtraModule[] = [
  {
    id: "seo-avance",
    kind: "web",
    name: "SEO + blog",
    description: "Optimización on-page ampliada y blog preparado para posicionar tratamientos.",
    price: "250 €",
  },
  {
    id: "mant-web",
    kind: "web",
    name: "Mantenimiento web",
    description: "Cambios de contenido, seguridad y evolución mensual de la web.",
    price: "20 €/mes",
  },
  {
    id: "ecommerce",
    kind: "web",
    name: "E-commerce integrado",
    description: "Tienda online integrada con el ERP para inventario de productos. Setup inicial + mensualidad.",
    price: "30 €/mes + 200 € setup",
  },
  {
    id: "citas-online",
    kind: "erp",
    name: "Citas online",
    description: "Reserva automática desde la web hacia la agenda del ERP.",
    price: "10 €/mes",
  },
  {
    id: "whatsapp",
    kind: "erp",
    name: "WhatsApp Business",
    description: "Plantillas y recordatorios conectados a la ficha del paciente.",
    price: "20 €/mes",
  },
  {
    id: "portal",
    kind: "erp",
    name: "Portal del paciente",
    description: "Acceso del paciente a documentos, citas y comunicaciones.",
    price: "desde 20 €/mes",
  },
  {
    id: "firma",
    kind: "erp",
    name: "Firma digital",
    description: "Consentimientos y presupuestos firmados sin papel.",
    price: "10 €/mes",
  },
  {
    id: "historia-fotografica",
    kind: "erp",
    name: "Historia clínica fotográfica",
    description: "Fotos de antes y después con gestión integrada en la ficha del paciente.",
    price: "10 €/mes",
  },
  {
    id: "marketing",
    kind: "erp",
    name: "Pack Marketing",
    description: "Sistema de fidelización (puntos y monedero virtual), tarjetas regalo gestionadas desde ERP y captación de reseñas automatizada por email.",
    price: "15 €/mes",
  },
  {
    id: "ventas-retencion",
    kind: "erp",
    name: "Ventas y retención",
    description: "Módulos avanzados de ventas y gestión de retención de pacientes.",
    price: "10 €/mes",
  },
  {
    id: "multi-sede",
    kind: "erp",
    name: "Multi-sede",
    description: "Varias clínicas bajo la misma cuenta con métricas consolidadas.",
    price: "a medida",
  },
];

export const comboOffer: ComboOffer = {
  title: "Combo Web + ERP",
  subtitle:
    "Un solo proveedor, implantación conjunta y descuento en el setup de la web.",
  setupPrice: "750 €",
  monthlyPrice: "35 €/mes",
  savingsNote: "Ahorras 140 € en el setup web frente a contratar por separado (890 €).",
  benefits: [
    "Web corporativa + ERP Basic listos a la vez",
    "Onboarding único: menos fricción para tu equipo",
    "Misma estética y datos alineados web ↔ gestión",
    "Soporte unificado (un interlocutor)",
    "Puedes subir a Premium cuando lo necesites",
  ],
  ctaLabel: "Quiero el combo",
  ctaHref: "/contacto?interes=combo",
};

export { faqItems, processSteps } from "@/data/services-packs";
