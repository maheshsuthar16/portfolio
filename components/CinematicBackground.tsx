"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function CinematicBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55, 1], [1, 0.62, 0.35]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      <motion.div style={{ y, opacity }} className="absolute inset-0 bg-radial-vignette" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,211,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(139,211,255,.07)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_50%_25%,black,transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(5,6,9,.8)_72%)]" />
      <div className="absolute left-1/2 top-0 h-[130vh] w-px bg-gradient-to-b from-frost/30 via-white/10 to-transparent" />
      <div className="noise-layer absolute -inset-[20%] opacity-[0.055]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-void to-transparent" />
    </div>
  );
}
