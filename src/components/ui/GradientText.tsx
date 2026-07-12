import type { ReactNode } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Ultra Premium Gradient Text
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ Apple / Linear Inspired
 * ✓ Ultra Premium Gradient
 * ✓ Light & Dark Theme Support
 * ✓ Smooth Gradient Animation
 * ✓ Soft Glow
 * ✓ Responsive
 * ✓ Reusable
 * ✓ Tailwind CSS v4
 *
 * Used By
 * ----------
 * - Hero
 * - Section Titles
 * - Featured Cards
 * - Anywhere Premium Text is Needed
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
        "relative inline-block",

        /* Premium Gradient */

        "bg-[length:200%_200%]",

        "bg-gradient-to-r",

        "from-violet-600",
        "via-fuchsia-500",
        "via-45%",
        "to-cyan-500",

        "dark:from-violet-300",
        "dark:via-fuchsia-300",
        "dark:to-cyan-300",

        /* Gradient Text */

        "bg-clip-text",
        "text-transparent",

        /* Premium Typography */

        "font-inherit",
        "tracking-inherit",
        "antialiased",

        /* Smooth Animation */

        "transition-all",
        "duration-500",

        "hover:scale-[1.015]",

        /* Premium Glow */

        "drop-shadow-[0_2px_10px_rgba(139,92,246,0.20)]",

        "dark:drop-shadow-[0_4px_22px_rgba(139,92,246,0.40)]",

        className
      )}
    >
      {children}
    </span>
  );
}

export default GradientText;