import { TopBar } from "@/components/sections/topbar";
import { HeroSection } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trustedby";
import { ShowcaseSection } from "@/components/sections/showcase";
import { FeaturesSection } from "@/components/sections/features";
import { IntegrationSection } from "@/components/sections/integration";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PricingSection } from "@/components/sections/pricing";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

/**
 * Luminite AI Landing Page
 * Main landing page showcasing Luminite AI features and capabilities
 * @author AlexanderA
 */
export default function Home() {
  return (
    <>
      <TopBar />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <TrustedBy />
        <ShowcaseSection />
        <FeaturesSection />
        <IntegrationSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
