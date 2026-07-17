import { Phone, Sparkles } from "lucide-react";

import GradientText from "../ui/GradientText";
import SocialIcons from "../common/SocialIcons";
import HeroButtons from "./HeroButtons";

import { heroData } from "../../data/hero";
import personalInfo from "../../data/personalInfo";

/**
 * =============================================================================
 * Hero Content
 * =============================================================================
 *
 * Ultra Premium Hero Content
 *
 * Features
 * -----------------------------------------------------------------------------
 * ✓ Premium Availability Badge
 * ✓ Apple + Linear Inspired UI
 * ✓ Better Typography
 * ✓ Improved Light / Dark Theme Support
 * ✓ Glassmorphism
 * ✓ Micro Interactions
 * ✓ Better Spacing
 * ✓ Premium Animations
 * =============================================================================
 */

function HeroContent() {
  return (
    <div
      className="
        relative
        z-10
        space-y-12
        lg:space-y-14
      "
    >
      {/* ================================================================== */}
      {/* Availability Badge */}
      {/* ================================================================== */}

      <div
        className="
          group
          inline-flex
          items-center
          gap-3

          rounded-full

          border
          border-emerald-300/60
          dark:border-emerald-500/20

          bg-white/80
          dark:bg-emerald-500/10

          px-5
          py-3

          backdrop-blur-2xl

          shadow-lg
          shadow-emerald-500/10

          transition-all
          duration-500
          ease-out

          hover:-translate-y-1
          hover:scale-[1.02]

          hover:border-emerald-400/70
          dark:hover:border-emerald-400/40

          hover:bg-white
          dark:hover:bg-emerald-500/15

          hover:shadow-xl
          hover:shadow-emerald-500/20
        "
      >
        {/* Online Status */}

        <span className="relative flex h-3.5 w-3.5">
          {/* Pulse */}
          <span
            className="
              absolute
              inline-flex
              h-full
              w-full
              animate-ping
              rounded-full
              bg-emerald-400
              opacity-70
            "
          />

          {/* Dot */}
          <span
            className="
              relative
              inline-flex
              h-3.5
              w-3.5
              rounded-full

              bg-emerald-500

              ring-4
              ring-emerald-300/40
              dark:ring-emerald-500/20
            "
          />
        </span>

        {/* Sparkle Icon */}

        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center

            rounded-full

            bg-emerald-100
            dark:bg-emerald-500/10

            transition-all
            duration-500

            group-hover:rotate-12
            group-hover:scale-110
          "
        >
          <Sparkles
            size={16}
            className="
              text-emerald-600
              dark:text-emerald-300
            "
          />
        </div>

        {/* Badge Text */}

        <div className="flex flex-col leading-none">
          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.28em]

              text-zinc-500
              dark:text-zinc-400
            "
          >
            Available
          </span>

          <span
            className="
              mt-1

              text-sm
              font-semibold

              text-emerald-700
              dark:text-emerald-300
            "
          >
            {heroData.greeting}
          </span>
        </div>
      </div>

      {/* ================================================================== */}
      {/* Hero Heading */}
      {/* ================================================================== */}

            <div className="space-y-8 lg:space-y-10">
        {/* ================================================================ */}
        {/* Main Heading */}
        {/* ================================================================ */}

        <div className="space-y-4">
          <h1
            className="
              leading-[0.92]
              tracking-[-0.06em]

              text-5xl
              font-black

              sm:text-6xl
              lg:text-7xl
              xl:text-[5.5rem]
              2xl:text-[6.25rem]
            "
          >
            <span
              className="
                block

                text-zinc-900
                dark:text-white

                transition-colors
                duration-300
              "
            >
              Ashish
            </span>

            <span className="block mt-2">
              <GradientText>
                Sharma
              </GradientText>
            </span>
          </h1>

          {/* Premium Accent Line */}

          <div
            className="
              h-1
              w-24
              rounded-full

              bg-linear-to-r
              from-cyan-500
              via-indigo-500
              to-violet-500

              shadow-lg
              shadow-cyan-500/30
            "
          />
        </div>

        {/* ================================================================ */}
        {/* Subtitle */}
        {/* ================================================================ */}

        <h2
          className="
            max-w-3xl

            text-2xl
            font-bold
            leading-snug

            text-zinc-700
            dark:text-zinc-200

            transition-colors
            duration-300

            sm:text-3xl
            lg:text-[2rem]
          "
        >
          Aspiring{" "}

          <GradientText>
            {heroData.role}
          </GradientText>
        </h2>

        {/* ================================================================ */}
        {/* Premium Divider */}
        {/* ================================================================ */}

        <div
          className="
            relative

            h-1.5
            w-36

            overflow-hidden
            rounded-full

            bg-zinc-200
            dark:bg-zinc-800
          "
        >
          {/* Animated Gradient */}

          <div
            className="
              absolute
              inset-0

              rounded-full

              bg-linear-to-r
              from-cyan-500
              via-indigo-500
              to-violet-500
            "
          />

          {/* Gloss Layer */}

          <div
            className="
              absolute
              inset-0

              rounded-full

              bg-linear-to-r
              from-white/40
              via-transparent
              to-transparent
            "
          />
        </div>

        {/* ================================================================ */}
        {/* Description */}
        {/* ================================================================ */}

        <p
          className="
            max-w-2xl

            text-lg
            leading-9
            font-medium

            text-zinc-600
            dark:text-zinc-300

            transition-colors
            duration-300

            lg:text-xl
            lg:leading-10
          "
        >
          {heroData.description}
        </p>
      </div>

      {/* ================================================================ */}
      {/* Call To Action */}
      {/* ================================================================ */}
            {/* ================================================================ */}
      {/* Call To Action */}
      {/* ================================================================ */}

      <div className="pt-2">
        <HeroButtons />
      </div>

      {/* ================================================================ */}
      {/* Premium Contact Card */}
      {/* ================================================================ */}

      <div
        className="
          group

          relative
          w-fit

          overflow-hidden

          rounded-[28px]

          border
          border-zinc-300/70
          dark:border-white/10

          bg-white/75
          dark:bg-white/4

          backdrop-blur-2xl

          px-6
          py-5

          shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          dark:shadow-[0_20px_60px_rgba(0,0,0,0.30)]

          transition-all
          duration-500
          ease-out

          hover:-translate-y-2
          hover:scale-[1.02]

          hover:border-cyan-500/40
          dark:hover:border-cyan-400/25

          hover:shadow-[0_30px_80px_rgba(6,182,212,0.18)]
        "
      >
        {/* Inner Highlight */}

        <div
          className="
            pointer-events-none
            absolute
            inset-px

            rounded-[26px]

            border
            border-white/40
            dark:border-white/5
          "
        />

        {/* Ambient Gradient */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-linear-to-br
            from-cyan-500/5
            via-transparent
            to-violet-500/5

            opacity-70

            transition-opacity
            duration-500

            group-hover:opacity-100
          "
        />

        {/* Content */}

        <div className="relative flex items-center gap-5">
          {/* ============================================================ */}
          {/* Icon */}
          {/* ============================================================ */}

          <div
            className="
              relative

              flex
              h-16
              w-16
              items-center
              justify-center

              overflow-hidden

              rounded-2xl

              bg-linear-to-br
              from-cyan-500
              via-indigo-500
              to-violet-600

              text-white

              shadow-xl
              shadow-cyan-500/25

              transition-all
              duration-500

              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            {/* Shine */}

            <span
              className="
                absolute
                inset-0

                bg-linear-to-br
                from-white/35
                via-transparent
                to-transparent

                opacity-0

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            />

            <Phone
              size={22}
              className="relative z-10"
            />
          </div>

          {/* ============================================================ */}
          {/* Contact Details */}
          {/* ============================================================ */}

          <div className="space-y-1">
            <p
              className="
                text-[11px]
                font-semibold

                uppercase
                tracking-[0.35em]

                text-zinc-500
                dark:text-zinc-400
              "
            >
              Call Me
            </p>

            <a
              href={`tel:${personalInfo.phone.replace(/-/g, "")}`}
              className="
                inline-block

                text-lg
                font-bold

                text-zinc-900
                dark:text-white

                transition-all
                duration-300

                hover:text-cyan-600
                dark:hover:text-cyan-300
              "
            >
              {personalInfo.phone}
            </a>

            <p
              className="
                text-sm

                text-zinc-500
                dark:text-zinc-400
              "
            >
              Available for freelance & full-time opportunities
            </p>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* Social Links */}
      {/* ================================================================ */}
            {/* ================================================================ */}
      {/* Social Links */}
      {/* ================================================================ */}

      <div className="pt-4">
        <div className="flex items-center gap-5">
          {/* Left Gradient Line */}

          <div
            className="
              h-px
              w-16
              rounded-full

              bg-linear-to-r
              from-transparent
              via-violet-500
              to-cyan-500
            "
          />

          {/* Label */}

          <span
            className="
              whitespace-nowrap

              text-[11px]
              font-semibold

              uppercase
              tracking-[0.35em]

              text-zinc-500
              dark:text-zinc-400
            "
          >
            Connect With Me
          </span>

          {/* Right Gradient Line */}

          <div
            className="
              h-px
              flex-1
              rounded-full

              bg-linear-to-r
              from-cyan-500
              via-violet-500
              to-transparent
            "
          />
        </div>

        {/* Social Icons */}

        <div className="mt-7">
          <SocialIcons />
        </div>
      </div>

      {/* ================================================================ */}
      {/* Premium Background Decorations */}
      {/* ================================================================ */}

      {/* Top Right Glow */}

      <div
        className="
          pointer-events-none

          absolute
          -right-24
          -top-24

          h-80
          w-80

          rounded-full

          bg-cyan-500/10
          dark:bg-cyan-500/15

          blur-[120px]
        "
      />

      {/* Bottom Left Glow */}

      <div
        className="
          pointer-events-none

          absolute
          -bottom-32
          left-16

          h-96
          w-96

          rounded-full

          bg-violet-500/10
          dark:bg-violet-500/15

          blur-[140px]
        "
      />

      {/* Center Accent Glow */}

      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-1/2

          -z-10

          h-64
          w-64

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-linear-to-br
          from-cyan-500/5
          to-violet-500/5

          blur-[100px]
        "
      />
    </div>
  );
}

export default HeroContent;