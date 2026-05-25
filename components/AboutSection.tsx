import { timeline } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="section-wrap">
      <Reveal>
        <SectionHeader kicker="Profile" title="Gameplay-minded engineering with full-stack discipline.">
          <p>
            Mahesh Suthar builds game systems with a practical engineer&apos;s eye: readable gameplay code, clear
            feedback loops, and production habits that make prototypes easier to ship, test, and evolve.
          </p>
        </SectionHeader>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="border border-white/10 bg-white/[0.025] p-6 md:p-8">
          <p className="text-xl leading-9 text-white md:text-2xl">
            Focused on Unity, C#, gameplay systems, multiplayer systems, and full-stack engineering for web-backed game
            experiences.
          </p>
          <p className="mt-6 leading-8 text-steel">
            The work is shaped for studios that value fast iteration and technical clarity: systems that designers can
            tune, gameplay that feels responsive, interfaces that communicate state cleanly, and services that support
            modern player-facing experiences.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["Unity", "C#", "Gameplay", "Multiplayer"].map((item) => (
              <div key={item} className="border border-white/10 bg-black/20 p-4">
                <p className="font-display text-[10px] uppercase tracking-[0.25em] text-frost/70">Core</p>
                <p className="mt-2 font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative border border-white/10 bg-white/[0.025] p-6 md:p-8">
          <div className="absolute bottom-0 left-8 top-8 w-px bg-gradient-to-b from-frost via-white/15 to-transparent" />
          <div className="space-y-7">
            {timeline.slice(0, 3).map((item) => (
              <div key={item.year} className="relative pl-9">
                <span className="absolute left-[-3px] top-2 h-2 w-2 bg-frost shadow-[0_0_18px_rgba(139,211,255,.8)]" />
                <p className="font-display text-xs uppercase tracking-[0.28em] text-frost/75">{item.year} / {item.label}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 leading-7 text-steel">{item.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
