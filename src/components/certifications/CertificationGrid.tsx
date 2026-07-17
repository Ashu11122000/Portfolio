import { useMemo, useState } from "react";
import { Award } from "lucide-react";

import CertificationCard from "./CertificationCard";
import CertificationModal from "./CertificationModal";

import type {
  Certification,
  CertificationGridProps,
} from "../../types/certification";

/**
 * =============================================================================
 * Certification Grid
 * =============================================================================
 *
 * Ultra Premium Responsive Certification Grid
 *
 * Features
 * -----------------------------------------------------------------------------
 * ✓ Responsive CSS Grid
 * ✓ Premium Empty State
 * ✓ Glassmorphism
 * ✓ Theme Aware
 * ✓ Smooth Animations
 * ✓ Beautiful Background Glow
 * ✓ Modal Integration
 * ✓ Production Ready
 * =============================================================================
 */

function CertificationGrid({
  certifications,
}: CertificationGridProps) {
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * --------------------------------------------------------------------------
   * Sort Certifications
   * --------------------------------------------------------------------------
   */

  const sortedCertifications = useMemo(
    () =>
      [...certifications].sort(
        (a, b) => a.order - b.order,
      ),
    [certifications],
  );

  /**
   * --------------------------------------------------------------------------
   * Modal Handlers
   * --------------------------------------------------------------------------
   */

  const handleOpenModal = (
    certification: Certification,
  ) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    /**
     * Wait for closing animation
     */

    setTimeout(() => {
      setSelectedCertification(null);
    }, 180);
  };

  /**
   * --------------------------------------------------------------------------
   * Empty State
   * --------------------------------------------------------------------------
   */

  if (!sortedCertifications.length) {
    return (
      <div
        className="
          group
          relative
          overflow-hidden

          rounded-[36px]

          border
          border-zinc-200/70
          dark:border-white/10

          bg-white/80
          dark:bg-white/5

          backdrop-blur-3xl

          px-8
          py-20

          md:px-14
          md:py-28

          shadow-xl
          shadow-black/5
          dark:shadow-black/30
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

        {/* Main Glow */}

        <div
          className="
            absolute
            -top-24
            left-1/2

            h-80
            w-80

            -translate-x-1/2

            rounded-full

            bg-linear-to-br
            from-violet-500/20
            via-fuchsia-500/15
            to-cyan-400/20

            blur-3xl
          "
        />

        {/* Bottom Glow */}

        <div
          className="
            absolute
            -bottom-24
            -right-24

            h-80
            w-80

            rounded-full

            bg-cyan-400/15

            blur-3xl
          "
        />

        {/* Glass Overlay */}

        <div
          className="
            absolute
            inset-0

            rounded-[36px]

            bg-linear-to-br
            from-white/40
            via-transparent
            to-transparent

            dark:from-white/5

            pointer-events-none
          "
        />

        <div
          className="
            relative
            z-10

            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* Icon */}

          <div
            className="
              mb-8

              flex
              h-24
              w-24
              items-center
              justify-center

              rounded-[28px]

              border
              border-white/30
              dark:border-white/10

              bg-linear-to-br
              from-violet-500
              via-fuchsia-500
              to-cyan-400

              text-white

              shadow-[0_20px_60px_rgba(124,58,237,.35)]

              transition-all
              duration-700

              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            <Award size={42} strokeWidth={2.2} />
          </div>

          {/* Heading */}

          <h3
            className="
              text-3xl
              font-bold
              tracking-tight

              text-zinc-900
              dark:text-white
            "
          >
            No Certifications Found
          </h3>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl

              text-[15px]
              leading-8

              text-zinc-600
              dark:text-zinc-400
            "
          >
            Your certifications will automatically appear here once they are
            added to the centralized data source. Continue learning and showcase
            your achievements with beautifully presented certificates.
          </p>
        </div>
      </div>
    );
  }

  /**
   * --------------------------------------------------------------------------
   * Grid Layout
   * --------------------------------------------------------------------------
   */

  return (
    <div className="relative">
            {/* ==========================================================================
          Premium Background Effects
      ========================================================================== */}

      {/* Top Right Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -top-28
          right-0

          h-80
          w-80

          rounded-full

          bg-linear-to-br
          from-violet-500/20
          via-fuchsia-500/10
          to-transparent

          blur-[110px]

          animate-pulse
        "
      />

      {/* Bottom Left Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          left-0

          h-96
          w-96

          rounded-full

          bg-linear-to-br
          from-cyan-500/15
          via-sky-500/10
          to-transparent

          blur-[120px]

          animate-pulse
          [animation-delay:2s]
        "
      />

      {/* Center Ambient Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2

          h-105
          w-105

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-linear-to-br
          from-violet-500/5
          via-fuchsia-500/5
          to-cyan-500/5

          blur-[140px]
        "
      />

      {/* ==========================================================================
          Certification Grid
      ========================================================================== */}

      <div
        className="
          relative
          z-10

          grid
          grid-cols-1

          gap-7

          sm:gap-8
          md:grid-cols-2
          lg:gap-8
          xl:grid-cols-3
          2xl:gap-10

          items-stretch
          auto-rows-fr
        "
      >
        {sortedCertifications.map((certification) => (
          <div
            key={certification.id}
            className="
              h-full

              transition-all
              duration-700
              ease-out

              hover:z-20
            "
          >
            <CertificationCard
              certification={certification}
              onView={handleOpenModal}
            />
          </div>
        ))}
      </div>

      {/* ==========================================================================
          Details Modal
      ========================================================================== */}

            {/* ==========================================================================
          Details Modal
      ========================================================================== */}

      <CertificationModal
        certification={selectedCertification}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default CertificationGrid;