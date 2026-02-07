import FadeIn from "../components/FadeIn";
import { skillCategories, experiences, education } from "../data/portfolio";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-16 sm:pt-20 pb-14 sm:pb-20">
      {/* Page header */}
      <FadeIn>
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            About<span className="text-accent-500">.</span>
          </h1>
          <div className="w-12 h-1 bg-accent-500 rounded-full" />
        </div>
      </FadeIn>

      {/* Skills by category */}
      <FadeIn delay={200}>
        <div className="mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-500 mb-6">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="bg-mono-950 border border-mono-900 rounded-xl p-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-500/10 transition-all duration-200"
              >
                <h3 className="text-sm font-semibold text-mono-200 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  {cat.category}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-mono-400 hover:text-accent-400 transition-colors cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Experience */}
        <div className="mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-500 mb-8">
            Experience
          </h2>
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative pl-6 pb-8 last:pb-0 border-l border-mono-800"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-accent-500 bg-mono-1000" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-base font-semibold">
                    {exp.role}
                    <span className="text-mono-500 font-normal ml-2">
                      @ {exp.company}
                    </span>
                  </h3>
                  <span className="text-xs text-accent-500 font-medium mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-mono-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      {/* Education */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-500 mb-8">
          Education
        </h2>
        <div className="space-y-0">
          {education.map((edu, i) => (
            <div
              key={i}
              className="relative pl-6 pb-8 last:pb-0 border-l border-mono-800"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-accent-500 bg-mono-1000" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-base font-semibold">
                  {edu.title}
                </h3>
                <span className="text-xs text-accent-500 font-medium mt-1 sm:mt-0">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
