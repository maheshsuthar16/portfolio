import { Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const contacts = [
  { label: "Email", href: socialLinks.email, icon: Mail },
  { label: "LinkedIn", href: socialLinks.linkedIn, icon: Linkedin },
  { label: "GitHub", href: socialLinks.github, icon: Github },
  { label: "Resume", href: socialLinks.resume, icon: Download }
];

export function ContactSection() {
  return (
    <footer id="contact" className="section-wrap pb-10">
      <Reveal>
        <div className="border border-white/10 bg-white/[0.025] p-6 md:p-10">
          <p className="font-display text-xs uppercase tracking-[0.36em] text-frost/75">Contact</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">
                Available for gameplay engineering roles and serious prototype work.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-steel">
                Best fit: indie studios, game startups, gameplay engineering teams, and products that need someone who
                can connect playable systems with polished technical presentation.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-80 lg:grid-cols-1">
              {contacts.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.label} href={item.href} className="contact-link" target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <Icon size={16} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-display text-[10px] uppercase tracking-[0.26em] text-steel/70 sm:flex-row">
          <p>Mahesh Suthar / Game Developer</p>
          <p>Built with Next.js, Tailwind, TypeScript, Framer Motion</p>
        </div>
      </Reveal>
    </footer>
  );
}
