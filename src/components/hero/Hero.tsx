import Container from "../common/Container";

import AnimatedBackground from "../ui/AnimatedBackground";
import FloatingShapes from "../ui/FloatingShapes";

import HeroContent from "./HeroContent";
import HeroCodeCard from "./HeroCodeCard";
import HeroStats from "./HeroStats";

/**
 * ==========================================================
 * Hero Section
 * ==========================================================
 *
 * Ultra Premium Landing Section
 *
 * Features
 * ----------
 * ✓ Full Screen Layout
 * ✓ Glassmorphism Ready
 * ✓ Animated Background
 * ✓ Floating Shapes
 * ✓ Responsive Two Column Layout
 * ✓ Premium Spacing
 * ✓ Hero Statistics
 */

function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        pt-28
        pb-20
      "
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Floating Decorative Shapes */}
      <FloatingShapes />

      {/* Soft Gradient Overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_40%)]
        "
      />

      <Container className="relative z-10">
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[1.15fr_0.85fr]
          "
        >
          {/* Left Content */}
          <HeroContent />

          {/* Right Showcase */}
          <HeroCodeCard />
        </div>

        {/* Statistics */}
        <div className="mt-24">
          <HeroStats />
        </div>
      </Container>
    </section>
  );
}

export default Hero;