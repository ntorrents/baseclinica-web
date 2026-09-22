import {
  ErpFeature,
  HeroData,
  LandingData,
  PainPoint,
  PortfolioCase,
  PricingPlan,
} from "@/types/landing";

const PAD = "#f4f5f7";

const defaultHero: HeroData = {
  eyebrow: "01 / Hero",
  title: "La base digital de tu clínica.",
  subtitle:
    "Web para captar. ERP para operar. Estética, dental, fisio, veterinaria y más — sin plantillas genéricas.",
  primaryCta: { label: "Ver soluciones", href: "#soluciones" },
  secondaryCta: {
    label: "Precios",
    href: "/precios",
  },
};

const defaultPainPoints: PainPoint[] = [
  {
    title: "No sabes por dónde empezar",
    description:
      "Web, agenda, facturas, stock… demasiados frentes. BaseClinica te deja elegir: captación, gestión o ambas.",
  },
  {
    title: "Herramientas desconectadas",
    description:
      "WhatsApp, Excel y un ERP a medias. Pierdes tiempo y datos entre recepción, cabina y administración.",
  },
  {
    title: "Imagen que no vende tu nivel",
    description:
      "Pacientes comparan clínicas online. Si tu web no transmite confianza, pierdes citas antes de la primera visita.",
  },
];

const defaultPortfolio: PortfolioCase = {
  name: "Presencia web",
  category: "Estructura",
  description:
    "Mensaje claro, servicios entendibles y contacto sin fricción. La web como puerta de entrada, no como catálogo.",
  liveUrl: "https://www.c3linic.com",
  image: "/images/portfolio-c3linic-v2.png",
  imagePadColor: PAD,
};

const defaultErpScreens = {
  desktop: {
    src: "/images/erp-dashboard.png",
    padColor: PAD,
  },
  mobile: {
    src: "/images/erp-mobile-v2.png",
    padColor: PAD,
  },
} as const;

const defaultErpFeatures: ErpFeature[] = [
  {
    title: "Inicio operativo",
    description:
      "Saludo, clientes activos y accesos rápidos a agenda, pacientes, tratamientos y caja.",
    image: "/images/erp-dashboard.png",
    imagePadColor: PAD,
  },
  {
    title: "Ficha de paciente",
    description:
      "Datos fiscales, alergias, notas privadas, LOPD y derechos de imagen en una sola vista.",
    image: "/images/erp-clientes.png",
    imagePadColor: PAD,
  },
  {
    title: "Inventario y lotes",
    description:
      "Stock, caducidades y coste unitario con alertas para evitar mermas en cabina.",
    image: "/images/erp-stock.png",
    imagePadColor: PAD,
  },
  {
    title: "Movimientos y caja",
    description:
      "Ingresos, gastos y fijos controlados. Cierre claro sin descuadres de última hora.",
    image: "/images/erp-finanzas.png",
    imagePadColor: PAD,
  },
  {
    title: "Facturas emitidas",
    description:
      "Filtros por cliente o tratamiento, ticket medio y descarga PDF en un clic.",
    image: "/images/erp-facturas.png",
    imagePadColor: PAD,
  },
  {
    title: "Fiscalidad AEAT",
    description:
      "Resultado operativo, IVA, IRPF y checklist antes de exportar el trimestre.",
    image: "/images/erp-fiscalidad.png",
    imagePadColor: PAD,
  },
];

const defaultPricingPlans: PricingPlan[] = [
  {
    id: "web",
    name: "Web & Captación",
    monthlyPrice: "Desde 890 EUR (pago único)",
    annualPrice: "Desde 890 EUR (pago único)",
    priceCaption: "Opcional: mantenimiento y evolución mensual.",
    description:
      "Para clínicas que buscan una presencia digital premium, moderna y enfocada en captar más pacientes.",
    target: "Ideal si ya tienes un ERP pero tu web está anticuada.",
    features: [
      "Diseño Health-Tech premium",
      "Copy persuasivo y conversión",
      "Optimización SEO técnico",
      "Textos legales y RGPD",
      "Formularios de citas directos",
    ],
    cta: { label: "Configurar Web", href: "/contacto" },
  },
  {
    id: "erp",
    name: "Software ERP Clínica",
    monthlyPrice: "Desde 49 EUR/mes",
    annualPrice: "Desde 530 EUR/año",
    priceCaption: "10% de descuento con facturación anual",
    description:
      "Gestión interna sin fricciones. Agenda, historiales clínicos, facturación y recordatorios en una app rápida.",
    target: "Ideal si tu web funciona pero gestionas con papel o Excel.",
    features: [
      "Agenda inteligente y recordatorios",
      "Historiales clínicos centralizados",
      "Facturación y control de caja",
      "Múltiples profesionales y roles",
      "Soporte rápido por email/chat",
    ],
    cta: { label: "Configurar App", href: "/contacto" },
  },
  {
    id: "integral",
    name: "Pack Integral Digital",
    monthlyPrice: "Desde 750 EUR + 49 EUR/mes",
    annualPrice: "Desde 750 EUR + 530 EUR/año",
    priceCaption: "Ahorro directo en la web al contratar ambas.",
    description:
      "La solución total. Unifica proveedor y lanza web + software de gestión al mismo tiempo.",
    target: "Ideal para clínicas de nueva apertura o rediseños completos.",
    features: [
      "Todo lo incluido en Web & Captación",
      "Todo lo incluido en Software ERP",
      "Descuento en implementación web",
      "Onboarding y soporte unificado",
      "Acompañamiento estratégico",
    ],
    cta: { label: "Quiero el Pack Integral", href: "/contacto" },
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
  title: "Ordena camillas, agenda y facturación sin perder el foco en el paciente",
  subtitle:
    "App de gestión y web pensadas para fisioterapia: menos fricción administrativa y más tiempo en sala.",
  primaryCta: { label: "Ver el Software", href: "#erp-solution" },
  secondaryCta: { label: "Ver Pack Integral", href: "#pricing" },
};

const fisioPainPoints: PainPoint[] = [
  {
    title: "Camillas y salas mal coordinadas",
    description:
      "Cuellos de botella entre turnos, equipos compartidos y cambios de última hora que rompen el ritmo del día.",
  },
  {
    title: "Planes y sesiones en post-its",
    description:
      "Dificultad para ver el historial completo del paciente y seguir el plan con criterio clínico.",
  },
  {
    title: "Web genérica que no refleja tu especialidad",
    description:
      "Pocos pacientes nuevos por falta de mensaje claro sobre terapias o rehabilitación.",
  },
];

const dermoHero: HeroData = {
  eyebrow: "Digitalización para clínicas estéticas",
  title: "Imagen premium y operativa diaria alineadas en tu centro",
  subtitle:
    "Web que transmite confianza y tratamientos de calidad, más app de gestión para citas, cobros e historial.",
  primaryCta: { label: "Ver el Software", href: "#erp-solution" },
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
