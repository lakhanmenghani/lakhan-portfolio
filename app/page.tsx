import { HeroSection } from "@/components/hero-section";
import { LogoMarquee } from "@/components/logo-marquee";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export default function Home() {
  const selectedProjects = projects.slice(0, 2);

  return (
    <main className="flex-1">
      <HeroSection />
      <LogoMarquee />
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Selected Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
