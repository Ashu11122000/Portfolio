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
 * ✓ Availability Badge
 * ✓ Premium Typography
 * ✓ Gradient Heading
 * ✓ Responsive Layout
 * ✓ Contact Card
 * ✓ Social Links
 */

function HeroContent() {
  return (
    <div
      className="
        relative
        z-10
        space-y-10
      "
    >
      {/* Availability Badge */}

      <div
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-emerald-500/20
          bg-emerald-500/10
          px-5
          py-2.5
          backdrop-blur-xl
        "
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />

          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
        </span>

        <Sparkles
          size={15}
          className="text-emerald-300"
        />

        <span className="text-sm font-medium text-emerald-200">
          {heroData.greeting}
        </span>
      </div>

      {/* Heading */}

      <div className="space-y-5">
        <h1
          className="
            text-5xl
            font-black
            leading-[1.05]
            tracking-tight
            sm:text-6xl
            lg:text-7xl
          "
        >
          Ashish <GradientText>Sharma</GradientText>
        </h1>

        <h2
          className="
            text-2xl
            font-semibold
            text-slate-300
            sm:text-3xl
          "
        >
          Aspiring{" "}
          <GradientText>
            {heroData.role}
          </GradientText>
        </h2>

        <div
          className="
            h-1
            w-28
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            via-indigo-500
            to-violet-500
          "
        />
      </div>

      {/* Description */}

      <p
        className="
          max-w-2xl
          text-lg
          leading-9
          text-slate-400
        "
      >
        {heroData.description}
      </p>

      {/* CTA */}

      <HeroButtons />

      {/* Contact */}

      <div
        className="
          flex
          w-fit
          items-center
          gap-4
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-5
          py-4
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400/30
          hover:bg-white/8
          hover:shadow-xl
          hover:shadow-cyan-500/10
        "
      >
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-br
            from-cyan-500
            to-indigo-600
            text-white
          "
        >
          <Phone size={18} />
        </div>

        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-slate-500
            "
          >
            Call Me
          </p>

          <a
            href={`tel:${personalInfo.phone.replace(/-/g, "")}`}
            className="
              text-lg
              font-semibold
              text-white
              transition-colors
              duration-300
              hover:text-cyan-400
            "
          >
            {personalInfo.phone}
          </a>
        </div>
      </div>

      {/* Social Icons */}

      <div className="pt-2">
        <SocialIcons />
      </div>
    </div>
  );
}

export default HeroContent;