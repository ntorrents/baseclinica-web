import {
  ErpFeature,
  HeroData,
  LandingData,
  PainPoint,
  PortfolioCase,
  PricingPlan,
} from "@/types/landing";

const defaultHero: HeroData = {
  eyebrow: "Digitalización integral para microclínicas",
  title: "Gestiona tu clínica y eleva tu marca con una sola solución",
  subtitle:
    "Unimos app de gestión interna y web corporativa para que ganes tiempo, automatices tareas y proyectes una imagen premium con cumplimiento legal.",
  primaryCta: { label: "Ver el Software", href: "#erp" },
  secondaryCta: { label: "Ver Pack Integral", href: "#pricing" },
};

const defaultPainPoints: PainPoint[] = [
  {
    title: "Caos en WhatsApp y agenda manual",
    description:
      "Citas dispersas, cambios de última hora y pérdida de tiempo en la gestión diaria.",
  },
  {
    title: "Historiales en papel y procesos lentos",
    description:
      "Dificultad para acceder a información clínica y riesgo de errores administrativos.",
  },
  {
    title: "Web anticuada o inexistente",
    description:
      "Menor confianza del paciente y menos conversiones frente a clínicas más modernas.",
  },
];

const defaultPortfolio: PortfolioCase = {
  name: "C3linic",
  category: "Clínica estética y salud",
  description:
    "Ejemplo real de diseño web premium orientado a conversión, confianza visual y posicionamiento de marca en el sector salud y estética.",
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
      "Organiza citas, profesionales y salas en tiempo real con menos ausencias y mejor ocupación.",
  },
  {
    title: "Facturación y control administrativo",
    description:
      "Centraliza presupuestos, cobros y documentos para acelerar el cierre de caja diario.",
  },
  {
    title: "Historia clínica centralizada",
    description:
      "Acceso rápido y estructurado a los datos del paciente para decisiones más ágiles.",
  },
];

const defaultPricingPlans: PricingPlan[] = [
  {
    name: "Solo Web Corporativa",
    monthlyPrice: "Desde 890 EUR (pago único)",
    annualPrice: "Desde 890 EUR (pago único)",
    priceCaption: "Mantenimiento y mejoras en planes de Web por niveles",
    description: "Diseño y desarrollo web orientado a captación y posicionamiento.",
    target: "Clínicas que quieren mejorar imagen y captación.",
    unlockHint: "SEO avanzado e informes se desbloquean en niveles superiores.",
    features: [
      "Diseño premium sector salud",
      "Copy y estructura orientada a conversión",
      "SEO técnico base",
      "Formularios y llamadas a la acción",
    ],
    cta: { label: "Quiero mi Web", href: "#contacto" },
  },
  {
    name: "Solo App de Gestión Interna",
    monthlyPrice: "Desde 49 EUR/mes",
    annualPrice: "Desde 530 EUR/año",
    priceCaption: "10% de descuento con facturación anual del software",
    description:
      "Software para digitalizar agenda, pacientes, facturación y control interno.",
    target: "Equipos que necesitan orden operativo sin complejidad técnica.",
    unlockHint: "Roles, métricas y multi-sede se desbloquean en planes Clinic y Multi-sede.",
    features: [
      "Agenda y gestión de pacientes",
      "Facturación y seguimiento",
      "Panel de control de actividad",
      "Soporte de onboarding",
    ],
    cta: { label: "Quiero la App", href: "#contacto" },
  },
  {
    name: "Pack Integral (Web + App)",
    monthlyPrice: "Desde 750 EUR + desde 49 EUR/mes",
    annualPrice: "Desde 750 EUR + desde 530 EUR/año",
    priceCaption:
      "Niveles Plus y Avanzado: cuota mensual conjunta (app + mantenimiento web) con descuento frente a contratar por separado.",
    description:
      "La opción más rentable para lanzar tu transformación digital completa.",
    target: "Centros que quieren resolver marca y operativa en una sola decisión.",
    unlockHint: "Al subir de plan se desbloquean más horas de cambios y analítica avanzada.",
    features: [
      "Todo lo incluido en Solo Web",
      "Todo lo incluido en la App de Gestión",
      "Descuento especial por contratación conjunta",
      "Acompañamiento estratégico de implementación",
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
  eyebrow: "Digitalización para gabinetes de fisioterapia",
  title:
    "Ordena camillas, agenda y facturación sin perder el foco en el paciente",
  subtitle:
    "App de gestión interna y web corporativa pensadas para fisioterapeutas y clínicas de rehabilitación: menos fricción administrativa y más tiempo en sala.",
  primaryCta: { label: "Ver el Software", href: "#erp" },
  secondaryCta: { label: "Ver Pack Integral", href: "#pricing" },
};

const fisioPainPoints: PainPoint[] = [
  {
    title: "Camillas y salas mal coordinadas",
    description:
      "Cuellos de botella entre turnos, equipos compartidos y cambios de última hora que rompen el ritmo del día.",
  },
  {
    title: "Planes y sesiones en post-its o hojas sueltas",
    description:
      "Dificultad para ver el historial completo del paciente y seguir el plan de ejercicios con criterio clínico.",
  },
  {
    title: "Web genérica que no refleja tu especialidad",
    description:
      "Pocos pacientes nuevos por falta de mensaje claro sobre terapias, lesión deportiva o rehabilitación.",
  },
];

const dermoHero: HeroData = {
  eyebrow: "Digitalización para clínicas estéticas",
  title:
    "Imagen premium y operativa diaria alineadas en tu centro de estética",
  subtitle:
    "Web que transmite confianza y tratamientos de calidad, más app de gestión para citas, cobros e historial sin caos en recepción.",
  primaryCta: { label: "Ver el Software", href: "#erp" },
  secondaryCta: { label: "Ver Pack Integral", href: "#pricing" },
};

const dermoPainPoints: PainPoint[] = [
  {
    title: "Agenda llena de tratamientos y retoques",
    description:
      "Huecos mal aprovechados, sobrecitas y recordatorios manuales que consumen tiempo en recepción.",
  },
  {
    title: "Consentimientos y fichas repartidos",
    description:
      "Riesgo de perder trazabilidad entre visitas previas, fotos y protocolos por paciente.",
  },
  {
    title: "Presencia online que no vende tu nivel real",
    description:
      "Pacientes comparan clínicas online; sin una web acorde, pierdes conversión frente a la competencia.",
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
