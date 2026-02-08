import { useState, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const sections = [
  { id: "intro", label: "소개" },
  { id: "projects", label: "프로젝트" },
  { id: "experience", label: "경력" },
  { id: "skills", label: "기술 스택" },
];

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const isAbout = location.pathname === "/portfolio";

  useEffect(() => {
    if (!isAbout) {
      setActiveSection(null);
      return;
    }

    const sectionIds = sections.map((s) => s.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-20% 0px -70% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isAbout]);

  const scrollToSection = useCallback(
    (id: string) => {
      setIsOpen(false);
      if (isAbout) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/portfolio", { state: { scrollTo: id } });
      }
    },
    [isAbout, navigate],
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-mono-1000/80 backdrop-blur-md border-b border-mono-900">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-base font-bold tracking-wide hover:text-accent-500 transition-colors"
        >
          DY<span className="text-accent-500">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              to="/"
              className={`text-base transition-colors relative py-1 ${
                location.pathname === "/"
                  ? "text-mono-100 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent-500 after:rounded-full"
                  : "text-mono-400 hover:text-mono-0"
              }`}
            >
              홈
            </Link>
          </li>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`text-base transition-colors relative py-1 ${
                  isAbout && activeSection === id
                    ? "text-mono-100 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent-500 after:rounded-full"
                    : "text-mono-400 hover:text-mono-0"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-mono-0 transition-transform ${
              isOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-mono-0 transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-mono-0 transition-transform ${
              isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-b border-mono-900 bg-mono-1000/95 backdrop-blur-md ${
          isOpen ? "max-h-64" : "max-h-0 border-b-0"
        }`}
      >
        <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`text-base block transition-colors ${
                location.pathname === "/"
                  ? "text-accent-500"
                  : "text-mono-400 hover:text-mono-0"
              }`}
            >
              홈
            </Link>
          </li>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`text-base block transition-colors ${
                  isAbout && activeSection === id
                    ? "text-accent-500"
                    : "text-mono-400 hover:text-mono-0"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
