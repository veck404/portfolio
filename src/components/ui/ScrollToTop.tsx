import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setIsVisible(scrollTop > 300);
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollToTop}
          className="group relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 text-slate-900 shadow-lg shadow-slate-950/10 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:text-primary-600 dark:border-white/10 dark:bg-slate-950/80 dark:text-white dark:shadow-black/30 dark:hover:text-primary-300"
          aria-label="Scroll to top"
          type="button"
        >
          {/* Circular Progress Ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 48 48"
          >
            {/* Background Circle */}
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-slate-200 dark:text-white/10"
            />
            {/* Progress Circle */}
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
              className="text-primary-500 transition-all duration-150 ease-out dark:text-primary-300"
            />
          </svg>
          
          <ArrowUp className="w-5 h-5 relative z-10" />

          {/* Tooltip */}
          <span className="absolute right-full mr-2 whitespace-nowrap rounded-lg bg-slate-950 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg shadow-slate-950/20 transition-opacity group-hover:opacity-100 dark:bg-white dark:text-slate-950">
            Scroll to top
          </span>
        </button>
      </div>
    )
  );
}
