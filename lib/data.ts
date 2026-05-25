import {
  Boxes,
  Code2,
  Cpu,
  Database,
  Gamepad2,
  GitBranch,
  Network,
  Shield,
  Swords,
  Wrench
} from "lucide-react";

export type ProjectCategory = "All" | "Gameplay" | "AI" | "Systems" | "Multiplayer";

export type Project = {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  summary: string;
  image: string;
  stack: string[];
  breakdown: string[];
  metrics: string[];
  githubUrl: string;
  demoUrl: string;
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Systems", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const projects: Project[] = [
  {
    id: "multiplayer-fps",
    title: "Multiplayer FPS Prototype",
    category: "Multiplayer",
    summary: "Authoritative arena prototype focused on responsive movement, prediction, hit validation, and readable match flow.",
    image: "/projects/multiplayer-fps.svg",
    stack: ["Unity", "C#", "Netcode", "Relay", "Cinemachine"],
    breakdown: [
      "Server-authoritative weapon fire with lag-compensated raycast validation.",
      "Client prediction and reconciliation for sprint, strafe, jump, and slide movement.",
      "Round state machine with spawn waves, match timer, score events, and spectator handoff."
    ],
    metrics: ["8-player test lobby", "60 Hz simulation target", "Sub-120 ms feel budget"],
    githubUrl: "https://github.com/maheshsuthar/multiplayer-fps-prototype",
    demoUrl: "https://maheshsuthar.dev/fps-prototype"
  },
  {
    id: "ai-combat",
    title: "AI Enemy Combat System",
    category: "AI",
    summary: "Combat AI stack built around perception, cover choice, attack telegraphing, and designer-tunable behavior states.",
    image: "/projects/ai-combat-system.svg",
    stack: ["Unity", "C#", "Behavior Trees", "NavMesh", "ScriptableObjects"],
    breakdown: [
      "Perception model combines field-of-view checks, memory decay, sound stimulus, and threat scoring.",
      "Behavior tree actions expose cooldowns, aggression, retreat, flank, and cover preference knobs.",
      "Debug overlay visualizes intent, path confidence, and current tactical score in-editor."
    ],
    metrics: ["14 behavior nodes", "Designer-first tuning", "Frame-budgeted sensing"],
    githubUrl: "https://github.com/maheshsuthar/ai-enemy-combat-system",
    demoUrl: "https://maheshsuthar.dev/ai-combat"
  },
  {
    id: "procedural-dungeon",
    title: "Procedural Dungeon Generator",
    category: "Systems",
    summary: "Replayable dungeon generator with seeded layouts, encounter pacing, room tagging, and navigation-ready output.",
    image: "/projects/procedural-dungeon.svg",
    stack: ["Unity", "C#", "PCG", "A*", "Editor Tools"],
    breakdown: [
      "Graph-first generation separates critical path, optional branches, locks, keys, and reward chambers.",
      "Validation pass rejects unreachable rooms, pacing spikes, and invalid enemy-to-rest ratios.",
      "Custom editor preview lets designers scrub seeds and export encounter metadata."
    ],
    metrics: ["Seed deterministic", "300 ms generation target", "NavMesh bake hooks"],
    githubUrl: "https://github.com/maheshsuthar/procedural-dungeon-generator",
    demoUrl: "https://maheshsuthar.dev/dungeon-generator"
  },
  {
    id: "inventory-loot",
    title: "Inventory & Loot System",
    category: "Gameplay",
    summary: "Modular item, rarity, drop-table, and inventory architecture built for RPG-style progression loops.",
    image: "/projects/inventory-loot-system.svg",
    stack: ["Unity", "C#", "UI Toolkit", "Addressables", "JSON"],
    breakdown: [
      "Item definitions use data-driven rarity curves, affix pools, stacking rules, and equip constraints.",
      "Inventory operations are command-based for drag, split, swap, equip, compare, and rollback flows.",
      "Loot tables support weighted pools, pity rules, encounter tags, and deterministic test seeds."
    ],
    metrics: ["Data-driven economy", "Undoable UI commands", "Automated loot tests"],
    githubUrl: "https://github.com/maheshsuthar/inventory-loot-system",
    demoUrl: "https://maheshsuthar.dev/inventory-system"
  }
];

export const skillGroups = [
  {
    title: "Game Development",
    icon: Gamepad2,
    items: ["Unity gameplay loops", "C# architecture", "Physics interactions", "UI/UX for games"]
  },
  {
    title: "Multiplayer",
    icon: Network,
    items: ["Netcode patterns", "Prediction", "Lobby flows", "Latency-aware design"]
  },
  {
    title: "Backend",
    icon: Database,
    items: ["Node.js APIs", "Auth flows", "Realtime services", "Cloud deployment"]
  },
  {
    title: "Frontend",
    icon: Code2,
    items: ["Next.js", "React", "TypeScript", "Motion systems"]
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "Profiling", "Editor tooling", "CI-ready workflows"]
  }
];

export const timeline = [
  {
    year: "2026",
    title: "Gameplay Systems Portfolio",
    label: "Current focus",
    body: "Building polished prototypes that demonstrate gameplay engineering, multiplayer architecture, and clean full-stack presentation."
  },
  {
    year: "2025",
    title: "Full-Stack Engineering",
    label: "Web + services",
    body: "Shipped responsive web experiences, backend services, API integrations, and production-oriented TypeScript systems."
  },
  {
    year: "2024",
    title: "Unity Gameplay Foundations",
    label: "Unity / C#",
    body: "Focused on player controllers, combat loops, AI behavior, procedural systems, tooling, and performance-aware gameplay code."
  },
  {
    year: "2023",
    title: "Computer Science Practice",
    label: "Core engineering",
    body: "Built fundamentals across data structures, debugging, version control, networking concepts, and software design habits."
  }
];

export const capabilities = [
  { label: "Simulation", icon: Cpu },
  { label: "Combat", icon: Swords },
  { label: "Architecture", icon: Boxes },
  { label: "Networking", icon: GitBranch },
  { label: "Reliability", icon: Shield }
];

export const socialLinks = {
  email: "mailto:maheshsuthar.dev@example.com",
  linkedIn: "https://www.linkedin.com/in/mahesh-suthar",
  github: "https://github.com/maheshsuthar",
  resume: "/Mahesh-Suthar-Resume.pdf"
};
