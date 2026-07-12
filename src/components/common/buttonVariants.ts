import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "relative overflow-hidden",
    "rounded-2xl",
    "font-semibold tracking-wide",
    "transition-all duration-300 ease-out",
    "select-none",
    "backdrop-blur-xl",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-indigo-500/60",
    "focus:ring-offset-2",
    "focus:ring-offset-white",
    "dark:focus:ring-offset-slate-950",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "disabled:shadow-none",
    "active:scale-[0.98]",
    "hover:-translate-y-0.5",
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
          "border border-white/10",
          "shadow-lg",
          "shadow-indigo-500/25",
          "hover:shadow-2xl",
          "hover:shadow-violet-500/35",
          "hover:brightness-110",
          "before:absolute",
          "before:inset-0",
          "before:bg-gradient-to-r",
          "before:from-white/20",
          "before:via-transparent",
          "before:to-transparent",
          "before:opacity-0",
          "before:transition-opacity",
          "before:duration-300",
          "hover:before:opacity-100",
        ],

        secondary: [
          "border",
          "border-white/20",
          "bg-white/70",
          "text-slate-900",
          "backdrop-blur-xl",
          "shadow-lg",
          "shadow-slate-200/40",
          "hover:bg-white/90",
          "hover:shadow-xl",
          "dark:bg-slate-900/60",
          "dark:text-white",
          "dark:border-white/10",
          "dark:hover:bg-slate-800/70",
          "dark:shadow-black/20",
        ],

        outline: [
          "border",
          "border-slate-300/70",
          "bg-transparent",
          "text-slate-700",
          "hover:bg-slate-100/70",
          "hover:border-indigo-400",
          "hover:text-indigo-600",
          "dark:border-slate-700",
          "dark:text-slate-200",
          "dark:hover:bg-slate-800/70",
          "dark:hover:border-indigo-400",
          "dark:hover:text-indigo-300",
        ],

        ghost: [
          "bg-transparent",
          "text-slate-700",
          "hover:bg-slate-100/70",
          "hover:text-indigo-600",
          "dark:text-slate-200",
          "dark:hover:bg-slate-800/70",
          "dark:hover:text-indigo-300",
        ],

        danger: [
          "bg-gradient-to-r",
          "from-red-600",
          "to-rose-600",
          "text-white",
          "border border-red-400/20",
          "shadow-lg",
          "shadow-red-500/25",
          "hover:shadow-xl",
          "hover:shadow-red-500/35",
          "hover:brightness-110",
        ],
      },

      size: {
        sm: "h-9 px-4 text-sm",

        md: "h-11 px-6 text-sm",

        lg: "h-13 px-8 text-base",

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