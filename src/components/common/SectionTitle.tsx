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
    <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
      <h2
        className="
          text-3xl
          font-bold
          tracking-tight
          text-slate-900
          dark:text-slate-900 dark:text-white
          sm:text-4xl
          lg:text-5xl
        "
      >
        {title}{" "}
        {highlight && (
          <span
            className="
              bg-gradient-to-r
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

      {subtitle && (
        <p
          className={`
            mt-5
            max-w-2xl
            text-base
            leading-7
            text-slate-600
            dark:text-slate-600 dark:text-slate-400
            sm:text-lg
            ${center ? "mx-auto" : ""}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
