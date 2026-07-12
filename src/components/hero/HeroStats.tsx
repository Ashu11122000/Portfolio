import {
  Code2,
  Folder,
  Layers,
  Star,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import { heroStats } from "../../data/stats";

/**
 * ==========================================================
 * Hero Stats
 * ==========================================================
 *
 * Ultra Premium Statistics Cards
 *
 * Features
 * ----------
 * ✓ Premium Glassmorphism
 * ✓ Gradient Icon Container
 * ✓ Hover Animation
 * ✓ Responsive Grid
 * ✓ Clean Typography
 */

const icons = {
  code: Code2,
  folder: Folder,
  layers: Layers,
  star: Star,
};

function HeroStats() {
  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {heroStats.map((item) => {
        const Icon =
          icons[item.icon as keyof typeof icons];

        return (
          <GlassCard
            key={item.label}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border-white/10
              p-7
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-cyan-400/30
              hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]
            "
          >
            {/* Background Glow */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-cyan-500/5
                via-transparent
                to-violet-500/5
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative z-10">
              {/* Icon */}
              <div
                className="
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-500/20
                  via-indigo-500/20
                  to-violet-500/20
                  ring-1
                  ring-white/10
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                <Icon
                  size={26}
                  className="text-cyan-300"
                />
              </div>

              {/* Value */}
              <h3
                className="
                  text-4xl
                  font-extrabold
                  tracking-tight
                  text-white
                "
              >
                {item.value}
              </h3>

              {/* Label */}
              <p
                className="
                  mt-2
                  text-sm
                  font-medium
                  tracking-wide
                  text-slate-400
                "
              >
                {item.label}
              </p>
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
}

export default HeroStats;