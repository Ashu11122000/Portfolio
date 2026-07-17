import { cva } from "class-variance-authority";

/**
 * ==========================================================
 * Ultra Premium Button Variants
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Premium Glassmorphism
 * ✓ Luxury Gradients
 * ✓ Better Light/Dark Contrast
 * ✓ GPU Accelerated Animations
 * ✓ Accessible Focus States
 * ✓ Premium Hover Glow
 * ✓ Smooth Active Press
 * ✓ Production Ready
 * ==========================================================
 */

export const buttonVariants = cva(
  [
    // Layout
    "relative inline-flex items-center justify-center gap-2",
    "overflow-hidden whitespace-nowrap",

    // Shape
    "rounded-2xl",

    // Typography
    "font-semibold tracking-wide",

    // Glass
    "backdrop-blur-2xl",

    // Border
    "border",

    // Shadow
    "shadow-lg",

    // Performance
    "transform-gpu",
    "will-change-transform",

    // Animation
    "transition-all duration-300 ease-out",

    // Interaction
    "select-none",

    // Focus
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-indigo-500/50",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-white",
    "dark:focus-visible:ring-offset-slate-950",

    // Disabled
    "disabled:pointer-events-none",
    "disabled:opacity-60",
    "disabled:saturate-50",
    "disabled:shadow-none",

    // Active
    "active:scale-[0.97]",

    // Hover
    "hover:-translate-y-1",
    "hover:scale-[1.02]",

    // Inner Highlight
    "before:absolute",
    "before:inset-0",
    "before:rounded-[inherit]",
    "before:bg-gradient-to-b",
    "before:from-white/15",
    "before:to-transparent",
    "before:pointer-events-none",
  ],

  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-r",
          "from-indigo-600",
          "via-violet-600",
          "to-fuchsia-600",

          "text-white",

          "border-indigo-500/30",

          "shadow-indigo-500/30",

          "hover:shadow-2xl",
          "hover:shadow-violet-500/40",
          "hover:brightness-110",

          "dark:border-indigo-400/20",
        ],

        secondary: [
          "bg-white/80",
          "dark:bg-slate-900/70",

          "text-slate-800",
          "dark:text-slate-100",

          "border-slate-200/80",
          "dark:border-slate-700/70",

          "shadow-slate-300/25",
          "dark:shadow-black/30",

          "hover:bg-white",
          "dark:hover:bg-slate-800",

          "hover:shadow-xl",
        ],

        outline: [
          "bg-transparent",

          "text-slate-700",
          "dark:text-slate-200",

          "border-slate-300",
          "dark:border-slate-700",

          "hover:bg-slate-100/80",
          "dark:hover:bg-slate-800/70",

          "hover:border-indigo-500",
          "hover:text-indigo-600",

          "dark:hover:text-indigo-300",
          "dark:hover:border-indigo-400",
        ],

        ghost: [
          "bg-transparent",

          "text-slate-700",
          "dark:text-slate-200",

          "border-transparent",

          "hover:bg-slate-100/80",
          "dark:hover:bg-slate-800/70",

          "hover:text-indigo-600",
          "dark:hover:text-indigo-300",
        ],

        danger: [
          "bg-gradient-to-r",
          "from-red-600",
          "via-rose-600",
          "to-pink-600",

          "text-white",

          "border-red-500/30",

          "shadow-red-500/30",

          "hover:shadow-2xl",
          "hover:shadow-red-500/40",
          "hover:brightness-110",
        ],
      },

      size: {
        sm: "h-9 px-4 text-sm",

        md: "h-11 px-6 text-sm",

        lg: "h-12 px-8 text-base",

        xl: "h-14 px-10 text-lg",

        icon: "h-11 w-11 p-0",
      },

      fullWidth: {
        true: "w-full",

        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);