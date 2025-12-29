import { HeroSection } from "@/components/hero-section";
import { LogoMarquee } from "@/components/logo-marquee";
import { QuickLink, QuickLinksGrid } from "@/components/quick-links";

const quickLinks: QuickLink[] = [
  {
    title: "Case Studies",
    description: "Deep dives into my most impactful projects.",
    href: "/work",
  },
  {
    title: "Journey",
    description: "My career path from engineer to product leader.",
    href: "/journey",
  },
  {
    title: "Notes",
    description: "Thoughts on product, AI, and leadership.",
    href: "/insights",
  },
  {
    title: "The Garage",
    description: "Experimental side projects and AI demos.",
    href: "/garage",
  },
];

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoMarquee />
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Explore</h2>
        <QuickLinksGrid links={quickLinks} />
      </div>
    </main>
  );
}
