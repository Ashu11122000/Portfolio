import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Container Component
 * ==========================================================
 *
 * A reusable responsive wrapper used throughout the
 * portfolio to keep all sections aligned.
 *
 * Features
 * ----------
 * ✓ Responsive Width
 * ✓ Max Width
 * ✓ Horizontal Padding
 * ✓ Custom Class Support
 * ✓ TypeScript
 *
 * Example
 * ----------
 * <Container>
 *   <Hero />
 * </Container>
 *
 * <Container className="py-20">
 *   <AboutSection />
 * </Container>
 *
 * ==========================================================
 */

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full",
        "max-w-[90rem]",
        "box-border",
        "px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;