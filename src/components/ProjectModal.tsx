import { useEffect, useRef, useState } from "react";
import type { Project } from "../data/portfolio";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });

  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 1));
  const zoomReset = () => setZoom(1);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = imageBoxRef.current;
    if (!el || zoom <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      scrollLeft: el.scrollLeft,
      scrollTop: el.scrollTop,
    };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const el = imageBoxRef.current;
    if (!el || zoom <= 1) return;
    const touch = e.touches[0];
    setIsDragging(true);
    dragStart.current = {
      x: touch.clientX,
      y: touch.clientY,
      scrollLeft: el.scrollLeft,
      scrollTop: el.scrollTop,
    };
  };

  useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e: MouseEvent) => {
      const el = imageBoxRef.current;
      if (!el) return;
      e.preventDefault();
      el.scrollLeft = dragStart.current.scrollLeft - (e.clientX - dragStart.current.x);
      el.scrollTop = dragStart.current.scrollTop - (e.clientY - dragStart.current.y);
    };
    const handleTouchMove = (e: TouchEvent) => {
      const el = imageBoxRef.current;
      if (!el) return;
      e.preventDefault();
      const touch = e.touches[0];
      el.scrollLeft = dragStart.current.scrollLeft - (touch.clientX - dragStart.current.x);
      el.scrollTop = dragStart.current.scrollTop - (touch.clientY - dragStart.current.y);
    };
    const handleEnd = () => setIsDragging(false);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleEnd);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  useEffect(() => {
    setZoom(1);
    const el = imageBoxRef.current;
    if (el) {
      el.scrollTop = 0;
      el.scrollLeft = 0;
      const check = () => setIsScrollable(el.scrollHeight > el.clientHeight + 4);
      check();
      const img = el.querySelector("img");
      img?.addEventListener("load", check);
      return () => img?.removeEventListener("load", check);
    }
  }, [currentImage]);

  useEffect(() => {
    const el = imageBoxRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        setZoom((z) => Math.min(Math.max(z - e.deltaY * 0.002, 1), 3));
      }
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-mono-0/80 sm:p-8"
    >
      <div className="relative bg-mono-1000 border-t sm:border border-mono-900 sm:rounded-2xl w-full max-w-3xl h-[95vh] sm:h-auto sm:max-h-[90vh] overflow-y-auto scrollbar-hide rounded-t-2xl">
        {/* 모바일 상단 헤더 */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3 bg-mono-1000/95 backdrop-blur-sm border-b border-mono-900 sm:hidden">
          <h2 className="text-base font-semibold truncate pr-4">{project.title}</h2>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-mono-900 text-mono-300"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* PC 닫기 버튼 */}
        <button
          onClick={onClose}
          className="hidden sm:flex absolute top-3 right-3 z-10 w-8 h-8 items-center justify-center rounded-full bg-mono-0/70 text-mono-900 hover:bg-mono-0 transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative">
          <div
            ref={imageBoxRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className={`w-full aspect-[1920/945] bg-mono-950 sm:rounded-t-2xl overflow-auto scrollbar-hide select-none touch-none ${zoom > 1 ? "cursor-grab" : ""} ${isDragging ? "!cursor-grabbing" : ""}`}
          >
            <div style={{ width: `${zoom * 100}%` }}>
              <img
                src={project.images[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* 줌 컨트롤 */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1">
            <button
              onClick={zoomOut}
              disabled={zoom <= 1}
              className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-mono-0/70 text-mono-900 hover:bg-mono-0 transition-colors text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Zoom out"
            >
              −
            </button>
            <button
              onClick={zoomReset}
              className="h-8 sm:h-7 px-2.5 sm:px-2 flex items-center justify-center rounded-full bg-mono-0/70 text-mono-900 hover:bg-mono-0 transition-colors text-[11px] font-medium tabular-nums"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              onClick={zoomIn}
              disabled={zoom >= 3}
              className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-mono-0/70 text-mono-900 hover:bg-mono-0 transition-colors text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Zoom in"
            >
              +
            </button>
          </div>

          {/* 스크롤 힌트 */}
          <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-mono-950/90 to-transparent pointer-events-none flex items-end justify-center pb-2 transition-opacity ${isScrollable && zoom === 1 ? "opacity-100" : "opacity-0"}`}>
            <div className="flex flex-col items-center gap-1 text-mono-300/80">
              <span className="text-[10px] tracking-wider">스크롤</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* 이미지 슬라이드 인디케이터 */}
        {project.images.length > 1 && (
          <div className="flex justify-center gap-2 py-3">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === currentImage
                    ? "bg-accent-500"
                    : "bg-mono-700 hover:bg-mono-500"
                }`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div className="px-4 pb-6 sm:p-7">
          {/* 헤더 - PC만 (모바일은 sticky 헤더에 표시) */}
          <div className="hidden sm:block mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{project.title}</h2>
            <span className="text-sm text-mono-400">{project.period}</span>
          </div>

          {/* 기간 - 모바일 */}
          <div className="sm:hidden mb-4">
            <span className="text-sm text-accent-500 font-medium">{project.period}</span>
          </div>

          {/* 서비스 소개 */}
          <div className="mb-5 sm:mb-6">
            <h3 className="text-base font-semibold text-accent-500 mb-2 sm:mb-3">서비스 소개</h3>
            <p className="text-base text-mono-300 leading-[1.8] sm:leading-[1.9] whitespace-pre-line">
              {project.longDescription.trim()}
            </p>
          </div>

          {/* 담당 업무 */}
          <div className="mb-5 sm:mb-6">
            <h3 className="text-base font-semibold text-accent-500 mb-2 sm:mb-3">담당 업무</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {project.achievements.map((achievement, i) => (
                <li key={i} className="flex gap-2 sm:gap-2.5 text-base text-mono-300 leading-[1.7] sm:leading-relaxed">
                  <span className="text-accent-500 shrink-0 mt-[2px]">&#8226;</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* 사용 기술 */}
          <div className="mb-5 sm:mb-6">
            <h3 className="text-base font-semibold text-accent-500 mb-2 sm:mb-3">사용 기술</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-mono-200 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-accent-500/[0.08] border border-accent-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 링크 */}
          {(project.github || project.site) && (
            <div className="flex flex-col sm:flex-row sm:justify-end gap-2.5 sm:gap-3 pt-4 border-t border-mono-900">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-mono-800 text-mono-300 px-4 py-2.5 sm:py-2 rounded-lg hover:border-accent-500 hover:text-accent-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.site && (
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-accent-600 text-white px-4 py-2.5 sm:py-2 rounded-lg hover:bg-accent-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  사이트 바로가기
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
