"use client";

import { ArrowRight } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { LightRays } from "@/components/ui/light-rays";
import { cn } from "@/lib/utils";
import { Particles } from "@/components/ui/particles";

/**
 * Hero Section Component
 * Landing page hero with animated text and modern background effects
 * @author AlexanderA
 */
export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8">
      {/* Light Rays Effect */}
      <LightRays className="absolute inset-0" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Background Particles */}
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Content Container */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8">
        {/* Center Content */}
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Animated Badge */}
          <div
            className={cn(
              "group rounded-full border border-primary/20 bg-primary/10 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-primary/20 dark:border-primary/30 dark:bg-primary/10 dark:hover:bg-primary/20"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-primary hover:duration-300">
              <span>✨ Introducing Luminite AI</span>
              <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Your All-in-One
            <br />
            <span className="text-primary animate-pulse">AI-Powered</span>
            <br />
            Task Manager
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-300">
            Streamline your workflow with intelligent task management,
            seamlessly integrated with AI and knowledge databases. Work smarter,
            not harder.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-500">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Get Started Free
              </span>
            </ShimmerButton>

            <button className="group inline-flex h-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 px-8 text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 hover:scale-105">
              Watch Demo
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-700">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="size-8 rounded-full border-2 border-background bg-primary animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <span>10,000+ users</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-500 animate-pulse">★★★★★</span>
              <span>4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

