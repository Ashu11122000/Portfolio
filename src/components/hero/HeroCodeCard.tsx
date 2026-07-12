import GlassCard from "../ui/GlassCard";

import { heroData } from "../../data/hero";

/**
 * ==========================================================
 * Hero Code Card
 * ==========================================================
 *
 * Premium code editor inspired by VS Code.
 *
 * Features
 * ----------
 * ✓ Glassmorphism
 * ✓ macOS Window Header
 * ✓ Line Numbers
 * ✓ Syntax Highlighting
 * ✓ Hover Glow
 * ✓ Responsive
 */

function HeroCodeCard() {
  return (
    <GlassCard
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border-white/10
        p-0
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/20
        hover:shadow-[0_25px_80px_rgba(34,211,238,0.18)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-cyan-500/5
          via-transparent
          to-violet-500/5
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Editor Header */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          px-5
          py-4
        "
      >
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <span className="text-xs font-medium tracking-wide text-white/60">
          developer.ts
        </span>

        <div className="w-10" />
      </div>

      {/* Code */}
      <div
        className="
          relative
          space-y-2
          p-6
          font-mono
          text-[15px]
          leading-8
        "
      >
        <CodeLine number={1}>
          <span className="text-pink-400">const</span>{" "}
          <span className="text-cyan-300">developer</span> = {"{"}
        </CodeLine>

        <CodeLine number={2}>
          <span className="text-red-400">name</span>:{" "}
          <span className="text-green-300">
            "{heroData.codeCard.name}"
          </span>,
        </CodeLine>

        <CodeLine number={3}>
          <span className="text-red-400">role</span>:{" "}
          <span className="text-green-300">
            "{heroData.codeCard.role}"
          </span>,
        </CodeLine>

        <CodeLine number={4}>
          <span className="text-red-400">skills</span>: [
        </CodeLine>

        {heroData.codeCard.skills.map((skill, index) => (
          <CodeLine key={skill} number={index + 5} indent>
            <span className="text-cyan-300">"{skill}"</span>,
          </CodeLine>
        ))}

        <CodeLine number={heroData.codeCard.skills.length + 5}>
          ],
        </CodeLine>

        <CodeLine number={heroData.codeCard.skills.length + 6}>
          <span className="text-red-400">passion</span>:{" "}
          <span className="text-yellow-300">
            "{heroData.codeCard.passion}"
          </span>,
        </CodeLine>

        <CodeLine number={heroData.codeCard.skills.length + 7}>
          <span className="text-red-400">goal</span>:{" "}
          <span className="text-violet-300">
            "{heroData.codeCard.goal}"
          </span>
        </CodeLine>

        <CodeLine number={heroData.codeCard.skills.length + 8}>
          {"}"}
        </CodeLine>
      </div>
    </GlassCard>
  );
}

type CodeLineProps = {
  number: number;
  indent?: boolean;
  children: React.ReactNode;
};

function CodeLine({
  number,
  indent = false,
  children,
}: CodeLineProps) {
  return (
    <div className="flex">
      <span
        className="
          mr-5
          w-6
          select-none
          text-right
          text-white/25
        "
      >
        {number}
      </span>

      <div className={indent ? "pl-6" : ""}>{children}</div>
    </div>
  );
}

export default HeroCodeCard;