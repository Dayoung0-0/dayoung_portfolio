import type { Project } from "../data/portfolio";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer bg-mono-1000 border border-mono-900 rounded-xl overflow-hidden hover:border-accent-400/40 hover:shadow-[0_0_24px_-6px_rgba(99,102,241,0.12)] transition-all duration-300"
    >
      <div className="aspect-[1920/945] bg-mono-950 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-semibold group-hover:text-accent-500 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-mono-500">{project.year}</span>
        </div>

        <p className="text-sm text-mono-400 leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex justify-end">
          <span className="text-xs text-mono-500 group-hover:text-accent-500 group-hover:translate-x-0.5 transition-all">
            자세히 보기 &rarr;
          </span>
        </div>
      </div>
    </article>
  );
}
