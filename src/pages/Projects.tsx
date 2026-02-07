import { useState } from "react";
import FadeIn from "../components/FadeIn";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects, type Project } from "../data/portfolio";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-16 sm:pt-20 pb-14 sm:pb-20">
        <FadeIn>
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              Projects<span className="text-accent-500">.</span>
            </h1>
            <div className="w-12 h-1 bg-accent-500 rounded-full mb-4" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 100}>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </FadeIn>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
