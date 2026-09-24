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
    id: "plan-gestion",
    kind: "erp",
    name: "Plan Gestión",
    tagline: "Ideal para arrancar con las bases operativas.",
    price: "49 €",
    priceNote: "/ mes",
    priceAnnual: "529 € / año",
    features: [
      "Agenda inteligente",
      "Base de datos de pacientes",
      "Historias clínicas completas",
      "Facturación básica",
      "Cierres de caja",
      "Soporte técnico",
    ],
    ctaLabel: "Empezar Plan Gestión",
    ctaHref: "/contacto?interes=plan-gestion",
  },
  {
    id: "plan-clinica-360",
    kind: "erp",
    name: "Plan Clínica 360",
    tagline: "Paz mental absoluta: seguridad legal + autopiloto fiscal.",
    price: "89 €",
    priceNote: "/ mes",
    priceAnnual: "961 € / año",
    recommended: true,
    features: [
      "TODO lo del Plan Gestión",
      "Consentimientos con Firma Digital",
      "Bóveda fotográfica Antes/Después",
      "Inventario y Trazabilidad de lotes",
      "Módulo Fiscal AEAT (130, 303, 115)",
      "Análisis Financiero avanzado",
      "Soporte prioritario",
    ],
    ctaLabel: "Paz Mental Ahora",
    ctaHref: "/contacto?interes=plan-clinica-360",
  },
];

export const erpCompareRows: ErpCompareRow[] = [
  { sectionTitle: "Operativo Esencial", feature: "Agenda inteligente", basic: "✓", premium: "✓" },
  { feature: "Base de datos pacientes", basic: "✓", premium: "✓" },
  { feature: "Historias clínicas", basic: "Completas", premium: "Completas + Evolutivas" },
  { feature: "Facturación", basic: "Básica", premium: "Profesional" },
  { feature: "Cierres de caja", basic: "✓", premium: "Automatizados" },
  {
    sectionTitle: "Seguridad Legal (CRM Clínico)",
    feature: "Consentimientos Informados",
    basic: "—",
    premium: "Con Firma Digital",
  },
  { feature: "Bóveda fotográfica Antes/Después", basic: "—", premium: "✓" },
  { feature: "Cumplimiento RGPD médico", basic: "Básico", premium: "Completo" },
  {
    sectionTitle: "Control Operativo Avanzado",
    feature: "Bonos y sesiones",
    basic: "Básico",
    premium: "Avanzado",
  },
  { feature: "Inventario y trazabilidad de lotes", basic: "—", premium: "✓" },
  { feature: "Compras a proveedores", basic: "—", premium: "✓" },
  {
    sectionTitle: "Autopiloto Fiscal AEAT",
    feature: "Modelo 130 (IRPF)",
    basic: "—",
    premium: "Tiempo real",
  },
  { feature: "Modelo 303 (IVA)", basic: "—", premium: "Tiempo real" },
  { feature: "Modelo 115 (Retenciones)", basic: "—", premium: "Tiempo real" },
  { feature: "Análisis financiero", basic: "Básico", premium: "Avanzado" },
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
