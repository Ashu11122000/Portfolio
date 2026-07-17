import Container from "../common/Container";

import PersonalInfo from "./PersonalInfo";
import EducationCard from "./EducationCard";

/**
 * ==========================================================
 * About Section
 * ==========================================================
 *
 * Ultra Premium About Section
 *
 * Features
 * ----------
 * ✓ Aurora Background
 * ✓ Premium Glass Atmosphere
 * ✓ Grid Texture
 * ✓ Responsive Layout
 * ✓ Better Vertical Rhythm
 * ✓ Light & Dark Mode Optimized
 *
 * ==========================================================
 */

function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden py-28 sm:py-32 lg:py-40"
    >
      {/* ======================================================
          Premium Background
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        {/* Base Gradient */}

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-50/40 to-transparent dark:via-slate-950/30" />

        {/* Aurora Left */}

        <div
          className="
            absolute
            -left-40
            top-10
            h-136
            w-136
            rounded-full
            bg-indigo-500/15
            blur-[180px]
          "
        />

        {/* Aurora Right */}

        <div
          className="
            absolute
            -right-40
            top-1/3
            h-128
            w-lg
            rounded-full
            bg-fuchsia-500/15
            blur-[180px]
          "
        />

        {/* Bottom Glow */}

        <div
          className="
            absolute
            -bottom-48
            left-1/2
            h-168
            w-2xl
            -translate-x-1/2
            rounded-full
            bg-cyan-500/15
            blur-[220px]
          "
        />

        {/* Floating Accent */}

        <div
          className="
            absolute
            left-1/3
            top-20
            h-44
            w-44
            rounded-full
            bg-violet-500/10
            blur-[120px]
          "
        />

        {/* Extra Accent */}

        <div
          className="
            absolute
            bottom-24
            right-1/4
            h-36
            w-36
            rounded-full
            bg-sky-500/10
            blur-[100px]
          "
        />

        {/* Premium Grid Texture */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.04]
            dark:opacity-[0.06]

            bg-[linear-gradient(to_right,#94a3b81a_1px,transparent_1px),linear-gradient(to_bottom,#94a3b81a_1px,transparent_1px)]
            bg-size-[64px_64px]
          "
        />

        {/* Radial Fade */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(255,255,255,0.65)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_35%,rgba(2,6,23,0.85)_100%)]" />
      </div>

      {/* ======================================================
          Content
      ====================================================== */}

      <Container>
        <div
          className="
            relative
            z-10

            grid
            items-start

            gap-16

            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-24

            xl:gap-28
          "
        >
          {/* Left Column */}

          <div className="relative">
            <PersonalInfo />
          </div>

          {/* Right Column */}

          <div className="relative">
            <EducationCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;