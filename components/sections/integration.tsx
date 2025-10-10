"use client";

import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import {
  Database,
  BrainCircuit,
  CalendarClock,
  MessageSquare,
  FileText,
  Workflow,
} from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

/**
 * Integration Section Component
 * Visualizes AI and database integrations using animated beams
 * @author AlexanderA
 */

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-background p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function IntegrationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full overflow-hidden px-4 py-20 md:px-8">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary animate-pulse">
            <Workflow className="mr-2 size-4" />
            Integrations
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
            Seamlessly connects
            <br />
            <span className="text-primary animate-pulse">all your tools</span>
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-300">
            Luminite AI integrates with your favorite tools and databases,
            creating a unified workspace powered by AI.
          </p>
        </div>

        {/* Animated Beams Visualization */}
        <div
          className="relative mx-auto flex h-[400px] w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg border border-primary/20 bg-primary/5 p-10 md:shadow-xl backdrop-blur-sm animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-500"
          ref={containerRef}
        >
          <div className="flex size-full flex-col items-stretch justify-between gap-10">
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div1Ref}>
                <Database className="size-6 text-purple-500" />
              </Circle>
              <Circle ref={div5Ref}>
                <CalendarClock className="size-6 text-blue-500" />
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div2Ref}>
                <MessageSquare className="size-6 text-green-500" />
              </Circle>
              <Circle ref={div4Ref} className="size-16">
                <BrainCircuit className="size-8 text-primary" />
              </Circle>
              <Circle ref={div6Ref}>
                <FileText className="size-6 text-orange-500" />
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div3Ref}>
                <Workflow className="size-6 text-pink-500" />
              </Circle>
              <Circle ref={div7Ref}>
                <Database className="size-6 text-cyan-500" />
              </Circle>
            </div>
          </div>

          {/* Animated Beams */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div4Ref}
            curvature={-75}
            endYOffset={-10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div4Ref}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div4Ref}
            curvature={75}
            endYOffset={10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div4Ref}
            curvature={-75}
            reverse
            endYOffset={-10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div4Ref}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div7Ref}
            toRef={div4Ref}
            curvature={75}
            reverse
            endYOffset={10}
          />
        </div>

        {/* Integration Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-700">
          {[
            {
              icon: Database,
              title: "Knowledge Base",
              description:
                "Connect your databases and knowledge repositories seamlessly.",
            },
            {
              icon: CalendarClock,
              title: "Calendar Sync",
              description:
                "Integrate with your calendar for intelligent scheduling.",
            },
            {
              icon: MessageSquare,
              title: "Team Collaboration",
              description:
                "Connect communication tools for better team coordination.",
            },
          ].map((item, idx) => (
            <MagicCard
              key={idx}
              className="group p-6 transition-all duration-300 hover:scale-105"
              gradientColor="purple"
            >
              <item.icon className="mb-4 size-10 text-primary transition-transform group-hover:scale-110 animate-pulse" />
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}

