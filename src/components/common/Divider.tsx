import type { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Divider Component
 * ==========================================================
 *
 * A reusable divider for separating sections and content.
 *
 * Features
 * ----------
 * ✓ Horizontal Divider
 * ✓ Vertical Divider
 * ✓ Gradient Variants
 * ✓ Configurable Spacing
 * ✓ Dark / Light Theme
 * ✓ Responsive
 * ✓ TypeScript
 * ✓ Reusable
 *
 * Used In
 * ----------
 * Experience
 * Projects
 * Resume
 * Contact
 * About
 * Services
 * ==========================================================
 */

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";

  variant?: "default" | "gradient" | "subtle";

  spacing?: "none" | "sm" | "md" | "lg";
}

const spacingClasses = {
  none: "",

  sm: "my-3",

  md: "my-6",

  lg: "my-10",
};

function Divider({
  className,
  orientation = "horizontal",
  variant = "gradient",
  spacing = "md",
  ...props
}: DividerProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden",

        spacingClasses[spacing],

        isHorizontal ? "h-px w-full" : "h-full w-px",

        variant === "default" && [
          "bg-slate-200 dark:bg-slate-700",
        ],

        variant === "subtle" && [
          "bg-slate-200/50 dark:bg-slate-700/40",
        ],

        variant === "gradient" &&
          (isHorizontal
            ? [
                "bg-gradient-to-r",
                "from-transparent",
                "via-violet-500/40",
                "to-transparent",
                "shadow-[0_0_18px_rgba(139,92,246,0.18)]",
              ]
            : [
                "bg-gradient-to-b",
                "from-transparent",
                "via-violet-500/40",
                "to-transparent",
                "shadow-[0_0_18px_rgba(139,92,246,0.18)]",
              ]),

        className
      )}
      aria-hidden="true"
      {...props}
    >
      {variant === "gradient" && (
        <div
          className={cn(
            "absolute inset-0 opacity-70",

            isHorizontal
              ? "bg-gradient-to-r from-transparent via-white/25 to-transparent dark:via-white/10"
              : "bg-gradient-to-b from-transparent via-white/25 to-transparent dark:via-white/10"
          )}
        />
      )}
    </div>
  );
}

export default Divider;