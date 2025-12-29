import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Case Studies</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Deep dives into Enterprise SaaS, RCM Automation, and Agentic AI.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
