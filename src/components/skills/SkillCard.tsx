import { CheckCircle2 } from "lucide-react";

import SkillProgress from "./SkillProgress";

import Card from "../common/Card";

import { cn } from "../../utils/cn";

import type { SkillCardProps } from "../../types/skill";

/**
 * ==========================================================
 * SkillCard Component
 * ==========================================================
 *
 * Ultra Premium Skill Category Card
 *
 * Features
 * ----------
 * ✓ Premium Glassmorphism
 * ✓ Animated Gradient Glow
 * ✓ Floating Background Effects
 * ✓ Modern Icon Container
 * ✓ Premium Typography
 * ✓ Responsive Layout
 * ✓ Hover Elevation
 * ✓ Tailwind CSS v4
 * ✓ TypeScript Strict
 * ==========================================================
 */

const SkillCard = ({ category }: SkillCardProps) => {
  const Icon = category.icon;

  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[30px]",
        "border border-white/30 dark:border-white/10",

        // Glass Effect
        "bg-white/65 backdrop-blur-2xl",
        "dark:bg-slate-900/60",

        // Shadow
        "shadow-[0_10px_50px_rgba(15,23,42,0.08)]",
        "dark:shadow-[0_12px_60px_rgba(0,0,0,0.45)]",

        // Animation
        "transition-all duration-700",
        "hover:-translate-y-3",
        "hover:shadow-[0_25px_80px_rgba(139,92,246,0.18)]",
        "hover:border-violet-400/40",
      )}
    >
      {/* ========================================= */}
      {/* Decorative Background */}
      {/* ========================================= */}

      <div
        className={cn(
          "absolute -right-14 -top-14 h-44 w-44 rounded-full blur-3xl",
          "opacity-0 transition-all duration-700",
          "group-hover:opacity-30",
          "bg-gradient-to-br",
          category.color,
        )}
      />

      <div
        className={cn(
          "absolute -bottom-20 -left-16 h-52 w-52 rounded-full",
          "bg-violet-500/10 blur-3xl",
          "opacity-60",
        )}
      />

      {/* Animated Gradient Border */}

      <div
        className={cn(
          "absolute inset-0 rounded-[30px]",
          "opacity-0 transition-opacity duration-700",
          "group-hover:opacity-100",
          "bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-cyan-500/10",
          "pointer-events-none",
        )}
      />

      {/* ========================================= */}
      {/* Card Content */}
      {/* ========================================= */}

      <div className="relative z-10 flex h-full flex-col">
        {/* =============================== */}
        {/* Header */}
        {/* =============================== */}

        <div className="mb-8 flex items-start justify-between">
          {/* Left */}

          <div className="relative">
            {/* Glow */}

            <div
              className={cn(
                "absolute inset-0 rounded-3xl blur-2xl",
                "scale-125 opacity-40",
                "transition-all duration-700",
                "group-hover:scale-150",
                "group-hover:opacity-70",
                "bg-gradient-to-br",
                category.color,
              )}
            />

            {/* Icon Box */}

            <div
              className={cn(
                "relative flex h-16 w-16 items-center justify-center",
                "rounded-3xl",
                "bg-gradient-to-br",
                category.color,
                "shadow-xl",
                "transition-all duration-500",
                "group-hover:rotate-6",
                "group-hover:scale-110",
              )}
            >
              <Icon
                size={30}
                className="text-slate-900 dark:text-white drop-shadow-md"
              />
            </div>
          </div>

          {/* Right */}

          <div className="text-right">
            <p
              className={cn(
                "text-[11px]",
                "font-semibold uppercase tracking-[0.35em]",
                "text-slate-500",
                "dark:text-slate-600 dark:text-slate-400",
              )}
            >
              Skill Category
            </p>

            <h3
              className={cn(
                "mt-2 text-2xl font-extrabold",
                "tracking-tight",
                "text-slate-900",
                "dark:text-slate-900 dark:text-white",
              )}
            >
              {category.title}
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-600 dark:text-slate-400">
              {category.skills.length} Technologies
            </p>
          </div>
        </div>

        {/* ========================================= */}
        {/* Technologies */}
        {/* ========================================= */}

        <div className="mb-8">
          {/* Section Header */}

          <div className="mb-5 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-700 dark:text-slate-300">
                Technologies
              </h4>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-600 dark:text-slate-400">
                Core tools & frameworks I work with
              </p>
            </div>

            <div
              className={cn(
                "inline-flex items-center justify-center",
                "rounded-full",
                "border border-violet-300/30",
                "bg-gradient-to-r from-violet-500/15 to-fuchsia-500/15",
                "px-4 py-1.5",
                "text-xs font-bold",
                "text-violet-700",
                "shadow-sm",
                "dark:border-violet-400/20",
                "dark:text-violet-300",
              )}
            >
              {category.skills.length}
            </div>
          </div>

          {/* Skill Pills */}

          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill) => (
              <div
                key={skill.id}
                className={cn(
                  "group/item relative overflow-hidden",

                  "inline-flex items-center gap-2.5",

                  "rounded-2xl",

                  "border border-slate-200/70",
                  "dark:border-slate-700/70",

                  "bg-white/70",
                  "dark:bg-slate-800/60",

                  "px-4 py-2.5",

                  "backdrop-blur-xl",

                  "transition-all duration-300",

                  "hover:-translate-y-1",
                  "hover:scale-[1.03]",

                  "hover:border-violet-400/40",

                  "hover:shadow-lg",
                  "hover:shadow-violet-500/10",
                )}
              >
                {/* Hover Shine */}

                <div
                  className={cn(
                    "absolute inset-0",

                    "-translate-x-full",

                    "bg-gradient-to-r",
                    "from-transparent",
                    "via-white/40",
                    "to-transparent",

                    "transition-transform",
                    "duration-700",

                    "group-hover/item:translate-x-full",

                    "dark:via-white/10",
                  )}
                />

                {/* Icon */}

                <div
                  className={cn(
                    "relative z-10",

                    "flex h-6 w-6 items-center justify-center",

                    "rounded-full",

                    "bg-violet-500/10",

                    "transition-all duration-300",

                    "group-hover/item:bg-violet-500/20",
                  )}
                >
                  <CheckCircle2 size={14} className="text-violet-500" />
                </div>

                {/* Skill Name */}

                <span
                  className={cn(
                    "relative z-10",

                    "font-medium",

                    "text-slate-700",
                    "dark:text-slate-200",

                    "transition-colors duration-300",

                    "group-hover/item:text-violet-700",
                    "dark:group-hover/item:text-violet-300",
                  )}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================= */}
        {/* Footer */}
        {/* ========================================= */}

        <div className="mt-auto">
          {/* Divider */}

          <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-slate-300/70 to-transparent dark:via-slate-700/70" />

          {/* Proficiency Header */}

          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-700 dark:text-slate-300">
                Overall Proficiency
              </p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-600 dark:text-slate-400">
                Experience across this technology stack
              </p>
            </div>

            <div
              className={cn(
                "rounded-2xl",
                "bg-gradient-to-r",
                category.color,
                "px-4 py-2",
                "shadow-lg",
              )}
            >
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                {category.percentage}%
              </span>
            </div>
          </div>

          {/* Progress Bar */}

          <div className="space-y-3">
            <SkillProgress value={category.percentage} />

            {/* Scale Labels */}

            <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400 dark:text-slate-500">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Advanced</span>
              <span>Expert</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* Bottom Accent Line */}
      {/* ========================================= */}

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-1",

          "origin-left scale-x-0",

          "bg-gradient-to-r",

          category.color,

          "transition-transform duration-700",

          "group-hover:scale-x-100",
        )}
      />
    </Card>
  );
};

export default SkillCard;
