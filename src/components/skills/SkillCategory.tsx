import SkillCard from "./SkillCard";

import { cn } from "../../utils/cn";

import type { SkillCategory as SkillCategoryType } from "../../types/skill";

/**
 * =============================================================================
 * SkillCategory Component
 * =============================================================================
 *
 * Ultra Premium wrapper around SkillCard.
 *
 * Features
 * -----------------------------------------------------------------------------
 * ✓ Aurora Background
 * ✓ Premium Glass Wrapper
 * ✓ Animated Border Glow
 * ✓ Floating Gradient Effects
 * ✓ Responsive
 * ✓ Theme Aware
 * ✓ Smooth Hover Animations
 * =============================================================================
 */

interface SkillCategoryProps {
  category: SkillCategoryType;
  className?: string;
}

const SkillCategory = ({
  category,
  className,
}: SkillCategoryProps) => {
  return (
    <section
      className={cn(
        "group relative isolate",

        "overflow-hidden",

        "rounded-[36px]",

        className
      )}
    >
      {/* ========================================================= */}
      {/* Top Border Glow */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0

          h-px

          bg-linear-to-r
          from-transparent
          via-violet-500/70
          to-transparent

          opacity-0

          transition-opacity
          duration-700

          group-hover:opacity-100
        "
      />

      {/* ========================================================= */}
      {/* Primary Aurora Glow */}
      {/* ========================================================= */}

      <div
        className={cn(
          "pointer-events-none",

          "absolute",

          "-right-20",
          "-top-20",

          "h-56",
          "w-56",

          "rounded-full",

          "bg-linear-to-br",

          category.color,

          "opacity-15",

          "blur-[110px]",

          "transition-all",
          "duration-700",

          "group-hover:scale-125",

          "group-hover:opacity-35"
        )}
      />

      {/* ========================================================= */}
      {/* Secondary Glow */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none

          absolute

          -bottom-24
          -left-24

          h-72
          w-72

          rounded-full

          bg-cyan-500/10

          blur-[130px]

          transition-all
          duration-700

          group-hover:scale-110
        "
      />

      {/* ========================================================= */}
      {/* Ambient Center Glow */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-1/2

          h-80
          w-80

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-violet-500/3

          blur-[160px]
        "
      />

      {/* ========================================================= */}
      {/* Glass Overlay */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          rounded-[36px]

          bg-linear-to-br
          from-white/35
          via-transparent
          to-transparent

          dark:from-white/5
        "
      />

      {/* ========================================================= */}
      {/* Premium Border */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          rounded-[36px]

          border
          border-zinc-200/70
          dark:border-white/10

          transition-colors
          duration-700

          group-hover:border-violet-500/30
        "
      />

      {/* ========================================================= */}
      {/* Skill Card */}
      {/* ========================================================= */}

      <div className="relative z-10">
        <SkillCard category={category} />
      </div>
    </section>
  );
};

export default SkillCategory;