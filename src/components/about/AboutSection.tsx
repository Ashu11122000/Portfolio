import Container from "../common/Container";

import PersonalInfo from "./PersonalInfo";
import EducationCard from "./EducationCard";

/**
 * ==========================================================
 * About Section Component
 * ==========================================================
 *
 * Main About section of the portfolio.
 *
 * Responsibilities
 * ----------------
 * ✓ Combines Personal Information
 * ✓ Displays Education Timeline
 * ✓ Responsive Two-Column Layout
 * ✓ Premium Spacing
 * ✓ Glassmorphism Ready
 *
 * Layout
 * ------
 *
 * ------------------------------
 * Personal Info | Education
 * ------------------------------
 *
 * Mobile
 * -------
 * Personal Info
 * Education
 *
 * ==========================================================
 */

function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* ==========================
          Premium Background Glow
      =========================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Left Glow */}
        <div
          className="
            absolute
            -left-32
            top-16
            h-[32rem]
            w-[32rem]
            rounded-full
            bg-indigo-500/10
            blur-[150px]
          "
        />

        {/* Right Glow */}
        <div
          className="
            absolute
            -right-32
            top-1/3
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-fuchsia-500/10
            blur-[150px]
          "
        />

        {/* Bottom Center Glow */}
        <div
          className="
            absolute
            bottom-[-10rem]
            left-1/2
            h-[40rem]
            w-[40rem]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />

        {/* Accent Orb */}
        <div
          className="
            absolute
            right-1/4
            top-12
            h-40
            w-40
            rounded-full
            bg-violet-500/8
            blur-[100px]
          "
        />
      </div>

      <Container>
        <div
          className="
            grid
            items-start
            gap-16
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* Left Column */}
          <PersonalInfo />

          {/* Right Column */}
          <EducationCard />
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;