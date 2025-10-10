"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";
import { RippleButton } from "@/components/ui/ripple-button";
import { cn } from "@/lib/utils";
import type { FC } from "react";

// ==================================================================
// --- TEMA WARNA UNTUK PAKET UNGGULAN (FEATURED) ---
// Diperbarui menjadi gradien Ungu-Indigo untuk konsistensi
// ==================================================================
const featuredPlanTheme = {
  shineColor: "#A855F7", // Warna ungu untuk efek kilau
  badgeGradient: "from-purple-500 to-indigo-500",
  borderColor: "border-indigo-500", // Border solid yang cocok dengan gradien
  checkColor: "text-indigo-400",
  buttonClasses:
    "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-indigo-500/30 hover:opacity-90 transition-opacity",
};
// ==================================================================

// Tipe data untuk props
interface PricingCardProps {
  planName: string;
  price: string;
  priceDescription: string;
  description: string;
  features: string[];
  buttonText: string;
  isFeatured?: boolean;
}

const PricingCard: FC<PricingCardProps> = ({
  planName,
  price,
  priceDescription,
  description,
  features,
  buttonText,
  isFeatured = false,
}) => (
  <div className="relative pt-8">
    {isFeatured && (
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20">
      </div>
    )}

    <div
      className={cn(
        "relative h-full rounded-xl overflow-hidden bg-primary/5 p-8 shadow-lg backdrop-blur-sm",
        isFeatured ? featuredPlanTheme.borderColor : "border border-primary/20",
      )}
    >
      <ShineBorder
        className="absolute inset-0"
        shineColor={isFeatured ? featuredPlanTheme.shineColor : "#A0A0A0"}
      />

      <div className="flex h-full flex-col">
        <h3 className="text-2xl font-semibold text-white">{planName}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>

        <div className="mt-6">
          <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {price}
          </span>
          <span className="ml-1 text-sm text-muted-foreground">
            {priceDescription}
          </span>
        </div>

        <ul className="mt-8 flex-grow space-y-4 text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle2
                className={cn(
                  "h-5 w-5",
                  isFeatured ? featuredPlanTheme.checkColor : "text-indigo-400",
                )}
              />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <RippleButton
          className={cn(
            "group relative z-10 mt-10 w-full rounded-lg px-6 py-3 text-center font-medium transition-all duration-300 overflow-hidden",
            isFeatured
              ? featuredPlanTheme.buttonClasses
              : "border border-white/20 bg-transparent text-white hover:bg-white/10",
          )}
          rippleColor={isFeatured ? "#ffffff" : featuredPlanTheme.shineColor}
        >
          <div className="flex items-center justify-center">
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </RippleButton>
      </div>
    </div>
  </div>
);

// --- PricingSection ---
export const PricingSection: FC = () => {
  const plans: PricingCardProps[] = [
    { planName: "Free", price: "$0", priceDescription: "/ month", description: "For individuals & hobbyists getting started.", features: ["Up to 1,000 tasks", "Basic AI assistance", "Community support", "2 active projects"], buttonText: "Start for Free" },
    { planName: "Pro", price: "$15", priceDescription: "/ user / month", description: "For professionals and teams needing more power.", features: ["Unlimited tasks", "Advanced AI assistance", "Priority email support", "Unlimited projects", "Team collaboration"], buttonText: "Upgrade to Pro", isFeatured: true },
    { planName: "Enterprise", price: "Custom", priceDescription: "", description: "For large organizations with custom needs.", features: ["Everything in Pro, plus:", "Dedicated account manager", "Single Sign-On (SSO)", "Custom integrations", "Advanced security"], buttonText: "Contact Sales" },
  ];

  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden px-4 py-20 md:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Choose the right plan for you
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Start for free, then upgrade as you grow. All plans include our powerful AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.planName} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};
