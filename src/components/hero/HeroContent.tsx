import { Phone, Sparkles } from "lucide-react";

import GradientText from "../ui/GradientText";
import SocialIcons from "../common/SocialIcons";
import HeroButtons from "./HeroButtons";

import { heroData } from "../../data/hero";
import personalInfo from "../../data/personalInfo";

/**
 * ==========================================================
 * Hero Content
 * ==========================================================
 *
 * Ultra Premium Hero Content
 *
 * Features
 * ----------
 * ✓ Premium Availability Badge
 * ✓ Ultra Premium Typography
 * ✓ Better Light/Dark Theme Support
 * ✓ Responsive Layout
 * ✓ Premium Contact Card
 * ✓ Social Links
 * ✓ Modern Glassmorphism
 * ✓ Apple + Linear Inspired UI
 *
 * ==========================================================
 */

function HeroContent() {
  return (
    <div
      className="
        relative
        z-10
        space-y-12
      "
    >
      {/* ================================================= */}
      {/* Availability Badge */}
      {/* ================================================= */}

      <div
        className="
          group
          inline-flex
          items-center
          gap-3

          rounded-full

          border
          border-emerald-300/50
          dark:border-emerald-500/20

          bg-emerald-50/80
          dark:bg-emerald-500/10

          px-5
          py-3

          backdrop-blur-xl

          shadow-lg
          shadow-emerald-500/10

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:shadow-emerald-500/20
        "
      >
        {/* Online Indicator */}

        <span className="relative flex h-3.5 w-3.5">

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

        <Sparkles
          size={16}
          className="
            text-emerald-600
            transition-transform
            duration-300
            group-hover:rotate-12

            dark:text-emerald-300
          "
        />

        <span
          className="
            text-sm
            font-semibold

            text-emerald-700

            dark:text-emerald-300
          "
        >
          {heroData.greeting}
        </span>
      </div>

      {/* ================================================= */}
      {/* Hero Heading */}
      {/* ================================================= */}

      <div className="space-y-7">

        {/* Main Heading */}

        <h1
          className="
            leading-none

            tracking-[-0.05em]

            text-5xl

            font-black

            sm:text-6xl

            lg:text-7xl

            xl:text-8xl
          "
        >

          <span
            className="
              text-slate-900

              transition-colors
              duration-300

              dark:text-white
            "
          >
            Ashish
          </span>

          {" "}

          <GradientText>
            Sharma
          </GradientText>

        </h1>

        {/* Subtitle */}

        <h2
          className="
            text-2xl

            font-bold

            leading-snug

            text-slate-700

            transition-colors
            duration-300

            dark:text-slate-200

            sm:text-3xl
          "
        >
          Aspiring{" "}

          <GradientText>
            {heroData.role}
          </GradientText>

        </h2>

        {/* Premium Divider */}

        <div
          className="
            relative

            h-1.5
            w-32

            overflow-hidden

            rounded-full

            bg-slate-200

            dark:bg-slate-800
          "
        >

          <div
            className="
              absolute
              inset-0

              rounded-full

              bg-gradient-to-r

              from-cyan-400

              via-indigo-500

              to-violet-500
            "
          />

        </div>

                {/* ================================================= */}
        {/* Description */}
        {/* ================================================= */}

        <p
          className="
            max-w-2xl

            text-lg

            leading-9

            font-medium

            text-slate-700

            transition-colors
            duration-300

            dark:text-slate-300

            lg:text-xl
          "
        >
          {heroData.description}
        </p>

      </div>

      {/* ================================================= */}
      {/* Call To Action */}
      {/* ================================================= */}

      <HeroButtons />

      {/* ================================================= */}
      {/* Premium Contact Card */}
      {/* ================================================= */}

      <div
        className="
          group

          flex
          w-fit
          items-center
          gap-5

          rounded-3xl

          border
          border-slate-200/80

          bg-white/75

          px-6
          py-5

          backdrop-blur-2xl

          shadow-lg
          shadow-slate-300/20

          transition-all
          duration-500

          hover:-translate-y-1
          hover:border-cyan-400/40
          hover:shadow-2xl
          hover:shadow-cyan-500/15

          dark:border-slate-700/60
          dark:bg-slate-900/60
          dark:shadow-black/30
        "
      >

        {/* Phone Icon */}

        <div
          className="
            relative

            flex
            h-14
            w-14
            items-center
            justify-center

            overflow-hidden

            rounded-2xl

            bg-gradient-to-br

            from-cyan-500

            via-indigo-500

            to-violet-600

            text-white

            shadow-lg
            shadow-cyan-500/25

            transition-all
            duration-300

            group-hover:scale-110
            group-hover:rotate-6
          "
        >

          {/* Shine */}

          <span
            className="
              absolute
              inset-0

              opacity-0

              bg-gradient-to-br
              from-white/30
              via-transparent
              to-transparent

              transition-opacity
              duration-300

              group-hover:opacity-100
            "
          />

          <Phone
            size={20}
            className="relative z-10"
          />

        </div>

        {/* Contact Details */}

        <div className="space-y-1">

          <p
            className="
              text-xs

              font-semibold

              uppercase

              tracking-[0.35em]

              text-slate-500

              dark:text-slate-400
            "
          >
            Call Me
          </p>

          <a
            href={`tel:${personalInfo.phone.replace(/-/g, "")}`}
            className="
              text-lg

              font-bold

              text-slate-900

              transition-all
              duration-300

              hover:text-cyan-600

              dark:text-white
              dark:hover:text-cyan-300
            "
          >
            {personalInfo.phone}
          </a>

        </div>

      </div>

            {/* ================================================= */}
      {/* Social Icons */}
      {/* ================================================= */}

      <div className="pt-3">
        <div className="flex items-center gap-5">

          <div
            className="
              h-px
              w-14

              bg-gradient-to-r

              from-transparent
              via-violet-500
              to-cyan-500
            "
          />

          <span
            className="
              text-xs

              font-semibold

              uppercase

              tracking-[0.35em]

              text-slate-500

              dark:text-slate-400
            "
          >
            Connect With Me
          </span>

          <div
            className="
              h-px
              flex-1

              bg-gradient-to-r

              from-cyan-500
              via-violet-500
              to-transparent
            "
          />

        </div>

        <div className="mt-6">
          <SocialIcons />
        </div>

      </div>

      {/* ================================================= */}
      {/* Background Decorative Blur */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none

          absolute

          -right-24
          -top-24

          h-72
          w-72

          rounded-full

          bg-cyan-500/10

          blur-3xl

          dark:bg-cyan-500/15
        "
      />

      <div
        className="
          pointer-events-none

          absolute

          -bottom-28
          left-24

          h-80
          w-80

          rounded-full

          bg-violet-500/10

          blur-3xl

          dark:bg-violet-500/15
        "
      />

    </div>
  );
}

export default HeroContent;