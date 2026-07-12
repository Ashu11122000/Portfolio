/**
 * ==========================================================
 * Ultra Premium Experience Tech Badge
 * ==========================================================
 *
 * Premium reusable technology badge used across
 * the Experience module.
 *
 * Features
 * ----------
 * ✓ Glassmorphism
 * ✓ Gradient Accent
 * ✓ Smooth Hover Animation
 * ✓ Responsive
 * ✓ Accessible
 * ✓ TypeScript
 * ==========================================================
 */

import type { FC } from "react";

import { Code2 } from "lucide-react";

import type { ExperienceTechnology } from "../../types/experience";

interface ExperienceTechBadgeProps {
  technology: ExperienceTechnology;
  className?: string;
}

const ExperienceTechBadge: FC<ExperienceTechBadgeProps> = ({
  technology,
  className = "",
}) => {
  return (
    <span
      className={`
        group
        inline-flex
        items-center
        gap-2.5
        rounded-2xl
        border
        border-white/10
        bg-gradient-to-r
        from-indigo-500/10
        via-violet-500/10
        to-cyan-500/10
        px-4
        py-2
        text-sm
        font-medium
        text-slate-700
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-500/40
        hover:from-indigo-500/20
        hover:via-violet-500/20
        hover:to-cyan-500/20
        hover:shadow-[0_12px_30px_rgba(99,102,241,0.18)]
        dark:border-white/10
        dark:text-slate-200
        ${className}
      `}
    >
      <div
        className="
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-br
          from-indigo-500
          via-violet-500
          to-cyan-500
          text-white
          transition-transform
          duration-300
          group-hover:rotate-6
          group-hover:scale-110
        "
      >
        <Code2
          size={14}
          strokeWidth={2.2}
        />
      </div>

      <span
        className="
          whitespace-nowrap
          leading-none
        "
      >
        {technology.name}
      </span>
    </span>
  );
};

export default ExperienceTechBadge;