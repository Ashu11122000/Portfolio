import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../common/Button";

import { heroData } from "../../data/hero";

/**
 * ==========================================================
 * Hero Buttons
 * ==========================================================
 *
 * Primary CTA for the Hero section.
 *
 * Features
 * ----------
 * ✓ Premium Hover Animation
 * ✓ Responsive Layout
 * ✓ Accessible
 * ✓ React Router Navigation
 */

function HeroButtons() {
  const navigate = useNavigate();

  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        gap-5
        pt-2
      "
    >
      <Button
        variant="outline"
        size="lg"
        aria-label="View my projects"
        rightIcon={
          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        }
        className="
          group
          min-w-[220px]
          justify-center
          rounded-2xl
          border-white/15
          px-8
          py-6
          text-base
          font-semibold
          shadow-lg
          shadow-cyan-500/10
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-cyan-400/50
          hover:shadow-2xl
          hover:shadow-cyan-500/20
          active:translate-y-0
        "
        onClick={() => navigate("/projects")}
      >
        {heroData.buttons.secondary}
      </Button>
    </div>
  );
}

export default HeroButtons;