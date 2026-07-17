import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Ultra Premium Card Component
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Premium Glassmorphism
 * ✓ Theme Aware
 * ✓ Better Light/Dark Contrast
 * ✓ Aurora Glow
 * ✓ Gradient Border Highlight
 * ✓ Animated Shine
 * ✓ GPU Accelerated Hover
 * ✓ Focus Within Support
 * ✓ Forward Ref
 * ✓ Production Ready
 * ==========================================================
 */

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      children,
      hover = true,
      glass = true,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base
          "group relative overflow-hidden rounded-3xl",

          // Spacing
          "p-6",

          // Theme
          glass
            ? [
                "bg-white/80",
                "dark:bg-slate-900/70",
                "backdrop-blur-3xl",
              ]
            : [
                "bg-white",
                "dark:bg-slate-900",
              ],

          // Border
          "border",
          "border-slate-200/70",
          "dark:border-white/10",

          // Shadow
          "shadow-xl",
          "shadow-slate-300/15",
          "dark:shadow-black/40",

          // Performance
          "transform-gpu",
          "will-change-transform",

          // Transition
          "transition-all duration-500 ease-out",

          // Accessibility
          "focus-within:ring-2",
          "focus-within:ring-violet-500/30",

          hover && [
            "hover:-translate-y-2",
            "hover:scale-[1.02]",

            "hover:border-violet-400/40",

            "hover:shadow-2xl",
            "hover:shadow-violet-500/20",

            "hover:brightness-[1.02]",
          ],

          className
        )}
        {...props}
      >
        {/* Premium Border Highlight */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[inherit]
            bg-linear-to-br
            from-white/40
            via-transparent
            to-transparent
            dark:from-white/10
          "
        />

        {/* Aurora Glow */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500",
            hover && "group-hover:opacity-100"
          )}
        >
          <div
            className="
              absolute
              -top-28
              -right-20
              h-72
              w-72
              rounded-full
              bg-violet-500/15
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-32
              -left-20
              h-72
              w-72
              rounded-full
              bg-cyan-400/15
              blur-3xl
            "
          />
        </div>

        {/* Animated Shine */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
            rounded-[inherit]
          "
        >
          <div
            className="
              absolute
              inset-y-0
              -left-1/2
              w-1/2
              skew-x-[-20deg]
              bg-linear-to-r
              from-transparent
              via-white/20
              to-transparent
              opacity-0
              transition-all
              duration-700
              group-hover:left-[125%]
              group-hover:opacity-100
              dark:via-white/10
            "
          />
        </div>

        {/* Noise Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.03]
            mix-blend-overlay
          "
        />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;