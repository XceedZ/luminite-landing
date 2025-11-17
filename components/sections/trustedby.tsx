"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import type { FC } from "react";

// Mendefinisikan tipe untuk objek logo
interface Logo {
  name: string;
  url: string;
}

// Mendefinisikan tipe untuk props komponen LogoItem
interface LogoItemProps {
  name: string;
  url: string;
  className?: string;
}

// Memberikan tipe pada array logos
const logos: Logo[] = [
  { name: "Google Cloud", url: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
  { name: "Notion", url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "Microsoft Azure", url: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-2.svg" },
  { name: "Slack", url: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
  { name: "Figma", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/120px-Figma-logo.svg.png" },
  { name: "AWS", url: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg" },
  { name: "Atlassian", url: "https://cdn.worldvectorlogo.com/logos/atlassian.svg" },
  { name: "Gitlab", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/2560px-GitLab_logo.svg.png" },
];

// Membagi logo menjadi dua baris
const firstRow: Logo[] = logos.slice(0, logos.length / 2);
const secondRow: Logo[] = logos.slice(logos.length / 2);

// Memberikan tipe pada props komponen LogoItem
const LogoItem: FC<LogoItemProps> = ({ url, name, className }) => (
  <div className={cn("flex-shrink-0 w-40 mx-6 logo-item", className)}>
    <img
      src={url}
      alt={name}
      className="w-full h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
    />
  </div>
);

// Memberikan tipe pada komponen utama
export const TrustedBy: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !backgroundRef.current) return;

    // Dynamic import GSAP untuk code splitting
    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([gsapModule, scrollTriggerModule]) => {
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.default;
      
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }

      const ctx = gsap.context(() => {
        // Animate title on scroll
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate logo items with stagger
        gsap.fromTo(
          ".logo-item",
          {
            opacity: 0,
            scale: 0.8,
            y: 30,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Parallax effect for background
        gsap.to(backgroundRef.current, {
          y: -100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        // Floating particles animation
        const particles = backgroundRef.current?.querySelectorAll(".particle");
        if (particles) {
          particles.forEach((particle, index) => {
            gsap.to(particle, {
              y: `+=${100 + index * 20}`,
              x: `+=${50 + index * 10}`,
              rotation: 360,
              duration: 10 + index * 2,
              repeat: -1,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          });
        }
      }, sectionRef);

      return () => ctx.revert();
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden px-4 py-32 md:px-8">
      {/* Animated Background */}
      <div ref={backgroundRef} className="absolute inset-0 -z-10 overflow-hidden">
        {/* Floating Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-white/20 rounded-full blur-sm"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2
          ref={titleRef}
          className="text-lg font-semibold text-muted-foreground tracking-wider uppercase mb-16"
        >
          Trusted by the world&apos;s best companies
        </h2>

        <ScrollVelocityContainer className="space-y-8">
          <ScrollVelocityRow baseVelocity={-2}>
            {[...firstRow, ...firstRow].map((logo, index) => (
              <LogoItem key={index} url={logo.url} name={logo.name} />
            ))}
          </ScrollVelocityRow>

          <ScrollVelocityRow baseVelocity={2}>
            {[...secondRow, ...secondRow].map((logo, index) => (
              <LogoItem key={index} url={logo.url} name={logo.name} />
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </section>
  );
};