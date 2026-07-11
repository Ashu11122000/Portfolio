import { Phone } from "lucide-react";

import GradientText from "../ui/GradientText";
import SocialIcons from "../common/SocialIcons";
import HeroButtons from "./HeroButtons";

import { heroData } from "../../data/hero";
import personalInfo from "../../data/personalInfo";

function HeroContent() {
  return (
    <div className="space-y-8">
      {/* Greeting */}

      <span
        className="
        inline-flex
        rounded-full
        border
        border-slate-700
        bg-slate-900/50
        px-4
        py-2
        text-sm
        text-slate-300
        backdrop-blur-xl
        "
      >
        {heroData.greeting}
      </span>

      {/* Name */}

      <h1
        className="
        text-5xl
        font-bold
        leading-tight
        md:text-6xl
        "
      >
        Ashish{" "}

        <GradientText>
          Sharma
        </GradientText>
      </h1>

      {/* Role */}

      <h2
        className="
        text-2xl
        font-semibold
        text-slate-300
        "
      >
        Aspiring{" "}
        <GradientText>
          {heroData.role}
        </GradientText>
      </h2>

      {/* Description */}

      <p
        className="
        max-w-xl
        leading-8
        text-slate-400
        "
      >
        {heroData.description}
      </p>

      {/* Button */}

      <HeroButtons />

      {/* Phone Number */}

      <div className="flex items-center gap-3 text-slate-300">
        <div
          className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-slate-700
          bg-slate-900/60
          backdrop-blur-xl
          "
        >
          <Phone
            size={18}
            className="text-indigo-400"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Call Me
          </p>

          <a
            href={`tel:${personalInfo.phone.replace(/-/g, "")}`}
            className="
              text-lg
              font-semibold
              transition-colors
              duration-300
              hover:text-indigo-400
            "
          >
            {personalInfo.phone}
          </a>
        </div>
      </div>

      {/* Social Icons */}

      <SocialIcons />
    </div>
  );
}

export default HeroContent;