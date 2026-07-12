/**
 * ==========================================================
 * TechBadge Component
 * ==========================================================
 *
 * Ultra Premium Technology Badge
 *
 * Features
 * ----------
 * ✓ Glassmorphism
 * ✓ Premium Hover Animation
 * ✓ Gradient Background
 * ✓ Better Typography
 * ✓ Responsive
 * ✓ Accessible
 * ✓ Reusable
 *
 * Used By
 * ----------
 * - ProjectCard.tsx
 * - ProjectModal.tsx
 * - FeaturedProjects.tsx
 * ==========================================================
 */

import type { FC } from "react";

import { Code2 } from "lucide-react";

import type { ProjectTechnology } from "../../types/project";

interface TechBadgeProps {
  technology: ProjectTechnology;
  className?: string;
}

const TechBadge: FC<TechBadgeProps> = ({
  technology,
  className = "",
}) => {
  return (
    <span
      className={`
        group
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-gradient-to-r
        from-cyan-500/10
        via-indigo-500/10
        to-violet-500/10
        px-3.5
        py-2
        text-xs
        font-semibold
        tracking-wide
        text-slate-200
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:from-cyan-500/20
        hover:to-violet-500/20
        hover:shadow-lg
        hover:shadow-cyan-500/15
        ${className}
      `}
    >
      <Code2
        size={14}
        strokeWidth={2}
        className="
          shrink-0
          text-cyan-300
          transition-transform
          duration-300
          group-hover:rotate-12
          group-hover:scale-110
        "
      />

      <span className="whitespace-nowrap">
        {technology.name}
      </span>
    </span>
  );
};

export default TechBadge;