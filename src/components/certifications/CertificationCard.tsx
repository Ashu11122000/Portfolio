import { Award, CalendarDays, ExternalLink, GraduationCap } from "lucide-react";

import Badge from "../common/Badge";
import Button from "../common/Button";
import GlassCard from "../ui/GlassCard";

import type { CertificationCardProps } from "../../types/certification";

/**
 * ==========================================================
 * Certification Card
 * ==========================================================
 *
 * Premium reusable certification card.
 *
 * Features
 * ----------
 * ✓ Glassmorphism UI
 * ✓ Responsive
 * ✓ Hover Animation
 * ✓ Category Badge
 * ✓ Issuer Display
 * ✓ Skills Preview
 * ✓ Google Drive Integration
 * ✓ View Certificate Button
 * ✓ Dark / Light Theme
 *
 * Used By
 * ----------
 * - CertificationGrid
 * - FeaturedCertifications
 * - Home Page
 * - Certifications Page
 * ==========================================================
 */

function CertificationCard({ certification, onView }: CertificationCardProps) {
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
rounded-[28px]
border
border-white/10
bg-white/[0.04]
backdrop-blur-2xl
transition-all
duration-500
hover:-translate-y-2
hover:border-violet-500/30
hover:shadow-[0_35px_90px_rgba(124,58,237,0.22)]
before:absolute
before:inset-0
before:rounded-[28px]
before:bg-gradient-to-br
before:from-white/5
before:to-transparent
before:opacity-70
"
    >
      {/* Gradient Glow */}

      <div
        className="
        absolute
        -right-24
        -top-24
        h-72
        w-72
        rounded-full
        bg-violet-500/15
        blur-3xl
        transition-all
        duration-700
        group-hover:scale-125
        group-hover:opacity-100
    "
      />

      <div className="relative flex h-full flex-col p-6">
        {/* Header */}

        <div className="mb-5 flex items-start justify-between gap-4">
          <div
            className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-violet-500
        via-fuchsia-500
        to-cyan-500
        text-black
        text-slate-900 dark: text-black
        shadow-xl
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:rotate-6
    "
          >
            <Award size={30} />
          </div>

          <Badge>{category}</Badge>
        </div>

        {/* Title */}

        <h3
          className="
mt-1
text-2xl
font-bold
leading-tight
tracking-tight
text-black
text-slate-900
transition-all
duration-300
group-hover:text-violet-500
text-slate-900 dark:text-slate-900 dark:text-white
"
        >
          {title}
        </h3>

        {/* Issuer */}

        <div
          className="
                        mt-3
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-gray-400
                    "
        >
          <GraduationCap size={16} />

          <span>{issuer}</span>
        </div>

        {/* Instructor */}

        {instructor && (
          <p
            className="
                            mt-2
                            text-sm
                            text-gray-800
                        "
          >
            Instructor: {instructor}
          </p>
        )}

        {/* Date */}

        <div
          className="
                        mt-3
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-gray-800
                    "
        >
          <CalendarDays size={16} />

          <span>{issueDate}</span>
        </div>

        {/* Description */}

        <p
          className="
                        mt-5
                        flex-1
                        text-sm
                        leading-7
                        text-gray-800
                    "
        >
          {description}
        </p>

        {/* Skills */}

        <div
          className="
                        mt-6
                        flex
                        flex-wrap
                        gap-2
                    "
        >
          {skills.slice(0, 4).map((skill) => (
            <Badge
              key={skill.id}
              className="
                                bg-violet-500/10
                                text-violet-600
                                border-violet-500/20
                            "
            >
              {skill.name}
            </Badge>
          ))}

          {skills.length > 4 && <Badge>+{skills.length - 4}</Badge>}
        </div>

        {/* Footer */}

        <div
          className="
                        mt-8
                        flex
                        items-center
                        justify-between
                        gap-3
                    "
        >
          <Button
            onClick={handleViewCertificate}
            disabled={!credentialUrl}
            className="flex-1"
          >
            <ExternalLink size={18} className="mr-2" />
            View Certificate
          </Button>

          {onView && (
            <Button variant="secondary" onClick={() => onView(certification)}>
              Details
            </Button>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

export default CertificationCard;
