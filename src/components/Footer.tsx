import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-mono-900 py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Copyright */}
        <div className="text-center text-xs text-mono-500">
          <span>
            &copy; {new Date().getFullYear()} {profile.name}
            <span className="text-accent-500 mx-1.5">/</span>
            All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
