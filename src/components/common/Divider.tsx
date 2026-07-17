import type { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Ultra Premium Divider Component
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Horizontal & Vertical
 * ✓ Premium Gradient Glow
 * ✓ Better Light/Dark Visibility
 * ✓ Responsive
 * ✓ Accessible
 * ✓ Production Ready
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
} as const;

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
      aria-hidden="true"
      className={cn(
        // Layout
        "relative shrink-0 overflow-hidden",

        // Better rendering
        "transform-gpu",

        spacingClasses[spacing],

        isHorizontal
          ? "h-px w-full"
          : "h-full w-px",

        // Variants
        variant === "default" && [
          "bg-slate-300/80",
          "dark:bg-slate-700/80",
        ],

        variant === "subtle" && [
          "bg-slate-200/50",
          "dark:bg-slate-700/40",
        ],

        variant === "gradient" &&
          (isHorizontal
            ? [
                "bg-linear-to-r",
                "from-transparent",
                "via-violet-500/50",
                "to-transparent",

                "shadow-[0_0_24px_rgba(139,92,246,0.18)]",
              ]
            : [
                "bg-linear-to-b",
                "from-transparent",
                "via-violet-500/50",
                "to-transparent",

                "shadow-[0_0_24px_rgba(139,92,246,0.18)]",
              ]),

        className
      )}
      {...props}
    >
      {variant === "gradient" && (
        <>
          {/* Premium Inner Highlight */}
          <div
            className={cn(
              "absolute inset-0",

              isHorizontal
                ? "bg-linear-to-r from-transparent via-white/35 to-transparent dark:via-white/15"
                : "bg-linear-to-b from-transparent via-white/35 to-transparent dark:via-white/15"
            )}
          />

          {/* Soft Ambient Glow */}
          <div
            className={cn(
              "absolute inset-0 opacity-60 blur-sm",

              isHorizontal
                ? "bg-linear-to-r from-transparent via-violet-400/25 to-transparent"
                : "bg-linear-to-b from-transparent via-violet-400/25 to-transparent"
            )}
          />
        </>
      )}
    </div>
  );
}

export default Divider;