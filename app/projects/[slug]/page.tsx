import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        Back to Projects
      </Link>

      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            {project.summary}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <aside className="md:col-span-1 space-y-8">
            <div className="text-sm">
              <h3 className="font-semibold mb-2 text-zinc-800 dark:text-zinc-200">Role</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Lead Product Manager</p>
            </div>
            <div className="text-sm">
              <h3 className="font-semibold mb-2 text-zinc-800 dark:text-zinc-200">Timeline</h3>
              <p className="text-zinc-600 dark:text-zinc-400">2023 - Present</p>
            </div>
            <div className="text-sm">
              <h3 className="font-semibold mb-2 text-zinc-800 dark:text-zinc-200">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <div key={tag} className="px-3 py-1 text-xs rounded-full bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="md:col-span-3">
            <div className="mb-8">
              <div className="inline-block text-base font-medium rounded-full px-4 py-2 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                {project.metric}
              </div>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-800/50 h-[400px] rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-400">
              Diagram Placeholder
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
