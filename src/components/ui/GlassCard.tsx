import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * GlassCard Component
 * ==========================================================
 *
 * Ultra Premium Glassmorphism Card
 *
 * Features
 * ----------
 * ✓ Apple Inspired Glass
 * ✓ Layered Borders
 * ✓ Inner Highlight
 * ✓ Animated Gradient Glow
 * ✓ Premium Hover
 * ✓ Better Light/Dark Contrast
 * ✓ GPU Accelerated
 * ✓ Accessible
 * ✓ Tailwind CSS v4
 *
 * ==========================================================
 */

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

function GlassCard({
  children,
  className,
  hover = true,
  padding = "md",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "group relative isolate overflow-hidden",

        // Shape
        "rounded-4xl",

        // Glass
        "border border-white/40",
        "bg-white/70",
        "backdrop-blur-3xl",
        "supports-backdrop-filter:bg-white/60",

        // Dark
        "dark:border-white/10",
        "dark:bg-zinc-900/55",
        "dark:supports-backdrop-filter:bg-zinc-900/45",

        // Shadow
        "shadow-[0_10px_40px_rgba(15,23,42,0.08)]",
        "dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]",

        // Smooth Animation
        "transform-gpu will-change-transform",
        "transition-all duration-700 ease-out",

        hover && [
          "translate-y-0",
          "hover:-translate-y-2",
          "hover:scale-[1.02]",
          "hover:border-violet-400/40",
          "dark:hover:border-violet-400/30",
          "hover:shadow-[0_25px_80px_rgba(99,102,241,0.18)]",
          "dark:hover:shadow-[0_30px_90px_rgba(99,102,241,0.25)]",
        ],

        paddingClasses[padding],

        className
      )}
      {...props}
    >
      {/* -------------------------------------------------- */}
      {/* Animated Gradient Border */}
      {/* -------------------------------------------------- */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-4xl
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            inset-0
            rounded-4xl
            bg-linear-to-br
            from-violet-500/15
            via-cyan-400/10
            to-fuchsia-500/15
          "
        />
      </div>

      {/* -------------------------------------------------- */}
      {/* Glass Highlight */}
      {/* -------------------------------------------------- */}

      <div
        className="
          pointer-events-none
          absolute
          inset-px
          rounded-[calc(2rem-1px)]
          bg-linear-to-br
          from-white/40
          via-white/10
          to-transparent
          dark:from-white/10
          dark:via-white/3
        "
      />

      {/* -------------------------------------------------- */}
      {/* Top Shine */}
      {/* -------------------------------------------------- */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-linear-to-r
          from-transparent
          via-white/70
          to-transparent
          dark:via-white/20
        "
      />

      {/* -------------------------------------------------- */}
      {/* Violet Ambient Glow */}
      {/* -------------------------------------------------- */}

      <div
        className="
          pointer-events-none
          absolute
          -top-32
          -right-24
          h-72
          w-72
          rounded-full
          bg-violet-500/15
          blur-[110px]
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
          group-hover:scale-110
        "
      />

      {/* -------------------------------------------------- */}
      {/* Cyan Ambient Glow */}
      {/* -------------------------------------------------- */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-24
          h-72
          w-72
          rounded-full
          bg-cyan-500/15
          blur-[110px]
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
          group-hover:scale-110
        "
      />

      {/* -------------------------------------------------- */}
      {/* Premium Shine Sweep */}
      {/* -------------------------------------------------- */}

      <div
        className="
          pointer-events-none
          absolute
          -left-full
          top-0
          h-full
          w-1/2
          skew-x-[-24deg]
          bg-linear-to-r
          from-transparent
          via-white/35
          to-transparent
          opacity-0
          transition-all
          duration-1000
          group-hover:left-[140%]
          group-hover:opacity-100
          dark:via-white/10
        "
      />

      {/* -------------------------------------------------- */}
      {/* Bottom Inner Shadow */}
      {/* -------------------------------------------------- */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-24
          bg-linear-to-t
          from-black/5
          to-transparent
          dark:from-black/25
        "
      />

      {/* -------------------------------------------------- */}
      {/* Content */}
      {/* -------------------------------------------------- */}

      <div className="relative z-20 text-zinc-800 dark:text-zinc-100">
        {children}
      </div>
    </div>
  );
}

export default GlassCard;