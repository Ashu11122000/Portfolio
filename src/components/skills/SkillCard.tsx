import { CheckCircle2 } from "lucide-react";

import SkillProgress from "./SkillProgress";

import Card from "../common/Card";

import { cn } from "../../utils/cn";

import type { SkillCardProps } from "../../types/skill";

/**
 * =============================================================================
 * SkillCard Component
 * =============================================================================
 *
 * Ultra Premium Skill Category Card
 *
 * Features
 * -----------------------------------------------------------------------------
 * ✓ Premium Glassmorphism
 * ✓ Aurora Gradient Background
 * ✓ Animated Gradient Border
 * ✓ Theme Aware
 * ✓ Responsive
 * ✓ Premium Hover Effects
 * ✓ Smooth Animations
 * ✓ Tailwind CSS v4
 * =============================================================================
 */

const SkillCard = ({ category }: SkillCardProps) => {
  const Icon = category.icon;

  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-4xl",

        /* Glass */

        "border border-zinc-200/70 dark:border-white/10",

        "bg-white/80 dark:bg-zinc-900/70",

        "backdrop-blur-3xl",

        /* Shadow */

        "shadow-[0_15px_60px_rgba(15,23,42,0.08)]",
        "dark:shadow-[0_20px_80px_rgba(0,0,0,.45)]",

        /* Animation */

        "transition-all duration-700 ease-out",

        "hover:-translate-y-3",

        "hover:border-violet-500/40",

        "hover:shadow-[0_30px_90px_rgba(139,92,246,.20)]",
      )}
    >
      {/* ========================================================= */}
      {/* Top Border Glow */}
      {/* ========================================================= */}

      <div
        className="
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
      {/* Aurora Background */}
      {/* ========================================================= */}

      <div
        className={cn(
          "absolute -right-16 -top-16 h-52 w-52 rounded-full",

          "bg-linear-to-br",

          category.color,

          "opacity-20",

          "blur-[110px]",

          "transition-all duration-700",

          "group-hover:scale-125",

          "group-hover:opacity-40",
        )}
      />

      <div
        className="
          absolute
          -bottom-20
          -left-20

          h-64
          w-64

          rounded-full

          bg-cyan-500/10

          blur-[120px]
        "
      />

      <div
        className="
          absolute
          inset-0

          rounded-4xl

          bg-linear-to-br
          from-white/40
          via-transparent
          to-transparent

          dark:from-white/5

          pointer-events-none
        "
      />

      {/* ========================================================= */}
      {/* Card Content */}
      {/* ========================================================= */}

      <div className="relative z-10 flex h-full flex-col p-7">
        {/* ========================================================= */}
        {/* Header */}
        {/* ========================================================= */}

        <div className="mb-8 flex items-start justify-between gap-5">
          {/* Icon */}

          <div className="relative">
            {/* Glow */}

            <div
              className={cn(
                "absolute inset-0",

                "scale-125",

                "rounded-3xl",

                "bg-linear-to-br",

                category.color,

                "opacity-40",

                "blur-2xl",

                "transition-all duration-700",

                "group-hover:scale-150",

                "group-hover:opacity-70",
              )}
            />

            {/* Icon Box */}

            <div
              className={cn(
                "relative",

                "flex h-16 w-16 items-center justify-center",

                "rounded-3xl",

                "border border-white/20 dark:border-white/10",

                "bg-linear-to-br",

                category.color,

                "text-white",

                "shadow-[0_20px_45px_rgba(139,92,246,.30)]",

                "transition-all duration-700",

                "group-hover:rotate-6",

                "group-hover:scale-110",
              )}
            >
              <Icon size={30} strokeWidth={2.2} />
            </div>
          </div>

          {/* Category Info */}

          <div className="text-right">
            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.35em]

                text-zinc-500
                dark:text-zinc-400
              "
            >
              Skill Category
            </p>

            <h3
              className="
                mt-2

                text-2xl
                font-black
                tracking-tight

                text-zinc-900
                dark:text-white
              "
            >
              {category.title}
            </h3>

            <p
              className="
                mt-2

                text-sm
                font-medium

                text-zinc-600
                dark:text-zinc-400
              "
            >
              {category.skills.length} Technologies
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Technologies */}
        {/* ========================================================= */}

                <div className="mb-8">
          {/* ========================================================= */}
          {/* Section Header */}
          {/* ========================================================= */}

          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h4
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  text-zinc-700
                  dark:text-zinc-300
                "
              >
                Technologies
              </h4>

              <p
                className="
                  mt-1

                  text-xs
                  leading-6

                  text-zinc-500
                  dark:text-zinc-400
                "
              >
                Core technologies, frameworks and tools I use regularly.
              </p>
            </div>

            {/* Counter */}

            <div
              className={cn(
                "inline-flex items-center justify-center",

                "rounded-full",

                "border border-violet-500/20",

                "bg-linear-to-r",
                "from-violet-500/10",
                "via-fuchsia-500/10",
                "to-cyan-500/10",

                "px-4 py-2",

                "backdrop-blur-xl",

                "shadow-lg shadow-violet-500/10",

                "transition-all duration-500",

                "group-hover:border-violet-500/40",
              )}
            >
              <span
                className="
                  text-sm
                  font-bold

                  text-violet-700
                  dark:text-violet-300
                "
              >
                {category.skills.length}
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* Skill Pills */}
          {/* ========================================================= */}

          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill) => (
              <div
                key={skill.id}
                className={cn(
                  "group/item",

                  "relative overflow-hidden",

                  "inline-flex items-center gap-3",

                  "rounded-2xl",

                  "border border-zinc-200/80",
                  "dark:border-zinc-700/70",

                  "bg-white/75",
                  "dark:bg-zinc-800/60",

                  "px-4 py-3",

                  "backdrop-blur-xl",

                  "transition-all duration-500 ease-out",

                  "hover:-translate-y-1",

                  "hover:scale-[1.03]",

                  "hover:border-violet-500/40",

                  "hover:shadow-lg",

                  "hover:shadow-violet-500/15",
                )}
              >
                {/* Animated Shine */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    -translate-x-full

                    bg-linear-to-r
                    from-transparent
                    via-white/50
                    to-transparent

                    transition-transform
                    duration-700

                    group-hover/item:translate-x-full

                    dark:via-white/10
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

                    bg-violet-500/10
                    dark:bg-violet-500/20

                    transition-all
                    duration-300

                    group-hover/item:bg-violet-500/20
                    dark:group-hover/item:bg-violet-500/30
                  "
                >
                  <CheckCircle2
                    size={15}
                    className="
                      text-violet-600
                      dark:text-violet-300
                    "
                  />
                </div>

                {/* Skill Name */}

                <span
                  className="
                    relative
                    z-10

                    font-medium

                    text-zinc-700
                    dark:text-zinc-200

                    transition-colors
                    duration-300

                    group-hover/item:text-violet-700
                    dark:group-hover/item:text-violet-300
                  "
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* Footer */}
        {/* ========================================================= */}
                <div className="mt-auto">
          {/* ========================================================= */}
          {/* Premium Divider */}
          {/* ========================================================= */}

          <div className="relative mb-7 h-px overflow-hidden">
            <div
              className="
                absolute
                inset-0

                bg-linear-to-r
                from-transparent
                via-zinc-300/80
                to-transparent

                dark:via-white/10
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2

                h-12
                w-12

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-violet-500/20

                blur-2xl
              "
            />
          </div>

          {/* ========================================================= */}
          {/* Overall Proficiency */}
          {/* ========================================================= */}

          <div className="mb-6 flex items-center justify-between gap-5">
            <div>
              <p
                className="
                  text-sm
                  font-semibold

                  text-zinc-800
                  dark:text-zinc-200
                "
              >
                Overall Proficiency
              </p>

              <p
                className="
                  mt-1

                  text-xs
                  leading-6

                  text-zinc-500
                  dark:text-zinc-400
                "
              >
                Experience across this technology ecosystem
              </p>
            </div>

            {/* Percentage Badge */}

            <div
              className={cn(
                "rounded-2xl",

                "bg-linear-to-r",

                category.color,

                "px-5 py-2.5",

                "text-white",

                "shadow-[0_15px_40px_rgba(139,92,246,.28)]",

                "transition-all duration-500",

                "group-hover:scale-105",
              )}
            >
              <span className="text-lg font-bold tracking-tight">
                {category.percentage}%
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* Progress */}
          {/* ========================================================= */}

          <div className="space-y-4">
            <SkillProgress value={category.percentage} />

            {/* Labels */}

            <div
              className="
                flex
                items-center
                justify-between

                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]

                text-zinc-500
                dark:text-zinc-400
              "
            >
              <span>Beginner</span>

              <span>Intermediate</span>

              <span>Advanced</span>

              <span>Expert</span>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* Bottom Accent */}
      {/* ========================================================= */}
            <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-1.5",

          "origin-left scale-x-0",

          "bg-linear-to-r",

          category.color,

          "shadow-[0_0_25px_rgba(139,92,246,.35)]",

          "transition-transform duration-700 ease-out",

          "group-hover:scale-x-100",
        )}
      />

      {/* Bottom Glow */}

      <div
        className="
          pointer-events-none
          absolute

          bottom-0
          left-1/2

          h-24
          w-48

          -translate-x-1/2

          rounded-full

          bg-violet-500/15

          blur-3xl

          opacity-0

          transition-opacity
          duration-700

          group-hover:opacity-100
        "
      />
    </Card>
  );
};

export default SkillCard;