/**
 * ==========================================================
 * Floating Shapes
 * ==========================================================
 *
 * Decorative floating blurred shapes.
 *
 * ==========================================================
 */

const shapes = [
  {
    size: "h-28 w-28",
    top: "top-12",
    left: "left-10",
    color: "bg-indigo-500/20",
    blur: "blur-[90px]",
    delay: "0s",
    duration: "10s",
  },
  {
    size: "h-24 w-24",
    top: "top-56",
    right: "right-20",
    color: "bg-cyan-500/20",
    blur: "blur-[80px]",
    delay: "2s",
    duration: "12s",
  },
  {
    size: "h-32 w-32",
    bottom: "bottom-24",
    left: "left-1/4",
    color: "bg-violet-500/20",
    blur: "blur-[100px]",
    delay: "4s",
    duration: "14s",
  },
  {
    size: "h-20 w-20",
    bottom: "bottom-12",
    right: "right-1/4",
    color: "bg-fuchsia-500/15",
    blur: "blur-[70px]",
    delay: "1.5s",
    duration: "11s",
  },
  {
    size: "h-16 w-16",
    top: "1/2",
    left: "left-1/2",
    color: "bg-sky-400/15",
    blur: "blur-[60px]",
    delay: "3s",
    duration: "13s",
  },
];

function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`
            absolute
            rounded-full
            ${shape.size}
            ${shape.top ?? ""}
            ${shape.bottom ?? ""}
            ${shape.left ?? ""}
            ${shape.right ?? ""}
            ${shape.color}
            ${shape.blur}
            animate-pulse
            dark:opacity-80
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