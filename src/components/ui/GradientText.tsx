import type { ReactNode } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * GradientText Component
 * ==========================================================
 *
 * Ultra Premium Gradient Typography
 *
 * Features
 * ----------
 * ✓ Apple / Linear Inspired
 * ✓ Rich Multi-Color Gradient
 * ✓ Premium Hover Shine
 * ✓ Better Light & Dark Visibility
 * ✓ Smooth GPU Animation
 * ✓ Reusable
 * ✓ Tailwind CSS v4
 *
 * ==========================================================
 */

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

function GradientText({
  children,
  className,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "group relative inline-flex",

        // Typography
        "font-inherit",
        "tracking-inherit",
        "leading-[inherit]",
        "subpixel-antialiased",

        // Gradient
        "bg-size-[250%_250%]",
        "bg-linear-to-r",

        // Light
        "from-violet-700",
        "via-fuchsia-600",
        "via-45%",
        "to-cyan-600",

        // Dark
        "dark:from-violet-300",
        "dark:via-fuchsia-300",
        "dark:to-cyan-300",

        // Text
        "bg-clip-text",
        "text-transparent",

        // GPU
        "transform-gpu",
        "will-change-transform",

        // Animation
        "transition-all",
        "duration-500",
        "ease-out",

        "hover:scale-[1.02]",

        // Glow
        "drop-shadow-[0_2px_10px_rgba(124,58,237,0.22)]",
        "dark:drop-shadow-[0_5px_24px_rgba(168,85,247,0.38)]",

        className
      )}
    >
      {children}

      {/* Hover Shine */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -left-full
          bg-linear-to-r
          from-transparent
          via-white/45
          to-transparent
          opacity-0
          skew-x-[-24deg]
          transition-all
          duration-1000
          group-hover:left-[140%]
          group-hover:opacity-100
          dark:via-white/20
        "
      />
    </span>
  );
}

export default GradientText;