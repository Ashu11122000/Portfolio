/**
 * ==========================================================
 * Floating Shapes
 * ==========================================================
 *
 * Ultra Premium Floating Gradient Orbs
 *
 * Features
 * ----------
 * ✓ Glassmorphism Friendly
 * ✓ Premium Gradient Orbs
 * ✓ Better Light & Dark Mode
 * ✓ Smooth Floating Animation
 * ✓ GPU Accelerated
 * ✓ Responsive
 * ✓ Accessible
 *
 * ==========================================================
 */

const shapes = [
  {
    size: "h-36 w-36",
    position: "top-10 left-8",
    gradient:
      "bg-gradient-to-br from-indigo-500/25 via-violet-500/20 to-fuchsia-500/10 dark:from-indigo-400/20 dark:via-violet-400/15 dark:to-fuchsia-400/10",
    blur: "blur-[110px]",
    opacity: "opacity-90 dark:opacity-80",
    duration: "14s",
    delay: "0s",
  },
  {
    size: "h-28 w-28",
    position: "top-56 right-16",
    gradient:
      "bg-gradient-to-br from-cyan-400/25 via-sky-500/20 to-blue-500/10 dark:from-cyan-300/20 dark:via-sky-400/15 dark:to-blue-400/10",
    blur: "blur-[100px]",
    opacity: "opacity-80 dark:opacity-70",
    duration: "16s",
    delay: "2s",
  },
  {
    size: "h-40 w-40",
    position: "bottom-24 left-1/4",
    gradient:
      "bg-gradient-to-br from-violet-500/25 via-purple-500/20 to-indigo-500/10 dark:from-violet-400/20 dark:via-purple-400/15 dark:to-indigo-400/10",
    blur: "blur-[130px]",
    opacity: "opacity-90 dark:opacity-75",
    duration: "18s",
    delay: "4s",
  },
  {
    size: "h-24 w-24",
    position: "bottom-16 right-1/4",
    gradient:
      "bg-gradient-to-br from-fuchsia-500/20 via-pink-500/15 to-rose-500/10 dark:from-fuchsia-400/18 dark:via-pink-400/15 dark:to-rose-400/10",
    blur: "blur-[90px]",
    opacity: "opacity-80 dark:opacity-70",
    duration: "15s",
    delay: "1.5s",
  },
  {
    size: "h-20 w-20",
    position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    gradient:
      "bg-gradient-to-br from-sky-400/20 via-cyan-400/15 to-emerald-400/10 dark:from-sky-300/18 dark:via-cyan-300/15 dark:to-emerald-300/10",
    blur: "blur-[80px]",
    opacity: "opacity-70 dark:opacity-65",
    duration: "20s",
    delay: "3s",
  },
] as const;

function FloatingShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`
            absolute
            rounded-full
            ${shape.size}
            ${shape.position}
            ${shape.gradient}
            ${shape.blur}
            ${shape.opacity}
            ring-1
            ring-white/10
            dark:ring-white/5
            will-change-transform
            animate-[float_16s_ease-in-out_infinite]
          `}
          style={{
            animationDuration: shape.duration,
            animationDelay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingShapes;