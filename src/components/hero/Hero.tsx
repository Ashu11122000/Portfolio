import Container from "../common/Container";

import AnimatedBackground from "../ui/AnimatedBackground";
import FloatingShapes from "../ui/FloatingShapes";

import HeroContent from "./HeroContent";
import HeroCodeCard from "./HeroCodeCard";
import HeroStats from "./HeroStats";

/**
 * =============================================================================
 * Portfolio Website
 * =============================================================================
 * File: Hero.tsx
 * -----------------------------------------------------------------------------
 * Ultra Premium Hero Section
 * -----------------------------------------------------------------------------
 *
 * Features
 * -----------------------------------------------------------------------------
 * ✓ Full Viewport Hero
 * ✓ Premium Glassmorphism Ready
 * ✓ Animated Background
 * ✓ Floating Decorative Shapes
 * ✓ Multi-layer Gradient Lighting
 * ✓ Better Light/Dark Theme Support
 * ✓ Responsive Two Column Layout
 * ✓ Smooth Section Transition
 * ✓ Improved Vertical Rhythm
 * =============================================================================
 */

function Hero() {
  return (
    <section
      className="
        relative
        isolate
        flex
        min-h-screen
        items-center
        overflow-hidden
        pt-28
        pb-20
        sm:pt-32
        lg:pt-36
        lg:pb-28
      "
    >
      {/* ------------------------------------------------------------------ */}
      {/* Animated Background */}
      {/* ------------------------------------------------------------------ */}
      <AnimatedBackground />

      {/* Floating Decorative Elements */}
      <FloatingShapes />

      {/* ------------------------------------------------------------------ */}
      {/* Premium Ambient Lighting */}
      {/* ------------------------------------------------------------------ */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.14),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.10),transparent_42%)]
          dark:bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.18),transparent_45%)]
        "
      />

      {/* Top Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-120
          w-120
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[140px]
          dark:bg-primary/20
        "
      />

      {/* Bottom Accent Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-48
          -right-32
          -z-10
          h-96
          w-[24rem]
          rounded-full
          bg-cyan-400/10
          blur-[120px]
          dark:bg-cyan-400/20
        "
      />

      {/* Top Fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-32
          bg-linear-to-b
          from-background
          via-background/50
          to-transparent
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-linear-to-t
          from-background
          via-background/60
          to-transparent
        "
      />

      {/* ------------------------------------------------------------------ */}
      {/* Main Content */}
      {/* ------------------------------------------------------------------ */}
      <Container className="relative z-10">
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[1.15fr_0.85fr]
            xl:gap-24
          "
        >
          {/* Left Side */}
          <HeroContent />

          {/* Right Side */}
          <HeroCodeCard />
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Statistics */}
        {/* ------------------------------------------------------------------ */}
        <div className="mt-20 sm:mt-24 lg:mt-28">
          <HeroStats />
        </div>
      </Container>
    </section>
  );
}

export default Hero;