import { Link } from "react-router-dom";

import AnimatedBackground from "../components/ui/AnimatedBackground";
import FloatingShapes from "../components/ui/FloatingShapes";
import GlassCard from "../components/ui/GlassCard";
import GradientText from "../components/ui/GradientText";

/**
 * ==========================================================
 * 404 Page
 * ==========================================================
 *
 * Ultra Premium Not Found Page
 *
 * Features
 * ----------
 * ✓ Apple / Linear Inspired
 * ✓ Animated Background
 * ✓ Floating Shapes
 * ✓ Glassmorphism Card
 * ✓ Gradient Typography
 * ✓ Light & Dark Theme
 * ✓ Responsive
 *
 * ==========================================================
 */

function NotFound() {
  return (
    <main
      className="
        relative
        isolate
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-6
        py-20
      "
    >
      {/* Premium Background */}

      <AnimatedBackground />

      <FloatingShapes />

      {/* Content */}

      <GlassCard
        padding="lg"
        className="
          max-w-xl
          text-center
          backdrop-blur-3xl
        "
      >
        {/* Badge */}

        <div
          className="
            mx-auto
            mb-8
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-linear-to-br
            from-violet-500/20
            via-fuchsia-500/15
            to-cyan-500/20
            ring-1
            ring-white/20
          "
        >
          <GradientText className="text-5xl font-black">
            404
          </GradientText>
        </div>

        {/* Title */}

        <h1
          className="
            text-4xl
            font-black
            tracking-tight
            text-zinc-900
            dark:text-white
            sm:text-5xl
          "
        >
          Page Not Found
        </h1>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-6
            max-w-md
            leading-8
            text-zinc-600
            dark:text-zinc-300
          "
        >
          Sorry, the page you're looking for doesn't exist,
          has been moved, or the URL may be incorrect.
        </p>

        {/* Actions */}

        <div
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          <Link
            to="/"
            className="
              inline-flex
              items-center
              justify-center
              rounded-2xl
              bg-linear-to-r
              from-violet-600
              via-fuchsia-600
              to-cyan-600
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-violet-500/20
              transition-all
              duration-500
              hover:-translate-y-1
              hover:scale-105
              hover:shadow-xl
              hover:shadow-violet-500/30
            "
          >
            Back to Home
          </Link>
        </div>
      </GlassCard>
    </main>
  );
}

export default NotFound;