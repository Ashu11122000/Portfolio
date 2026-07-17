import { cn } from "../../utils/cn";

import type { SkillProgressProps } from "../../types/skill";

/**
 * =============================================================================
 * SkillProgress Component
 * =============================================================================
 *
 * Ultra Premium Animated Progress Bar
 *
 * Features
 * -----------------------------------------------------------------------------
 * ✓ Premium Glass Track
 * ✓ Aurora Gradient Fill
 * ✓ Animated Shine
 * ✓ Soft Ambient Glow
 * ✓ Tick Marks
 * ✓ Smooth Animation
 * ✓ Theme Aware
 * ✓ Accessible
 * ✓ Tailwind CSS v4
 * =============================================================================
 */

const SkillProgress = ({
  value,
  className,
}: SkillProgressProps) => {
  const progress = Math.min(Math.max(value, 0), 100);

  return (
    <div className={cn("space-y-4", className)}>
      {/* ========================================================= */}
      {/* Header */}
      {/* ========================================================= */}

      <div className="flex items-center justify-between">
        <span
          className="
            text-sm
            font-semibold

            text-zinc-700
            dark:text-zinc-300
          "
        >
          Proficiency
        </span>

        <span
          className="
            rounded-full

            border
            border-violet-500/20

            bg-violet-500/10

            px-3
            py-1

            text-xs
            font-bold

            text-violet-700
            dark:text-violet-300

            backdrop-blur-xl
          "
        >
          {progress}%
        </span>
      </div>

      {/* ========================================================= */}
      {/* Progress Track */}
      {/* ========================================================= */}

      <div
        className="
          group
          relative

          h-4
          w-full

          overflow-hidden

          rounded-full

          border
          border-zinc-200/70
          dark:border-white/10

          bg-zinc-200/70
          dark:bg-zinc-800/70

          backdrop-blur-xl
        "
        role="progressbar"
        aria-label="Skill proficiency"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        {/* Glass Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-linear-to-b
            from-white/40
            to-transparent

            dark:from-white/5
          "
        />

        {/* Tick Marks */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            flex
            justify-between

            px-2

            opacity-30
          "
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="
                h-full
                w-px

                bg-white/40
                dark:bg-white/20
              "
            />
          ))}
        </div>

        {/* Gradient Fill */}

        <div
          className="
            relative

            h-full

            overflow-hidden

            rounded-full

            bg-linear-to-r
            from-violet-600
            via-fuchsia-500
            to-cyan-400

            transition-all
            duration-1000
            ease-out
          "
          style={{
            width: `${progress}%`,
          }}
        >
          {/* Shine */}

          <div
            className="
              absolute
              inset-0

              -translate-x-full

              bg-linear-to-r
              from-transparent
              via-white/50
              to-transparent

              transition-transform
              duration-1800

              group-hover:translate-x-full

              dark:via-white/20
            "
          />

          {/* Highlight */}

          <div
            className="
              absolute
              inset-x-0
              top-0

              h-1/2

              bg-white/20
            "
          />
        </div>

        {/* Ambient Glow */}

        <div
          className="
            pointer-events-none

            absolute
            inset-y-0

            rounded-full

            bg-violet-500/30

            blur-md
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* ========================================================= */}
      {/* Scale */}
      {/* ========================================================= */}

      <div
        className="
          flex
          justify-between

          text-[10px]
          font-semibold
          uppercase
          tracking-[0.18em]

          text-zinc-500
          dark:text-zinc-400
        "
      >
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default SkillProgress;