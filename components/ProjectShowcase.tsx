"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Maximize2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { type Project, type ProjectCategory, projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters: ProjectCategory[] = ["All", "Gameplay", "AI", "Systems", "Multiplayer"];

export function ProjectShowcase() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={cn(
              "border px-4 py-2 font-display text-[11px] uppercase tracking-[0.22em] transition",
              filter === item
                ? "border-frost/60 bg-frost/10 text-white shadow-focus"
                : "border-white/10 bg-white/[0.025] text-steel hover:border-white/25 hover:text-white"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="project-panel group overflow-hidden border border-white/10 bg-white/[0.025]"
            >
              <button
                onClick={() => setSelected(project)}
                className="block w-full text-left"
                aria-label={`Open details for ${project.title}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-circuit">
                  <Image
                    src={project.image}
                    alt={`${project.title} visual preview`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/82 via-transparent to-transparent" />
                  <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center border border-white/15 bg-black/30 text-white backdrop-blur-md transition group-hover:border-frost/70">
                    <Maximize2 size={16} />
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <p className="font-display text-[11px] uppercase tracking-[0.28em] text-frost/75">{project.category}</p>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 leading-7 text-steel">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="border border-white/10 bg-black/20 px-3 py-1 font-display text-[10px] uppercase tracking-[0.18em] text-steel">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
              <div className="flex border-t border-white/10">
                <Link className="project-link" href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={15} /> GitHub
                </Link>
                <Link className="project-link" href={project.demoUrl} target="_blank" rel="noreferrer">
                  <ExternalLink size={15} /> Live Demo
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/75 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 18 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-white/12 bg-[#080b10] shadow-panel"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} details`}
          >
            <div className="relative aspect-[16/7] min-h-60 overflow-hidden">
              <Image src={project.image} alt="" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b10] via-[#080b10]/20 to-transparent" />
              <button
                onClick={onClose}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center border border-white/15 bg-black/35 text-white backdrop-blur-md"
                aria-label="Close project details"
              >
                <X size={18} />
              </button>
            </div>
            <div className="grid gap-8 p-5 md:grid-cols-[1.1fr_.9fr] md:p-8">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.3em] text-frost/80">{project.category}</p>
                <h3 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{project.title}</h3>
                <p className="mt-5 text-lg leading-8 text-steel">{project.summary}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link className="btn-primary" href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github size={16} /> GitHub
                  </Link>
                  <Link className="btn-secondary" href={project.demoUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-display text-xs uppercase tracking-[0.28em] text-white">Technical breakdown</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-steel">
                    {project.breakdown.map((item) => (
                      <li key={item} className="border-l border-frost/40 pl-4">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-xs uppercase tracking-[0.28em] text-white">Build notes</h4>
                  <div className="mt-4 grid gap-2">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-steel">{metric}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
