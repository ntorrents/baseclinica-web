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
