
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/lib/data";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-600 bg-slate-200 last:mr-0 mr-1">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-between items-center">
          <span className="text-sm text-slate-500">{project.category}</span>
          <span className="text-sm font-bold text-green-100 bg-green-900 py-1 px-2 rounded-md">{project.metric}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
