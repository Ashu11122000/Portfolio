import { CalendarDays, CheckCircle2, MapPin } from "lucide-react";

import AboutCard from "./AboutCard";
import SectionTitle from "../common/SectionTitle";

import education from "../../data/education";

/**
 * ==========================================================
 * Education Card Component
 * ==========================================================
 *
 * Premium UI Edition
 *
 * ✓ Glassmorphism
 * ✓ Smooth Hover Animation
 * ✓ Elegant Shadows
 * ✓ Better Typography
 * ✓ Responsive
 * ✓ Theme Aware
 * ✓ Business Logic Unchanged
 *
 * ==========================================================
 */

function EducationCard() {
  return (
    <section className="space-y-12">
      <SectionTitle
        title="Education"
        highlight="Journey"
        subtitle="My academic background and continuous learning journey."
      />

      <div className="space-y-8">
        {education.map((item) => {
          const Icon = item.icon;

          return (
            <AboutCard
              key={item.id}
              title={item.degree}
              icon={
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 via-violet-500/15 to-cyan-500/20 text-indigo-500 shadow-lg shadow-indigo-500/10 transition-transform duration-500 group-hover:scale-110">
                  <Icon size={24} />
                </div>
              }
            >
              <div className="space-y-6">
                {/* Institution */}
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-900 dark:text-white">
                    {item.institution}
                  </h4>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-600 dark:text-slate-400">
                    {item.level}
                  </p>
                </div>

                {/* Information */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <InfoRow
                    icon={<MapPin size={18} />}
                    label="Location"
                    value={item.location}
                  />

                  <InfoRow
                    icon={<CalendarDays size={18} />}
                    label="Duration"
                    value={item.duration}
                  />
                </div>

                {/* Footer */}
                <div className="flex flex-wrap items-center justify-between gap-5 border-t border-slate-200/70 pt-6 dark:border-slate-700/60">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-600 dark:text-slate-400">
                      Academic Result
                    </p>

                    <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-900 dark:text-white">
                      {item.score}
                    </p>
                  </div>

                  <span
                    className={`
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      ${
                        item.status === "Completed"
                          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 shadow-lg shadow-emerald-500/10 dark:text-emerald-400"
                          : "border-indigo-500/20 bg-indigo-500/10 text-indigo-600 shadow-lg shadow-indigo-500/10 dark:text-indigo-400"
                      }
                    `}
                  >
                    <CheckCircle2 size={16} />

                    {item.status}
                  </span>
                </div>
              </div>
            </AboutCard>
          );
        })}
      </div>
    </section>
  );
}

/**
 * ==========================================================
 * Info Row
 * ==========================================================
 */

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-slate-200/70
        bg-white/60
        p-4
        shadow-sm
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-400/40
        hover:shadow-xl
        hover:shadow-indigo-500/10
        dark:border-slate-700/60
        dark:bg-slate-900/50
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-br
          from-indigo-500/15
          via-violet-500/10
          to-cyan-500/15
          text-indigo-500
          transition-transform
          duration-300
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-600 dark:text-slate-400">
          {label}
        </p>

        <p className="mt-1 font-semibold text-slate-900 dark:text-slate-900 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

export default EducationCard;
