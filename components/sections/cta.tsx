import { Sparkles } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"

/**
 * CTA Section Component
 * Final call-to-action section with shimmer button
 * @author AlexanderA
 */
export function CTASection() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-20 md:px-8">
      <div className=" relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        {/* Background Pattern */}
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />

        {/* CTA Content - No Card Wrapper */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Sparkles className="mr-2 size-4" />
            Start Your Journey
          </div>

          {/* Headline */}
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
            Ready to transform
            <br />
            <span className="text-primary animate-pulse">your productivity?</span>
          </h2>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-300">
            Join thousands of teams already using Luminite AI to streamline
            their workflows and boost productivity with intelligent task
            management.
          </p>

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-500">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                 Get Started - It&apos;s Free
              </span>
            </ShimmerButton>

          </div>

          {/* Additional Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-700">
            <div className="flex items-center gap-2">
              <svg
                className="size-5 text-green-500 animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="size-5 text-green-500 animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ animationDelay: "0.1s" }}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="size-5 text-green-500 animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ animationDelay: "0.2s" }}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

