import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import Badge from "../common/Badge";
import Button from "../common/Button";
import Card from "../common/Card";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import { experiences } from "../../data/experience";

/**
 * ==========================================================
 * Featured Experience Component
 * ==========================================================
 *
 * Ultra Premium preview of the latest professional
 * experience displayed on the Home page.
 *
 * Features
 * ----------
 * ✓ Ultra Premium Glassmorphism
 * ✓ Aurora Background
 * ✓ Light & Dark Mode Optimized
 * ✓ Premium Metadata Cards
 * ✓ Rich Typography
 * ✓ Responsive
 * ✓ Production Ready
 * ==========================================================
 */

function FeaturedExperience() {
  const latestExperience = experiences[0];

  if (!latestExperience) {
    return null;
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      {/* ======================================================
          Premium Aurora Background
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
        {/* Base Layer */}

        <div
          className="
            absolute
            inset-0

            bg-white
            dark:bg-transparent
          "
        />

        {/* Top Left Glow */}

        <div
          className="
            absolute
            -left-44
            top-12

            h-128
            w-lg

            rounded-full

            bg-violet-500/10

            blur-[180px]
          "
        />

        {/* Bottom Right Glow */}

        <div
          className="
            absolute
            -right-44
            bottom-0

            h-136
            w-136

            rounded-full

            bg-cyan-500/10

            blur-[190px]
          "
        />

        {/* Center Glow */}

        <div
          className="
            absolute

            left-1/2
            top-1/2

            h-80
            w-80

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-indigo-500/5

            blur-[150px]
          "
        />

        {/* Gradient Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.10),transparent_45%)]
          "
        />
      </div>

      {/* ======================================================
          Content
      ======================================================= */}

      <Container>
        <SectionTitle
          title="Professional"
          highlight="Experience"
          subtitle="A snapshot of my most recent professional journey, showcasing impactful work, scalable software solutions, modern technologies, and real-world engineering experience across production-grade applications."
          center
        />

        {/* ======================================================
            Experience Card
        ======================================================= */}

        <div className="mt-24">
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
              hover:shadow-[0_35px_90px_rgba(34,211,238,0.16)]
            "
          >
            {/* Top Premium Gradient */}

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

            {/* Card Glow */}

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

            <div className="relative z-10">
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
                                {/* ======================================================
                    Company Icon
                ======================================================= */}

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

                    transition-all
                    duration-500

                    group-hover:scale-105
                    group-hover:rotate-3
                  "
                >
                  <Building2
                    className="
                      h-10
                      w-10

                      text-cyan-600
                      dark:text-cyan-300
                    "
                  />

                  {/* Floating Badge */}

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

                {/* ======================================================
                    Right Content
                ======================================================= */}

                <div className="flex-1">
                  <div className="space-y-4">
                    {/* Position + Badges */}

                    <div
                      className="
                        flex
                        flex-wrap
                        items-center
                        gap-3
                      "
                    >
                      <h3
                        className="
                          text-3xl
                          font-black
                          leading-tight
                          tracking-tight

                          text-zinc-900
                          dark:text-zinc-100

                          lg:text-4xl
                        "
                      >
                        {latestExperience.position}
                      </h3>

                      <Badge
                        variant="primary"
                        size="sm"
                      >
                        {latestExperience.employmentType}
                      </Badge>

                      {latestExperience.currentlyWorking && (
                        <Badge
                          variant="success"
                          size="sm"
                        >
                          Current
                        </Badge>
                      )}
                    </div>

                    {/* Company */}

                    <h4
                      className="
                        text-xl
                        font-semibold

                        text-cyan-600
                        dark:text-cyan-400

                        lg:text-2xl
                      "
                    >
                      {latestExperience.company}
                    </h4>

                    {/* Small Intro */}

                    <p
                      className="
                        max-w-3xl

                        leading-8

                        text-zinc-600
                        dark:text-zinc-400
                      "
                    >
                      Building modern, scalable, and
                      production-ready software while focusing on
                      clean architecture, performance optimization,
                      responsive interfaces, and exceptional user
                      experiences.
                    </p>
                  </div>

                  {/* ======================================================
                      Metadata Cards
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
                        group/meta

                        rounded-3xl

                        border
                        border-zinc-200/70
                        dark:border-white/10

                        bg-white/70
                        dark:bg-white/4

                        p-5

                        backdrop-blur-2xl

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

                            transition-all
                            duration-300

                            group-hover/meta:rotate-6
                            group-hover/meta:scale-110
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
                        {latestExperience.startDate}
                        {" — "}
                        {latestExperience.currentlyWorking
                          ? "Present"
                          : latestExperience.endDate}
                      </p>
                    </div>

                    {/* ======================================================
                        Location
                    ======================================================= */}

                    <div
                      className="
                        group/meta

                        rounded-3xl

                        border
                        border-zinc-200/70
                        dark:border-white/10

                        bg-white/70
                        dark:bg-white/4

                        p-5

                        backdrop-blur-2xl

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

                            transition-all
                            duration-300

                            group-hover/meta:rotate-6
                            group-hover/meta:scale-110
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
                        {latestExperience.location}
                      </p>
                    </div>

                    {/* ======================================================
                        Employment
                    ======================================================= */}

                    <div
                      className="
                        group/meta

                        rounded-3xl

                        border
                        border-zinc-200/70
                        dark:border-white/10

                        bg-white/70
                        dark:bg-white/4

                        p-5

                        backdrop-blur-2xl

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

                            transition-all
                            duration-300

                            group-hover/meta:rotate-6
                            group-hover/meta:scale-110
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
                        {latestExperience.employmentType}
                      </p>
                    </div>
                  </div>

                  {/* Premium Divider */}

                  <div
                    className="
                      my-10

                      h-px

                      bg-linear-to-r
                      from-transparent
                      via-zinc-300/60
                      to-transparent

                      dark:via-white/10
                    "
                  />

                                    {/* ======================================================
                      Professional Summary
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
                          Professional Summary
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
                          Latest Responsibilities
                        </h4>
                      </div>
                    </div>

                    {/* Description Card */}

                    <div
                      className="
                        relative
                        overflow-hidden

                        rounded-[30px]

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

                      {/* Gradient Accent */}

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
                          {latestExperience.description}
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Premium Divider */}

                  <div
                    className="
                      my-12

                      h-px

                      bg-linear-to-r
                      from-transparent
                      via-zinc-300/60
                      to-transparent

                      dark:via-white/10
                    "
                  />

                                    {/* ======================================================
                      Core Technologies
                  ======================================================= */}

                  <section className="space-y-7">
                    {/* Section Header */}

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
                          Technical Expertise
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
                          Core Technologies
                        </h4>
                      </div>

                      <Badge
                        variant="primary"
                        size="sm"
                        className="
                          rounded-full
                          px-5
                          py-2

                          shadow-lg
                          shadow-cyan-500/10
                        "
                      >
                        {latestExperience.technologies.length} Technologies
                      </Badge>
                    </div>

                    {/* Technologies Card */}

                    <div
                      className="
                        relative
                        overflow-hidden

                        rounded-[30px]

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

                          bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.08),transparent_45%)]
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
                        {latestExperience.technologies
                          .slice(0, 6)
                          .map((technology) => (
                            <Badge
                              key={technology.id}
                              variant="outline"
                              size="sm"
                              className="
                                rounded-2xl

                                px-5
                                py-2.5

                                border-zinc-200/70
                                dark:border-white/10

                                bg-white/60
                                dark:bg-white/4

                                backdrop-blur-xl

                                text-zinc-700
                                dark:text-zinc-300

                                transition-all
                                duration-300

                                hover:-translate-y-1
                                hover:scale-105

                                hover:border-cyan-400/40
                                hover:bg-cyan-500/10

                                hover:text-cyan-700
                                dark:hover:text-cyan-300

                                hover:shadow-lg
                                hover:shadow-cyan-500/10
                              "
                            >
                              {technology.name}
                            </Badge>
                          ))}
                      </div>
                    </div>

                    {/* Additional Technologies */}

                    {latestExperience.technologies.length > 6 && (
                      <div
                        className="
                          flex
                          justify-center
                        "
                      >
                        <span
                          className="
                            inline-flex
                            items-center

                            rounded-full

                            border
                            border-zinc-200/70
                            dark:border-white/10

                            bg-white/70
                            dark:bg-white/4

                            px-5
                            py-2.5

                            text-sm
                            font-medium

                            text-zinc-600
                            dark:text-zinc-400

                            backdrop-blur-xl
                          "
                        >
                          +{latestExperience.technologies.length - 6}
                          &nbsp;more technologies available on the
                          complete Experience page
                        </span>
                      </div>
                    )}
                  </section>

                  {/* Premium Divider */}

                  <div
                    className="
                      my-12

                      h-px

                      bg-linear-to-r
                      from-transparent
                      via-zinc-300/60
                      to-transparent

                      dark:via-white/10
                    "
                  />

                                    {/* ======================================================
                      Premium CTA
                  ======================================================= */}

                  <section
                    className="
                      relative
                      overflow-hidden

                      rounded-[30px]

                      border
                      border-zinc-200/70
                      dark:border-white/10

                      bg-linear-to-br
                      from-cyan-500/6
                      via-violet-500/5
                      to-indigo-500/6

                      backdrop-blur-2xl

                      p-8

                      transition-all
                      duration-500

                      hover:border-cyan-400/40
                      hover:shadow-[0_30px_70px_rgba(34,211,238,0.12)]
                    "
                  >
                    {/* Background Glow */}

                    <div
                      className="
                        pointer-events-none

                        absolute
                        inset-0

                        bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.10),transparent_45%)]

                        opacity-70
                      "
                    />

                    <div
                      className="
                        relative
                        z-10

                        flex
                        flex-col
                        gap-8

                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                      "
                    >
                      {/* CTA Text */}

                      <div className="max-w-2xl">
                        <p
                          className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.22em]

                            text-cyan-600
                            dark:text-cyan-400
                          "
                        >
                          Continue Exploring
                        </p>

                        <h4
                          className="
                            mt-3

                            text-3xl
                            font-bold
                            leading-tight

                            text-zinc-900
                            dark:text-zinc-100
                          "
                        >
                          Explore My Complete Professional Journey
                        </h4>

                        <p
                          className="
                            mt-4

                            max-w-xl

                            leading-8

                            text-zinc-600
                            dark:text-zinc-400
                          "
                        >
                          Discover previous roles, achievements,
                          technologies, impactful projects, and how my
                          professional experience has evolved over time.
                        </p>
                      </div>

                      {/* CTA Button */}

                      <Link to="/experience">
                        <Button
                          size="lg"
                          className="
                            group/button

                            rounded-2xl

                            px-8
                            py-4

                            shadow-xl
                            shadow-cyan-500/20

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:scale-[1.02]
                          "
                        >
                          View Full Experience

                          <ArrowRight
                            size={18}
                            className="
                              ml-3

                              transition-transform
                              duration-300

                              group-hover/button:translate-x-1
                            "
                          />
                        </Button>
                      </Link>
                    </div>
                  </section>
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

            {/* Right Glow */}

            <div
              className="
                pointer-events-none

                absolute
                -right-24
                bottom-12

                h-64
                w-64

                rounded-full

                bg-cyan-500/10

                blur-[140px]

                opacity-0

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            />

            {/* Left Glow */}

            <div
              className="
                pointer-events-none

                absolute
                -left-24
                top-16

                h-64
                w-64

                rounded-full

                bg-violet-500/10

                blur-[140px]

                opacity-0

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            />
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedExperience;