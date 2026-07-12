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
 * ==========================================================
 * Featured Certifications
 * ==========================================================
 *
 * Ultra Premium homepage preview showcasing
 * featured professional certifications.
 *
 * Features
 * ----------
 * ✓ Aurora Background
 * ✓ Glassmorphism
 * ✓ Premium Badge
 * ✓ Statistics
 * ✓ Responsive
 * ✓ Smooth Hover Effects
 * ✓ Production Ready
 * ==========================================================
 */

function FeaturedCertifications() {
  return (
    <section
      id="certifications"
      className="
        relative
        overflow-hidden
        py-28
      "
    >
      {/* Background Effects */}

      <div
        className="
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Aurora Glow */}

        <div
          className="
            absolute
            -left-45
            top-20
            h-95
            w-95
            rounded-full
            bg-violet-500/15
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -right-35
            bottom-0
            h-105
            w-105
            rounded-full
            bg-cyan-500/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-0
            h-65
            w-65
            -translate-x-1/2
            rounded-full
            bg-fuchsia-500/10
            blur-[120px]
          "
        />
      </div>

      <Container>
        {/* Premium Badge */}

        <div className="mb-8 flex justify-center">
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-violet-500/20
              bg-white/4
              px-6
              py-3
              backdrop-blur-xl
              shadow-[0_8px_40px_rgba(139,92,246,0.12)]
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-linear-to-br
                from-violet-600
                via-fuchsia-600
                to-cyan-500
                text-white
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
                text-gray-200
              "
            >
              <Sparkles
                size={15}
                className="text-yellow-400"
              />

              Continuous Learning • Industry Recognized Credentials
            </span>
          </div>
        </div>

        {/* Section Header */}

                <SectionTitle
          title="Professional Certifications"
          subtitle="I continuously invest in learning modern technologies, software architecture, backend engineering, cloud platforms, DevOps, and mobile development. Every certification reflects practical skills that strengthen the quality, scalability, and maintainability of the software I build."
        />

        {/* Header Content */}

        <div
          className="
            mt-14
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* Statistics */}

          <div
            className="
              grid
              gap-5
              sm:grid-cols-3
            "
          >
            {/* Card */}

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/4
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-violet-500/30
                hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]
              "
            >
              <p className="text-3xl font-black text-white">
                {featuredCertifications.length}+
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Featured Certifications
              </p>
            </div>

            {/* Card */}

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/4
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-500/30
                hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]
              "
            >
              <p className="text-3xl font-black text-white">
                100%
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Verified Credentials
              </p>
            </div>

            {/* Card */}

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/4
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-fuchsia-500/30
                hover:shadow-[0_20px_50px_rgba(217,70,239,0.15)]
              "
            >
              <p className="text-3xl font-black text-white">
                24/7
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Continuous Learning
              </p>
            </div>
          </div>

          {/* CTA */}

          <div className="flex justify-start lg:justify-end">
            <Link to="/certifications">
              <Button
                className="
                  group
                  rounded-2xl
                  px-8
                  py-6
                  shadow-[0_20px_60px_rgba(139,92,246,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_25px_70px_rgba(139,92,246,0.35)]
                "
              >
                <Award
                  size={18}
                  className="
                    mr-3
                    transition-transform
                    duration-300
                    group-hover:rotate-12
                  "
                />

                View All Certifications

                <ArrowRight
                  size={18}
                  className="
                    ml-3
                    transition-transform
                    duration-300
                    group-hover:translate-x-1.5
                  "
                />
              </Button>
            </Link>
          </div>
        </div>

        {/* Premium Divider */}

        <div
          className="
            my-14
            h-px
            w-full
            bg-linear-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

                {/* Featured Certification Grid */}

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

        {/* Bottom CTA */}

        <div
          className="
            mt-20
            flex
            justify-center
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-4xl
              border
              border-white/10
              bg-white/4
              px-8
              py-8
              backdrop-blur-2xl
              shadow-[0_20px_80px_rgba(0,0,0,0.25)]
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                inset-0
                bg-linear-to-r
                from-violet-500/5
                via-fuchsia-500/5
                to-cyan-500/5
              "
            />

            <div
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                gap-6
                text-center
                lg:flex-row
                lg:text-left
              "
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-linear-to-br
                  from-violet-600
                  via-fuchsia-600
                  to-cyan-500
                  text-white
                  shadow-[0_20px_45px_rgba(139,92,246,0.35)]
                "
              >
                <Award size={30} />
              </div>

              {/* Content */}

              <div className="max-w-xl">
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  Learning Never Stops
                </h3>

                <p
                  className="
                    mt-2
                    leading-7
                    text-gray-400
                  "
                >
                  I regularly expand my expertise through professional
                  certifications in frontend engineering, backend systems,
                  cloud technologies, DevOps, databases, and modern software
                  architecture to stay aligned with industry best practices.
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