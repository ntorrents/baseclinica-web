import { LandingPageShell } from "@/components/landing/LandingPageShell";
import { landingByNiche, NICHE_DEFAULT_KEY } from "@/data/landing";

export default function Home() {
  return <LandingPageShell data={landingByNiche[NICHE_DEFAULT_KEY]} />;
}
