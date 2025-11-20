import type { Metadata } from "next";
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
  metadataBase: new URL("https://luminite-ai.vercel.app"),
  title: {
    default: "Luminite AI - All-in-One AI App",
    template: "%s | Luminite AI",
  },
  description:
    "Transform your productivity with Luminite AI. The ultimate all-in-one AI application that combines intelligent automation, knowledge management, and AI-powered tools in a single unified platform. Streamline workflows and work smarter with cutting-edge AI technology.",
  keywords: [
    "AI app",
    "all-in-one AI",
    "artificial intelligence",
    "productivity",
    "knowledge base",
    "workflow automation",
    "AI assistant",
    "AI tools",
    "team collaboration",
    "productivity tools",
    "AI-powered",
    "workflow management",
    "smart automation",
    "AI platform",
  ],
  authors: [{ name: "Luminite AI Team" }],
  creator: "Luminite AI",
  publisher: "Luminite AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luminite-ai.vercel.app",
    siteName: "Luminite AI",
    title: "Luminite AI - All-in-One AI App",
    description:
      "Transform your productivity with the ultimate all-in-one AI application. Streamline workflows, automate tasks, and work smarter with Luminite AI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luminite AI - All-in-One AI App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luminite AI - All-in-One AI App",
    description:
      "Transform your productivity with the ultimate all-in-one AI application.",
    images: ["/og-image.png"],
    creator: "@luminiteai",
  },
  alternates: {
    canonical: "https://luminite-ai.vercel.app",
  },
  category: "Productivity",
  classification: "Business Software",
  other: {
    "application-name": "Luminite AI",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Luminite AI",
    "mobile-web-app-capable": "yes",
    "theme-color": "#A855F7",
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
      </body>
    </html>
  );
}
