import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function SkillsSection() {
  return (
    <section id="skills" className="section-wrap">
      <Reveal>
        <SectionHeader kicker="Systems" title="A stack organized like a production toolchain.">
          <p>
            No skill bars, no vanity meters. Just the areas that matter when building playable systems, multiplayer
            flows, web services, and polished user-facing interfaces.
          </p>
        </SectionHeader>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={index * 0.04} className="system-panel">
              <div className="flex items-center justify-between">
                <Icon className="text-frost" size={22} />
                <span className="font-display text-[10px] uppercase tracking-[0.25em] text-steel/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-steel">
                    <span className="h-px w-5 bg-frost/45" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
