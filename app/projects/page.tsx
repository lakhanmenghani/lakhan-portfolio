"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

const filters = ["All", "AI/ML", "SaaS"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Engineering Business Outcomes</h1>
      </header>

      <div className="flex justify-center space-x-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "bg-slate-900 text-slate-50"
                : "bg-slate-200 text-slate-900 hover:bg-slate-300"
            }`}>
            {filter}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
