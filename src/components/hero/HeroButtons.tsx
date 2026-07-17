import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../common/Button";

import { heroData } from "../../data/hero";

/**
 * =============================================================================
 * Hero Buttons
 * =============================================================================
 *
 * Ultra Premium CTA Buttons
 *
 * Features
 * -----------------------------------------------------------------------------
 * ✓ Premium Glassmorphism
 * ✓ Better Light / Dark Support
 * ✓ Accessible Focus Ring
 * ✓ Hover Lift Animation
 * ✓ Animated Icon
 * ✓ Responsive Layout
 * ✓ Premium Shadow
 * ✓ React Router Navigation
 * =============================================================================
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
        pt-3
      "
    >
      <Button
        variant="outline"
        size="lg"
        aria-label="View my projects"
        onClick={() => navigate("/projects")}
        rightIcon={
          <ArrowRight
            size={18}
            className="
              transition-all
              duration-300
              ease-out
              group-hover:translate-x-1.5
            "
          />
        }
        className="
          group
          relative
          isolate
          min-w-57.5
          justify-center
          overflow-hidden
          rounded-2xl

          border
          border-zinc-300/70
          dark:border-white/15

          bg-white/60
          dark:bg-white/5

          backdrop-blur-xl

          px-8
          py-6

          text-base
          font-semibold

          text-zinc-900
          dark:text-white

          shadow-xl
          shadow-zinc-300/30
          dark:shadow-cyan-500/10

          transition-all
          duration-500
          ease-out

          hover:-translate-y-1.5
          hover:scale-[1.02]

          hover:border-cyan-500/50
          dark:hover:border-cyan-400/50

          hover:bg-white/80
          dark:hover:bg-cyan-500/10

          hover:shadow-2xl
          hover:shadow-cyan-500/20

          active:scale-[0.98]
          active:translate-y-0

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-cyan-500/60
          focus-visible:ring-offset-2
          focus-visible:ring-offset-background

          before:absolute
          before:inset-0
          before:-z-10
          before:bg-linear-to-r
          before:from-cyan-500/0
          before:via-cyan-500/8
          before:to-indigo-500/0
          before:opacity-0
          before:transition-opacity
          before:duration-500

          hover:before:opacity-100
        "
      >
        {heroData.buttons.secondary}
      </Button>
    </div>
  );
}

export default HeroButtons;