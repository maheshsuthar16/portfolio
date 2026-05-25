import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#050609",
        steel: "#a9b3c7",
        ember: "#f97316",
        frost: "#8bd3ff",
        circuit: "#193044"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        focus: "0 0 0 1px rgba(139, 211, 255, .45), 0 18px 80px rgba(0, 0, 0, .42)",
        panel: "0 30px 120px rgba(0, 0, 0, .55)"
      },
      backgroundImage: {
        "radial-vignette": "radial-gradient(circle at 50% 10%, rgba(139,211,255,.18), transparent 32%), radial-gradient(circle at 80% 18%, rgba(249,115,22,.13), transparent 26%)"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" }
        },
        noise: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "30%": { transform: "translate(3%, 2%)" },
          "60%": { transform: "translate(-3%, 1%)" },
          "80%": { transform: "translate(2%, -2%)" }
        }
      },
      animation: {
        scan: "scan 4s linear infinite",
        float: "float 8s ease-in-out infinite",
        noise: "noise .7s steps(2) infinite"
      }
    }
  },
  plugins: []
};

export default config;
