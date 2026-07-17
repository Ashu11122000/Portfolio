import { Moon, Sun } from "lucide-react";

import useTheme from "../../hooks/useTheme";
import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Ultra Premium Theme Toggle
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Light / Dark Mode
 * ✓ Premium Glassmorphism
 * ✓ Smooth Icon Animation
 * ✓ Accessible
 * ✓ Keyboard Friendly
 * ✓ Theme Aware
 * ✓ Production Ready
 * ==========================================================
 */

interface ThemeToggleProps {
  className?: string;
}

function ThemeToggle({ className }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  const handleToggle = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    toggleTheme();

    // Remove mouse focus after clicking.
    event.currentTarget.blur();
  };

  return (
    <button
      type="button"
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      aria-pressed={isDark}
      title={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      onClick={handleToggle}
      className={cn(
        // Layout
        "group relative inline-flex h-11 w-11 items-center justify-center",
        "overflow-hidden rounded-2xl",

        // Glass
        "bg-white/80 dark:bg-slate-900/70",
        "backdrop-blur-3xl",

        // Border
        "border border-slate-200/70",
        "dark:border-white/10",

        // Shadow
        "shadow-lg shadow-slate-300/20",
        "dark:shadow-black/30",

        // Performance
        "transform-gpu will-change-transform",

        // Animation
        "transition-all duration-300 ease-out",

        // Hover
        "hover:-translate-y-1",
        "hover:scale-105",
        "hover:border-violet-400/40",
        "hover:shadow-2xl",
        "hover:shadow-violet-500/25",

        // Accessibility
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-violet-500/50",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-white",
        "dark:focus-visible:ring-offset-slate-950",

        className
      )}
    >
      {/* Glass Highlight */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[inherit]
          bg-linear-to-b
          from-white/20
          via-transparent
          to-transparent
        "
      />

      {/* Animated Shimmer */}
      <span
        className="
          pointer-events-none
          absolute
          inset-y-0
          -left-1/2
          w-1/2
          skew-x-[-20deg]
          bg-linear-to-r
          from-transparent
          via-white/25
          to-transparent
          opacity-0
          transition-all
          duration-700
          group-hover:left-[125%]
          group-hover:opacity-100
        "
      />

      {/* Ambient Glow */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          bg-violet-500/20
          blur-xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <span
        aria-live="polite"
        className="relative z-10 flex items-center justify-center"
      >
        {isDark ? (
          <Sun
            size={20}
            className="
              text-amber-400
              transition-all
              duration-500
              ease-out
              group-hover:rotate-180
              group-hover:scale-110
            "
          />
        ) : (
          <Moon
            size={20}
            className="
              text-slate-700
              dark:text-slate-200
              transition-all
              duration-500
              ease-out
              group-hover:-rotate-12
              group-hover:scale-110
            "
          />
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;