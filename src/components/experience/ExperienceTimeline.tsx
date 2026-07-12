import TimelineItem from "./TimelineItem";

import { experiences } from "../../data/experience";

/**
 * ==========================================================
 * Ultra Premium Experience Timeline
 * ==========================================================
 *
 * Displays the complete professional journey
 * with a clean, premium timeline layout.
 *
 * Features
 * ----------
 * ✓ Responsive
 * ✓ Timeline Ready
 * ✓ Aurora Background
 * ✓ Better Vertical Rhythm
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
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-[-180px]
            top-40
            h-80
            w-80
            rounded-full
            bg-violet-500/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-[-150px]
            bottom-20
            h-96
            w-96
            rounded-full
            bg-cyan-500/8
            blur-[160px]
          "
        />
      </div>

      {/* Timeline */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          space-y-16
          lg:space-y-24
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