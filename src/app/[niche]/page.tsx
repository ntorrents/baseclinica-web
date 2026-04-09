import { LandingPageShell } from "@/components/landing/LandingPageShell";
import { getLandingData, landingByNiche } from "@/data/landing";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ niche: string }>;
};

export function generateStaticParams() {
  return Object.keys(landingByNiche)
    .filter((key) => key !== "default")
    .map((niche) => ({ niche }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { niche } = await params;
  const data = getLandingData(niche);
  return {
    title: data.hero.eyebrow,
    description: data.hero.subtitle.slice(0, 155),
  };
}

export default async function NicheLandingPage({ params }: Props) {
  const { niche } = await params;
  const data = getLandingData(niche);
  return <LandingPageShell data={data} />;
}
