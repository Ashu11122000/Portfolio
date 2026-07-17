import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Ultra Premium Container Component
 * ==========================================================
 *
 * A reusable responsive wrapper that keeps every section
 * perfectly aligned across the portfolio.
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Responsive Layout
 * ✓ Large Screen Optimized
 * ✓ Comfortable Side Padding
 * ✓ Ultra-wide Display Support
 * ✓ TypeScript
 * ✓ Reusable
 * ==========================================================
 */

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        // Layout
        "relative mx-auto w-full",

        // Maximum content width
        "max-w-screen-2xl",

        // Better box model
        "box-border",

        // Responsive horizontal padding
        "px-4",
        "sm:px-6",
        "md:px-8",
        "lg:px-10",
        "xl:px-12",
        "2xl:px-16",

        // Optional support if Tailwind config includes 3xl
        "3xl:px-20",

        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;