import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Premium Badge Component
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Ultra Premium Glassmorphism
 * ✓ Beautiful Gradient Variants
 * ✓ Perfect Light & Dark Mode Contrast
 * ✓ Accessible Focus Ring
 * ✓ Premium Hover Glow
 * ✓ Smooth GPU Accelerated Animations
 * ✓ Responsive Typography
 * ✓ Reusable
 * ==========================================================
 */

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;

  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "outline";

  size?: "sm" | "md" | "lg";
}

const variantClasses = {
  default: [
    "bg-gradient-to-br",
    "from-white/90",
    "via-slate-50/80",
    "to-slate-100/70",

    "dark:from-slate-800/90",
    "dark:via-slate-900/80",
    "dark:to-slate-950/80",

    "text-slate-800",
    "dark:text-slate-100",

    "border-white/70",
    "dark:border-white/10",

    "shadow-slate-300/30",
  ],

  primary: [
    "bg-gradient-to-br",
    "from-indigo-500/25",
    "via-violet-500/20",
    "to-fuchsia-500/20",

    "text-indigo-800",
    "dark:text-indigo-100",

    "border-indigo-400/35",

    "shadow-indigo-500/30",
  ],

  secondary: [
    "bg-gradient-to-br",
    "from-violet-500/25",
    "via-fuchsia-500/20",
    "to-pink-500/20",

    "text-violet-800",
    "dark:text-violet-100",

    "border-violet-400/35",

    "shadow-violet-500/30",
  ],

  success: [
    "bg-gradient-to-br",
    "from-emerald-500/25",
    "via-green-500/20",
    "to-teal-500/20",

    "text-emerald-800",
    "dark:text-emerald-100",

    "border-emerald-400/35",

    "shadow-emerald-500/30",
  ],

  warning: [
    "bg-gradient-to-br",
    "from-amber-400/30",
    "via-orange-400/20",
    "to-yellow-400/20",

    "text-amber-900",
    "dark:text-amber-100",

    "border-amber-400/35",

    "shadow-amber-500/30",
  ],

  danger: [
    "bg-gradient-to-br",
    "from-red-500/25",
    "via-rose-500/20",
    "to-pink-500/20",

    "text-red-800",
    "dark:text-red-100",

    "border-red-400/35",

    "shadow-red-500/30",
  ],

  outline: [
    "bg-white/70",
    "dark:bg-slate-900/60",

    "text-slate-800",
    "dark:text-slate-100",

    "border-slate-300/70",
    "dark:border-slate-700/70",

    "backdrop-blur-xl",
  ],
} as const;

const sizeClasses = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
  lg: "px-5 py-2 text-base",
} as const;

function Badge({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        // Layout
        "inline-flex items-center justify-center",
        "whitespace-nowrap rounded-full",

        // Typography
        "font-semibold tracking-wide",

        // Glassmorphism
        "backdrop-blur-2xl",
        "border",

        // Shadows
        "shadow-lg shadow-black/5",
        "dark:shadow-black/30",

        // Highlight
        "ring-1 ring-white/20 dark:ring-white/10",

        // Animation
        "transition-all duration-300 ease-out",
        "transform-gpu",

        // Hover
        "hover:-translate-y-1",
        "hover:scale-105",
        "hover:shadow-2xl",
        "hover:brightness-110",

        // Active
        "active:scale-95",

        // Accessibility
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-indigo-500/40",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-white",
        "dark:focus-visible:ring-offset-slate-950",

        "select-none",

        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;