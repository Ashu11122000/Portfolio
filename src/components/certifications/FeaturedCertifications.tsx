import {
  ArrowRight,
  Award,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { featuredCertifications } from "../../data/certifications";

import Button from "../common/Button";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import CertificationGrid from "./CertificationGrid";

/**
 * =============================================================================
 * Featured Certifications
 * =============================================================================
 *
 * Ultra Premium Featured Certifications Section
 *
 * Features
 * -----------------------------------------------------------------------------
 * ✓ Aurora Background
 * ✓ Premium Glassmorphism
 * ✓ Responsive Layout
 * ✓ Light / Dark Theme
 * ✓ Animated Badge
 * ✓ Statistics
 * ✓ CTA
 * ✓ Certification Grid
 * =============================================================================
 */

function FeaturedCertifications() {
  return (
    <section
      id="certifications"
      className="
        relative
        isolate
        overflow-hidden

        py-24
        md:py-28
        xl:py-32
      "
    >
      {/* ==========================================================================
          Aurora Background
      ========================================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Left Glow */}

        <div
          className="
            absolute
            -left-32
            top-16

            h-112
            w-md

            rounded-full

            bg-linear-to-br
            from-violet-500/20
            via-fuchsia-500/12
            to-transparent

            blur-[150px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            -right-32
            bottom-0

            h-120
            w-120

            rounded-full

            bg-linear-to-br
            from-cyan-500/18
            via-sky-500/10
            to-transparent

            blur-[170px]
          "
        />

        {/* Center Glow */}

        <div
          className="
            absolute
            left-1/2
            top-0

            h-88
            w-88

            -translate-x-1/2

            rounded-full

            bg-linear-to-br
            from-fuchsia-500/12
            via-violet-500/8
            to-cyan-500/10

            blur-[130px]
          "
        />

        {/* Ambient Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-152
            w-152

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-violet-500/3

            blur-[200px]
          "
        />
      </div>

      <Container>
        {/* ==========================================================================
            Premium Badge
        ========================================================================== */}

        <div className="mb-10 flex justify-center">
          <div
            className="
              group

              inline-flex
              items-center
              gap-3

              rounded-full

              border
              border-violet-500/20

              bg-white/70
              dark:bg-white/5

              px-6
              py-3

              backdrop-blur-2xl

              shadow-lg
              shadow-violet-500/10

              transition-all
              duration-500

              hover:-translate-y-1
              hover:border-violet-500/40
              hover:shadow-[0_20px_50px_rgba(139,92,246,.18)]
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                bg-linear-to-br
                from-violet-600
                via-fuchsia-600
                to-cyan-500

                text-white

                shadow-lg
                shadow-violet-500/30

                transition-transform
                duration-500

                group-hover:rotate-12
                group-hover:scale-110
              "
            >
              <BadgeCheck size={18} />
            </div>

            <span
              className="
                flex
                items-center
                gap-2

                text-sm
                font-semibold
                tracking-wide

                text-zinc-700
                dark:text-zinc-200
              "
            >
              <Sparkles
                size={15}
                className="
                  text-violet-500
                  dark:text-violet-400
                "
              />

              Continuous Learning • Industry Recognized Credentials
            </span>
          </div>
        </div>

        {/* ==========================================================================
            Section Header
        ========================================================================== */}

        <SectionTitle
          title="Professional Certifications"
          subtitle="I continuously invest in learning modern technologies, software architecture, backend engineering, cloud platforms, DevOps, AI, databases, and mobile development. Every certification reflects practical skills that strengthen the quality, scalability, and maintainability of the software I build."
        />

        {/* ==========================================================================
            Header Content
        ========================================================================== */}

        <div
          className="
            mt-16

            flex
            flex-col

            gap-12

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
                    {/* ==========================================================================
              Statistics
          ========================================================================== */}

          <div
            className="
              grid
              gap-5

              sm:grid-cols-3
            "
          >
            {/* Total Certifications */}

            <div
              className="
                group
                relative
                overflow-hidden

                rounded-[28px]

                border
                border-zinc-200/70
                dark:border-white/10

                bg-white/75
                dark:bg-white/5

                p-7

                backdrop-blur-2xl

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-violet-500/40
                hover:shadow-[0_25px_60px_rgba(139,92,246,.18)]
              "
            >
              <div
                className="
                  absolute
                  -right-10
                  -top-10

                  h-28
                  w-28

                  rounded-full

                  bg-violet-500/10

                  blur-3xl
                "
              />

              <p
                className="
                  relative

                  text-4xl
                  font-black

                  text-zinc-900
                  dark:text-white
                "
              >
                {featuredCertifications.length}+
              </p>

              <p
                className="
                  relative
                  mt-3

                  text-sm
                  font-medium

                  text-zinc-600
                  dark:text-zinc-400
                "
              >
                Featured Certifications
              </p>
            </div>

            {/* Verified */}

            <div
              className="
                group
                relative
                overflow-hidden

                rounded-[28px]

                border
                border-zinc-200/70
                dark:border-white/10

                bg-white/75
                dark:bg-white/5

                p-7

                backdrop-blur-2xl

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-cyan-500/40
                hover:shadow-[0_25px_60px_rgba(6,182,212,.18)]
              "
            >
              <div
                className="
                  absolute
                  -right-10
                  -top-10

                  h-28
                  w-28

                  rounded-full

                  bg-cyan-500/10

                  blur-3xl
                "
              />

              <p
                className="
                  relative

                  text-4xl
                  font-black

                  text-zinc-900
                  dark:text-white
                "
              >
                100%
              </p>

              <p
                className="
                  relative
                  mt-3

                  text-sm
                  font-medium

                  text-zinc-600
                  dark:text-zinc-400
                "
              >
                Verified Credentials
              </p>
            </div>

            {/* Learning */}

            <div
              className="
                group
                relative
                overflow-hidden

                rounded-[28px]

                border
                border-zinc-200/70
                dark:border-white/10

                bg-white/75
                dark:bg-white/5

                p-7

                backdrop-blur-2xl

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-fuchsia-500/40
                hover:shadow-[0_25px_60px_rgba(217,70,239,.18)]
              "
            >
              <div
                className="
                  absolute
                  -right-10
                  -top-10

                  h-28
                  w-28

                  rounded-full

                  bg-fuchsia-500/10

                  blur-3xl
                "
              />

              <p
                className="
                  relative

                  text-4xl
                  font-black

                  text-zinc-900
                  dark:text-white
                "
              >
                24/7
              </p>

              <p
                className="
                  relative
                  mt-3

                  text-sm
                  font-medium

                  text-zinc-600
                  dark:text-zinc-400
                "
              >
                Continuous Learning
              </p>
            </div>
          </div>

          {/* ==========================================================================
              CTA
          ========================================================================== */}

          <div className="flex justify-start lg:justify-end">
            <Link to="/certifications">
              <Button
                className="
                  group

                  rounded-2xl

                  bg-linear-to-r
                  from-violet-600
                  via-fuchsia-600
                  to-cyan-500

                  px-8
                  py-6

                  text-white

                  shadow-[0_20px_60px_rgba(139,92,246,.30)]

                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:scale-[1.02]

                  hover:shadow-[0_30px_70px_rgba(139,92,246,.40)]

                  active:scale-[0.98]
                "
              >
                <Award
                  size={18}
                  className="
                    mr-3

                    transition-transform
                    duration-500

                    group-hover:rotate-12
                  "
                />

                View All Certifications

                <ArrowRight
                  size={18}
                  className="
                    ml-3

                    transition-transform
                    duration-500

                    group-hover:translate-x-2
                  "
                />
              </Button>
            </Link>
          </div>
        </div>

        {/* ==========================================================================
            Premium Divider
        ========================================================================== */}
                {/* ==========================================================================
            Premium Divider
        ========================================================================== */}

        <div
          className="
            relative
            my-20
            h-px
            w-full
            overflow-hidden
          "
        >
          <div
            className="
              absolute
              inset-0

              bg-linear-to-r
              from-transparent
              via-violet-500/30
              to-transparent
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2

              h-16
              w-16

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-violet-500/20

              blur-2xl
            "
          />
        </div>

        {/* ==========================================================================
            Featured Certification Grid
        ========================================================================== */}

        <div
          className="
            relative
            z-10
          "
        >
          <CertificationGrid
            certifications={featuredCertifications}
          />
        </div>

        {/* ==========================================================================
            Bottom CTA
        ========================================================================== */}

        <div
          className="
            mt-24
            flex
            justify-center
          "
        >
          <div
            className="
              group
              relative
              overflow-hidden

              rounded-[36px]

              border
              border-zinc-200/70
              dark:border-white/10

              bg-white/75
              dark:bg-white/5

              px-8
              py-8

              lg:px-10
              lg:py-10

              backdrop-blur-3xl

              shadow-[0_25px_80px_rgba(0,0,0,0.08)]
              dark:shadow-[0_25px_80px_rgba(0,0,0,0.30)]

              transition-all
              duration-700

              hover:-translate-y-2
              hover:border-violet-500/30
              hover:shadow-[0_35px_90px_rgba(139,92,246,.18)]
            "
          >
            {/* Top Border Glow */}

            <div
              className="
                absolute
                inset-x-0
                top-0

                h-px

                bg-linear-to-r
                from-transparent
                via-violet-500/70
                to-transparent
              "
            />

            {/* Aurora Glow */}

            <div
              className="
                absolute
                inset-0

                bg-linear-to-br
                from-violet-500/5
                via-fuchsia-500/5
                to-cyan-500/5
              "
            />

            {/* Decorative Glow */}

            <div
              className="
                absolute
                -right-24
                -top-24

                h-64
                w-64

                rounded-full

                bg-violet-500/10

                blur-[120px]
              "
            />

            <div
              className="
                relative
                z-10

                flex
                flex-col
                items-center

                gap-8

                text-center

                lg:flex-row
                lg:text-left
              "
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-20
                  w-20
                  shrink-0

                  items-center
                  justify-center

                  rounded-[28px]

                  bg-linear-to-br
                  from-violet-600
                  via-fuchsia-600
                  to-cyan-500

                  text-white

                  shadow-[0_20px_55px_rgba(139,92,246,.35)]

                  transition-all
                  duration-700

                  group-hover:rotate-6
                  group-hover:scale-110
                "
              >
                <Award
                  size={34}
                  strokeWidth={2.2}
                />
              </div>

              {/* Content */}

              <div className="max-w-2xl">
                <h3
                  className="
                    text-3xl
                    font-black
                    tracking-tight

                    text-zinc-900
                    dark:text-white
                  "
                >
                  Learning Never Stops
                </h3>

                <p
                  className="
                    mt-4

                    text-[15px]
                    leading-8

                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  I continuously strengthen my expertise through
                  industry-recognized certifications in frontend
                  engineering, backend systems, cloud computing,
                  DevOps, databases, software architecture,
                  AI technologies, and modern application
                  development to deliver scalable,
                  maintainable, and production-ready software.
                </p>
              </div>
            </div>
          </div>
        </div>

              </Container>
    </section>
  );
}

export default FeaturedCertifications;