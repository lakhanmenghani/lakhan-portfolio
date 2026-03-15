import { HeroSection } from "@/components/hero-section";
import { LogoMarquee } from "@/components/logo-marquee";
import { AboutSection } from "@/components/about-section";
import { ExperienceCards } from "@/components/experience-cards";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoMarquee />
      <AboutSection />
      <ExperienceCards />
      <ContactSection />
    </main>
  );
}
