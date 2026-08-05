import {
  ErpFeature,
  HeroData,
  LandingData,
  PainPoint,
  PortfolioCase,
  PricingPlan,
} from "@/types/landing";

const defaultHero: HeroData = {
  eyebrow: "Digitalización integral para clínicas",
  title: "La tecnología que tu clínica necesita para captar pacientes y automatizar la gestión.",
  subtitle:
    "Unimos app de gestión interna y web corporativa para que ganes tiempo, automatices tareas y proyectes una imagen premium con cumplimiento legal.",
  primaryCta: { label: "Ver Packs y Precios", href: "#pricing" },
  secondaryCta: { label: "Solicitar Demo de 15 min", href: "#contacto" },
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
    title: "Dashboard e Indicadores",
    description: "Visualiza de un vistazo la salud de tu clínica: ingresos, gastos, clientes activos y próximas citas.",
    image: "/images/erp-dashboard.png",
    imagePadColor: "#fbf9f7"
  },
  {
    title: "Gestión de Pacientes",
    description: "Acceso rápido a historiales clínicos, visitas, bonos, y consentimientos firmados por cada paciente.",
    image: "/images/erp-clientes.png",
    imagePadColor: "#fbf9f7"
  },
  {
    title: "Control de Stock",
    description: "Lleva un registro preciso de tus materiales clínicos, consumos y fechas de caducidad para evitar mermas.",
    image: "/images/erp-stock.png",
    imagePadColor: "#fbf9f7"
  },
  {
    title: "Finanzas Pro",
    description: "Centraliza presupuestos, ingresos y gastos fijos para acelerar el cierre de caja diario y la contabilidad.",
    image: "/images/erp-finanzas.png",
    imagePadColor: "#fbf9f7"
  },
];

const defaultPricingPlans: PricingPlan[] = [
  {
    id: "web",
    name: "Web & Captación",
    monthlyPrice: "Desde 890 EUR (pago único)",
    annualPrice: "Desde 890 EUR (pago único)",
    priceCaption: "Opcional: mantenimiento y evolución mensual.",
    description: "Para clínicas que buscan una presencia digital premium, moderna y enfocada en captar más pacientes.",
    target: "Ideal si ya tienes un ERP pero tu web está anticuada.",
    features: [
      "Diseño Health-Tech premium",
      "Copy persuasivo y conversión",
      "Optimización SEO técnico",
      "Textos legales y RGPD",
      "Formularios de citas directos",
    ],
    cta: { label: "Configurar Web", href: "#contacto" },
  },
  {
    id: "erp",
    name: "Software ERP Clínica",
    monthlyPrice: "Desde 49 EUR/mes",
    annualPrice: "Desde 530 EUR/año",
    priceCaption: "10% de descuento con facturación anual",
    description: "Gestión interna sin fricciones. Agenda, historiales clínicos, facturación y recordatorios en una app rápida.",
    target: "Ideal si tu web funciona pero gestionas con papel o Excel.",
    features: [
      "Agenda inteligente y recordatorios",
      "Historiales clínicos centralizados",
      "Facturación y control de caja",
      "Múltiples profesionales y roles",
      "Soporte rápido por email/chat",
    ],
    cta: { label: "Configurar App", href: "#contacto" },
  },
  {
    id: "integral",
    name: "Pack Integral Digital",
    monthlyPrice: "Desde 750 EUR + 49 EUR/mes",
    annualPrice: "Desde 750 EUR + 530 EUR/año",
    priceCaption: "Ahorro directo en la web al contratar ambas.",
    description: "La solución total. Ahorra costes unificando proveedor y lanza tu web junto a tu software de gestión al mismo tiempo.",
    target: "Ideal para clínicas de nueva apertura o rediseños completos.",
    features: [
      "Todo lo incluido en Web & Captación",
      "Todo lo incluido en Software ERP",
      "Descuento en implementación web",
      "Onboarding y soporte unificado",
      "Acompañamiento estratégico",
    ],
    cta: { label: "Quiero el Pack Integral", href: "#contacto" },
    highlighted: true,
    badge: "Más Popular",
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
