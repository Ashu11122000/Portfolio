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

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <Card
      hover
      glass
      className="
        group
        relative
        overflow-hidden

        rounded-[36px]

        border
        border-zinc-200/80
        dark:border-white/10

        bg-white/85
        dark:bg-white/4

        backdrop-blur-3xl

        p-8
        lg:p-10

        shadow-xl
        shadow-zinc-900/5
        dark:shadow-black/20

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-cyan-400/30
        hover:shadow-[0_35px_90px_rgba(34,211,238,0.15)]
      "
    >
      {/* ======================================================
          Aurora Background
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.10),transparent_45%)]

          opacity-70
        "
      />

      {/* Top Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-28
          -top-28

          h-72
          w-72

          rounded-full

          bg-violet-500/10

          blur-[130px]

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Accent Line */}

      <div
        className="
          absolute
          inset-x-0
          top-0

          h-1

          bg-linear-to-r
          from-cyan-500
          via-violet-500
          to-indigo-500
        "
      />
        {/* ======================================================
            Header
        ======================================================= */}

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
              border-zinc-200/70
              dark:border-white/10

              bg-linear-to-br
              from-cyan-500/10
              via-violet-500/10
              to-indigo-500/10

              shadow-lg
              shadow-cyan-500/10

              transition-transform
              duration-500

              group-hover:scale-105
              group-hover:rotate-3
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

                  text-cyan-600
                  dark:text-cyan-300
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

                bg-linear-to-br
                from-violet-600
                to-cyan-500

                text-white

                shadow-lg
              "
            >
              <Sparkles size={14} />
            </div>
          </div>

          {/* Right Content */}

          <div className="flex-1">
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

                <Badge
                  variant="secondary"
                  size="sm"
                >
                  {experience.employmentType}
                </Badge>

                {experience.currentlyWorking && (
                  <Badge
                    variant="success"
                    size="sm"
                  >
                    Current
                  </Badge>
                )}
              </div>

              <h3
                className="
                  text-xl
                  font-semibold
                  leading-snug

                  text-zinc-900
                  dark:text-zinc-100

                  lg:text-2xl
                "
              >
                {experience.position}
              </h3>

                            {/* ======================================================
                  Meta Information
              ======================================================= */}

              <div
                className="
                  mt-8

                  grid
                  gap-5

                  md:grid-cols-3
                "
              >
                {/* ======================================================
                    Duration
                ======================================================= */}

                <div
                  className="
                    group/card

                    rounded-3xl

                    border
                    border-zinc-200/70
                    dark:border-white/10

                    bg-white/70
                    dark:bg-white/4

                    p-5

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-cyan-400/30
                    hover:shadow-lg
                    hover:shadow-cyan-500/10
                  "
                >
                  <div
                    className="
                      mb-4

                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-2xl

                        bg-linear-to-br
                        from-cyan-500/15
                        to-indigo-500/15

                        text-cyan-600
                        dark:text-cyan-300

                        transition-transform
                        duration-300

                        group-hover/card:rotate-6
                        group-hover/card:scale-110
                      "
                    >
                      <CalendarDays size={18} />
                    </div>

                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.18em]

                        text-zinc-500
                        dark:text-zinc-400
                      "
                    >
                      Duration
                    </span>
                  </div>

                  <p
                    className="
                      text-sm
                      font-medium
                      leading-7

                      text-zinc-700
                      dark:text-zinc-300
                    "
                  >
                    {experience.startDate}
                    {" — "}
                    {experience.endDate}
                  </p>
                </div>

                {/* ======================================================
                    Location
                ======================================================= */}

                <div
                  className="
                    group/card

                    rounded-3xl

                    border
                    border-zinc-200/70
                    dark:border-white/10

                    bg-white/70
                    dark:bg-white/4

                    p-5

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-violet-400/30
                    hover:shadow-lg
                    hover:shadow-violet-500/10
                  "
                >
                  <div
                    className="
                      mb-4

                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-2xl

                        bg-linear-to-br
                        from-violet-500/15
                        to-fuchsia-500/15

                        text-violet-600
                        dark:text-violet-300

                        transition-transform
                        duration-300

                        group-hover/card:rotate-6
                        group-hover/card:scale-110
                      "
                    >
                      <MapPin size={18} />
                    </div>

                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.18em]

                        text-zinc-500
                        dark:text-zinc-400
                      "
                    >
                      Location
                    </span>
                  </div>

                  <p
                    className="
                      text-sm
                      font-medium
                      leading-7

                      text-zinc-700
                      dark:text-zinc-300
                    "
                  >
                    {experience.location}
                  </p>
                </div>

                {/* ======================================================
                    Employment
                ======================================================= */}

                <div
                  className="
                    group/card

                    rounded-3xl

                    border
                    border-zinc-200/70
                    dark:border-white/10

                    bg-white/70
                    dark:bg-white/4

                    p-5

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-emerald-400/30
                    hover:shadow-lg
                    hover:shadow-emerald-500/10
                  "
                >
                  <div
                    className="
                      mb-4

                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-2xl

                        bg-linear-to-br
                        from-emerald-500/15
                        to-cyan-500/15

                        text-emerald-600
                        dark:text-emerald-300

                        transition-transform
                        duration-300

                        group-hover/card:rotate-6
                        group-hover/card:scale-110
                      "
                    >
                      <BriefcaseBusiness size={18} />
                    </div>

                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.18em]

                        text-zinc-500
                        dark:text-zinc-400
                      "
                    >
                      Employment
                    </span>
                  </div>

                  <p
                    className="
                      text-sm
                      font-medium
                      leading-7

                      text-zinc-700
                      dark:text-zinc-300
                    "
                  >
                    {experience.employmentType}
                  </p>
                </div>
              </div>

              <Divider className="my-10" />
                            {/* ======================================================
                  Role Overview
              ======================================================= */}

              <section className="space-y-7">
                {/* Section Header */}

                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12

                      items-center
                      justify-center

                      rounded-2xl

                      bg-linear-to-br
                      from-cyan-500/15
                      via-violet-500/15
                      to-indigo-500/15

                      ring-1
                      ring-cyan-500/20

                      shadow-lg
                      shadow-cyan-500/10

                      transition-all
                      duration-300

                      group-hover:rotate-6
                      group-hover:scale-105
                    "
                  >
                    <BriefcaseBusiness
                      size={20}
                      className="
                        text-cyan-600
                        dark:text-cyan-300
                      "
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.22em]

                        text-zinc-500
                        dark:text-zinc-400
                      "
                    >
                      Role Overview
                    </p>

                    <h4
                      className="
                        mt-1

                        text-2xl
                        font-bold

                        text-zinc-900
                        dark:text-zinc-100
                      "
                    >
                      About This Role
                    </h4>
                  </div>
                </div>

                {/* Description Card */}

                <div
                  className="
                    relative
                    overflow-hidden

                    rounded-[28px]

                    border
                    border-zinc-200/70
                    dark:border-white/10

                    bg-white/70
                    dark:bg-white/4

                    backdrop-blur-2xl

                    p-7

                    transition-all
                    duration-500

                    hover:border-cyan-400/30
                    hover:shadow-xl
                    hover:shadow-cyan-500/10
                  "
                >
                  {/* Background Glow */}

                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      opacity-0

                      transition-opacity
                      duration-500

                      group-hover:opacity-100

                      bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08),transparent_45%)]
                    "
                  />

                  {/* Decorative Accent */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0

                      h-full
                      w-1

                      bg-linear-to-b
                      from-cyan-500
                      via-violet-500
                      to-indigo-500
                    "
                  />

                  <div className="relative z-10">
                    <p
                      className="
                        max-w-5xl

                        text-[15px]
                        leading-8

                        text-zinc-700
                        dark:text-zinc-300

                        lg:text-base
                      "
                    >
                      {experience.description}
                    </p>
                  </div>
                </div>
              </section>

              <Divider className="my-12" />

                            {/* ======================================================
                  Achievements
              ======================================================= */}

              <section className="space-y-7">
                {/* Section Header */}

                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center

                      rounded-2xl

                      bg-linear-to-br
                      from-emerald-500/15
                      via-teal-500/15
                      to-cyan-500/15

                      ring-1
                      ring-emerald-500/20

                      shadow-lg
                      shadow-emerald-500/10

                      transition-all
                      duration-300

                      group-hover:rotate-6
                      group-hover:scale-105
                    "
                  >
                    <CheckCircle2
                      size={20}
                      className="
                        text-emerald-600
                        dark:text-emerald-300
                      "
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.22em]

                        text-zinc-500
                        dark:text-zinc-400
                      "
                    >
                      Highlights
                    </p>

                    <h4
                      className="
                        mt-1

                        text-2xl
                        font-bold

                        text-zinc-900
                        dark:text-zinc-100
                      "
                    >
                      Key Achievements
                    </h4>
                  </div>
                </div>

                {/* Achievement Card */}

                <div
                  className="
                    relative
                    overflow-hidden

                    rounded-[28px]

                    border
                    border-zinc-200/70
                    dark:border-white/10

                    bg-white/70
                    dark:bg-white/4

                    backdrop-blur-2xl

                    p-7

                    transition-all
                    duration-500

                    hover:border-emerald-400/30
                    hover:shadow-xl
                    hover:shadow-emerald-500/10
                  "
                >
                  {/* Background Glow */}

                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      opacity-0

                      transition-opacity
                      duration-500

                      group-hover:opacity-100

                      bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.08),transparent_45%)]
                    "
                  />

                  {/* Left Accent */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0

                      h-full
                      w-1

                      bg-linear-to-b
                      from-emerald-500
                      via-teal-500
                      to-cyan-500
                    "
                  />

                  <ul className="relative z-10 space-y-6">
                    {experience.achievements.map((achievement) => (
                      <li
                        key={achievement.id}
                        className="
                          group/item

                          flex
                          items-start
                          gap-5
                        "
                      >
                        {/* Icon */}

                        <div
                          className="
                            mt-1

                            flex
                            h-10
                            w-10
                            shrink-0

                            items-center
                            justify-center

                            rounded-full

                            bg-linear-to-br
                            from-emerald-500/15
                            to-cyan-500/15

                            ring-1
                            ring-emerald-500/20

                            transition-all
                            duration-300

                            group-hover/item:scale-110
                            group-hover/item:rotate-12
                          "
                        >
                          <CheckCircle2
                            size={18}
                            className="
                              text-emerald-600
                              dark:text-emerald-300
                            "
                          />
                        </div>

                        {/* Text */}

                        <p
                          className="
                            flex-1

                            leading-8

                            text-zinc-700
                            dark:text-zinc-300

                            transition-colors
                            duration-300

                            group-hover/item:text-zinc-900
                            dark:group-hover/item:text-white
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

                            {/* ======================================================
                  Technologies
              ======================================================= */}

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
                        tracking-[0.22em]

                        text-zinc-500
                        dark:text-zinc-400
                      "
                    >
                      Technical Stack
                    </p>

                    <h4
                      className="
                        mt-1

                        text-2xl
                        font-bold

                        text-zinc-900
                        dark:text-zinc-100
                      "
                    >
                      Technologies Used
                    </h4>
                  </div>

                  <Badge
                    variant="primary"
                    size="sm"
                    className="px-5 py-2"
                  >
                    {experience.technologies.length} Technologies
                  </Badge>
                </div>

                <div
                  className="
                    relative
                    overflow-hidden

                    rounded-[28px]

                    border
                    border-zinc-200/70
                    dark:border-white/10

                    bg-white/70
                    dark:bg-white/4

                    backdrop-blur-2xl

                    p-7

                    transition-all
                    duration-500

                    hover:border-cyan-400/30
                    hover:shadow-xl
                    hover:shadow-cyan-500/10
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0

                      opacity-0

                      transition-opacity
                      duration-500

                      group-hover:opacity-100

                      bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08),transparent_45%)]
                    "
                  />

                  <div
                    className="
                      relative
                      z-10

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
                          hover:scale-105

                          hover:border-cyan-400/50
                          hover:bg-cyan-500/10

                          hover:text-cyan-700
                          dark:hover:text-cyan-300
                        "
                      >
                        {technology.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </section>

              {/* ======================================================
                  Company Website
              ======================================================= */}

              {experience.website && (
                <>
                  <Divider className="my-12" />

                  <section className="space-y-7">
                    <div>
                      <p
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.22em]

                          text-zinc-500
                          dark:text-zinc-400
                        "
                      >
                        Organization
                      </p>

                      <h4
                        className="
                          mt-1

                          text-2xl
                          font-bold

                          text-zinc-900
                          dark:text-zinc-100
                        "
                      >
                        Company Website
                      </h4>
                    </div>

                    <div
                      className="
                        rounded-[28px]

                        border
                        border-zinc-200/70
                        dark:border-white/10

                        bg-white/70
                        dark:bg-white/4

                        backdrop-blur-2xl

                        p-7

                        transition-all
                        duration-300

                        hover:border-cyan-400/30
                        hover:shadow-xl
                        hover:shadow-cyan-500/10
                      "
                    >
                      <div className="space-y-3">
                        <p
                          className="
                            text-sm

                            text-zinc-500
                            dark:text-zinc-400
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

                            text-cyan-600
                            dark:text-cyan-400

                            transition-all
                            duration-300

                            hover:gap-3
                            hover:text-cyan-500
                          "
                        >
                          {experience.company}
                        </a>
                      </div>

                      <div
                        className="
                          mt-7

                          flex
                          flex-wrap
                          items-center
                          justify-between
                          gap-4

                          rounded-2xl

                          border
                          border-zinc-200/70
                          dark:border-white/10

                          bg-zinc-50/80
                          dark:bg-white/3

                          px-5
                          py-4
                        "
                      >
                        <span
                          className="
                            text-sm

                            text-zinc-500
                            dark:text-zinc-400
                          "
                        >
                          Professional Experience
                        </span>

                        <Badge
                          variant="primary"
                          size="sm"
                        >
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
        </div>

        {/* ======================================================
            Bottom Ambient Glow
        ======================================================= */}

        <div
          className="
            pointer-events-none

            absolute
            inset-x-0
            bottom-0

            h-40

            bg-linear-to-t
            from-cyan-500/10
            via-violet-500/5
            to-transparent

            opacity-0

            blur-2xl

            transition-opacity
            duration-500

            group-hover:opacity-100
          "
        />

        {/* ======================================================
            Side Ambient Glow
        ======================================================= */}

        <div
          className="
            pointer-events-none

            absolute
            -right-24
            bottom-10

            h-56
            w-56

            rounded-full

            bg-cyan-500/10

            blur-[120px]

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