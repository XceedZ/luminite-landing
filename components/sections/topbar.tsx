"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-white">
              Luminite
            </span>
            <Badge variant="secondary" className="text-xs">
              AI
            </Badge>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Testimonials
            </a>
            <a
              href="#integration"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('integration')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Integration
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-gray-300"
              onClick={() => window.open('https://luminite-ai.vercel.app', '_blank')}
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-white text-black hover:bg-gray-100 border-0"
              onClick={() => window.open('https://luminite-ai.vercel.app', '_blank')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
