import { useState, useEffect, useCallback } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return (
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  const updateTheme = useCallback((dark: boolean) => {
    // Simply add or remove the dark class
    document.documentElement.classList[dark ? "add" : "remove"]("dark");
  }, []);

  useEffect(() => {
    // Apply theme immediately
    updateTheme(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Listen for changes to the html.dark class
    const observer = new MutationObserver(() => {
      const htmlIsDark = document.documentElement.classList.contains("dark");
      setIsDark(htmlIsDark);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [isDark, updateTheme]);

  return { isDark, setIsDark };
}
