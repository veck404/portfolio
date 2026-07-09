import React from "react";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon: LucideIcon | IconType;
  color?: string;
  url?: string;
}

export const SkillCard = React.memo(function SkillCard({
  name,
  icon: Icon,
  color,
  url,
}: SkillCardProps) {
  const accentColor = color?.trim() && color.trim() !== "#" ? color : "#64748b";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex min-h-32 flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 p-4 text-center shadow-sm shadow-slate-950/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-white hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/20 dark:hover:bg-slate-900/90 dark:focus-visible:ring-offset-slate-950"
      style={{ "--glow-color": accentColor } as React.CSSProperties}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,var(--glow-color),transparent_46%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
      <div
        className="relative rounded-2xl p-3 transition-all duration-300 group-hover:scale-[1.03]"
        style={{ backgroundColor: `${accentColor}1A` }}
      >
        <Icon size={36} color={accentColor} className="group-hover:brightness-100" />
      </div>
      <span className="relative mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
        {name}
      </span>
    </a>
  );
});
