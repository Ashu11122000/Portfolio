import SkillCategory from "./SkillCategory";

import skills from "../../data/skills";

import { cn } from "../../utils/cn";

import type { ComponentProps } from "../../types/common";

/**
 * ==========================================================
 * SkillGrid Component
 * ==========================================================
 *
 * Ultra Premium Skills Grid
 *
 * Features
 * ----------
 * ✓ Responsive Grid
 * ✓ Decorative Background
 * ✓ Premium Spacing
 * ✓ Staggered Desktop Layout
 * ✓ Glassmorphism Ready
 * ✓ Tailwind CSS v4
 * ✓ TypeScript Strict
 * ==========================================================
 */

const SkillGrid = ({ className }: ComponentProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Decorative Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[130px]" />
      </div>

      {/* Skills Grid */}

      <div
        className={cn(
          "relative z-10",

          "grid gap-8",

          "grid-cols-1",

          "md:grid-cols-2",

          "xl:grid-cols-3",

          "items-start",
        )}
      >
        {skills.map((category, index) => (
          <div
            key={category.id}
            className={cn(
              "transition-all duration-500",

              // Premium stagger on desktop
              index % 3 === 1 && "xl:mt-12",

              index % 3 === 2 && "xl:mt-6",
            )}
          >
            <SkillCategory category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGrid;
