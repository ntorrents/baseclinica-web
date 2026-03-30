export type Cta = {
  label: string;
  href: string;
};

export type HeroData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: Cta;
  secondaryCta: Cta;
};

export type PainPoint = {
  title: string;
  description: string;
};

export type PortfolioCase = {
  name: string;
  category: string;
  description: string;
  liveUrl: string;
  image: string;
  /** Color de las bandas al mostrar la captura completa (object-contain); alinear con bordes de la imagen */
  imagePadColor?: string;
};

export type ErpFeature = {
  title: string;
  description: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: Cta;
  highlighted?: boolean;
  badge?: string;
};

export type ErpScreensConfig = {
  desktop: { src: string; padColor: string };
  mobile: { src: string; padColor: string };
};

/** Contenido variable por nicho para la misma plantilla visual */
export type LandingData = {
  hero: HeroData;
  painPoints: PainPoint[];
  portfolio: PortfolioCase;
  erpFeatures: ErpFeature[];
  erpScreens: ErpScreensConfig;
  pricingPlans: PricingPlan[];
};

export type ServicePackTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
};

export type ServicePackCategory = {
  id: "web" | "erp" | "integral";
  title: string;
  subtitle: string;
  tiers: ServicePackTier[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
