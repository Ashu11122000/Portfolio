import type { ReactNode } from "react";

import { Mail, MapPin, Phone, User } from "lucide-react";

import AboutCard from "./AboutCard";

import SectionTitle from "../common/SectionTitle";

import personalInfo from "../../data/personalInfo";
import socialLinks from "../../data/socialLinks";

/**
 * ==========================================================
 * Personal Info Component
 * ==========================================================
 */

function PersonalInfo() {
  return (
    <section className="space-y-10">
      <SectionTitle
        title="About"
        highlight="Me"
        subtitle="A quick introduction about myself, my background, and how you can connect with me."
      />

      <AboutCard title="Personal Information" icon={<User size={24} />}>
        <div className="space-y-10">
          {/* Bio */}

          <p className="text-[16px] leading-8 tracking-wide text-slate-600 dark:text-slate-700 dark:text-slate-300">
            {personalInfo.bio}
          </p>

          {/* Details */}

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

          {/* Availability */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-emerald-500/20
              bg-linear-to-br
              from-emerald-500/10
              via-emerald-400/5
              to-transparent
              p-6
              backdrop-blur-xl
            "
          >
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />

            <h4 className="relative mb-3 text-lg font-semibold text-emerald-600 dark:text-emerald-400">
              Current Status
            </h4>

            <p className="relative leading-7 text-slate-600 dark:text-slate-700 dark:text-slate-300">
              {personalInfo.availability}
            </p>
          </div>

          {/* Social Links */}

          <div>
            <h4 className="mb-5 text-xl font-semibold text-slate-900 dark:text-slate-900 dark:text-white">
              Connect With Me
            </h4>

            <div className="flex flex-wrap gap-4">
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
                      h-14
                      w-14
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200/70
                      bg-white/70
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:scale-105
                      hover:border-indigo-500/40
                      hover:shadow-2xl
                      hover:shadow-indigo-500/20
                      dark:border-white/10
                      dark:bg-white/4
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        bg-linear-to-br
                        from-indigo-500
                        via-violet-500
                        to-cyan-500
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    <Icon
                      size={21}
                      className="
                        relative
                        z-10
                        text-slate-700
                        transition-all
                        duration-300
                        group-hover:scale-110
                        text-slate-900 dark:text-slate-900 dark:text-white
                        dark:text-slate-700 dark:text-slate-300
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
 * Info Item
 * ==========================================================
 */

interface InfoItemProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <div
      className="
        group
        flex
        items-start
        gap-4
        rounded-2xl
        border
        border-slate-200/70
        bg-white/70
        p-5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1.5
        hover:border-indigo-500/30
        hover:shadow-xl
        hover:shadow-indigo-500/10
        dark:border-white/10
        dark:bg-white/4
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-linear-to-br
          from-indigo-500/15
          via-violet-500/15
          to-cyan-500/15
          text-indigo-500
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        {icon}
      </div>

      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-600 dark:text-slate-400">
          {label}
        </p>

        <p className="font-semibold leading-6 text-slate-900 dark:text-slate-900 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

export default PersonalInfo;
