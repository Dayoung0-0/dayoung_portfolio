export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techs: string[];
  github?: string;
  site?: string;
  year: string;
  period: string;
  achievements: string[];
  thumbnail: string;
  images: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  title: string;
  period: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const profile = {
  name: "이다영(Lee Dayoung)",
  role: "프론트엔드 개발자",
  tagline: "안녕하세요, 속도와 사용성을 함께 고민하는 프론트엔드 개발자 이다영 입니다.",
  email: "ldy1552@naver.com",
  github: "https://github.com/dayoung0-0",
  phone: "010-2028-7082",
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
  },
  {
    category: "Backend (Experience)",
    items: ["Java", "Spring", "Node.js", "Python (FastAPI)"],
  },
  {
    category: "Infrastructure",
    items: ["MySQL", "MariaDB", "Redis"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Notion", "Slack"],
  },
];

export const projects: Project[] = [
  {
    id: "agileBang",
    title: "애자일방(AgileBang)",
    description:
      "대학생을 위한 맞춤형 자취방 AI 추천 서비스",
    longDescription:
      `대학생을 위한 맞춤형 자취방 AI 추천 서비스로,
      AI Multi-Agent 교육 과정에서 팀 프로젝트로 진행했으며 프론트엔드 개발을 담당했습니다.
      `,
    techs: ["React", "TypeScript", "Next.js", "FastAPI", "PostgreSQL", "OpenAI", "Claude"],
    github: "https://github.com/EDDI-RobotAcademy/zero-to-agile-frontend",
    year: "2026",
    period: "2025.12 — 2026.01 (2개월)",
    achievements: [
      "사용자 UI/UX를 고려한 화면 설계 + 유지보수가 쉬운 컴포넌트로 분리",
      "AI 추천 비동기 작업의 상태를 2초 간격 Polling으로 실시간 추적하고, 30초 타임아웃을 적용하여 무한 대기 없는 안정적인 UX를 구현",
      "Next.js App Router의 Layout 중첩 구조를 활용해 임차인/임대인 역할별 독립 라우팅을 설계",
      "매물별 AI 챗봇 위젯을 구현하고 localStorage 기반으로 대화 이력을 매물 ID별로 분리 저장하여, 페이지 이탈 후 재방문 시에도 이전 대화 컨텍스트를 유지",
    ],
    thumbnail: "/images/agileBang/agile_1.png",
    images: [
      "/images/agileBang/agile_1.png",
      "/images/agileBang/agile_2.png",
      "/images/agileBang/agile_3.png",
    ],
  },
  {
    id: "algoCare",
    title: "영양알고케어",
    description:
      "어르신들을 위한 영양∙식생활 평가 시스템",
    longDescription:
      `어르신을 위한 영양·식생활 평가 시스템으로,
      React와 Node.js를 사용해 프론트엔드와 백엔드를 함께 구현한 프로젝트입니다.
      개발기간 이후에도 서비스 개선을 위해 유지보수와 기능 추가 작업을 지속적으로 진행했습니다.
      `,
    techs: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
    site: "https://www.youngyangalgocare.com",
    year: "2025",
    period: "2025.08 — 2025.12 (5개월)",
    achievements: [
      "공통 UI가 분리되지 않은 구조에서 컴포넌트 분리 작업을 통해 상태 변경 시 발생하던 불필요한 렌더링 개선",
      "useEffect 의존성 배열 설정 오류로 발생하던 의도치 않은 반복 렌더링 이슈 수정",
      "React와 Node.js를 사용해 영양 평가 기능의 프론트엔드·백엔드 구현",
      "서비스 유지보수 및 기능 개선 작업 진행"
    ],
    thumbnail: "/images/algo/algo_1.png",
    images: [
      "/images/algo/algo_1.png",
      "/images/algo/algo_2.png",
      "/images/algo/algo_3.png",
    ],
  },
  {
    id: "parkingFriends",
    title: "파킹프렌즈 관리자 웹",
    description:
      "주차장 앱 파킹프렌즈의 관리자 웹 페이지",
    longDescription:
      `
      주차장 앱 파킹프렌즈의 관리자 웹 페이지로,
      운영자가 주차장과 장비를 효율적으로 관리할 수 있도록 백오피스 프론트엔드 개발을 담당했습니다.
      `,
    techs: ["React", "TypeScript", "Next.js", "Zustand", "daisyUI", "Axios"],
    year: "2024",
    period: "2024.11 — 2025.02 (4개월)",
    achievements: [
      "AIoT 센서, CCTV, 차단기, 키오스크 등 장비 관리 UI를 탭 기반 공통 패턴으로 설계 및 구현",
      "Zustand 기반 상태 관리와 Repository 패턴을 적용해 API 호출 로직을 모듈화하고 화면 로직과 분리",
      "엑셀 템플릿 다운로드, 일괄 등록·폐기, 목록 다운로드 등 대량 처리 기능 UI 구현",
    ],
    thumbnail: "/images/park/park_1.png",
    images: [
      "/images/park/park_1.png",
      "/images/park/park_2.png",
      "/images/park/park_3.png",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "주식회사 휴스케일",
    period: "2023 — 2025",
    description:
      "React와 Next.js, TypeScript를 활용한 외부 웹 서비스 개발을 담당했습니다. 신규 기능 개발뿐 아니라 서비스 운영 단계에서의 유지보수와 기능 개선 작업을 지속적으로 진행했습니다.",
  },
  {
    role: "Fullstack Developer",
    company: "주식회사 한그루",
    period: "2022 — 2023",
    description:
      "어린이집 ERP 서비스 개발에 참여했습니다. PHP를 사용해 백엔드 로직과 API를 구현했으며, HTML/CSS 기반 화면 구성도 함께 경험했습니다.",
  },
];

export const education: Education[] = [
  {
    title: "재직자_AI Multi-Agent 서비스 실전프로젝트 과정 수료(우수상)",
    period: "2024. 11 — 2025. 01",
  },
  {
    title: "(디지털컨버전스)자바기반 풀스택 웹개발자(프론트엔드&백엔드)A 과정 수료",
    period: "2022. 02 — 2022. 08",
  },
  {
    title: "두원공과대학교 경기산업기술교육센터 웹퍼블리셔 과정 수료",
    period: "2020. 09 — 2020. 12",
  },
];
