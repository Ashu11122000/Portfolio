/**
 * ==========================================================
 * Animated Background
 * ==========================================================
 *
 * Premium animated gradient background.
 *
 * Features
 * ----------
 * ✓ Gradient Mesh
 * ✓ Blur Effect
 * ✓ Dark Mode
 * ✓ Responsive
 *
 * ==========================================================
 */

function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Top Left */}
      <div
        className="
          absolute
          -left-32
          -top-32
          h-[34rem]
          w-[34rem]
          rounded-full
          bg-indigo-500/20
          blur-[140px]
          animate-pulse
          dark:bg-indigo-500/15
        "
      />

      {/* Top Right */}
      <div
        className="
          absolute
          -right-32
          -top-20
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-cyan-500/20
          blur-[140px]
          animate-pulse
          [animation-delay:1200ms]
          dark:bg-cyan-500/15
        "
      />

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/3
          h-[24rem]
          w-[24rem]
          -translate-x-1/2
          rounded-full
          bg-fuchsia-500/15
          blur-[120px]
          animate-pulse
          [animation-delay:600ms]
          dark:bg-fuchsia-500/10
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          absolute
          bottom-[-12rem]
          left-1/2
          h-[38rem]
          w-[38rem]
          -translate-x-1/2
          rounded-full
          bg-violet-500/20
          blur-[160px]
          animate-pulse
          [animation-delay:1800ms]
          dark:bg-violet-500/15
        "
      />

      {/* Accent Orb */}
      <div
        className="
          absolute
          bottom-10
          left-16
          h-48
          w-48
          rounded-full
          bg-sky-400/10
          blur-[90px]
          animate-pulse
          [animation-delay:2400ms]
        "
      />
    </div>
  );
}

export default AnimatedBackground;