import type { ReactNode } from "react";
import {
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  MapPin,
} from "lucide-react";

import AboutCard from "./AboutCard";
import SectionTitle from "../common/SectionTitle";

import education from "../../data/education";

/**
 * ==========================================================
 * Education Card
 * ==========================================================
 *
 * Ultra Premium Education Timeline
 *
 * Features
 * ----------
 * ✓ Premium Timeline
 * ✓ Glassmorphism
 * ✓ Aurora Glow
 * ✓ Animated Hover
 * ✓ Better Typography
 * ✓ Responsive
 * ✓ Accessible
 * ✓ Light/Dark Optimized
 *
 * ==========================================================
 */

function EducationCard() {
  return (
    <section className="relative space-y-14">
      {/* Section Header */}

      <SectionTitle
        title="Education"
        highlight="Journey"
        subtitle="My academic foundation, professional growth, and continuous passion for learning."
      />

      {/* ======================================================
          Timeline
      ====================================================== */}

      <div className="relative space-y-10">
        {/* Vertical Timeline */}

        <div
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-6
            top-6
            hidden
            w-px
            bg-linear-to-b
            from-indigo-500/30
            via-violet-500/20
            to-cyan-500/30
            lg:block
          "
        />

        {education.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="relative flex items-start gap-6"
            >
              {/* Timeline Node */}

              <div
                className="
                  relative
                  z-20
                  mt-6
                  hidden
                  lg:flex
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full

                    border
                    border-indigo-500/30

                    bg-white
                    dark:bg-slate-900

                    shadow-xl
                    shadow-indigo-500/20
                  "
                >
                  <GraduationCap
                    size={20}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                </div>
              </div>

              {/* ======================================================
                  Premium About Card
              ====================================================== */}

              <AboutCard
                className="
                  relative
                  flex-1

                  overflow-hidden

                  border
                  border-slate-200/70
                  dark:border-white/10

                  transition-all
                  duration-700

                  hover:border-violet-400/40
                  hover:shadow-[0_25px_70px_rgba(139,92,246,0.22)]
                "
                title={item.degree}
                icon={
                  <div
                    className="
                      relative

                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-2xl

                      bg-linear-to-br
                      from-indigo-500
                      via-violet-600
                      to-fuchsia-600

                      text-white

                      shadow-xl
                      shadow-violet-500/30

                      ring-1
                      ring-white/20

                      transition-all
                      duration-500

                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                  >
                    <Icon size={24} />
                  </div>
                }
              >
                {/* Premium Background Glow */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-64
                    w-64
                    rounded-full
                    bg-violet-500/10
                    blur-[120px]
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    -left-20
                    h-64
                    w-64
                    rounded-full
                    bg-cyan-500/10
                    blur-[120px]
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* Shine */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-full
                    bg-linear-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    opacity-0
                    transition-all
                    duration-1000
                    group-hover:translate-x-full
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10 space-y-8">

                                    {/* ======================================================
                      Institution
                  ====================================================== */}

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h4
                        className="
                          text-2xl
                          font-bold
                          tracking-tight

                          text-slate-900
                          dark:text-white
                        "
                      >
                        {item.institution}
                      </h4>

                      <span
                        className="
                          inline-flex
                          items-center
                          rounded-full

                          border
                          border-indigo-500/20

                          bg-indigo-500/10

                          px-3
                          py-1

                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.18em]

                          text-indigo-700
                          dark:text-indigo-300
                        "
                      >
                        {item.level}
                      </span>
                    </div>

                    <p
                      className="
                        max-w-xl
                        text-base
                        leading-7

                        text-slate-600
                        dark:text-slate-400
                      "
                    >
                      Strong academic foundation with emphasis on practical
                      learning, problem solving, and modern software
                      development.
                    </p>
                  </div>

                  {/* ======================================================
                      Information Grid
                  ====================================================== */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <InfoRow
                      icon={<MapPin size={18} />}
                      label="Location"
                      value={item.location}
                    />

                    <InfoRow
                      icon={<CalendarDays size={18} />}
                      label="Duration"
                      value={item.duration}
                    />
                  </div>

                  {/* ======================================================
                      Footer
                  ====================================================== */}

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      justify-between
                      gap-6

                      border-t
                      border-slate-200/70
                      pt-7

                      dark:border-white/10
                    "
                  >
                    {/* Academic Result */}

                    <div>
                      <p
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.20em]

                          text-slate-500
                          dark:text-slate-500
                        "
                      >
                        Academic Result
                      </p>

                      <p
                        className="
                          mt-2

                          text-xl
                          font-bold

                          text-slate-900
                          dark:text-white
                        "
                      >
                        {item.score}
                      </p>
                    </div>

                    {/* Status Badge */}

                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-3

                        rounded-full

                        border

                        px-5
                        py-2.5

                        text-sm
                        font-semibold

                        backdrop-blur-xl

                        shadow-lg

                        transition-all
                        duration-300

                        ${
                          item.status === "Completed"
                            ? `
                              border-emerald-500/20
                              bg-emerald-500/10
                              text-emerald-700
                              shadow-emerald-500/15
                              dark:text-emerald-300
                            `
                            : `
                              border-indigo-500/20
                              bg-indigo-500/10
                              text-indigo-700
                              shadow-indigo-500/15
                              dark:text-indigo-300
                            `
                        }
                      `}
                    >
                      <span
                        className={`
                          h-2.5
                          w-2.5
                          rounded-full
                          animate-pulse

                          ${
                            item.status === "Completed"
                              ? "bg-emerald-500"
                              : "bg-indigo-500"
                          }
                        `}
                      />

                      <CheckCircle2 size={16} />

                      {item.status}
                    </span>
                  </div>
                </div>
              </AboutCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/**
 * ==========================================================
 * Premium Info Row
 * ==========================================================
 */

interface InfoRowProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps) {
  return (
    <div
      className="
        group/info
        relative
        overflow-hidden

        rounded-2xl

        border
        border-slate-200/70
        dark:border-white/10

        bg-white/70
        dark:bg-white/5

        p-5

        backdrop-blur-2xl

        shadow-lg
        shadow-slate-900/5
        dark:shadow-black/20

        transition-all
        duration-500

        hover:-translate-y-1.5
        hover:border-violet-400/40
        hover:shadow-[0_18px_45px_rgba(139,92,246,0.18)]
      "
    >
      {/* Glass Highlight */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-linear-to-br
          from-white/20
          via-transparent
          to-transparent

          dark:from-white/5
        "
      />

      {/* Hover Glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10

          h-32
          w-32

          rounded-full

          bg-violet-500/10

          blur-3xl

          opacity-0

          transition-opacity
          duration-500

          group-hover/info:opacity-100
        "
      />

      <div className="relative z-10 flex items-center gap-4">
        {/* Icon */}

        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center

            rounded-xl

            bg-linear-to-br
            from-indigo-500
            via-violet-600
            to-fuchsia-600

            text-white

            shadow-lg
            shadow-violet-500/25

            ring-1
            ring-white/20

            transition-all
            duration-500

            group-hover/info:scale-110
            group-hover/info:rotate-6
          "
        >
          {icon}
        </div>

        {/* Text */}

        <div className="min-w-0 flex-1">
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.22em]

              text-slate-500
              dark:text-slate-500
            "
          >
            {label}
          </p>

          <p
            className="
              mt-1

              wrap-break-word

              text-base
              font-semibold

              text-slate-900
              dark:text-white
            "
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;