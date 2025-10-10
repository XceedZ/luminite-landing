"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Particles } from "@/components/ui/particles";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

// Komponen placeholder untuk UI Inbox
const InboxUIPlaceholder = () => (
  <div className="relative mt-16 flex w-full max-w-5xl mx-auto justify-center items-center">
    
    {/* --- KUMPULAN DIV UNTUK EFEK GLOW HALUS --- */}
    {/* Glow utama di tengah atas */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-blue-500/40 blur-3xl rounded-full pointer-events-none" />
    {/* Glow di sisi kiri */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-full bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
    {/* Glow di sisi kanan */}
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
    {/* ------------------------------------------- */}

    {/* Kontainer untuk gambar dan BorderBeam */}
    <div className="relative w-full rounded-xl shadow-2xl overflow-hidden border border-white/10 bg-black">
      <img
        src="/app-hero.png"
        alt="Application Preview"
        className="w-full h-auto object-cover"
      />
      {/* Efek gradien gelap di bagian bawah gambar */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      
      {/* BorderBeam tetap ada */}
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  </div>
);


export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Kontainer Konten Utama */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-6 text-center">
        {/* Badge dengan AnimatedShinyText */}
        <div
          className={cn(
            // KUNCI PERBAIKAN: Mengubah text-base menjadi text-sm dan menambahkan font-medium
            "group rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-all ease-in hover:cursor-pointer hover:bg-primary/20"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center transition ease-out group-hover:text-primary-foreground group-hover:duration-300">
            <span>✨ Introducing Luminite AI</span>
            <ArrowRight className="ml-1.5 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>

        {/* Headline Utama */}
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Your All-in-One
          <br />
          <span className="text-primary animate-pulse">AI-Powered</span>
          <br />
          Task Manager
        </h1>

        {/* Deskripsi */}
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-300">
          Streamline your workflow with intelligent task management, seamlessly
          integrated with AI and knowledge databases. Work smarter, not harder.
        </p>

        {/* Tombol CTA */}
        <div className="flex animate-in fade-in-from-bottom-4 duration-700 delay-500">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base flex items-center gap-2">
              Get Started Free
              <ArrowRight className="ml-1 size-4" />
            </span>
          </ShimmerButton>
        </div>
      </div>

      {/* Showcase Komponen UI */}
      <div className="relative z-10 w-full animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-700">
        <InboxUIPlaceholder />
      </div>
    </section>
  );
}
