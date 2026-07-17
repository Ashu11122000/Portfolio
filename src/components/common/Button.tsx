import * as React from "react";
import { type VariantProps } from "class-variance-authority";

import { buttonVariants } from "./buttonVariants";
import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Ultra Premium Button Component
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Multiple Variants
 * ✓ Multiple Sizes
 * ✓ Loading State
 * ✓ Left & Right Icons
 * ✓ Full Width Support
 * ✓ Keyboard Accessible
 * ✓ Theme Aware
 * ✓ Smooth Animations
 * ✓ Production Ready
 * ==========================================================
 */

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;
}

function LoadingSpinner() {
  return (
    <svg
      className="h-4 w-4 shrink-0 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.25"
      />

      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Button({
  children,
  className,
  variant,
  size,
  fullWidth,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
        }),

        // Better rendering
        "transform-gpu",

        // Smooth icon animation
        "[&>span]:transition-all",
        "[&>span]:duration-300",

        className
      )}
      {...props}
    >
      {/* Left Side */}
      {loading ? (
        <LoadingSpinner />
      ) : leftIcon ? (
        <span
          aria-hidden="true"
          className="flex shrink-0 items-center justify-center"
        >
          {leftIcon}
        </span>
      ) : null}

      {/* Label */}
      <span className="inline-flex items-center justify-center whitespace-nowrap">
        {children}
      </span>

      {/* Right Side */}
      {!loading && rightIcon ? (
        <span
          aria-hidden="true"
          className="flex shrink-0 items-center justify-center"
        >
          {rightIcon}
        </span>
      ) : null}
    </button>
  );
}

export default Button;