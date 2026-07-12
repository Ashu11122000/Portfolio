import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";

import Badge from "../common/Badge";
import Card from "../common/Card";
import Divider from "../common/Divider";

import GradientText from "../ui/GradientText";

import type { Experience } from "../../types/experience";

/**
 * ==========================================================
 * Ultra Premium Experience Card
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ Premium Glassmorphism
 * ✓ Aurora Gradient
 * ✓ Rich Header
 * ✓ Timeline Ready
 * ✓ Better Visual Hierarchy
 * ✓ Responsive
 * ✓ Production Ready
 * ==========================================================
 */

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card
      hover
      glass
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200/70
      dark:border-slate-200/70
        p-8
        lg:p-10
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_35px_90px_rgba(0,0,0,0.25)]
      "
    >
      {/* Aurora Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-violet-500/10
          blur-[120px]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Top Gradient */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-1
          bg-gradient-to-r
          from-indigo-500
          via-violet-500
          to-cyan-500
        "
      />

      {/* Header */}

      <div
        className="
          flex
          flex-col
          gap-8
          lg:flex-row
          lg:items-start
        "
      >
        {/* Company Logo */}

        <div
          className="
            relative
            flex
            h-24
            w-24
            shrink-0
            items-center
            justify-center
            rounded-3xl
            border
            border-slate-200/70
          dark:border-white/10
            bg-gradient-to-br
            from-indigo-500/10
            via-violet-500/10
            to-cyan-500/10
            shadow-[0_20px_45px_rgba(99,102,241,0.15)]
          "
        >
          {experience.companyLogo ? (
            <img
              src={experience.companyLogo}
              alt={experience.company}
              className="
                h-16
                w-16
                object-contain
              "
            />
          ) : (
            <Building2
              className="
                h-10
                w-10
                text-indigo-500
              "
            />
          )}

          <div
            className="
              absolute
              -right-2
              -top-2
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-violet-600
              to-cyan-500
              text-slate-900 dark:text-white
              shadow-lg
            "
          >
            <Sparkles size={14} />
          </div>
        </div>

        {/* Right Content */}

        <div className="flex-1">
          {/* Company */}

          <div className="space-y-4">
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              <GradientText
                className="
                  text-3xl
                  font-black
                  leading-tight
                  lg:text-4xl
                "
              >
                {experience.company}
              </GradientText>

              <Badge variant="secondary" size="sm">
                {experience.employmentType}
              </Badge>

              {experience.currentlyWorking && (
                <Badge variant="success" size="sm">
                  Current
                </Badge>
              )}
            </div>

            <h3
              className="
                text-xl
                font-semibold
                leading-snug
                text-slate-900
              text-white
                lg:text-2xl
              "
            >
              {experience.position}
            </h3>
          </div>

          {/* Meta Cards */}

          <div
            className="
              mt-8
              grid
              gap-5
              md:grid-cols-3
            "
          >
            {/* Duration */}

            <div
              className="
                rounded-2xl
                border
                border-slate-200/70
              dark:border-white/10
                bg-white/[0.04]
                p-5
                backdrop-blur-xl
              "
            >
              <div
                className="
                  mb-3
                  flex
                  items-center
                  gap-2
                  text-indigo-400
                "
              >
                <CalendarDays size={18} />

                <span className="text-xs font-semibold uppercase tracking-wider">
                  Duration
                </span>
              </div>

              <p
                className="
                  text-sm
                  font-medium
                  leading-6
                  text-slate-700
                  dark:text-slate-700 dark:text-slate-300
                "
              >
                {experience.startDate}
                {" — "}
                {experience.endDate}
              </p>
            </div>

            {/* Location */}

            <div
              className="
                rounded-2xl
                border
                border-slate-200/70
              dark:border-white/10
                bg-white/[0.04]
                p-5
                backdrop-blur-xl
              "
            >
              <div
                className="
                  mb-3
                  flex
                  items-center
                  gap-2
                  text-violet-400
                "
              >
                <MapPin size={18} />

                <span className="text-xs font-semibold uppercase tracking-wider">
                  Location
                </span>
              </div>

              <p
                className="
                  text-sm
                  font-medium
                  text-slate-700
                  dark:text-slate-700 dark:text-slate-300
                "
              >
                {experience.location}
              </p>
            </div>

            {/* Employment */}

            <div
              className="
                rounded-2xl
                border
                border-slate-200/70
dark:border-white/10
                bg-white/[0.04]
                p-5
                backdrop-blur-xl
              "
            >
              <div
                className="
                  mb-3
                  flex
                  items-center
                  gap-2
                  text-cyan-400
                "
              >
                <BriefcaseBusiness size={18} />

                <span className="text-xs font-semibold uppercase tracking-wider">
                  Employment
                </span>
              </div>

              <p
                className="
                  text-sm
                  font-medium
                  text-slate-700
                  dark:text-slate-700 dark:text-slate-300
                "
              >
                {experience.employmentType}
              </p>
            </div>
          </div>

          <Divider className="my-10" />

          {/* Description */}

          {/* ========================= */}

          {/* Description */}

          {/* ========================= */}

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-indigo-500/20
                  via-violet-500/20
                  to-cyan-500/20
                  text-indigo-400
                "
              >
                <BriefcaseBusiness size={20} />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-slate-500
                    dark:text-slate-600 dark:text-slate-400
                  "
                >
                  Role Overview
                </p>

                <h4
                  className="
                    mt-1
                    text-xl
                    font-bold
                    text-slate-900
                    dark:text-slate-900 dark:text-white
                  "
                >
                  About This Role
                </h4>
              </div>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-slate-200/70
dark:border-white/10
                bg-white/[0.04]
                p-7
                backdrop-blur-xl
              "
            >
              <p
                className="
                  max-w-5xl
                  text-[15px]
                  leading-8
                  text-slate-600
                  dark:text-slate-700 dark:text-slate-300
                  lg:text-base
                "
              >
                {experience.description}
              </p>
            </div>
          </section>

          <Divider className="my-12" />

          {/* ========================= */}

          {/* Achievements */}

          {/* ========================= */}

          <section className="space-y-7">
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-500/15
                  text-emerald-500
                "
              >
                <CheckCircle2 size={20} />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-slate-500
                    dark:text-slate-600 dark:text-slate-400
                  "
                >
                  Highlights
                </p>

                <h4
                  className="
                    mt-1
                    text-xl
                    font-bold
                    text-slate-900
                    dark:text-slate-900 dark:text-white
                  "
                >
                  Key Achievements
                </h4>
              </div>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-slate-200/70
dark:border-white/10
                bg-white/[0.04]
                p-7
                backdrop-blur-xl
              "
            >
              <ul className="space-y-6">
                {experience.achievements.map((achievement) => (
                  <li
                    key={achievement.id}
                    className="
                      flex
                      items-start
                      gap-4
                    "
                  >
                    <div
                      className="
                        mt-1
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-emerald-500/15
                        text-emerald-500
                      "
                    >
                      <CheckCircle2 size={15} />
                    </div>

                    <p
                      className="
                        leading-8
                        text-slate-600
                        dark:text-slate-700 dark:text-slate-300
                      "
                    >
                      {achievement.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Divider className="my-12" />

          {/* ========================= */}

          {/* Technologies */}

          {/* ========================= */}

          <section className="space-y-7">
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-5
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-slate-500
                    dark:text-slate-600 dark:text-slate-400
                  "
                >
                  Technical Stack
                </p>

                <h4
                  className="
                    mt-1
                    text-xl
                    font-bold
                    text-slate-900
                    dark:text-slate-900 dark:text-white
                  "
                >
                  Technologies Used
                </h4>
              </div>

              <Badge variant="primary" size="sm" className="px-4 py-2">
                {experience.technologies.length} Technologies
              </Badge>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-slate-200/70
dark:border-white/10
                bg-white/[0.04]
                p-7
                backdrop-blur-xl
              "
            >
              <div
                className="
                  flex
                  flex-wrap
                  gap-4
                "
              >
                {experience.technologies.map((technology) => (
                  <Badge
                    key={technology.id}
                    variant="outline"
                    size="sm"
                    className="
                      px-4
                      py-2
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-indigo-500/60
                      hover:bg-indigo-500/10
                      hover:text-indigo-600
                      dark:hover:text-indigo-300
                    "
                  >
                    {technology.name}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* ========================= */}

          {/* Company Website */}

          {/* ========================= */}

          {experience.website && (
            <>
              <Divider className="my-12" />

              <section className="space-y-6">
                <div>
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-slate-500
                      dark:text-slate-600 dark:text-slate-400
                    "
                  >
                    Organization
                  </p>

                  <h4
                    className="
                      mt-1
                      text-xl
                      font-bold
                      text-slate-900
                      dark:text-slate-900 dark:text-white
                    "
                  >
                    Company Website
                  </h4>
                </div>

                <div
                  className="
                    flex
                    flex-col
                    gap-6
                    rounded-3xl
                    border
                    border-slate-200/70
dark:border-white/10
                    bg-white/[0.04]
                    p-7
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-indigo-500/30
                  "
                >
                  <div className="space-y-2">
                    <p
                      className="
                        text-sm
                        text-slate-500
                        dark:text-slate-600 dark:text-slate-400
                      "
                    >
                      Visit the official website
                    </p>

                    <a
                      href={experience.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-lg
                        font-semibold
                        text-indigo-600
                        transition-all
                        duration-300
                        hover:gap-3
                        hover:text-indigo-500
                        dark:text-indigo-400
                      "
                    >
                      {experience.company}
                    </a>
                  </div>

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      justify-between
                      gap-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/5
                      px-5
                      py-4
                      dark:bg-white/5
                    "
                  >
                    <span
                      className="
                        text-sm
                        text-slate-500
                        dark:text-slate-600 dark:text-slate-400
                      "
                    >
                      Professional Experience
                    </span>

                    <Badge variant="primary" size="sm">
                      {experience.currentlyWorking
                        ? "Currently Working"
                        : "Completed"}
                    </Badge>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>

      {/* ====================================== */}

      {/* Bottom Ambient Glow */}

      {/* ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-indigo-500/10
          via-violet-500/5
          to-transparent
          opacity-0
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Side Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          bottom-10
          h-48
          w-48
          rounded-full
          bg-cyan-500/10
          blur-[110px]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </Card>
  );
}

export default ExperienceCard;
