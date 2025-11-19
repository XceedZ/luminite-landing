import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luminite AI - All-in-One AI-Powered Task Management",
  description:
    "Transform your productivity with Luminite AI. Intelligent task management seamlessly integrated with AI and knowledge databases. Streamline workflows and work smarter.",
  keywords: [
    "task management",
    "AI",
    "productivity",
    "knowledge base",
    "workflow automation",
    "project management",
    "artificial intelligence",
  ],
  authors: [{ name: "Luminite AI Team" }],
  openGraph: {
    title: "Luminite AI - All-in-One AI-Powered Task Management",
    description:
      "Transform your productivity with intelligent task management powered by AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
