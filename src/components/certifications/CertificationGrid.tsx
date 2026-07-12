import { useMemo, useState } from "react";

import CertificationCard from "./CertificationCard";
import CertificationModal from "./CertificationModal";

import type {
  Certification,
  CertificationGridProps,
} from "../../types/certification";

/**
 * ==========================================================
 * Certification Grid
 * ==========================================================
 *
 * Displays certifications in an ultra premium
 * responsive masonry-style grid.
 *
 * Features
 * ----------
 * ✓ Responsive Layout
 * ✓ Premium Empty State
 * ✓ Modal Integration
 * ✓ Smooth Layout
 * ✓ Glassmorphism Ready
 * ✓ Home Page Ready
 * ✓ Certifications Page Ready
 * ✓ Production Ready
 *
 * ==========================================================
 */

function CertificationGrid({
  certifications,
}: CertificationGridProps) {
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  /**
   * ----------------------------------------------------------
   * Sort Certifications
   * ----------------------------------------------------------
   */

  const sortedCertifications = useMemo(
    () =>
      [...certifications].sort(
        (a, b) => a.order - b.order,
      ),
    [certifications],
  );

  /**
   * ----------------------------------------------------------
   * Modal Handlers
   * ----------------------------------------------------------
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
     * Wait for modal animation
     */

    setTimeout(() => {
      setSelectedCertification(null);
    }, 150);
  };

  /**
   * ----------------------------------------------------------
   * Empty State
   * ----------------------------------------------------------
   */

  if (!sortedCertifications.length) {
    return (
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.04]
          px-10
          py-24
          text-center
          backdrop-blur-2xl
        "
      >
        {/* Decorative Glow */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-64
            w-64
            -translate-x-1/2
            rounded-full
            bg-violet-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-20
            -right-20
            h-72
            w-72
            rounded-full
            bg-cyan-500/10
            blur-3xl
          "
        />

        <div className="relative z-10">

          {/* Icon */}

          <div
            className="
              mx-auto
              mb-8
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-br
              from-violet-500
              via-fuchsia-500
              to-cyan-500
              shadow-xl
              shadow-violet-500/30
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-10 w-10 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21
                12a9 9 0 11-18
                0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Title */}

          <h3
            className="
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-white
            "
          >
            No Certifications Found
          </h3>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-[15px]
              leading-8
              text-slate-500
              dark:text-slate-400
            "
          >
            Your certifications will automatically
            appear here once they are added to the
            centralized data source.
          </p>

        </div>
      </div>
    );
  }

  /**
   * ----------------------------------------------------------
   * Grid Layout
   * ----------------------------------------------------------
   */

  return (
    <div className="relative">

      {/* Background Glow */}
            <div
        className="
          pointer-events-none
          absolute
          -top-24
          right-0
          h-72
          w-72
          rounded-full
          bg-violet-500/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          left-0
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* Certification Grid */}

      <div
        className="
          relative
          z-10
          grid
          items-stretch
          gap-7
          sm:grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          2xl:gap-8
        "
      >
        {sortedCertifications.map((certification) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
            onView={handleOpenModal}
          />
        ))}
      </div>

      {/* Details Modal */}

      <CertificationModal
        certification={selectedCertification}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default CertificationGrid;