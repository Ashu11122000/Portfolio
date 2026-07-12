import { BriefcaseBusiness, Sparkles } from "lucide-react";

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
 * ✓ Glassmorphism Timeline
 * ✓ Aurora Glow
 * ✓ Premium Timeline Node
 * ✓ Better Spacing
 * ✓ Responsive
 * ✓ Production Ready
 * ==========================================================
 */

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

function TimelineItem({ experience, isLast }: TimelineItemProps) {
  return (
    <div
      className="
        group
        relative
        grid
        gap-10
        md:grid-cols-[96px_1fr]
        lg:gap-12
      "
    >
      {/* ====================================== */}

      {/* Desktop Timeline */}

      {/* ====================================== */}

      <div
        className="
          relative
          hidden
          md:flex
          justify-center
        "
      >
        {/* Vertical Timeline */}

        {!isLast && (
          <>
            {/* Glow */}

            <div
              className="
                absolute
                top-20
                bottom-0
                w-4
                rounded-full
                bg-violet-500/10
                blur-xl
              "
            />

            {/* Line */}

            <div
              className="
                absolute
                top-20
                bottom-0
                w-[2px]
                bg-gradient-to-b
                from-indigo-500
                via-violet-500/70
                to-cyan-500/20
              "
            />
          </>
        )}

        {/* Timeline Node */}

        <div
          className="
            relative
            z-20
            flex
            h-16
            w-16
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
              bg-violet-500/15
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
              animate-[ping_3s_linear_infinite]
              rounded-full
              bg-indigo-500/15
            "
          />

          {/* Glass Ring */}

          <div
            className="
              absolute
              inset-0
              rounded-full
              border
              border-white/10
              bg-white/10
              backdrop-blur-xl
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
              bg-gradient-to-br
              from-indigo-500
              via-violet-500
              to-cyan-500
              shadow-[0_15px_40px_rgba(99,102,241,0.35)]
            "
          >
            <BriefcaseBusiness
              className="
                h-5
                w-5
                text-slate-900 dark:text-white
              "
            />

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
                bg-white
                shadow-lg
              "
            >
              <Sparkles size={10} className="text-violet-600" />
            </div>
          </div>
        </div>
      </div>

      {/* ====================================== */}

      {/* Mobile Timeline */}
      {/* ====================================== */}

      {/* Mobile Timeline */}

      {/* ====================================== */}

      <div
        className="
            relative
            flex
            items-center
            gap-5
            md:hidden
          "
      >
        {/* Background Glow */}

        <div
          className="
              absolute
              -left-4
              h-16
              w-16
              rounded-full
              bg-violet-500/10
              blur-2xl
            "
        />

        {/* Timeline Node */}

        <div
          className="
              relative
              z-10
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
            "
        >
          {/* Pulse */}

          <div
            className="
                absolute
                inset-0
                animate-[ping_3s_linear_infinite]
                rounded-full
                bg-indigo-500/15
              "
          />

          {/* Glass Ring */}

          <div
            className="
                absolute
                inset-0
                rounded-full
                border
                border-white/10
                bg-white/10
                backdrop-blur-xl
              "
          />

          {/* Gradient Circle */}

          <div
            className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-indigo-500
                via-violet-500
                to-cyan-500
                shadow-[0_12px_30px_rgba(99,102,241,0.30)]
              "
          >
            <BriefcaseBusiness
              className="
                  h-4
                  w-4
                  text-slate-900 dark:text-white
                "
            />
          </div>
        </div>

        {/* Decorative Line */}

        <div className="relative flex-1">
          {/* Glow */}

          <div
            className="
                absolute
                inset-y-0
                left-0
                h-full
                w-full
                bg-gradient-to-r
                from-violet-500/10
                to-transparent
                blur-lg
              "
          />

          {/* Line */}

          <div
            className="
                relative
                h-[2px]
                w-full
                bg-gradient-to-r
                from-indigo-500
                via-violet-500/60
                to-transparent
              "
          />
        </div>
      </div>

      {/* ====================================== */}

      {/* Experience Card */}
      {/* ====================================== */}

      {/* Experience Card */}

      {/* ====================================== */}

      <div
        className="
            relative
            min-w-0
          "
      >
        {/* Ambient Background */}

        <div
          className="
              pointer-events-none
              absolute
              inset-0
              -z-10
              rounded-[36px]
              bg-gradient-to-br
              from-indigo-500/5
              via-violet-500/5
              to-cyan-500/5
              opacity-0
              blur-2xl
              transition-all
              duration-500
              group-hover:opacity-100
            "
        />

        {/* Card */}

        <ExperienceCard experience={experience} />
      </div>

      {/* Floating Accent */}

      <div
        className="
            pointer-events-none
            absolute
            -right-16
            top-20
            hidden
            h-40
            w-40
            rounded-full
            bg-cyan-500/8
            blur-[100px]
            opacity-0
            transition-all
            duration-700
            group-hover:opacity-100
            lg:block
          "
      />

      {/* Bottom Glow */}

      {!isLast && (
        <div
          className="
              pointer-events-none
              absolute
              bottom-[-40px]
              left-[46px]
              hidden
              h-20
              w-20
              -translate-x-1/2
              rounded-full
              bg-violet-500/10
              blur-3xl
              md:block
            "
        />
      )}
    </div>
  );
}

export default TimelineItem;
