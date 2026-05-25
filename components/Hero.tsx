"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Github, Mail, Play } from "lucide-react";
import Link from "next/link";
import { capabilities, socialLinks } from "@/lib/data";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-28 md:px-8">
      <motion.div style={{ y, opacity }} className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-center">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-5 font-display text-xs uppercase tracking-[0.42em] text-frost/80"
          >
            Gameplay systems / Unity / full-stack engineering
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-5xl font-semibold leading-[0.95] text-white md:text-8xl lg:text-[8.6rem]"
          >
            Mahesh Suthar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="mt-6 max-w-3xl text-balance text-xl leading-8 text-steel md:text-3xl md:leading-[1.3]"
          >
            Game Developer • Gameplay Systems • Full Stack Engineer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link className="btn-primary" href="#projects">
              <Play size={16} aria-hidden="true" /> View Projects
            </Link>
            <Link className="btn-secondary" href={socialLinks.resume}>
              <Download size={16} aria-hidden="true" /> Resume
            </Link>
            <Link className="btn-secondary" href={socialLinks.github} target="_blank" rel="noreferrer">
              <Github size={16} aria-hidden="true" /> GitHub
            </Link>
            <Link className="btn-secondary" href="#contact">
              <Mail size={16} aria-hidden="true" /> Contact
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-16 grid gap-3 md:grid-cols-5"
        >
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="group relative overflow-hidden border border-white/10 bg-white/[0.025] p-4">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-frost/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                <Icon className="mb-3 text-frost/80" size={18} />
                <p className="font-display text-[11px] uppercase tracking-[0.24em] text-steel">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-1 text-sm font-medium text-white">{item.label}</p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      <Link
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-display text-[10px] uppercase tracking-[0.32em] text-steel md:flex"
      >
        Scroll <ArrowDown className="animate-bounce text-frost" size={14} />
      </Link>
    </section>
  );
}
