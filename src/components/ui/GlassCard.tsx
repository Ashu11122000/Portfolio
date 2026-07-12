import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * GlassCard Component
 * ==========================================================
 *
 * A reusable premium glassmorphism card.
 *
 * Features
 * ----------
 * ✓ Glass Effect
 * ✓ Dark Mode
 * ✓ Hover Animation
 * ✓ Optional Hover
 * ✓ Optional Padding
 * ✓ Rounded Corners
 * ✓ Reusable
 * ✓ TypeScript
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
        "group relative overflow-hidden",

        "rounded-3xl",

        "border border-white/20",

        "bg-white/60",
        "backdrop-blur-3xl",

        "ring-1 ring-white/10",

        "shadow-xl shadow-slate-300/15",
        "dark:bg-slate-900/50",
        "dark:border-white/10",
        "dark:ring-white/5",
        "dark:shadow-black/30",

        "transition-all duration-500 ease-out",

        hover && [
          "hover:-translate-y-2",
          "hover:scale-[1.015]",
          "hover:border-violet-400/40",
          "hover:shadow-2xl",
          "hover:shadow-violet-500/20",
        ],

        paddingClasses[padding],

        className
      )}
      {...props}
    >
      {/* Glass Shine */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-br
          from-white/25
          via-transparent
          to-transparent
        "
      />

      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-24
          -right-20
          h-56
          w-56
          rounded-full
          bg-violet-500/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-20
          h-56
          w-56
          rounded-full
          bg-cyan-500/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Premium Shine Sweep */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-white/10
          via-transparent
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default GlassCard;