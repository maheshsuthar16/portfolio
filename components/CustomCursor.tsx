"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 36 });
  const springY = useSpring(y, { stiffness: 420, damping: 36 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX - 16);
      y.set(event.clientY - 16);
      const target = event.target as HTMLElement | null;
      setIsPointer(Boolean(target?.closest("a, button, [role='button'], input, textarea, select")));
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor fixed left-0 top-0 z-[80] hidden h-8 w-8 rounded-full border border-frost/70 mix-blend-screen md:block"
      style={{ x: springX, y: springY }}
      animate={{
        scale: isPointer ? 1.85 : 1,
        backgroundColor: isPointer ? "rgba(139, 211, 255, 0.08)" : "rgba(139, 211, 255, 0)"
      }}
      transition={{ duration: 0.18 }}
    />
  );
}
