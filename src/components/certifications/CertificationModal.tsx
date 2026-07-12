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
 * ==========================================================
 * Ultra Premium Certification Modal
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ Frosted Glass UI
 * ✓ Aurora Glow Background
 * ✓ Animated Gradient Border
 * ✓ Premium Shadows
 * ✓ Floating Decorative Elements
 * ✓ Responsive
 * ✓ Accessible
 * ✓ Scrollable
 * ✓ Production Ready
 * ==========================================================
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
      "noopener,noreferrer"
    );
  };

  return (
    <div
      onClick={onClose}
      className="
      fixed
      inset-0
      z-[999]
      flex
      items-center
      justify-center
      overflow-y-auto
      bg-black/75
      backdrop-blur-xl
      p-6
      animate-in
      fade-in
      duration-300
    "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
      >
        <div
          className="
          absolute
          -left-24
          top-20
          h-72
          w-72
          rounded-full
          bg-violet-500/20
          blur-[120px]
        "
        />

        <div
          className="
          absolute
          right-0
          bottom-0
          h-80
          w-80
          rounded-full
          bg-cyan-500/15
          blur-[140px]
        "
        />
      </div>

      <GlassCard
        onClick={(e) => e.stopPropagation()}
        className="
        relative
        w-full
        max-w-4xl
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.05]
        shadow-[0_30px_120px_rgba(0,0,0,0.55)]
        backdrop-blur-3xl
      "
      >
        {/* Animated Border */}

        <div
          className="
          pointer-events-none
          absolute
          inset-0
          rounded-[32px]
          p-[1px]
          bg-gradient-to-br
          from-violet-500/40
          via-fuchsia-500/20
          to-cyan-400/30
        "
        >
          <div className="h-full w-full rounded-[31px] bg-zinc-950/80" />
        </div>

        <div className="relative z-10 p-8 lg:p-10">
                    {/* Decorative Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-48
              w-48
              rounded-full
              bg-violet-500/10
              blur-3xl
            "
          />

          {/* Close Button */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="
              absolute
              right-6
              top-6
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
              text-gray-400
              backdrop-blur-xl
              transition-all
              duration-300
              hover:rotate-90
              hover:border-white/20
              hover:bg-white/10
              hover:text-white
            "
          >
            <X size={20} />
          </button>

          {/* Header */}

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            {/* Certificate Icon */}

            <div
              className="
                relative
                flex
                h-20
                w-20
                shrink-0
                items-center
                justify-center
                rounded-3xl
                bg-gradient-to-br
                from-violet-600
                via-fuchsia-600
                to-cyan-500
                text-white
                shadow-[0_20px_60px_rgba(139,92,246,0.45)]
              "
            >
              <Award size={38} />

              <Sparkles
                size={18}
                className="
                  absolute
                  -right-1
                  -top-1
                  text-yellow-300
                "
              />
            </div>

            {/* Title */}

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
                  py-1.5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-violet-300
                "
              >
                <Sparkles size={14} />
                Professional Certification
              </div>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-white
                  lg:text-4xl
                "
              >
                {certification.title}
              </h2>

              <div
                className="
                  mt-6
                  grid
                  gap-4
                  sm:grid-cols-3
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                  "
                >
                  <div className="flex items-center gap-2 text-violet-300">
                    <GraduationCap size={16} />
                    <span className="text-xs uppercase tracking-wider">
                      Issuer
                    </span>
                  </div>

                  <p className="mt-2 font-semibold text-white">
                    {certification.issuer}
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                  "
                >
                  <div className="flex items-center gap-2 text-cyan-300">
                    <CalendarDays size={16} />
                    <span className="text-xs uppercase tracking-wider">
                      Issued
                    </span>
                  </div>

                  <p className="mt-2 font-semibold text-white">
                    {certification.issueDate}
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                  "
                >
                  <div className="flex items-center gap-2 text-pink-300">
                    <Tag size={16} />
                    <span className="text-xs uppercase tracking-wider">
                      Category
                    </span>
                  </div>

                  <p className="mt-2 font-semibold text-white">
                    {certification.category}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Instructor */}

          {certification.instructor && (
            <section className="mt-10">
              <div
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                "
              >
                <div
                  className="
                    mb-3
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
                      rounded-xl
                      bg-violet-500/15
                      text-violet-300
                    "
                  >
                    <User size={18} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                      Instructor
                    </p>

                    <h3 className="font-semibold text-white">
                      {certification.instructor}
                    </h3>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Description */}

          <section className="mt-10">
            <h3
              className="
                text-xl
                font-bold
                text-white
              "
            >
              About this Certification
            </h3>

            <div
              className="
                mt-5
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
              "
            >
              <p
                className="
                  leading-8
                  text-gray-300
                "
              >
                {certification.description}
              </p>
            </div>
          </section>

          {/* Skills */}

          <section className="mt-10">
            <h3
              className="
                text-xl
                font-bold
                text-white
              "
            >
              Skills Covered
            </h3>

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
                    rounded-full
                    border
                    border-violet-500/20
                    bg-gradient-to-r
                    from-violet-500/10
                    to-cyan-500/10
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-violet-200
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-violet-400/40
                    hover:bg-violet-500/20
                    hover:shadow-[0_10px_30px_rgba(139,92,246,0.25)]
                  "
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>

                    {/* Divider */}

          <div
            className="
              mt-10
              h-px
              w-full
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
            "
          />

          {/* Footer */}

          <footer
            className="
              mt-8
              flex
              flex-col-reverse
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* Left Side */}

            <div>
              <p
                className="
                  text-sm
                  text-gray-400
                "
              >
                Verified professional certification
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  tracking-wide
                  text-gray-500
                "
              >
                Issued by {certification.issuer}
              </p>
            </div>

            {/* Right Side */}

            <div
              className="
                flex
                flex-wrap
                justify-end
                gap-4
              "
            >
              <Button
                variant="secondary"
                onClick={onClose}
                className="
                  min-w-[140px]
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-white/10
                "
              >
                Close
              </Button>

              <Button
                onClick={handleViewCertificate}
                disabled={!certification.credentialUrl}
                className="
                  min-w-[220px]
                  bg-gradient-to-r
                  from-violet-600
                  via-fuchsia-600
                  to-cyan-500
                  text-white
                  shadow-[0_20px_50px_rgba(139,92,246,0.35)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.02]
                  hover:shadow-[0_25px_60px_rgba(139,92,246,0.50)]
                "
              >
                <ExternalLink
                  size={18}
                  className="mr-2"
                />

                View Certificate
              </Button>
            </div>
          </footer>
        </div>
      </GlassCard>
    </div>
  );
}

export default CertificationModal;