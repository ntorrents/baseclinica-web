export type PricingPlanCard = {
  id: string;
  kind: "web" | "software";
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
  kind: "web" | "software";
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
    kind: "software",
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
    kind: "software",
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
  { sectionTitle: "1. Gestión de Pacientes y Agenda", feature: "Agenda Inteligente y Fichas de Pacientes", basic: "✅", premium: "✅" },
  { feature: "Historial Clínico Evolutivo", basic: "✅", premium: "✅" },
  { feature: "Recordatorios automáticos WhatsApp/Email", basic: "❌", premium: "✅" },
  { feature: "Sincronización Google Calendar", basic: "❌", premium: "✅" },
  {
    sectionTitle: "2. Facturación y Caja",
    feature: "Facturas y Presupuestos",
    basic: "✅",
    premium: "✅",
  },
  { feature: "Gestión de Bonos", basic: "✅", premium: "✅" },
  { feature: "Stock y tratamientos", basic: "Esencial", premium: "Ampliado" },
  { feature: "Cierre de Caja Diario y Control de Gastos", basic: "❌", premium: "✅" },
  {
    sectionTitle: "3. Seguridad Legal y Médica",
    feature: "Consentimientos Informados",
    basic: "Plantillas",
    premium: "✅ Ilimitados",
  },
  { feature: "Consentimientos con firma biométrica", basic: "❌", premium: "✅" },
  { feature: "Bóveda fotográfica clínica (Antes/Después)", basic: "❌", premium: "✅" },
  {
    sectionTitle: "4. Inventario y Fiscalidad Avanzada (Exclusivo 360)",
    feature: "Control de Stock y Trazabilidad de Lotes",
    basic: "❌",
    premium: "✅",
  },
  { feature: "Autopiloto Fiscal AEAT (Modelos 130, 303, 115)", basic: "❌", premium: "✅" },
  { feature: "Amortización de Inversiones", basic: "❌", premium: "✅" },
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
    description: "Tienda online integrada con el software para control de inventario. Setup inicial + mensualidad.",
    price: "30 €/mes + 200 € setup",
  },
  {
    id: "citas-online",
    kind: "software",
    name: "Citas online",
    description: "Reserva automática desde la web hacia la agenda del software.",
    price: "10 €/mes",
  },
  {
    id: "whatsapp",
    kind: "software",
    name: "WhatsApp Business",
    description: "Plantillas y recordatorios conectados a la ficha del paciente.",
    price: "20 €/mes",
  },
  {
    id: "portal",
    kind: "software",
    name: "Portal del paciente",
    description: "Acceso del paciente a documentos, citas y comunicaciones.",
    price: "desde 20 €/mes",
  },
  {
    id: "firma",
    kind: "software",
    name: "Consentimientos con Firma Biométrica",
    description: "Firma digital integrada para consentimientos informados. Protección legal máxima.",
    price: "Incluido en Plan Clínica 360",
  },
  {
    id: "historia-fotografica",
    kind: "software",
    name: "Bóveda Fotográfica Clínica",
    description: "Fotos Antes/Después seguras y organizadas. Seguimiento visual de cada tratamiento.",
    price: "Incluido en Plan Clínica 360",
  },
  {
    id: "marketing",
    kind: "software",
    name: "Pack Marketing",
    description: "Sistema de fidelización (puntos y monedero virtual), tarjetas regalo gestionadas desde el software y captación de reseñas automatizada por email.",
    price: "15 €/mes",
  },
  {
    id: "ventas-retencion",
    kind: "software",
    name: "Ventas y retención",
    description: "Módulos avanzados de ventas y gestión de retención de pacientes.",
    price: "10 €/mes",
  },
  {
    id: "multi-sede",
    kind: "software",
    name: "Multi-sede",
    description: "Varias clínicas bajo la misma cuenta con métricas consolidadas.",
    price: "a medida",
  },
];

export const comboOffer: ComboOffer = {
  title: "Pack Ecosistema Total",
  subtitle:
    "Un solo proveedor, implantación conjunta y descuento en el setup de la web.",
  setupPrice: "750 €",
  monthlyPrice: "49 €/mes",
  savingsNote: "Ahorras 140 € en el setup web frente a contratar por separado (890 €).",
  benefits: [
    "Web corporativa + Plan Gestión listos a la vez",
    "Onboarding único: menos fricción para tu equipo",
    "Misma estética y datos alineados web ↔ gestión",
    "Soporte unificado (un interlocutor)",
    "Puedes subir a Plan Clínica 360 cuando lo necesites",
  ],
  ctaLabel: "Quiero el combo",
  ctaHref: "/contacto?interes=combo",
};

export { faqItems, processSteps } from "@/data/services-packs";
