import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { IntegrationSection } from "@/components/sections/integration";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";

/**
 * Luminite AI Landing Page
 * Main landing page showcasing Luminite AI features and capabilities
 * @author AlexanderA
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturesSection />
      <IntegrationSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
