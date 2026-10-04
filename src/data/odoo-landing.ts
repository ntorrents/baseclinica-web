import type { ModuleIconId } from "@/components/odoo/ModuleIcons";

export type ClinicModule = {
  id: string;
  name: string;
  description: string;
  icon: ModuleIconId;
  /** Coste típico mensual de herramienta suelta (para calculadora) */
  replaceCost: number;
  /** Precio add-on en Base Clínica (€/mes). 0 = incluido en planes base */
  addonPrice: number;
  includedIn: ("gestion" | "360" | "elite")[];
};

export type ModuleGroup = {
  id: string;
  title: string;
  modules: ClinicModule[];
};

export const moduleGroups: ModuleGroup[] = [
  {
    id: "nucleo",
    title: "Núcleo clínico",
    modules: [
      {
        id: "agenda",
        name: "Agenda",
        description: "Citas, salas y profesionales sin solapes",
        icon: "agenda",
        replaceCost: 29,
        addonPrice: 0,
        includedIn: ["gestion", "360", "elite"],
      },
      {
        id: "pacientes",
        name: "Pacientes",
        description: "Ficha única con todo el historial",
        icon: "pacientes",
        replaceCost: 25,
        addonPrice: 0,
        includedIn: ["gestion", "360", "elite"],
      },
      {
        id: "historia",
        name: "Historia clínica",
        description: "Evolutivo, tratamientos y notas",
        icon: "historia",
        replaceCost: 35,
        addonPrice: 0,
        includedIn: ["gestion", "360", "elite"],
      },
      {
        id: "firma",
        name: "Firma digital",
        description: "Consentimientos biométricos en consulta",
        icon: "firma",
        replaceCost: 40,
        addonPrice: 0,
        includedIn: ["360", "elite"],
      },
      {
        id: "fotos",
        name: "Bóveda fotográfica",
        description: "Antes/después seguro y organizado",
        icon: "fotos",
        replaceCost: 30,
        addonPrice: 0,
        includedIn: ["360", "elite"],
      },
    ],
  },
  {
    id: "admin",
    title: "Administración",
    modules: [
      {
        id: "facturacion",
        name: "Facturación",
        description: "Facturas, presupuestos y bonos",
        icon: "facturacion",
        replaceCost: 35,
        addonPrice: 0,
        includedIn: ["gestion", "360", "elite"],
      },
      {
        id: "caja",
        name: "Caja",
        description: "Cierres diarios y control de gastos",
        icon: "caja",
        replaceCost: 20,
        addonPrice: 0,
        includedIn: ["gestion", "360", "elite"],
      },
      {
        id: "stock",
        name: "Stock y lotes",
        description: "Inventario con trazabilidad",
        icon: "stock",
        replaceCost: 40,
        addonPrice: 0,
        includedIn: ["360", "elite"],
      },
      {
        id: "aeat",
        name: "Fiscal AEAT",
        description: "Modelos 130, 303, 115 listos",
        icon: "aeat",
        replaceCost: 50,
        addonPrice: 0,
        includedIn: ["360", "elite"],
      },
      {
        id: "informes",
        name: "Informes",
        description: "KPIs de ocupación y rentabilidad",
        icon: "informes",
        replaceCost: 25,
        addonPrice: 0,
        includedIn: ["360", "elite"],
      },
      {
        id: "productos",
        name: "Venta de productos",
        description: "Cosméticos y retail, no solo servicios",
        icon: "productos",
        replaceCost: 25,
        addonPrice: 5,
        includedIn: ["elite"],
      },
    ],
  },
  {
    id: "captacion",
    title: "Captación y paciente",
    modules: [
      {
        id: "citas",
        name: "Citas online",
        description: "Reserva 24/7 desde tu web",
        icon: "citas",
        replaceCost: 39,
        addonPrice: 10,
        includedIn: ["elite"],
      },
      {
        id: "whatsapp",
        name: "WhatsApp",
        description: "Recordatorios y plantillas conectadas",
        icon: "whatsapp",
        replaceCost: 45,
        addonPrice: 20,
        includedIn: ["elite"],
      },
      {
        id: "portal",
        name: "Portal del paciente",
        description: "Documentos y citas en autoservicio",
        icon: "portal",
        replaceCost: 35,
        addonPrice: 20,
        includedIn: ["elite"],
      },
      {
        id: "marketing",
        name: "Marketing",
        description: "Fidelización, reseñas y tarjetas regalo",
        icon: "marketing",
        replaceCost: 49,
        addonPrice: 15,
        includedIn: ["elite"],
      },
      {
        id: "multisede",
        name: "Multi-sede",
        description: "Varias clínicas, métricas unificadas",
        icon: "multisede",
        replaceCost: 80,
        addonPrice: 0,
        includedIn: ["elite"],
      },
    ],
  },
  {
    id: "web",
    title: "Sitio web",
    modules: [
      {
        id: "web",
        name: "Web clínica",
        description: "Diseño profesional orientado a captar pacientes",
        icon: "web",
        replaceCost: 40,
        addonPrice: 0,
        includedIn: [],
      },
      {
        id: "seo",
        name: "SEO + blog",
        description: "Posiciona tratamientos y contenidos",
        icon: "seo",
        replaceCost: 30,
        addonPrice: 0,
        includedIn: [],
      },
      {
        id: "ecommerce",
        name: "E-commerce",
        description: "Tienda online ligada al stock",
        icon: "ecommerce",
        replaceCost: 55,
        addonPrice: 30,
        includedIn: [],
      },
    ],
  },
];

export const allClinicModules = moduleGroups.flatMap((g) => g.modules);

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

/** Apps del hero (subset visual) */
export const heroApps = allClinicModules.filter((m) =>
  ["agenda", "pacientes", "historia", "facturacion", "firma", "fotos", "stock", "aeat", "citas", "whatsapp", "portal", "marketing"].includes(
    m.id,
  ),
);
