import { cn } from "../../utils/cn";

import type { SkillProgressProps } from "../../types/skill";

/**
 * ==========================================================
 * SkillProgress Component
 * ==========================================================
 *
 * Ultra Premium Animated Progress Bar
 *
 * Features
 * ----------
 * ✓ Glassmorphism Track
 * ✓ Premium Gradient Fill
 * ✓ Animated Shine
 * ✓ Soft Glow
 * ✓ Tick Marks
 * ✓ Responsive
 * ✓ Accessible
 * ✓ Tailwind CSS v4
 * ✓ TypeScript Strict
 * ==========================================================
 */

const SkillProgress = ({
  value,
  className,
}: SkillProgressProps) => {
  const progress = Math.min(Math.max(value, 0), 100);

  return (
    <div className={cn("space-y-3", className)}>
      {/* Header */}

      <div className="flex items-center justify-between">

        <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
          Proficiency
        </span>

        <span
          className={cn(
            "rounded-full",
            "border border-violet-400/20",
            "bg-violet-500/10",
            "px-3 py-1",
            "text-xs font-bold",
            "text-violet-700",
            "dark:text-violet-300"
          )}
        >
          {progress}%
        </span>

      </div>

      {/* Progress Track */}

      <div
        className={cn(
          "relative h-3.5 w-full overflow-hidden rounded-full",

          "border border-white/20",

          "bg-slate-200/70",

          "backdrop-blur-xl",

          "dark:border-white/10",
          "dark:bg-slate-800/70"
        )}
        role="progressbar"
        aria-label="Skill proficiency"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >

        {/* Tick Marks */}

        <div className="pointer-events-none absolute inset-0 flex justify-between px-2 opacity-30">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="h-full w-px bg-white/30"
            />
          ))}
        </div>

        {/* Gradient Fill */}

        <div
          className={cn(
            "relative h-full overflow-hidden rounded-full",

            "bg-gradient-to-r",

            "from-violet-600",
            "via-fuchsia-500",
            "to-cyan-400",

            "transition-all duration-1000 ease-out"
          )}
          style={{
            width: `${progress}%`,
          }}
        >

          {/* Shine */}

          <div
            className={cn(
              "absolute inset-0",

              "translate-x-[-120%]",

              "bg-gradient-to-r",

              "from-transparent",
              "via-white/50",
              "to-transparent",

              "transition-transform duration-[1800ms]",

              "group-hover:translate-x-[120%]"
            )}
          />

        </div>

        {/* Glow */}

        <div
          className="absolute inset-y-0 rounded-full bg-violet-400/30 blur-md"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      {/* Scale */}

      <div className="flex justify-between text-[10px] font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
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