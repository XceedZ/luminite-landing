"use client";

import dynamic from "next/dynamic";

const TopBar = dynamic(() => import("@/components/sections/topbar").then((mod) => mod.TopBar), {
  ssr: false,
});

const HeroSection = dynamic(() => import("@/components/sections/hero").then((mod) => mod.HeroSection), {
  ssr: false,
});

const TrustedBy = dynamic(() => import("@/components/sections/trustedby").then((mod) => mod.TrustedBy), {
  ssr: false,
});

const FeaturesSection = dynamic(
  () => import("@/components/sections/features").then((mod) => mod.FeaturesSection),
  {
    ssr: false,
  }
);

const QNASection = dynamic(() => import("@/components/sections/qna").then((mod) => mod.QNASection), {
  ssr: false,
});

const TestimonialsSection = dynamic(
  () => import("@/components/sections/testimonials").then((mod) => mod.TestimonialsSection),
  {
    ssr: false,
  }
);

const PricingSection = dynamic(
  () => import("@/components/sections/pricing").then((mod) => mod.PricingSection),
  {
    ssr: false,
  }
);

const CTASection = dynamic(() => import("@/components/sections/cta").then((mod) => mod.CTASection), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/sections/footer").then((mod) => mod.Footer), {
  ssr: false,
});

/**
 * Luminite AI Landing Page
 * Main landing page showcasing Luminite AI features and capabilities
 * @author AlexanderA
 */
export default function Home() {
  return (
    <>
      {/* Global Grid Background */}
      <div 
        className="fixed inset-0 -z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Global Glowing Orbs - menyatu dengan semua section */}
      <div className="fixed inset-0 -z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float-1" />
        <div className="absolute top-[30%] right-[20%] w-80 h-80 bg-primary/6 rounded-full blur-3xl animate-float-2" />
        <div className="absolute bottom-[20%] left-[25%] w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-3" />
        <div className="absolute bottom-[40%] right-[15%] w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float-4" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/6 rounded-full blur-3xl animate-float-5" />
        <div className="absolute top-[15%] right-[40%] w-80 h-80 bg-primary/7 rounded-full blur-3xl animate-float-6" />
      </div>
      
      <TopBar />
      <main className="flex min-h-screen flex-col relative z-10">
        <HeroSection />
        <TrustedBy />
        <FeaturesSection />
        <QNASection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
