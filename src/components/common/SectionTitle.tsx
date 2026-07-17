import { cn } from "../../utils/cn";

type SectionTitleProps = {
  title?: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionTitle({
  title,
  highlight,
  subtitle,
  center = false,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "relative mb-16",
        center ? "text-center" : "text-left"
      )}
    >
      {/* Decorative Accent */}
      <div
        className={cn(
          "mb-6 flex",
          center ? "justify-center" : "justify-start"
        )}
      >
        <div className="relative h-1 w-24 overflow-hidden rounded-full bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30">
          <div className="absolute inset-0 bg-linear-to-r from-white/40 via-transparent to-white/20" />
        </div>
      </div>

      {/* Heading */}
      <h2
        className="
          text-4xl
          font-extrabold
          tracking-tight
          leading-tight

          text-slate-900
          dark:text-white

          sm:text-5xl
          lg:text-6xl
        "
      >
        {title}{" "}

        {highlight && (
          <span
            className="
              bg-linear-to-r
              from-indigo-500
              via-violet-500
              to-fuchsia-500

              bg-clip-text
              text-transparent
            "
          >
            {highlight}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "mt-6",

            "max-w-3xl",

            "text-base",
            "leading-8",

            "text-slate-600",
            "dark:text-slate-400",

            "sm:text-lg",
            "lg:text-xl",

            center && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}