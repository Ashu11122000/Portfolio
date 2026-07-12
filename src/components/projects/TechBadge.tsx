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
 * ✓ Light & Dark Theme
 * ✓ Premium Hover Glow
 * ✓ Gradient Border
 * ✓ Animated Icon
 * ✓ Better Typography
 * ✓ Responsive
 * ✓ Accessible
 * ✓ Tailwind CSS v4
 *
 * Used By
 * ----------
 * - ProjectCard.tsx
 * - ProjectModal.tsx
 * - FeaturedProjects.tsx
 *
 * ==========================================================
 */

import type { FC } from "react";

import { Code2 } from "lucide-react";

import { cn } from "../../utils/cn";

import type { ProjectTechnology } from "../../types/project";

interface TechBadgeProps {
  technology: ProjectTechnology;
  className?: string;
}

const TechBadge: FC<TechBadgeProps> = ({
  technology,
  className,
}) => {
  return (
    <span
      className={cn(
        "group relative inline-flex items-center gap-2.5 overflow-hidden",

        "rounded-full",

        "border border-slate-200/80",

        "bg-gradient-to-r",

        "from-cyan-50",
        "via-violet-50",
        "to-fuchsia-50",

        "px-4 py-2.5",

        "backdrop-blur-xl",

        "shadow-sm",

        "transition-all duration-300",

        "hover:-translate-y-1",
        "hover:scale-[1.03]",

        "hover:border-cyan-400/40",

        "hover:shadow-xl",
        "hover:shadow-cyan-500/10",

        "dark:border-white/10",

        "dark:from-cyan-500/10",
        "dark:via-violet-500/10",
        "dark:to-fuchsia-500/10",

        "dark:hover:border-cyan-400/30",
        "dark:hover:shadow-cyan-500/15",

        className
      )}
    >
      {/* Hover Glow */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100

          bg-gradient-to-r
          from-cyan-400/10
          via-violet-400/10
          to-fuchsia-400/10
        "
      />

      {/* Icon */}

      <div
        className="
          relative
          z-10

          flex
          h-7
          w-7
          items-center
          justify-center

          rounded-full

          bg-cyan-500/10

          transition-all
          duration-300

          group-hover:bg-cyan-500/20
          group-hover:rotate-12
          group-hover:scale-110

          dark:bg-cyan-500/15
        "
      >
        <Code2
          size={14}
          strokeWidth={2.4}
          className="
            text-cyan-600
            dark:text-cyan-300
          "
        />
      </div>

      {/* Technology Name */}

      <span
        className="
          relative
          z-10

          whitespace-nowrap

          text-sm
          font-semibold
          tracking-wide

          text-slate-800

          transition-colors
          duration-300

          group-hover:text-cyan-700

          dark:text-slate-200
          dark:group-hover:text-cyan-300
        "
      >
        {technology.name}
      </span>

      {/* Shine */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0

          -translate-x-full

          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent

          transition-transform
          duration-700

          group-hover:translate-x-full
        "
      />
    </span>
  );
};

export default TechBadge;