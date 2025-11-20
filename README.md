# Luminite AI Landing Page

A modern, high-performance landing page for Luminite AI - the ultimate all-in-one AI application. Built with Next.js 15, React 19, and optimized with GSAP animations for smooth user experience.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with glassmorphism effects and smooth animations
- **Performance Optimized**: GPU-accelerated GSAP animations with optimized ScrollTrigger
- **Interactive Components**: 
  - Animated hero section with AI input showcase
  - Feature showcase with Bento Grid layout
  - Testimonials with marquee animation
  - Pricing section with interactive cards
  - FAQ accordion
  - Integration showcase with animated beams
- **Smooth Animations**: 
  - Floating orbs with color transitions (white ↔ purple)
  - Scroll-triggered animations
  - Parallax effects
  - Particle effects
- **Authentication Page**: Beautiful sign-in/sign-up page with OAuth support
- **SEO Optimized**: Comprehensive metadata and OpenGraph tags

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP 3.13.0 with ScrollTrigger
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono (optimized with next/font)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd luminite-landing
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
luminite-landing/
├── app/
│   ├── auth/              # Authentication page
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main landing page
├── components/
│   ├── sections/          # Page sections
│   │   ├── hero.tsx       # Hero section with AI input
│   │   ├── features.tsx   # Features showcase
│   │   ├── pricing.tsx    # Pricing section
│   │   ├── testimonials.tsx
│   │   ├── qna.tsx        # FAQ section
│   │   ├── integration.tsx
│   │   ├── cta.tsx        # Call-to-action
│   │   ├── trustedby.tsx  # Trusted by section
│   │   ├── topbar.tsx     # Navigation bar
│   │   └── footer.tsx
│   └── ui/                # Reusable UI components
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## 🎨 Key Sections

### Hero Section
- Animated badge with shiny text effect
- Large headline with gradient text
- CTA buttons
- Interactive AI input showcase

### Features Section
- Bento Grid layout showcasing key features
- Interactive cards with hover effects
- Background animations (Globe, Terminal, Task List)

### Pricing Section
- Three-tier pricing cards
- Featured plan highlighting
- Shine border effects
- Ripple button interactions

### Testimonials
- Infinite marquee animation
- Customer testimonials with ratings
- Smooth scroll animations

### Integration Showcase
- Animated beam connections
- Interactive circles with hover effects
- Integration cards

## ⚡ Performance Optimizations

- **GSAP Optimizations**:
  - GPU acceleration with `force3D: true`
  - Optimized ScrollTrigger settings
  - Smooth parallax with `scrub: true`
  - Event listener cleanup

- **CSS Optimizations**:
  - CSS animations for color transitions
  - Will-change properties for animated elements
  - Efficient keyframe animations

- **Next.js Optimizations**:
  - Dynamic imports for GSAP
  - Font optimization with next/font
  - Image optimization

## 🎯 Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Environment Variables

No environment variables required for basic setup.

## 📝 Customization

### Colors
Edit color scheme in `app/globals.css` under `:root` and `.dark` selectors.

### Animations
- Float animations: `app/globals.css` - `@keyframes float-*`
- Orb color animations: `app/globals.css` - `@keyframes orb-color`
- GSAP animations: Individual section files

### Content
- Update section content in `components/sections/*.tsx`
- Modify metadata in `app/layout.tsx`

## 🔧 Development

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Add GSAP animations with optimizations (see existing sections)

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow existing component patterns
- Maintain responsive design (mobile-first)
- Use CSS variables for theming

## 📄 License

This project is private and proprietary.

## 👥 Team

Luminite AI Team

---

Built with ❤️ using Next.js and modern web technologies.
