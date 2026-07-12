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
 * ✓ Premium Glassmorphism
 * ✓ Aurora Background
 * ✓ Rich Metadata Cards
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
        py-28
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
            top-20
            h-[380px]
            w-[380px]
            rounded-full
            bg-violet-500/12
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-[-150px]
            bottom-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/10
            blur-[150px]
          "
        />
      </div>

      <Container>
        <SectionTitle
          title="Professional"
          highlight="Experience"
          subtitle="A snapshot of my most recent professional journey, highlighting impactful work, modern technologies, and the experience I've gained while building scalable software solutions."
          center
        />

        {/* Experience Card */}

        <div className="mt-20">
          <Card
            hover
            glass
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              p-8
              lg:p-10
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_35px_90px_rgba(0,0,0,0.25)]
            "
          >
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
              {/* Company Icon */}

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
                  border-white/10
                  bg-gradient-to-br
                  from-indigo-500/10
                  via-violet-500/10
                  to-cyan-500/10
                  shadow-[0_20px_45px_rgba(99,102,241,0.18)]
                "
              >
                <Building2
                  className="
                    h-10
                    w-10
                    text-indigo-500
                  "
                />

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
                  "
                >
                  <Sparkles size={14} />
                </div>
              </div>

              {/* Content */}

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
                    <h3
                      className="
                        text-3xl
                        font-black
                        leading-tight
                        text-slate-900
                        dark:text-slate-900 dark:text-white
                        lg:text-4xl
                      "
                    >
                      {latestExperience.position}
                    </h3>

                    <Badge variant="primary" size="sm">
                      {latestExperience.employmentType}
                    </Badge>

                    {latestExperience.currentlyWorking && (
                      <Badge variant="success" size="sm">
                        Current
                      </Badge>
                    )}
                  </div>

                  <h4
                    className="
                      text-xl
                      font-semibold
                      text-indigo-600
                      dark:text-indigo-400
                      lg:text-2xl
                    "
                  >
                    {latestExperience.company}
                  </h4>
                </div>

                {/* Metadata */}

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
                      border-white/10
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
                      {latestExperience.startDate}
                      {" — "}
                      {latestExperience.currentlyWorking
                        ? "Present"
                        : latestExperience.endDate}
                    </p>
                  </div>

                  {/* Location */}

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
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
                      {latestExperience.location}
                    </p>
                  </div>

                  {/* Employment */}

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
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
                      {latestExperience.employmentType}
                    </p>
                  </div>
                </div>

                <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Description */}
                {/* ====================================================== */}

                {/* Description */}

                {/* ====================================================== */}

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
                        text-indigo-500
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
                        Professional Summary
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
                        Latest Responsibilities
                      </h4>
                    </div>
                  </div>

                  <div
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-7
                      backdrop-blur-xl
                    "
                  >
                    <p
                      className="
                        max-w-5xl
                        leading-8
                        text-slate-600
                        dark:text-slate-700 dark:text-slate-300
                      "
                    >
                      {latestExperience.description}
                    </p>
                  </div>
                </section>

                {/* Divider */}

                <div
                  className="
                    my-12
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                  "
                />

                {/* ====================================================== */}

                {/* Technologies */}

                {/* ====================================================== */}

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
                        Technical Expertise
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
                        Core Technologies
                      </h4>
                    </div>

                    <Badge variant="primary" size="sm" className="px-4 py-2">
                      {latestExperience.technologies.length} Technologies
                    </Badge>
                  </div>

                  <div
                    className="
                      rounded-3xl
                      border
                      border-white/10
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
                      {latestExperience.technologies
                        .slice(0, 6)
                        .map((technology) => (
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

                  {latestExperience.technologies.length > 6 && (
                    <p
                      className="
                        text-center
                        text-sm
                        text-slate-500
                        dark:text-slate-600 dark:text-slate-400
                      "
                    >
                      +{latestExperience.technologies.length - 6} more
                      technologies available on the full Experience page.
                    </p>
                  )}
                </section>

                {/* Divider */}

                <div
                  className="
                    my-12
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                  "
                />

                {/* CTA */}

                {/* ====================================================== */}

                {/* CTA */}

                {/* ====================================================== */}

                <div
                  className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-gradient-to-r
                    from-indigo-500/[0.05]
                    via-violet-500/[0.05]
                    to-cyan-500/[0.05]
                    p-8
                    backdrop-blur-xl
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      items-center
                      gap-8
                      text-center
                      lg:flex-row
                      lg:items-center
                      lg:justify-between
                      lg:text-left
                    "
                  >
                    {/* Left */}

                    <div className="max-w-2xl">
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-indigo-500/20
                          bg-indigo-500/10
                          px-4
                          py-2
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-indigo-500
                        "
                      >
                        Latest Professional Experience
                      </span>

                      <h4
                        className="
                          mt-5
                          text-2xl
                          font-bold
                          leading-tight
                          text-slate-900
                          dark:text-slate-900 dark:text-white
                          lg:text-3xl
                        "
                      >
                        Explore My Complete Professional Journey
                      </h4>

                      <p
                        className="
                          mt-4
                          max-w-2xl
                          leading-8
                          text-slate-600
                          dark:text-slate-700 dark:text-slate-300
                        "
                      >
                        Discover my previous roles, major accomplishments,
                        production projects, leadership experience, and the
                        technologies I've worked with throughout my software
                        engineering career.
                      </p>
                    </div>

                    {/* Right */}

                    <Link to="/experience" className="shrink-0">
                      <Button
                        size="lg"
                        className="
                          group
                          rounded-2xl
                          px-8
                          py-6
                          shadow-[0_20px_50px_rgba(99,102,241,0.25)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:shadow-[0_25px_70px_rgba(99,102,241,0.35)]
                        "
                      >
                        View Full Experience
                        <ArrowRight
                          size={18}
                          className="
                            ml-2
                            transition-transform
                            duration-300
                            group-hover:translate-x-1.5
                          "
                        />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -bottom-20
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

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-16
                  top-1/2
                  h-48
                  w-48
                  -translate-y-1/2
                  rounded-full
                  bg-cyan-500/10
                  blur-[110px]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedExperience;
