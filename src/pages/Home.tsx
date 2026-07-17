import Hero from "../components/hero/Hero";

import AboutPreview from "../components/about/AboutPreview";

import FeaturedExperience from "../components/experience/FeaturedExperience";

import FeaturedProjects from "../components/projects/FeaturedProjects";

import FeaturedCertifications from "../components/certifications/FeaturedCertifications";

import AnimatedBackground from "../components/ui/AnimatedBackground";
import FloatingShapes from "../components/ui/FloatingShapes";

/**
 * ==========================================================
 * Home Page
 * ==========================================================
 *
 * Ultra Premium Portfolio Landing Page
 *
 * Features
 * ----------
 * ✓ Apple Inspired Layout
 * ✓ Global Animated Background
 * ✓ Floating Ambient Shapes
 * ✓ Smooth Section Flow
 * ✓ Responsive
 * ✓ Light & Dark Theme
 *
 * Sections
 * ----------
 * ✓ Hero
 * ✓ About Preview
 * ✓ Featured Experience
 * ✓ Featured Projects
 * ✓ Featured Certifications
 *
 * ==========================================================
 */

function Home() {
  return (
    <main
      className="
        relative
        isolate
        overflow-x-hidden
      "
    >
      {/* =======================================================
          Premium Background
      ======================================================= */}

      <AnimatedBackground />

      <FloatingShapes />

      {/* =======================================================
          Decorative Grid
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.025]
          dark:opacity-[0.05]
          bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          bg-size-[72px_72px]
          text-slate-900
          dark:text-white
        "
      />

      {/* =======================================================
          Sections
      ======================================================= */}

      <div className="relative z-10">
        <Hero />

        <AboutPreview />

        <FeaturedExperience />

        <FeaturedProjects />

        <FeaturedCertifications />
      </div>
    </main>
  );
}

export default Home;