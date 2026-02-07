import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";
import { profile } from "../data/portfolio";
import profilePhoto from "../assets/face.jpg";

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-16 sm:pt-20 pb-14 sm:pb-20">
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        {/* Profile photo */}
        <FadeIn>
          <div className="shrink-0">
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-mono-950 border border-mono-900 overflow-hidden shadow-lg">
              <img
                src={profilePhoto}
                alt={profile.name}
                className="w-full h-full object-cover object-[center_35%]"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  target.parentElement!.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-600 to-accent-800">
                      <span class="text-5xl font-bold text-white/90">${profile.name.charAt(0)}</span>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </FadeIn>

        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <FadeIn delay={100}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-500 mb-3">
              {profile.role}
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              <span className="text-accent-500">{profile.name}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="w-10 h-0.5 bg-accent-500 rounded-full mb-4 mx-auto md:mx-0" />
          </FadeIn>

          {/* Contact Info - 가로 배치 */}
          <FadeIn delay={250}>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-sm text-mono-400 mb-5">
              <a
                href="tel:010-2028-7082"
                className="inline-flex items-center gap-1.5 hover:text-accent-500 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                010-2028-7082
              </a>
              <span className="text-mono-700 hidden sm:inline">|</span>
              <a
                href="mailto:ldy1552@naver.com"
                className="inline-flex items-center gap-1.5 hover:text-accent-500 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ldy1552@naver.com
              </a>
              <span className="text-mono-700 hidden sm:inline">|</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent-500 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={280}>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium bg-accent-600 text-white px-5 py-2.5 rounded-lg hover:bg-accent-500 transition-colors"
              >
                프로젝트 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium border border-mono-800 text-mono-300 px-5 py-2.5 rounded-lg hover:border-accent-500 hover:text-accent-500 transition-colors"
              >
                About Me
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Introduce */}
      <FadeIn delay={400}>
        <div className="mt-12 pt-8 border-t border-mono-900">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-500 mb-3 text-center md:text-left">
            Introduce
          </p>
          <div className="space-y-4 text-center md:text-left">
            {/* 메인 소개 문구 */}
            <h2 className="text-lg sm:text-xl font-medium text-mono-100 leading-[1.7]">
              사용자의 
              <span className="text-accent-400 font-semibold"> 편리함</span>
              과 안정적인 
              <span className="text-accent-400 font-semibold"> 화면 구조</span>를
              최우선으로 합니다.
            </h2>

            {/* 상세 소개 */}
            <p className="text-[15px] text-mono-400 leading-[1.8] max-w-4xl mx-auto md:mx-0">
              React와 Next.js를 기반으로 유지보수가 쉬운 구조와 컴포넌트 설계를 지향하며 개발해왔습니다.
              단순히 기능을 구현하는 것에 그치지 않고, 컴포넌트의 역할과 책임을 명확히 나누고
              렌더링 구조를 개선해 사용자가 편안함을 느끼는 UI를 만드는 데 집중합니다.
            </p>
            <p className="text-[15px] text-mono-400 leading-[1.8] max-w-4xl mx-auto md:mx-0">
              또한 백엔드 개발 경험을 바탕으로,
              프론트엔드 개발 과정에서 필요한 데이터 흐름을 이해하며 협업해왔습니다.
              API 요청·응답 구조를 고려해 화면을 구현하고,
              의미 있는 Git 커밋 메시지와 Notion 백로그 정리를 통해
              팀원들이 변경 사항을 한눈에 파악할 수 있는 환경을 만드는 것을 중요하게 생각합니다.
            </p>
            <p className="text-[15px] text-mono-400 leading-[1.8] max-w-4xl mx-auto md:mx-0">
              최근에는 Claude와 OpenAI 기반 LLM을 프로젝트에 접목하며 AI 활용 경험을 쌓고 있습니다.
              새로운 기술을 맹목적으로 수용하기보다 결과물의 정확성과 적합성을 직접 검증하며, 
              서비스 품질을 실질적으로 높일 수 있는 도구로서 AI를 활용합니다.
            </p>
            <p className="text-[15px] text-mono-400 leading-[1.8] max-w-4xl mx-auto md:mx-0">
              언제나 “지금 이 기술이 최선인가?”를 스스로에게 질문하며,  
              사용자와 동료 모두에게 더 나은 경험을 제공하는 개발자가 되기 위해 나아가고 있습니다.
            </p>
            
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
