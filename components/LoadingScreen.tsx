"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1150);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-void text-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative w-[min(86vw,520px)] overflow-hidden border border-white/10 bg-black/30 p-6 shadow-panel">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-frost to-transparent" />
            <p className="font-display text-xs uppercase tracking-[0.45em] text-frost/80">Initializing build</p>
            <h1 className="mt-4 text-2xl font-semibold">Mahesh Suthar</h1>
            <div className="mt-6 h-1 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-frost via-white to-ember"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 font-display text-[10px] uppercase tracking-[0.25em] text-steel/70">
              <span>Gameplay</span>
              <span>Netcode</span>
              <span>Systems</span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
