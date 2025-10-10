"use client";

import React from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import { Workflow } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

// URL Logo Aplikasi
const logos = {
  openai: "https://logo.clearbit.com/openai.com",
  notion: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  slack: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
  figma: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws.png",
  github: "https://upload.wikimedia.org/wikipedia/commons/3/35/GitLab_icon.svg",
};

// Komponen Circle tidak perlu diubah
const Circle = React.forwardRef<
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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const div1Ref = React.useRef<HTMLDivElement>(null);
  const div2Ref = React.useRef<HTMLDivElement>(null);
  const div3Ref = React.useRef<HTMLDivElement>(null);
  const div4Ref = React.useRef<HTMLDivElement>(null);
  const div5Ref = React.useRef<HTMLDivElement>(null);
  const div6Ref = React.useRef<HTMLDivElement>(null);
  const div7Ref = React.useRef<HTMLDivElement>(null);

  const integrationCards = [
    { iconUrl: logos.notion, title: "Knowledge Base", description: "Connect your Notion pages and databases seamlessly." },
    { iconUrl: logos.slack, title: "Team Collaboration", description: "Integrate with Slack for better team coordination." },
    { iconUrl: logos.github, title: "Developer Workflow", description: "Connect with GitHub to sync issues and project status." },
  ];

  return (
    <section id="integration" className="relative w-full overflow-hidden px-4 py-20 md:px-8">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Workflow className="mr-2 size-4" />
            Integrations
          </div>
          
          {/* KUNCI PERBAIKAN: Mengembalikan ke h2 dengan animate-pulse */}
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
          className="relative mx-auto flex h-[400px] w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg border border-primary/20 bg-primary/5 p-10 md:shadow-xl backdrop-blur-sm"
          ref={containerRef}
        >
          <div className="flex size-full flex-col items-stretch justify-between gap-10">
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div1Ref}><img src={logos.notion} alt="Notion" className="size-full" /></Circle>
              <Circle ref={div5Ref}><img src={logos.figma} alt="Figma" className="size-full" /></Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div2Ref}><img src={logos.slack} alt="Slack" className="size-full" /></Circle>
              <Circle ref={div4Ref} className="size-16"><img src={logos.openai} alt="OpenAI" className="size-full filter invert" /></Circle>
              <Circle ref={div6Ref}><img src={logos.github} alt="GitHub" className="size-full" /></Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div3Ref}><img src={logos.notion} alt="Notion" className="size-full" /></Circle>
              <Circle ref={div7Ref}><img src={logos.slack} alt="Slack" className="size-full" /></Circle>
            </div>
          </div>

          {/* Animated Beams */}
          <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} />
          <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
          <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10} />
          <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-75} reverse endYOffset={-10} />
          <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />
          <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} curvature={75} reverse endYOffset={10} />
        </div>

        {/* Integration Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrationCards.map((item, idx) => (
            <MagicCard key={idx} className="group p-6 transition-all duration-300 hover:scale-105">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 mb-4 transition-transform group-hover:scale-110">
                <img src={item.iconUrl} alt={`${item.title} logo`} className="size-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}

