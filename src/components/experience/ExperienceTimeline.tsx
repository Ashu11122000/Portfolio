import TimelineItem from "./TimelineItem";

import { experiences } from "../../data/experience";

/**
 * ==========================================================
 * Ultra Premium Experience Timeline
 * ==========================================================
 *
 * Displays the complete professional journey
 * with an elegant premium timeline layout.
 *
 * Features
 * ----------
 * ✓ Premium Aurora Background
 * ✓ Light & Dark Mode Optimized
 * ✓ Layered Ambient Effects
 * ✓ Better Vertical Rhythm
 * ✓ Responsive
 * ✓ Production Ready
 * ==========================================================
 */

function ExperienceTimeline() {
  return (
    <section
      aria-label="Professional Experience Timeline"
      className="
        relative
        overflow-hidden
        py-4
      "
    >
      {/* ======================================================
          Premium Background
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          overflow-hidden
        "
      >
        {/* Background Layer */}

        <div
          className="
            absolute
            inset-0

            bg-white
            dark:bg-transparent
          "
        />

        {/* Top Left Aurora */}

        <div
          className="
            absolute
            -left-40
            top-24

            h-112
            w-md

            rounded-full

            bg-violet-500/10

            blur-[170px]
          "
        />

        {/* Bottom Right Aurora */}

        <div
          className="
            absolute
            -right-40
            bottom-10

            h-128
            w-lg

            rounded-full

            bg-cyan-500/10

            blur-[180px]
          "
        />

        {/* Center Glow */}

        <div
          className="
            absolute

            left-1/2
            top-1/2

            h-72
            w-72

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-indigo-500/5

            blur-[130px]
          "
        />

        {/* Gradient Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.08),transparent_45%)]
          "
        />
      </div>

      {/* ======================================================
          Timeline Content
      ======================================================= */}

      <div
        className="
          relative

          mx-auto
          max-w-7xl

          space-y-16
          lg:space-y-24

          px-2
          sm:px-4
        "
      >
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;