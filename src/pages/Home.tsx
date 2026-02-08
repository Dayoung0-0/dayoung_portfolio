import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";
import { profile } from "../data/portfolio";

const navItems = [
  {
    label: "소개",
    desc: "저를 소개합니다",
    to: "/portfolio",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
  },
  {
    label: "프로젝트",
    desc: "작업물 보기",
    to: "/portfolio",
    hash: "projects",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    ),
  },
  {
    label: "경력",
    desc: "업무 경험",
    to: "/portfolio",
    hash: "experience",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    label: "기술 스택",
    desc: "사용 기술",
    to: "/portfolio",
    hash: "skills",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    ),
  },
];

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full mx-auto text-center">
        {/* Profile photo */}
        <FadeIn>
          <div className="flex justify-center mb-8">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-mono-950 border border-mono-900 overflow-hidden">
              <img
                src="/images/face.jpg"
                alt={profile.name}
                className="w-full h-full object-cover object-[center_35%]"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  target.parentElement!.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-600 to-accent-800">
                      <span class="text-4xl font-bold text-white/90">${profile.name.charAt(0)}</span>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={100}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-[1.3] mb-5">
            <span className="text-mono-400 text-lg sm:text-xl font-medium block mb-2 sm:mb-3">안녕하세요,</span>
            <span className="text-mono-100">프론트엔드 개발자</span>
            <br />
            <span className="text-accent-500">이다영</span>
            <span className="text-mono-100">입니다.</span>
          </h1>
        </FadeIn>

        {/* Accent line */}
        <FadeIn delay={250}>
          <div className="w-8 h-[2px] bg-accent-500 rounded-full mx-auto mb-5" />
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={300}>
          <p className="text-mono-400 text-[15px] sm:text-base leading-[1.8] tracking-[-0.01em] mb-6">
            React · Next.js · TypeScript를 사용해
            <br/>{" "}
            성능과 사용성을 고려한 화면과
            <br/>{" "}
            역할이 명확한 컴포넌트 구조를 만듭니다.
          </p>
        </FadeIn>

        {/* Funnel navigation */}
        <FadeIn delay={350}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-12">
            {navItems.map((item, i) => (
              <Link
                key={item.label}
                to={item.to}
                state={
                  "hash" in item && item.hash
                    ? { scrollTo: item.hash }
                    : undefined
                }
                className="group relative flex flex-col items-center gap-2 px-3 py-4 rounded-xl border border-mono-800 hover:border-accent-500/40 transition-all duration-200"
              >
                {/* Step number */}
                <span className="absolute top-2.5 left-3 text-[10px] font-medium text-mono-700 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <svg
                  className="w-[18px] h-[18px] text-mono-500 group-hover:text-accent-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>

                <span className="text-[13px] font-semibold text-mono-200 group-hover:text-accent-400 transition-colors">
                  {item.label}
                </span>

                <span className="text-[11px] text-mono-600">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </FadeIn>

        {/* Links */}
        <FadeIn delay={450}>
          <div className="flex flex-col items-center gap-2.5 text-[13px] text-mono-400">
            <div className="flex items-center gap-x-5">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <span className="w-px h-3 bg-mono-800" />
              <a href="/이다영_이력서.pdf" download className="inline-flex items-center gap-1.5 hover:text-accent-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                이력서 다운로드
              </a>
            </div>
            <div className="flex items-center gap-x-5">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-accent-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {profile.email}
              </a>
              <span className="w-px h-3 bg-mono-800" />
              <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-1.5 hover:text-accent-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {profile.phone}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
