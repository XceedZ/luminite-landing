import {
  BrainCircuit,
  CheckSquare,
  Database,
  LineChart,
  Sparkles,
  Zap,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

/**
 * Features Section Component
 * Showcases main features using Bento Grid layout
 * @author AlexanderA
 */

const features = [
  {
    Icon: CheckSquare,
    name: "Smart Task Management",
    description:
      "Organize, prioritize, and track your tasks with intelligent automation and intuitive workflows.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-muted/50" />,
  },
  {
    Icon: BrainCircuit,
    name: "AI-Powered Intelligence",
    description:
      "Leverage advanced AI to automate routine tasks, suggest priorities, and provide intelligent insights.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute inset-0 bg-muted/50" />,
  },
  {
    Icon: Database,
    name: "Knowledge Database",
    description:
      "Build and access your organization's knowledge base seamlessly integrated with your workflows.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute inset-0 bg-muted/50" />,
  },
  {
    Icon: LineChart,
    name: "Analytics & Insights",
    description:
      "Gain actionable insights with comprehensive analytics and performance tracking.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-muted/50" />,
  },
  {
    Icon: Zap,
    name: "Lightning Fast",
    description:
      "Built for speed and efficiency. Experience instant responses and seamless performance.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-muted/50" />,
  },
  {
    Icon: Sparkles,
    name: "Intelligent Automation",
    description:
      "Automate repetitive tasks and workflows with smart triggers and AI-driven actions.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute inset-0 bg-muted/50" />,
  },
];

export function FeaturesSection() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-20 md:px-8">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary animate-pulse">
            <Sparkles className="mr-2 size-4" />
            Features
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
            Everything you need to
            <br />
            <span className="text-primary animate-pulse">boost productivity</span>
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-300">
            Luminite AI combines powerful task management with cutting-edge AI
            technology to help you work smarter and achieve more.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-500">
          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}

