/**
 * ==========================================================
 * Animated Background
 * ==========================================================
 *
 * Ultra Premium animated background.
 *
 * Features
 * ----------
 * ✓ Premium Gradient Mesh
 * ✓ Layered Glows
 * ✓ Floating Animation
 * ✓ Radial Light Effects
 * ✓ Better Light/Dark Visibility
 * ✓ Noise Overlay
 * ✓ Vignette
 * ✓ Responsive
 * ✓ GPU Accelerated
 *
 * ==========================================================
 */

function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* =======================================================
          Background Base
      ======================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-linear-to-br
          from-white
          via-slate-50
          to-indigo-50
          dark:from-zinc-950
          dark:via-slate-950
          dark:to-black
        "
      />

      {/* =======================================================
          Top Left Glow
      ======================================================= */}

      <div
        className="
          absolute
          -left-44
          -top-44
          h-168
          w-2xl
          rounded-full
          bg-violet-500/20
          dark:bg-violet-500/18
          blur-[180px]
          animate-pulse
        "
      />

      {/* =======================================================
          Top Right Glow
      ======================================================= */}

      <div
        className="
          absolute
          -right-44
          -top-28
          h-152
          w-152
          rounded-full
          bg-cyan-400/20
          dark:bg-cyan-400/18
          blur-[170px]
          animate-pulse
          [animation-delay:900ms]
        "
      />

      {/* =======================================================
          Center Aurora
      ======================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-[35%]
          h-112
          w-md
          -translate-x-1/2
          rounded-full
          bg-fuchsia-500/15
          dark:bg-fuchsia-500/12
          blur-[150px]
          animate-pulse
          [animation-delay:600ms]
        "
      />

      {/* =======================================================
          Bottom Glow
      ======================================================= */}

      <div
        className="
          absolute
          -bottom-56
          left-1/2
          h-176
          w-176
          -translate-x-1/2
          rounded-full
          bg-indigo-500/20
          dark:bg-indigo-500/18
          blur-[190px]
          animate-pulse
          [animation-delay:1500ms]
        "
      />

      {/* =======================================================
          Left Accent
      ======================================================= */}

      <div
        className="
          absolute
          bottom-12
          left-10
          h-64
          w-64
          rounded-full
          bg-sky-400/15
          dark:bg-sky-400/12
          blur-[110px]
          animate-pulse
          [animation-delay:2100ms]
        "
      />

      {/* =======================================================
          Right Accent
      ======================================================= */}

      <div
        className="
          absolute
          right-12
          top-1/2
          h-56
          w-56
          -translate-y-1/2
          rounded-full
          bg-emerald-400/10
          dark:bg-emerald-400/10
          blur-[110px]
          animate-pulse
          [animation-delay:2600ms]
        "
      />

      {/* =======================================================
          Radial Mesh Overlay
      ======================================================= */}

      <div
        className="
          absolute
          inset-0
          opacity-70
          dark:opacity-40
          bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_50%_70%,rgba(217,70,239,0.10),transparent_35%),radial-gradient(circle_at_70%_90%,rgba(99,102,241,0.08),transparent_35%)]
        "
      />

      {/* =======================================================
          Subtle Grid
      ======================================================= */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          dark:opacity-[0.045]
          bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          bg-size-[64px_64px]
          text-slate-900
          dark:text-white
        "
      />

      {/* =======================================================
          Noise Texture
      ======================================================= */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
          [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22 viewBox=%220%200%20180%20180%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22/%3E%3C/filter%3E%3Crect width=%22180%22 height=%22180%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]
        "
      />

      {/* =======================================================
          Vignette
      ======================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(255,255,255,0.18)_100%)]
          dark:bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]
        "
      />
    </div>
  );
}

export default AnimatedBackground;