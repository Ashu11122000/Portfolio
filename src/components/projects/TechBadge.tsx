/**
 * ==========================================================
 * TechBadge Component
 * ==========================================================
 *
 * Ultra Premium Technology Badge
 *
 * Features
 * ----------
 * ✓ Premium Glassmorphism
 * ✓ Better Light/Dark Mode
 * ✓ Animated Gradient Glow
 * ✓ Premium Icon
 * ✓ Floating Hover Animation
 * ✓ Shine Effect
 * ✓ Accessible
 * ✓ Tailwind CSS v4
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
        `
        group
        relative
        inline-flex
        items-center
        gap-2.5

        overflow-hidden

        rounded-full

        border
        border-zinc-200/80
        dark:border-white/10

        bg-white/80
        dark:bg-white/5

        px-4
        py-2.5

        backdrop-blur-xl

        shadow-sm
        shadow-zinc-900/5
        dark:shadow-black/20

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-[1.04]

        hover:border-cyan-400/40

        hover:shadow-xl
        hover:shadow-cyan-500/15
        `,
        className
      )}
    >
      {/* ======================================================
          Gradient Hover Background
      ======================================================= */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-300

          group-hover:opacity-100

          bg-[linear-gradient(90deg,rgba(34,211,238,0.08),transparent,rgba(139,92,246,0.08))]
        "
      />

      {/* ======================================================
          Icon
      ======================================================= */}

      <span
        className="
          relative
          z-10

          flex
          h-8
          w-8

          items-center
          justify-center

          rounded-full

          bg-linear-to-br
          from-cyan-500/15
          to-violet-500/15

          ring-1
          ring-cyan-500/15

          transition-all
          duration-300

          group-hover:rotate-12
          group-hover:scale-110
        "
      >
        <Code2
          size={15}
          strokeWidth={2.3}
          className="
            text-cyan-600
            dark:text-cyan-300
          "
        />
      </span>

      {/* ======================================================
          Label
      ======================================================= */}

      <span
        className="
          relative
          z-10

          whitespace-nowrap

          text-sm
          font-semibold
          tracking-wide

          text-zinc-800
          dark:text-zinc-200

          transition-colors
          duration-300

          group-hover:text-cyan-700
          dark:group-hover:text-cyan-300
        "
      >
        {technology.name}
      </span>

      {/* ======================================================
          Shine Animation
      ======================================================= */}

      <span
        className="
          pointer-events-none

          absolute
          inset-0

          -translate-x-full

          bg-linear-to-r
          from-transparent
          via-white/40
          dark:via-white/20
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