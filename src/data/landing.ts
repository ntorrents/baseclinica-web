import {
  ErpFeature,
  HeroData,
  LandingData,
  PainPoint,
  PortfolioCase,
  PricingPlan,
} from "@/types/landing";

const defaultHero: HeroData = {
  eyebrow: "Digitalizacion integral para micro-clinicas",
  title: "Gestiona tu clinica y eleva tu marca con una sola solucion",
  subtitle:
    "Unimos ERP medico + web corporativa para que ganes tiempo, automatices tareas y proyectes una imagen premium con cumplimiento legal.",
  primaryCta: { label: "Ver el Software", href: "#erp" },
  secondaryCta: { label: "Ver Pack Integral", href: "#pricing" },
};

const defaultPainPoints: PainPoint[] = [
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

const defaultPortfolio: PortfolioCase = {
  name: "C3linic",
  category: "Clinica estetica y salud",
  description:
    "Ejemplo real de diseno web premium orientado a conversion, confianza visual y posicionamiento de marca en el sector salud/estetica.",
  liveUrl: "https://www.c3linic.com",
  image: "/images/portfolio-c3linic.png",
  imagePadColor: "#fbf9f7",
};

const defaultErpScreens = {
  desktop: {
    src: "/images/erp-desktop.png",
    padColor: "#f9fbfc",
  },
  mobile: {
    src: "/images/erp-mobile.png",
    padColor: "#f9fbfc",
  },
} as const;

const defaultErpFeatures: ErpFeature[] = [
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

const defaultPricingPlans: PricingPlan[] = [
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

const defaultLanding: LandingData = {
  hero: defaultHero,
  painPoints: defaultPainPoints,
  portfolio: defaultPortfolio,
  erpFeatures: defaultErpFeatures,
  erpScreens: defaultErpScreens,
  pricingPlans: defaultPricingPlans,
};

const fisioHero: HeroData = {
  eyebrow: "Digitalizacion para gabinetes de fisioterapia",
  title: "Ordena camillas, agenda y facturacion sin perder el foco en el paciente",
  subtitle:
    "ERP medico y web corporativa pensados para fisioterapeutas y clinicas de rehabilitacion: menos friccion administrativa y mas tiempo en sala.",
  primaryCta: { label: "Ver el Software", href: "#erp" },
  secondaryCta: { label: "Ver Pack Integral", href: "#pricing" },
};

const fisioPainPoints: PainPoint[] = [
  {
    title: "Camillas y salas mal coordinadas",
    description:
      "Cuellos de botella entre turnos, equipos compartidos y cambios de ultima hora que rompen el ritmo del dia.",
  },
  {
    title: "Planes y sesiones en post-its o hojas sueltas",
    description:
      "Dificultad para ver el historial completo del paciente y seguir el plan de ejercicios con criterio clinico.",
  },
  {
    title: "Web generica que no refleja tu especialidad",
    description:
      "Pocos pacientes nuevos por falta de mensaje claro sobre terapias, lesion deportiva o rehabilitacion.",
  },
];

const dermoHero: HeroData = {
  eyebrow: "Digitalizacion para clinicas esteticas",
  title: "Imagen premium y operativa diaria alineadas en tu centro de estetica",
  subtitle:
    "Web que transmite confianza y tratamientos de calidad, mas ERP para citas, cobros y historial sin caos en recepcion.",
  primaryCta: { label: "Ver el Software", href: "#erp" },
  secondaryCta: { label: "Ver Pack Integral", href: "#pricing" },
};

const dermoPainPoints: PainPoint[] = [
  {
    title: "Agenda llena de tratamientos y retoques",
    description:
      "Huecos mal aprovechados, sobrecitas y recordatorios manuales que consumen tiempo en recepcion.",
  },
  {
    title: "Consentimientos y fichas repartidos",
    description:
      "Riesgo de perder trazabilidad entre visitas previas, fotos y protocolos por paciente.",
  },
  {
    title: "Presencia online que no vende tu nivel real",
    description:
      "Pacientes comparan clinicas online; sin una web acorde, pierdes conversion frente a la competencia.",
  },
];

export const NICHE_DEFAULT_KEY = "default";

export const landingByNiche: Record<string, LandingData> = {
  default: defaultLanding,
  fisio: {
    ...defaultLanding,
    hero: fisioHero,
    painPoints: fisioPainPoints,
  },
  dermo: {
    ...defaultLanding,
    hero: dermoHero,
    painPoints: dermoPainPoints,
  },
};

export function getLandingData(niche: string): LandingData {
  const key = niche.trim().toLowerCase();
  return landingByNiche[key] ?? landingByNiche[NICHE_DEFAULT_KEY];
}
