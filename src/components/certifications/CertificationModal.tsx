import {
  Award,
  CalendarDays,
  ExternalLink,
  GraduationCap,
  Sparkles,
  Tag,
  User,
  X,
} from "lucide-react";

import Button from "../common/Button";
import GlassCard from "../ui/GlassCard";

import type { CertificationModalProps } from "../../types/certification";

/**
 * =============================================================================
 * Ultra Premium Certification Modal
 * =============================================================================
 *
 * Features
 * -----------------------------------------------------------------------------
 * ✓ Premium Glassmorphism
 * ✓ Aurora Background
 * ✓ Theme Aware
 * ✓ Responsive
 * ✓ Animated Border
 * ✓ Accessible
 * ✓ Production Ready
 * =============================================================================
 */

function CertificationModal({
  certification,
  isOpen,
  onClose,
}: CertificationModalProps) {
  if (!isOpen || !certification) {
    return null;
  }

  const handleViewCertificate = () => {
    if (!certification.credentialUrl) return;

    window.open(
      certification.credentialUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-999

        flex
        items-center
        justify-center

        overflow-y-auto

        bg-black/70
        dark:bg-black/80

        backdrop-blur-2xl

        p-5
        md:p-8

        animate-in
        fade-in
        duration-300
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
          overflow-hidden
        "
      >
        {/* Top Left */}

        <div
          className="
            absolute
            -left-24
            top-16

            h-80
            w-80

            rounded-full

            bg-linear-to-br
            from-violet-500/25
            via-fuchsia-500/15
            to-transparent

            blur-[120px]
          "
        />

        {/* Bottom Right */}

        <div
          className="
            absolute
            -right-24
            bottom-0

            h-96
            w-96

            rounded-full

            bg-linear-to-br
            from-cyan-500/20
            via-sky-500/10
            to-transparent

            blur-[140px]
          "
        />

        {/* Center Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-105
            w-105

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-linear-to-br
            from-violet-500/10
            via-fuchsia-500/10
            to-cyan-500/10

            blur-[150px]
          "
        />
      </div>

      {/* ==========================================================================
          Glass Card
      ========================================================================== */}

      <GlassCard
        onClick={(event) => event.stopPropagation()}
        className="
          relative

          w-full
          max-w-5xl

          overflow-hidden

          rounded-[36px]

          border
          border-zinc-200/60
          dark:border-white/10

          bg-white/85
          dark:bg-zinc-900/80

          backdrop-blur-3xl

          shadow-[0_30px_120px_rgba(0,0,0,0.18)]
          dark:shadow-[0_30px_120px_rgba(0,0,0,0.55)]
        "
      >
        {/* ==========================================================================
            Animated Gradient Border
        ========================================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            rounded-[36px]

            p-px

            bg-linear-to-br
            from-violet-500/50
            via-fuchsia-500/20
            to-cyan-400/40
          "
        >
          <div
            className="
              h-full
              w-full

              rounded-[35px]

              bg-white/90
              dark:bg-zinc-950/90

              backdrop-blur-3xl
            "
          />
        </div>

        {/* Ambient Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20

            h-64
            w-64

            rounded-full

            bg-violet-500/10

            blur-3xl
          "
        />

        {/* Content */}

        <div className="relative z-10 p-7 md:p-10 lg:p-12">
                    {/* ==========================================================================
              Close Button
          ========================================================================== */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close certification details"
            className="
              absolute
              right-6
              top-6

              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-2xl

              border
              border-zinc-200/70
              dark:border-white/10

              bg-white/80
              dark:bg-white/5

              text-zinc-600
              dark:text-zinc-400

              backdrop-blur-xl

              transition-all
              duration-500

              hover:rotate-90
              hover:scale-105

              hover:border-violet-500/40
              hover:bg-violet-500/10

              hover:text-violet-600
              dark:hover:text-violet-300
            "
          >
            <X size={20} />
          </button>

          {/* ==========================================================================
              Header
          ========================================================================== */}

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            {/* Certificate Icon */}

            <div
              className="
                relative

                flex
                h-24
                w-24
                shrink-0
                items-center
                justify-center

                rounded-[28px]

                border
                border-white/30
                dark:border-white/10

                bg-linear-to-br
                from-violet-600
                via-fuchsia-600
                to-cyan-500

                text-white

                shadow-[0_20px_60px_rgba(139,92,246,.40)]

                transition-all
                duration-700

                hover:rotate-6
                hover:scale-105
              "
            >
              <Award size={40} strokeWidth={2.2} />

              <Sparkles
                size={18}
                className="
                  absolute
                  -right-1
                  -top-1

                  text-yellow-300

                  animate-pulse
                "
              />
            </div>

            {/* Title + Metadata */}

            <div className="flex-1">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-violet-500/20

                  bg-violet-500/10

                  px-4
                  py-2

                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.22em]

                  text-violet-700
                  dark:text-violet-300
                "
              >
                <Sparkles size={14} />

                Professional Certification
              </div>

              <h2
                className="
                  mt-6

                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight

                  text-zinc-900
                  dark:text-white

                  lg:text-4xl
                "
              >
                {certification.title}
              </h2>

              {/* ================================================================
                  Stats Cards
              ================================================================ */}

              <div
                className="
                  mt-8

                  grid
                  gap-4

                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >
                {/* Issuer */}

                <div
                  className="
                    rounded-3xl

                    border
                    border-zinc-200/70
                    dark:border-white/10

                    bg-white/70
                    dark:bg-white/5

                    p-5

                    backdrop-blur-xl

                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-violet-500/30
                  "
                >
                  <div className="flex items-center gap-2 text-violet-600 dark:text-violet-300">
                    <GraduationCap size={16} />

                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      Issuer
                    </span>
                  </div>

                  <p
                    className="
                      mt-3

                      font-semibold

                      text-zinc-900
                      dark:text-white
                    "
                  >
                    {certification.issuer}
                  </p>
                </div>

                {/* Date */}

                <div
                  className="
                    rounded-3xl

                    border
                    border-zinc-200/70
                    dark:border-white/10

                    bg-white/70
                    dark:bg-white/5

                    p-5

                    backdrop-blur-xl

                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-cyan-500/30
                  "
                >
                  <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-300">
                    <CalendarDays size={16} />

                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      Issued
                    </span>
                  </div>

                  <p
                    className="
                      mt-3

                      font-semibold

                      text-zinc-900
                      dark:text-white
                    "
                  >
                    {certification.issueDate}
                  </p>
                </div>

                {/* Category */}

                <div
                  className="
                    rounded-3xl

                    border
                    border-zinc-200/70
                    dark:border-white/10

                    bg-white/70
                    dark:bg-white/5

                    p-5

                    backdrop-blur-xl

                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-fuchsia-500/30
                  "
                >
                  <div className="flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-300">
                    <Tag size={16} />

                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      Category
                    </span>
                  </div>

                  <p
                    className="
                      mt-3

                      font-semibold

                      text-zinc-900
                      dark:text-white
                    "
                  >
                    {certification.category}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================================================
              Instructor Section
          ========================================================================== */}

                    {/* ==========================================================================
              Instructor
          ========================================================================== */}

          {certification.instructor && (
            <section className="mt-10">
              <div
                className="
                  relative
                  overflow-hidden

                  rounded-[28px]

                  border
                  border-zinc-200/70
                  dark:border-white/10

                  bg-white/70
                  dark:bg-white/5

                  backdrop-blur-2xl

                  p-7

                  transition-all
                  duration-500

                  hover:border-violet-500/30
                  hover:shadow-[0_20px_50px_rgba(139,92,246,0.12)]
                "
              >
                {/* Background Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12

                    h-40
                    w-40

                    rounded-full

                    bg-violet-500/10

                    blur-3xl
                  "
                />

                <div className="relative flex items-start gap-5">
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center

                      rounded-2xl

                      bg-linear-to-br
                      from-violet-500
                      via-fuchsia-500
                      to-cyan-400

                      text-white

                      shadow-lg
                      shadow-violet-500/20
                    "
                  >
                    <User size={22} />
                  </div>

                  {/* Content */}

                  <div className="flex-1">
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
                      Instructor
                    </span>

                    <h3
                      className="
                        mt-2

                        text-xl
                        font-bold

                        text-zinc-900
                        dark:text-white
                      "
                    >
                      {certification.instructor}
                    </h3>

                    <p
                      className="
                        mt-3

                        text-sm
                        leading-7

                        text-zinc-600
                        dark:text-zinc-400
                      "
                    >
                      Guided this professional certification program,
                      providing practical knowledge, industry best practices,
                      and hands-on learning throughout the course.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ==========================================================================
              About Certification
          ========================================================================== */}

          <section className="mt-10">
            <div className="flex items-center gap-3">
              <div
                className="
                  h-8
                  w-1.5

                  rounded-full

                  bg-linear-to-b
                  from-violet-500
                  to-cyan-500
                "
              />

              <h3
                className="
                  text-2xl
                  font-bold

                  text-zinc-900
                  dark:text-white
                "
              >
                About this Certification
              </h3>
            </div>

            <div
              className="
                relative
                mt-6
                overflow-hidden

                rounded-[28px]

                border
                border-zinc-200/70
                dark:border-white/10

                bg-white/70
                dark:bg-white/5

                backdrop-blur-2xl

                p-7

                transition-all
                duration-500

                hover:border-cyan-500/30
              "
            >
              {/* Decorative Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -left-16

                  h-44
                  w-44

                  rounded-full

                  bg-cyan-500/10

                  blur-3xl
                "
              />

              <div className="relative">
                <p
                  className="
                    text-[15px]
                    leading-8

                    text-zinc-700
                    dark:text-zinc-300
                  "
                >
                  {certification.description}
                </p>
              </div>
            </div>
          </section>

          {/* ==========================================================================
              Skills Covered
          ========================================================================== */}

                    {/* ==========================================================================
              Skills Covered
          ========================================================================== */}

          <section className="mt-10">
            <div className="flex items-center gap-3">
              <div
                className="
                  h-8
                  w-1.5
                  rounded-full

                  bg-linear-to-b
                  from-violet-500
                  to-cyan-500
                "
              />

              <h3
                className="
                  text-2xl
                  font-bold

                  text-zinc-900
                  dark:text-white
                "
              >
                Skills Covered
              </h3>
            </div>

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-3
              "
            >
              {certification.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="
                    group
                    relative
                    overflow-hidden

                    rounded-full

                    border
                    border-violet-500/20

                    bg-linear-to-r
                    from-violet-500/10
                    via-fuchsia-500/10
                    to-cyan-500/10

                    px-5
                    py-2.5

                    text-sm
                    font-semibold

                    text-violet-700
                    dark:text-violet-300

                    backdrop-blur-xl

                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-violet-500/40
                    hover:shadow-[0_12px_35px_rgba(139,92,246,.25)]
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0

                      bg-linear-to-r
                      from-violet-500/0
                      via-white/20
                      to-violet-500/0

                      opacity-0

                      transition-opacity
                      duration-500

                      group-hover:opacity-100
                    "
                  />

                  <span className="relative">
                    {skill.name}
                  </span>
                </span>
              ))}
            </div>
          </section>

          {/* ==========================================================================
              Credential ID
          ========================================================================== */}

          {certification.credentialId && (
            <section className="mt-10">
              <div
                className="
                  relative
                  overflow-hidden

                  rounded-[28px]

                  border
                  border-zinc-200/70
                  dark:border-white/10

                  bg-white/70
                  dark:bg-white/5

                  backdrop-blur-2xl

                  p-7
                "
              >
                {/* Decorative Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    bottom-0

                    h-44
                    w-44

                    rounded-full

                    bg-violet-500/10

                    blur-3xl
                  "
                />

                <div className="relative">
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
                    Credential ID
                  </span>

                  <code
                    className="
                      mt-4
                      block

                      break-all

                      rounded-2xl

                      border
                      border-zinc-200
                      dark:border-white/10

                      bg-zinc-100
                      dark:bg-black/30

                      px-5
                      py-4

                      font-mono
                      text-sm

                      text-cyan-700
                      dark:text-cyan-300
                    "
                  >
                    {certification.credentialId}
                  </code>
                </div>
              </div>
            </section>
          )}

          {/* ==========================================================================
              Footer Actions
          ========================================================================== */}

                    {/* ==========================================================================
              Footer Actions
          ========================================================================== */}

          <div
            className="
              mt-12

              flex
              flex-col-reverse
              gap-4

              border-t
              border-zinc-200/70
              dark:border-white/10

              pt-8

              sm:flex-row
              sm:items-center
              sm:justify-end
            "
          >
            {/* Close Button */}

            <Button
              variant="outline"
              onClick={onClose}
              className="
                min-w-42.5

                rounded-2xl

                border-zinc-300
                dark:border-white/10

                bg-white/70
                dark:bg-white/5

                text-zinc-800
                dark:text-zinc-200

                backdrop-blur-xl

                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-zinc-400
                dark:hover:border-white/20

                hover:bg-zinc-100
                dark:hover:bg-white/10

                hover:shadow-lg
              "
            >
              Close
            </Button>

            {/* View Certificate */}

            {certification.credentialUrl && (
              <Button
                onClick={handleViewCertificate}
                className="
                  group

                  min-w-60

                  rounded-2xl

                  bg-linear-to-r
                  from-violet-600
                  via-fuchsia-600
                  to-cyan-500

                  text-white

                  shadow-[0_15px_45px_rgba(139,92,246,.35)]

                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:scale-[1.02]

                  hover:shadow-[0_20px_60px_rgba(139,92,246,.45)]

                  active:scale-[0.98]
                "
              >
                <ExternalLink
                  size={18}
                  className="
                    mr-2

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

                View Certificate
              </Button>
            )}
          </div>

                  </div>
      </GlassCard>
    </div>
  );
}

export default CertificationModal;