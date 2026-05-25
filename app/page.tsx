import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <section id="projects" className="section-wrap">
        <Reveal>
          <SectionHeader kicker="Featured projects" title="Playable systems presented like game launches.">
            <p>
              Each showcase is structured for recruiters and studio leads: what the project is, why it matters, the
              systems involved, and the engineering choices behind the experience.
            </p>
          </SectionHeader>
        </Reveal>
        <Reveal delay={0.08}>
          <ProjectShowcase />
        </Reveal>
      </section>
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
