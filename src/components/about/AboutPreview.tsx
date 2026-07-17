import {
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../common/Button";
import Container from "../common/Container";
import GradientText from "../ui/GradientText";

import personalInfo from "../../data/personalInfo";

function AboutPreview() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-32">
      {/* ======================================================
          Premium Background
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-50/40 to-transparent dark:via-slate-950/30" />

        {/* Aurora Glow */}
        <div className="absolute -left-40 top-0 h-128 w-lg rounded-full bg-indigo-500/15 blur-[180px]" />

        <div className="absolute -right-32 top-1/3 h-112 w-md rounded-full bg-fuchsia-500/15 blur-[180px]" />

        <div className="absolute -bottom-40 left-1/2 h-136 w-136 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[220px]" />

        {/* Floating Accent */}
        <div className="absolute left-1/3 top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-[120px]" />

        {/* Grid Overlay */}
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
      </div>

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ======================================================
              Left Content
          ====================================================== */}

          <div className="relative z-10 max-w-2xl">
            {/* Premium Badge */}

            <div
              className="
                mb-8
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-indigo-500/20
                dark:border-indigo-400/20

                bg-white/70
                dark:bg-white/5

                px-5
                py-2.5

                backdrop-blur-2xl

                shadow-lg
                shadow-indigo-500/10
              "
            >
              <Sparkles
                size={16}
                className="text-indigo-600 dark:text-indigo-400"
              />

              <span
                className="
                  text-sm
                  font-semibold
                  tracking-wide

                  text-indigo-700
                  dark:text-indigo-300
                "
              >
                About Me
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight

                text-slate-900
                dark:text-white

                sm:text-5xl
                lg:text-6xl
              "
            >
              Crafting
              <br />

              <GradientText>
                Exceptional Digital
                <br />
                Experiences.
              </GradientText>
            </h2>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-2xl

                text-lg
                leading-8

                text-slate-600
                dark:text-slate-400
              "
            >
              {personalInfo.bio}
            </p>

            {/* Highlights */}

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Clean Architecture",
                "Modern UI/UX",
                "Performance First",
                "Responsive Design",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full

                    border
                    border-slate-200
                    dark:border-white/10

                    bg-white/70
                    dark:bg-white/5

                    px-4
                    py-2

                    text-sm
                    font-medium

                    text-slate-700
                    dark:text-slate-300

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-violet-400/40
                    hover:shadow-lg
                    hover:shadow-violet-500/10
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link to="/about">
                <Button
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                  className="
                    shadow-xl
                    shadow-violet-500/25
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-violet-500/40
                  "
                >
                  Learn More
                </Button>
              </Link>

              <p
                className="
                  text-sm
                  font-medium

                  text-slate-500
                  dark:text-slate-400
                "
              >
                Passionate about creating elegant, scalable and
                user-focused digital products.
              </p>
            </div>
          </div>

          {/* ======================================================
              Right Premium Card
              (Continue in Part 2)
          ====================================================== */}
                    {/* ======================================================
              Right Premium Glass Card
          ====================================================== */}

          <div className="relative z-10">
            {/* Floating Decorative Blobs */}

            <div
              aria-hidden="true"
              className="
                absolute
                -left-10
                -top-10
                h-28
                w-28
                rounded-full
                bg-violet-500/15
                blur-3xl
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-12
                -right-10
                h-32
                w-32
                rounded-full
                bg-cyan-500/15
                blur-3xl
              "
            />

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-4xl

                border
                border-slate-200/70
                dark:border-white/10

                bg-white/70
                dark:bg-slate-900/60

                backdrop-blur-3xl

                p-8
                lg:p-10

                shadow-[0_20px_70px_rgba(15,23,42,0.08)]
                dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)]

                transition-all
                duration-700

                hover:-translate-y-2
                hover:border-violet-400/40
                hover:shadow-[0_35px_90px_rgba(139,92,246,0.28)]
              "
            >
              {/* Animated Border */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  rounded-4xl
                  bg-linear-to-br
                  from-white/30
                  via-transparent
                  to-white/5
                  dark:from-white/10
                  dark:to-transparent
                "
              />

              {/* Aurora */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-28
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-violet-500/15
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
                  absolute
                  -bottom-28
                  -left-24
                  h-72
                  w-72
                  rounded-full
                  bg-cyan-500/15
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

              <div className="relative z-10">
                {/* Header */}

                <div className="mb-10">
                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-full

                      border
                      border-violet-500/20

                      bg-violet-500/10

                      px-3
                      py-1

                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.2em]

                      text-violet-700
                      dark:text-violet-300
                    "
                  >
                    Profile
                  </span>

                  <h3
                    className="
                      mt-5

                      text-3xl
                      font-extrabold
                      tracking-tight

                      text-slate-900
                      dark:text-white
                    "
                  >
                    {personalInfo.name}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-lg
                      leading-7

                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {personalInfo.role}
                  </p>
                </div>

                {/* Premium Stats Grid */}

                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      label: "Experience",
                      value: personalInfo.experience,
                    },
                    {
                      label: "Location",
                      value: personalInfo.location,
                    },
                    {
                      label: "Availability",
                      value: personalInfo.availability,
                      accent: true,
                    },
                    {
                      label: "Languages",
                      value: personalInfo.languages.join(", "),
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="
                        group/card
                        relative
                        overflow-hidden

                        rounded-2xl

                        border
                        border-slate-200/70
                        dark:border-white/10

                        bg-white/70
                        dark:bg-white/5

                        p-5

                        backdrop-blur-xl

                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:border-violet-400/40
                        hover:shadow-xl
                        hover:shadow-violet-500/10
                      "
                    >
                      <div
                        aria-hidden="true"
                        className="
                          absolute
                          inset-0
                          bg-linear-to-br
                          from-white/30
                          via-transparent
                          to-transparent
                          dark:from-white/5
                        "
                      />

                      <div className="relative z-10">
                        <p
                          className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.18em]

                            text-slate-500
                            dark:text-slate-500
                          "
                        >
                          {item.label}
                        </p>

                        <p
                          className={`
                            mt-3
                            text-lg
                            font-bold
                            leading-7

                            ${
                              item.accent
                                ? "text-emerald-600 dark:text-emerald-400"
                                : "text-slate-900 dark:text-white"
                            }
                          `}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                                {/* Bottom Divider */}

                <div className="my-10 h-px bg-linear-to-r from-transparent via-slate-300/70 to-transparent dark:via-white/10" />

                {/* Bottom Summary */}

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Focus
                    </p>

                    <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                      Building scalable, accessible and premium web experiences.
                    </p>
                  </div>

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2

                      self-start

                      rounded-full

                      border
                      border-emerald-500/20

                      bg-emerald-500/10

                      px-4
                      py-2

                      text-sm
                      font-semibold

                      text-emerald-700
                      dark:text-emerald-300
                    "
                  >
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />

                    Open for Opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPreview;