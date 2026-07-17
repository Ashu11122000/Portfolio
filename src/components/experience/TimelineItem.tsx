import {
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

import ExperienceCard from "./ExperienceCard";

import type { Experience } from "../../types/experience";

/**
 * ==========================================================
 * Ultra Premium Timeline Item
 * ==========================================================
 *
 * Premium reusable timeline item.
 *
 * Features
 * ----------
 * ✓ Ultra Premium Glass Timeline
 * ✓ Aurora Background
 * ✓ Better Light / Dark Mode
 * ✓ Premium Timeline Node
 * ✓ Responsive
 * ✓ Production Ready
 * ==========================================================
 */

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

function TimelineItem({
  experience,
  isLast,
}: TimelineItemProps) {
  return (
    <div
      className="
        group
        relative

        grid
        gap-10

        md:grid-cols-[110px_1fr]

        lg:gap-14
      "
    >
      {/* ======================================================
          Desktop Timeline
      ======================================================= */}

      <div
        className="
          relative

          hidden

          justify-center

          md:flex
        "
      >
        {/* Timeline Line */}

        {!isLast && (
          <>
            {/* Aurora Glow */}

            <div
              className="
                absolute

                top-24
                bottom-0

                w-5

                rounded-full

                bg-cyan-500/10

                blur-2xl
              "
            />

            {/* Main Line */}

            <div
              className="
                absolute

                top-24
                bottom-0

                w-0.75

                rounded-full

                bg-linear-to-b
                from-cyan-500
                via-violet-500
                to-indigo-500/20
              "
            />
          </>
        )}

        {/* ======================================================
            Timeline Node
        ======================================================= */}

        <div
          className="
            relative
            z-20

            flex
            h-20
            w-20

            items-center
            justify-center
          "
        >
          {/* Outer Glow */}

          <div
            className="
              absolute
              inset-0

              rounded-full

              bg-cyan-500/15

              blur-2xl

              opacity-0

              transition-opacity
              duration-500

              group-hover:opacity-100
            "
          />

          {/* Animated Pulse */}

          <div
            className="
              absolute
              inset-0

              animate-[ping_3.5s_linear_infinite]

              rounded-full

              bg-cyan-500/15
            "
          />

          {/* Glass Ring */}

          <div
            className="
              absolute
              inset-0

              rounded-full

              border
              border-zinc-200/70
              dark:border-white/10

              bg-white/70
              dark:bg-white/5

              backdrop-blur-2xl

              shadow-lg
              shadow-zinc-900/5
              dark:shadow-black/20
            "
          />

          {/* Gradient Circle */}

          <div
            className="
              relative

              flex
              h-14
              w-14

              items-center
              justify-center

              rounded-full

              bg-linear-to-br
              from-cyan-500
              via-violet-500
              to-indigo-600

              shadow-[0_20px_45px_rgba(34,211,238,0.30)]

              transition-all
              duration-500

              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            <BriefcaseBusiness
              className="
                h-6
                w-6

                text-white
              "
            />

            {/* Floating Sparkle */}

            <div
              className="
                absolute

                -right-1.5
                -top-1.5

                flex
                h-6
                w-6

                items-center
                justify-center

                rounded-full

                border
                border-zinc-200/70
                dark:border-white/10

                bg-white
                dark:bg-zinc-900

                shadow-lg
              "
            >
              <Sparkles
                size={11}
                className="
                  text-violet-600
                  dark:text-violet-400
                "
              />
            </div>
          </div>
        </div>
      </div>

            {/* ======================================================
          Mobile Timeline
      ======================================================= */}

      <div
        className="
          relative

          flex
          items-center
          gap-5

          md:hidden
        "
      >
        {/* Aurora Glow */}

        <div
          className="
            pointer-events-none

            absolute
            -left-6

            h-20
            w-20

            rounded-full

            bg-cyan-500/10

            blur-[50px]
          "
        />

        {/* ======================================================
            Timeline Node
        ======================================================= */}

        <div
          className="
            relative
            z-10

            flex
            h-16
            w-16

            shrink-0

            items-center
            justify-center
          "
        >
          {/* Outer Glow */}

          <div
            className="
              absolute
              inset-0

              rounded-full

              bg-cyan-500/15

              blur-xl

              opacity-0

              transition-opacity
              duration-500

              group-hover:opacity-100
            "
          />

          {/* Pulse */}

          <div
            className="
              absolute
              inset-0

              animate-[ping_3.5s_linear_infinite]

              rounded-full

              bg-cyan-500/15
            "
          />

          {/* Glass Ring */}

          <div
            className="
              absolute
              inset-0

              rounded-full

              border
              border-zinc-200/70
              dark:border-white/10

              bg-white/70
              dark:bg-white/5

              backdrop-blur-2xl

              shadow-lg
              shadow-zinc-900/5
              dark:shadow-black/20
            "
          />

          {/* Gradient Circle */}

          <div
            className="
              relative

              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-full

              bg-linear-to-br
              from-cyan-500
              via-violet-500
              to-indigo-600

              shadow-[0_18px_40px_rgba(34,211,238,0.28)]

              transition-all
              duration-500

              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            <BriefcaseBusiness
              className="
                h-5
                w-5

                text-white
              "
            />

            {/* Sparkle */}

            <div
              className="
                absolute

                -right-1
                -top-1

                flex
                h-5
                w-5

                items-center
                justify-center

                rounded-full

                border
                border-zinc-200/70
                dark:border-white/10

                bg-white
                dark:bg-zinc-900

                shadow-md
              "
            >
              <Sparkles
                size={9}
                className="
                  text-violet-600
                  dark:text-violet-400
                "
              />
            </div>
          </div>
        </div>

        {/* ======================================================
            Decorative Timeline Line
        ======================================================= */}

        <div className="relative flex-1">
          {/* Glow */}

          <div
            className="
              absolute
              inset-y-0
              left-0

              w-full

              bg-linear-to-r
              from-cyan-500/10
              via-violet-500/5
              to-transparent

              blur-lg
            "
          />

          {/* Main Line */}

          <div
            className="
              relative

              h-0.75
              w-full

              rounded-full

              bg-linear-to-r
              from-cyan-500
              via-violet-500
              to-transparent
            "
          />
        </div>
      </div>

            {/* ======================================================
          Experience Card
      ======================================================= */}

      <div
        className="
          relative
          min-w-0
        "
      >
        {/* Premium Aurora Background */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0
            -z-10

            rounded-[40px]

            opacity-0

            blur-3xl

            transition-all
            duration-500

            group-hover:opacity-100

            bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_45%)]
          "
        />

        {/* Soft Border Glow */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0
            -z-10

            rounded-[40px]

            border
            border-cyan-400/0

            transition-all
            duration-500

            group-hover:border-cyan-400/10
          "
        />

        {/* Experience Card */}

        <ExperienceCard
          experience={experience}
        />
      </div>

      {/* ======================================================
          Floating Right Aurora
      ======================================================= */}

      <div
        className="
          pointer-events-none

          absolute
          -right-24
          top-20

          hidden

          h-56
          w-56

          rounded-full

          bg-cyan-500/10

          blur-[140px]

          opacity-0

          transition-all
          duration-700

          group-hover:opacity-100

          xl:block
        "
      />

      {/* ======================================================
          Floating Left Aurora
      ======================================================= */}

      <div
        className="
          pointer-events-none

          absolute
          -left-20
          bottom-16

          hidden

          h-48
          w-48

          rounded-full

          bg-violet-500/10

          blur-[120px]

          opacity-0

          transition-all
          duration-700

          group-hover:opacity-100

          xl:block
        "
      />

      {/* ======================================================
          Bottom Timeline Glow
      ======================================================= */}

      {!isLast && (
        <div
          className="
            pointer-events-none

            absolute

            -bottom-11
            left-13.5

            hidden

            h-24
            w-24

            -translate-x-1/2

            rounded-full

            bg-linear-to-br
            from-cyan-500/12
            via-violet-500/12
            to-indigo-500/10

            blur-[70px]

            md:block
          "
        />
      )}
    </div>
  );
}

export default TimelineItem;