import SkillCategory from "./SkillCategory";

import skills from "../../data/skills";

import { cn } from "../../utils/cn";

import type { ComponentProps } from "../../types/common";

/**
 * =============================================================================
 * SkillGrid Component
 * =============================================================================
 *
 * Ultra Premium Skills Grid
 *
 * Features
 * -----------------------------------------------------------------------------
 * ✓ Aurora Background
 * ✓ Responsive Grid
 * ✓ Premium Glass Layout
 * ✓ Floating Gradient Effects
 * ✓ Staggered Desktop Layout
 * ✓ Smooth Animations
 * ✓ Theme Aware
 * ✓ Tailwind CSS v4
 * =============================================================================
 */

const SkillGrid = ({ className }: ComponentProps) => {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden",
        className,
      )}
    >
      {/* ========================================================= */}
      {/* Aurora Background */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Left Glow */}

        <div
          className="
            absolute
            -left-28
            -top-28

            h-112
            w-md

            rounded-full

            bg-linear-to-br
            from-violet-500/20
            via-fuchsia-500/12
            to-transparent

            blur-[150px]
          "
        />

        {/* Top Right Glow */}

        <div
          className="
            absolute
            right-0
            top-1/4

            h-120
            w-120

            rounded-full

            bg-linear-to-br
            from-cyan-500/18
            via-sky-500/10
            to-transparent

            blur-[170px]
          "
        />

        {/* Bottom Center Glow */}

        <div
          className="
            absolute
            bottom-0
            left-1/3

            h-104
            w-104

            rounded-full

            bg-linear-to-br
            from-fuchsia-500/12
            via-violet-500/10
            to-transparent

            blur-[150px]
          "
        />

        {/* Ambient Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-168
            w-2xl

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-violet-500/3

            blur-[220px]
          "
        />
      </div>

      {/* ========================================================= */}
      {/* Skills Grid */}
      {/* ========================================================= */}

      <div
        className={cn(
          "relative z-10",

          "grid",

          "grid-cols-1",

          "gap-8",

          "md:grid-cols-2",

          "xl:grid-cols-3",

          "2xl:gap-10",

          "items-start"
        )}
      >
        {skills.map((category, index) => (
          <div
            key={category.id}
            className={cn(
              "transition-all duration-700 ease-out",

              "hover:z-20",

              /* Premium staggered desktop layout */

              index % 3 === 1 && "xl:mt-12",

              index % 3 === 2 && "xl:mt-6"
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