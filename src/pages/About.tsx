import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FadeIn from "../components/FadeIn";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import {
  skillCategories,
  experiences,
  education,
  projects,
  type Project,
} from "../data/portfolio";

export default function About() {
  const { state } = useLocation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const scrollTo = (state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [state]);

  return (
    <>
      <section className="max-w-3xl mx-auto px-6 pt-16 sm:pt-20 pb-14 sm:pb-20">
        {/* 소개 */}
        <FadeIn delay={100}>
          <div id="intro" className="mb-28 scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-accent-500 mb-1">
              소개
            </h2>
            <div className="w-8 h-[2px] bg-accent-500 rounded-full mb-8" />
            <div className="space-y-5">
              <h3 className="text-lg sm:text-xl font-medium text-mono-100 leading-[1.7]">
                사용자의
                <span className="text-accent-400 font-semibold"> 편리함</span>
                과 안정적인
                <span className="text-accent-400 font-semibold">
                  {" "}
                  화면 구조
                </span>
                를 최우선으로 합니다.
              </h3>
              <p className="text-[15px] sm:text-base text-mono-400 leading-[1.9]">
                React를 기반으로 유지보수가 용이한 구조와 컴포넌트 설계를
                지향하며 개발해왔습니다. 단순히 기능을 구현하는 것에 그치지 않고,
                컴포넌트의 역할과 책임을 명확히 나누고 렌더링 구조를 개선해
                사용자가 편안함을 느끼는 UI를 만드는 데 집중합니다.
              </p>
              <p className="text-[15px] sm:text-base text-mono-400 leading-[1.9]">
                또한 백엔드 개발 경험을 바탕으로, 프론트엔드 개발 과정에서 필요한
                데이터 흐름을 이해하며 협업해왔습니다. API 요청·응답 구조를 고려해
                화면을 구현하고, 의미 있는 Git 커밋 메시지와 Notion 백로그 정리를
                통해 팀원들이 변경 사항을 한눈에 파악할 수 있는 환경을 만드는 것을
                중요하게 생각합니다.
              </p>
              <p className="text-[15px] sm:text-base text-mono-400 leading-[1.9]">
                최근에는 Claude와 OpenAI 기반 LLM을 프로젝트에 접목하며 AI 활용
                경험을 쌓고 있습니다. 새로운 기술을 맹목적으로 수용하기보다
                결과물의 정확성과 적합성을 직접 검증하며, 서비스 품질을 실질적으로
                높일 수 있는 도구로서 AI를 활용합니다.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 프로젝트 */}
        <FadeIn delay={200}>
          <div id="projects" className="mb-28 scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-accent-500 mb-1">
              프로젝트
            </h2>
            <div className="w-8 h-[2px] bg-accent-500 rounded-full mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 경력 */}
          <div id="experience" className="mb-28 scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-accent-500 mb-1">
              경력
            </h2>
            <div className="w-8 h-[2px] bg-accent-500 rounded-full mb-8" />
            <div className="space-y-0">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="relative pl-6 pb-8 last:pb-0 border-l border-mono-800"
                >
                  <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-accent-500 bg-mono-1000" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-base font-semibold">{exp.company}</h3>
                    <span className="text-xs text-accent-500 font-medium mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-mono-400 leading-[1.8]">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        {/* 기술 스택 */}
          <div id="skills" className="mb-28 scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-accent-500 mb-1">
              기술 스택
            </h2>
            <div className="w-8 h-[2px] bg-accent-500 rounded-full mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {skillCategories.map((cat) => (
                  <div
                    key={cat.category}
                    className="bg-mono-950 border border-mono-900 border-l-2 border-l-accent-500 rounded-xl p-5"
                  >
                    <h3 className="text-sm font-semibold text-mono-100 mb-4">{cat.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-[13px] text-mono-200 px-3 py-1.5 rounded-full bg-accent-500/[0.08] border border-accent-500/20 hover:border-accent-500/40 hover:text-accent-300 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>

        {/* 교육 */}
          <div id="education" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-accent-500 mb-1">
              교육
            </h2>
            <div className="w-8 h-[2px] bg-accent-500 rounded-full mb-8" />
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="bg-mono-950 border border-mono-900 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                >
                  <p className="text-sm text-mono-200">{edu.title}</p>
                  <span className="text-xs text-accent-500 font-medium whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
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
