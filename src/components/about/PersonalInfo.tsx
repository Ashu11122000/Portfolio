import type { ReactNode } from "react";

import {
  Mail,
  MapPin,
  Phone,
  Sparkles,
  User,
} from "lucide-react";

import AboutCard from "./AboutCard";
import SectionTitle from "../common/SectionTitle";

import personalInfo from "../../data/personalInfo";
import socialLinks from "../../data/socialLinks";

/**
 * ==========================================================
 * Personal Information
 * ==========================================================
 *
 * Ultra Premium Edition
 *
 * Features
 * ----------
 * ✓ Glassmorphism
 * ✓ Premium Typography
 * ✓ Aurora Glow
 * ✓ Responsive
 * ✓ Theme Optimized
 * ✓ Premium Hover
 *
 * ==========================================================
 */

function PersonalInfo() {
  return (
    <section className="relative space-y-14">
      <SectionTitle
        title="About"
        highlight="Me"
        subtitle="A quick introduction about myself, my background, and how you can connect with me."
      />

      <AboutCard
        title="Personal Information"
        icon={<User size={24} />}
      >
        <div className="space-y-10">
          {/* ======================================================
              Premium Bio
          ====================================================== */}

          <div
            className="
              relative
              overflow-hidden

              rounded-3xl

              border
              border-slate-200/70
              dark:border-white/10

              bg-white/70
              dark:bg-white/5

              p-7

              backdrop-blur-2xl

              shadow-lg
              shadow-slate-900/5
              dark:shadow-black/20
            "
          >
            {/* Glow */}

            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-20

                h-56
                w-56

                rounded-full

                bg-violet-500/10

                blur-[100px]
              "
            />

            {/* Highlight */}

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0

                bg-linear-to-br
                from-white/20
                via-transparent
                to-transparent

                dark:from-white/5
              "
            />

            <div className="relative z-10">
              <div
                className="
                  mb-5

                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-indigo-500/20

                  bg-indigo-500/10

                  px-4
                  py-2

                  text-sm
                  font-semibold

                  text-indigo-700
                  dark:text-indigo-300
                "
              >
                <Sparkles size={16} />

                Professional Summary
              </div>

              <p
                className="
                  text-[17px]
                  leading-9

                  text-slate-600
                  dark:text-slate-300
                "
              >
                {personalInfo.bio}
              </p>
            </div>
          </div>

          {/* ======================================================
              Information Grid
          ====================================================== */}

          <div className="grid gap-5 md:grid-cols-2">
            <InfoItem
              icon={<Mail size={20} />}
              label="Email"
              value={personalInfo.email}
            />

            <InfoItem
              icon={<Phone size={20} />}
              label="Phone"
              value={personalInfo.phone}
            />

            <InfoItem
              icon={<MapPin size={20} />}
              label="Location"
              value={personalInfo.location}
            />

            <InfoItem
              icon={<User size={20} />}
              label="Experience"
              value={personalInfo.experience}
            />
          </div>

          {/* ======================================================
              Continue in Part 2
              - Premium Availability Card
              - Ultra Premium Social Links
          ====================================================== */}

                    {/* ======================================================
              Premium Availability Card
          ====================================================== */}

          <div
            className="
              group
              relative
              overflow-hidden

              rounded-[1.75rem]

              border
              border-emerald-500/20

              bg-linear-to-br
              from-emerald-500/10
              via-emerald-400/5
              to-transparent

              p-7

              backdrop-blur-2xl

              transition-all
              duration-500

              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(16,185,129,0.18)]
            "
          >
            {/* Aurora Glow */}

            <div
              aria-hidden="true"
              className="
                absolute
                -right-16
                -top-16

                h-52
                w-52

                rounded-full

                bg-emerald-500/15

                blur-[100px]

                opacity-0

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            />

            {/* Glass Highlight */}

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0

                bg-linear-to-br
                from-white/20
                via-transparent
                to-transparent

                dark:from-white/5
              "
            />

            <div className="relative z-10">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-emerald-500/20

                  bg-emerald-500/10

                  px-4
                  py-2

                  text-sm
                  font-semibold

                  text-emerald-700
                  dark:text-emerald-300
                "
              >
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />

                Available
              </span>

              <h4
                className="
                  mt-5

                  text-2xl
                  font-bold

                  text-slate-900
                  dark:text-white
                "
              >
                Current Status
              </h4>

              <p
                className="
                  mt-3

                  max-w-2xl

                  leading-8

                  text-slate-600
                  dark:text-slate-300
                "
              >
                {personalInfo.availability}
              </p>
            </div>
          </div>

          {/* ======================================================
              Social Links
          ====================================================== */}

          <div className="space-y-6">
            <div>
              <h4
                className="
                  text-2xl
                  font-bold

                  text-slate-900
                  dark:text-white
                "
              >
                Connect With Me
              </h4>

              <p
                className="
                  mt-2

                  text-slate-600
                  dark:text-slate-400
                "
              >
                Let's connect and build something amazing together.
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="
                      group
                      relative

                      flex
                      h-16
                      w-16
                      items-center
                      justify-center

                      overflow-hidden

                      rounded-2xl

                      border
                      border-slate-200/70
                      dark:border-white/10

                      bg-white/70
                      dark:bg-white/5

                      backdrop-blur-2xl

                      shadow-lg
                      shadow-slate-900/5
                      dark:shadow-black/20

                      transition-all
                      duration-500

                      hover:-translate-y-2
                      hover:scale-105
                      hover:border-violet-500/40
                      hover:shadow-[0_20px_45px_rgba(139,92,246,0.22)]
                    "
                  >
                    {/* Gradient */}

                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        inset-0

                        bg-linear-to-br
                        from-indigo-500
                        via-violet-600
                        to-cyan-500

                        opacity-0

                        transition-opacity
                        duration-500

                        group-hover:opacity-100
                      "
                    />

                    {/* Shine */}

                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        inset-0

                        -translate-x-full

                        bg-linear-to-r
                        from-transparent
                        via-white/20
                        to-transparent

                        opacity-0

                        transition-all
                        duration-700

                        group-hover:translate-x-full
                        group-hover:opacity-100
                      "
                    />

                    <Icon
                      size={24}
                      className="
                        relative
                        z-10

                        text-slate-700
                        dark:text-slate-300

                        transition-all
                        duration-300

                        group-hover:scale-110
                        group-hover:text-white
                      "
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </AboutCard>
    </section>
  );
}

/**
 * ==========================================================
 * Premium Info Item
 * ==========================================================
 */

interface InfoItemProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function InfoItem({
  icon,
  label,
  value,
}: InfoItemProps) {
  return (
    <div
      className="
        group/info
        relative
        overflow-hidden

        rounded-2xl

        border
        border-slate-200/70
        dark:border-white/10

        bg-white/70
        dark:bg-white/5

        p-5

        backdrop-blur-2xl

        shadow-lg
        shadow-slate-900/5
        dark:shadow-black/20

        transition-all
        duration-500

        hover:-translate-y-1.5
        hover:border-violet-500/40
        hover:shadow-[0_20px_45px_rgba(139,92,246,0.18)]
      "
    >
      {/* Glass Highlight */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0

          bg-linear-to-br
          from-white/20
          via-transparent
          to-transparent

          dark:from-white/5
        "
      />

      {/* Aurora Glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10

          h-32
          w-32

          rounded-full

          bg-violet-500/10

          blur-3xl

          opacity-0

          transition-opacity
          duration-500

          group-hover/info:opacity-100
        "
      />

      <div className="relative z-10 flex items-start gap-4">
        {/* Icon */}

        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center

            rounded-xl

            bg-linear-to-br
            from-indigo-500
            via-violet-600
            to-fuchsia-600

            text-white

            shadow-lg
            shadow-violet-500/25

            ring-1
            ring-white/20

            transition-all
            duration-500

            group-hover/info:scale-110
            group-hover/info:rotate-6
          "
        >
          {icon}
        </div>

        {/* Content */}

        <div className="min-w-0 flex-1">
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.22em]

              text-slate-500
              dark:text-slate-500
            "
          >
            {label}
          </p>

          <p
            className="
              mt-2

              wrap-break-word

              text-base
              font-semibold
              leading-7

              text-slate-900
              dark:text-white
            "
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;