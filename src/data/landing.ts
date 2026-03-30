import {
  ErpFeature,
  HeroData,
  PainPoint,
  PortfolioCase,
  PricingPlan,
} from "@/types/landing";

export const heroData: HeroData = {
  eyebrow: "Digitalizacion integral para micro-clinicas",
  title: "Gestiona tu clinica y eleva tu marca con una sola solucion",
  subtitle:
    "Unimos ERP medico + web corporativa para que ganes tiempo, automatices tareas y proyectes una imagen premium con cumplimiento legal.",
  primaryCta: { label: "Ver el Software", href: "#erp" },
  secondaryCta: { label: "Ver Pack Integral", href: "#pricing" },
};

export const painPoints: PainPoint[] = [
  {
    title: "Caos en WhatsApp y agenda manual",
    description:
      "Citas dispersas, cambios de ultima hora y perdida de tiempo en la gestion diaria.",
  },
  {
    title: "Historiales en papel y procesos lentos",
    description:
      "Dificultad para acceder a informacion clinica y riesgo de errores administrativos.",
  },
  {
    title: "Web anticuada o inexistente",
    description:
      "Menor confianza del paciente y menos conversiones frente a clinicas mas modernas.",
  },
];

export const portfolioCase: PortfolioCase = {
  name: "C3linic",
  category: "Clinica estetica y salud",
  description:
    "Ejemplo real de diseno web premium orientado a conversion, confianza visual y posicionamiento de marca en el sector salud/estetica.",
  liveUrl: "https://www.c3linic.com",
  image: "/images/portfolio-c3linic.svg",
};

export const erpFeatures: ErpFeature[] = [
  {
    title: "Agenda online inteligente",
    description:
      "Organiza citas, profesionales y salas en tiempo real con menos ausencias y mejor ocupacion.",
  },
  {
    title: "Facturacion y control administrativo",
    description:
      "Centraliza presupuestos, cobros y documentos para acelerar el cierre de caja diario.",
  },
  {
    title: "Historia clinica centralizada",
    description:
      "Acceso rapido y estructurado a los datos del paciente para decisiones mas agiles.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Solo Web Corporativa",
    price: "Desde 1490 EUR",
    description: "Diseno y desarrollo web orientado a captacion y posicionamiento.",
    features: [
      "Diseno premium sector salud",
      "Copy y estructura orientada a conversion",
      "SEO tecnico base",
      "Formularios y llamadas a la accion",
    ],
    cta: { label: "Quiero mi Web", href: "#contacto" },
  },
  {
    name: "Solo ERP Medico",
    price: "Desde 99 EUR/mes",
    description:
      "Software SaaS para digitalizar operaciones, agenda y facturacion clinica.",
    features: [
      "Agenda y gestion de pacientes",
      "Facturacion y seguimiento",
      "Panel de control de actividad",
      "Soporte de onboarding",
    ],
    cta: { label: "Quiero el ERP", href: "#contacto" },
  },
  {
    name: "Pack Integral (Web + ERP)",
    price: "Oferta combinada",
    description:
      "La opcion mas rentable para lanzar tu transformacion digital completa.",
    features: [
      "Todo lo incluido en Solo Web",
      "Todo lo incluido en Solo ERP",
      "Descuento especial por contratacion conjunta",
      "Acompanamiento estrategico de implementacion",
    ],
    cta: { label: "Quiero el Pack Integral", href: "#contacto" },
    highlighted: true,
    badge: "Ahorro exclusivo",
  },
];
