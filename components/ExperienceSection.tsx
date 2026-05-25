import { timeline } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-wrap">
      <Reveal>
        <SectionHeader kicker="Timeline" title="A cinematic record of the engineering trajectory.">
          <p>
            Recruiter-friendly at a glance, with enough technical signal to show where the work is headed.
          </p>
        </SectionHeader>
      </Reveal>

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-frost/60 via-white/15 to-transparent md:left-1/2" />
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.05}>
              <article className={`relative grid gap-5 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:[&>div]:col-start-2"}`}>
                <span className="absolute left-[13px] top-7 h-3 w-3 bg-frost md:left-[calc(50%-5px)]" />
                <div className="ml-10 border border-white/10 bg-white/[0.025] p-5 md:ml-0 md:p-6">
                  <p className="font-display text-xs uppercase tracking-[0.32em] text-frost/75">{item.year} / {item.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-steel">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
