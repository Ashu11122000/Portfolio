import {
  Award,
  CalendarDays,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

import Badge from "../common/Badge";
import Button from "../common/Button";
import GlassCard from "../ui/GlassCard";

import type { CertificationCardProps } from "../../types/certification";

/**
 * =============================================================================
 * Certification Card
 * =============================================================================
 *
 * Ultra Premium reusable certification card.
 *
 * Features
 * -----------------------------------------------------------------------------
 * ✓ Premium Glassmorphism
 * ✓ Theme Aware (Light / Dark)
 * ✓ Beautiful Gradient Lighting
 * ✓ Hover Glow Animation
 * ✓ Responsive Layout
 * ✓ Smooth Transitions
 * ✓ Better Typography
 * ✓ Skill Tags
 * ✓ Credential Button
 * ✓ Optional Details Modal
 * =============================================================================
 */

function CertificationCard({
  certification,
  onView,
}: CertificationCardProps) {
  const {
    title,
    issuer,
    instructor,
    issueDate,
    category,
    description,
    skills,
    credentialUrl,
  } = certification;

  const handleViewCertificate = () => {
    if (!credentialUrl) return;

    window.open(credentialUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <GlassCard
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-4xl

        border
        border-zinc-200/70
        dark:border-white/10

        bg-white/80
        dark:bg-white/5

        backdrop-blur-3xl

        shadow-xl
        shadow-black/5
        dark:shadow-black/30

        transition-all
        duration-700
        ease-out

        hover:-translate-y-3
        hover:border-violet-500/40
        hover:shadow-[0_35px_90px_rgba(124,58,237,0.22)]
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
          via-violet-400/70
          to-transparent
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />

      {/* Main Background Glow */}

      <div
        className="
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full

          bg-linear-to-br
          from-violet-500/20
          via-fuchsia-500/15
          to-cyan-400/20

          blur-3xl

          transition-all
          duration-700

          group-hover:scale-125
          group-hover:opacity-100
        "
      />

      {/* Bottom Glow */}

      <div
        className="
          absolute
          -left-20
          bottom-0
          h-56
          w-56
          rounded-full

          bg-cyan-400/10

          blur-3xl

          opacity-0

          transition-all
          duration-700

          group-hover:opacity-100
        "
      />

      {/* Glass Overlay */}

      <div
        className="
          absolute
          inset-0
          rounded-4xl

          bg-linear-to-br
          from-white/40
          via-transparent
          to-transparent

          dark:from-white/5

          pointer-events-none
        "
      />

      {/* Content */}

      <div className="relative z-10 flex h-full flex-col p-7">
        {/* Header */}

        <div className="mb-6 flex items-start justify-between gap-5">
          {/* Award Icon */}

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-3xl

              border
              border-white/30
              dark:border-white/10

              bg-linear-to-br
              from-violet-500
              via-fuchsia-500
              to-cyan-400

              text-white

              shadow-[0_20px_45px_rgba(124,58,237,.35)]

              transition-all
              duration-700

              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            <Award size={30} strokeWidth={2.2} />
          </div>

          <Badge>{category}</Badge>
        </div>

        {/* Title */}

        <h3
          className="
            text-2xl
            font-bold
            leading-tight
            tracking-tight

            text-zinc-900
            dark:text-white

            transition-colors
            duration-300

            group-hover:text-violet-500
          "
        >
          {title}
        </h3>

        {/* Issuer */}

        <div
          className="
            mt-4
            flex
            items-center
            gap-2.5

            text-sm
            font-medium

            text-zinc-600
            dark:text-zinc-400
          "
        >
          <GraduationCap
            size={16}
            className="text-violet-500 dark:text-violet-400"
          />

          <span>{issuer}</span>
        </div>

        {/* Instructor */}

        {instructor && (
          <div
            className="
              mt-3

              text-sm
              leading-6

              text-zinc-700
              dark:text-zinc-300
            "
          >
            <span className="font-semibold">Instructor:</span>{" "}
            {instructor}
          </div>
        )}

        {/* Issue Date */}

        <div
          className="
            mt-3
            flex
            items-center
            gap-2.5

            text-sm
            font-medium

            text-zinc-600
            dark:text-zinc-400
          "
        >
          <CalendarDays
            size={16}
            className="text-cyan-500 dark:text-cyan-400"
          />

          <span>{issueDate}</span>
        </div>

                {/* Description */}

        <p
          className="
            mt-6
            flex-1

            text-[15px]
            leading-8

            text-zinc-700
            dark:text-zinc-300

            transition-colors
            duration-300
          "
        >
          {description}
        </p>

        {/* Divider */}

        <div
          className="
            my-7
            h-px
            w-full

            bg-linear-to-r
            from-transparent
            via-zinc-300
            to-transparent

            dark:via-white/10
          "
        />

        {/* Skills */}

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]

                text-zinc-500
                dark:text-zinc-400
              "
            >
              Skills Covered
            </h4>

            <span
              className="
                rounded-full

                border
                border-violet-500/20

                bg-violet-500/10

                px-3
                py-1

                text-xs
                font-semibold

                text-violet-700
                dark:text-violet-300
              "
            >
              {skills.length} Skills
            </span>
          </div>

          <div
            className="
              flex
              flex-wrap
              gap-3
            "
          >
            {skills.slice(0, 4).map((skill) => (
              <Badge
                key={skill.id}
                className="
                  border
                  border-violet-500/20

                  bg-violet-500/10
                  dark:bg-violet-500/15

                  px-3
                  py-1.5

                  text-sm
                  font-medium

                  text-violet-700
                  dark:text-violet-300

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-violet-500/40
                  hover:bg-violet-500
                  hover:text-white
                  hover:shadow-lg
                  hover:shadow-violet-500/25
                "
              >
                {skill.name}
              </Badge>
            ))}

            {skills.length > 4 && (
              <Badge
                className="
                  border
                  border-cyan-500/20

                  bg-cyan-500/10
                  dark:bg-cyan-500/15

                  px-3
                  py-1.5

                  text-sm
                  font-semibold

                  text-cyan-700
                  dark:text-cyan-300

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-cyan-500/40
                  hover:bg-cyan-500
                  hover:text-white
                  hover:shadow-lg
                  hover:shadow-cyan-500/25
                "
              >
                +{skills.length - 4}
              </Badge>
            )}
          </div>
        </div>

        {/* Footer */}
                {/* Footer */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-3

            sm:flex-row
            sm:items-center
          "
        >
          <Button
            onClick={handleViewCertificate}
            disabled={!credentialUrl}
            className="
              group/button
              flex-1

              justify-center

              rounded-2xl

              bg-linear-to-r
              from-violet-600
              via-fuchsia-600
              to-cyan-500

              text-white

              shadow-lg
              shadow-violet-500/25

              transition-all
              duration-500

              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-violet-500/35

              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <ExternalLink
              size={18}
              className="
                mr-2
                transition-transform
                duration-300
                group-hover/button:translate-x-1
              "
            />

            View Certificate
          </Button>

          {onView && (
            <Button
              variant="secondary"
              onClick={() => onView(certification)}
              className="
                rounded-2xl

                border
                border-zinc-300
                dark:border-white/10

                bg-white/70
                dark:bg-white/5

                text-zinc-900
                dark:text-white

                backdrop-blur-xl

                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-violet-500/40
                hover:bg-violet-500/10
                dark:hover:bg-violet-500/15
              "
            >
              Details
            </Button>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

export default CertificationCard;