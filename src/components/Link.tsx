import React from "react";

const DEFAULT_SCROLL_OFFSET = 112;
const NAV_OFFSET_CSS_VAR = "--nav-offset";

function getNavOffsetFromCss() {
  if (typeof window === "undefined") {
    return DEFAULT_SCROLL_OFFSET;
  }

  const offset = Number.parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(NAV_OFFSET_CSS_VAR)
  );

  return Number.isFinite(offset) ? offset : DEFAULT_SCROLL_OFFSET;
}

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: React.ReactNode;
  offset?: number;
}

export function Link({
  href,
  children,
  className = "",
  onClick,
  offset,
  ...props
}: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    if (
      e.defaultPrevented ||
      !href.startsWith("#") ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.altKey ||
      e.shiftKey
    ) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      return;
    }

    e.preventDefault();

    const scrollOffset = offset ?? getNavOffsetFromCss();
    const top =
      target.getBoundingClientRect().top + window.scrollY - scrollOffset;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    });
    window.history.replaceState(null, "", href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
