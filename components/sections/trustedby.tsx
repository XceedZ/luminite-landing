"use client";

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
  className?: string; // className bersifat opsional
}

// Memberikan tipe pada array logos
const logos: Logo[] = [
  { name: "Google Cloud", url: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
  { name: "Notion", url: "https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" },
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
  <div className={cn("flex-shrink-0 w-40 mx-6", className)}>
    <img
      src={url}
      alt={name}
      className="w-full h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
    />
  </div>
);

// Memberikan tipe pada komponen utama
export const TrustedBy: FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold text-muted-foreground tracking-wider uppercase mb-12">
          Trusted by the world&apos;s best companies
        </h2>

        <ScrollVelocityContainer className="space-y-6">
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