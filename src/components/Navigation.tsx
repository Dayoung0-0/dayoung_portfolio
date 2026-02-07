import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
];

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-mono-1000/80 backdrop-blur-md border-b border-mono-900">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-bold tracking-wide hover:text-accent-500 transition-colors"
        >
          DY<span className="text-accent-500">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`text-sm transition-colors relative py-1 ${
                  location.pathname === to
                    ? "text-mono-100 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent-500 after:rounded-full"
                    : "text-mono-400 hover:text-mono-0"
                }`}
              >
                {label}
              </Link>
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
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setIsOpen(false)}
                className={`text-sm block transition-colors ${
                  location.pathname === to
                    ? "text-accent-500"
                    : "text-mono-400 hover:text-mono-0"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
