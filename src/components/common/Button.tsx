import * as React from "react";
import { type VariantProps } from "class-variance-authority";

import { buttonVariants } from "./buttonVariants";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Button Component
 * ==========================================================
 *
 * A reusable button component used across the portfolio.
 *
 * Features
 * ----------
 * ✓ Multiple Variants
 * ✓ Multiple Sizes
 * ✓ Loading State
 * ✓ Left & Right Icons
 * ✓ Full Width Option
 * ✓ Disabled State
 * ✓ Accessible
 * ✓ Tailwind + TypeScript
 *
 * ==========================================================
 */

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;
}

function Button({
  children,
  className,
  variant,
  size,
  fullWidth,
  loading = false,
  disabled,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg
          className="h-4 w-4 animate-spin shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            opacity="0.2"
          />

          <path
            fill="currentColor"
            d="M22 12a10 10 0 0 1-10 10V18a6 6 0 0 0 6-6h4Z"
          />
        </svg>
      ) : (
        leftIcon && (
          <span className="flex items-center justify-center shrink-0">
            {leftIcon}
          </span>
        )
      )}

      <span className="flex items-center justify-center">{children}</span>

      {!loading && rightIcon && (
        <span className="flex items-center justify-center shrink-0">
          {rightIcon}
        </span>
      )}
    </button>
  );
}

export default Button;
