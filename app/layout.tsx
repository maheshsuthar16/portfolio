import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CinematicBackground } from "@/components/CinematicBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maheshsuthar.dev"),
  title: {
    default: "Mahesh Suthar | Game Developer Portfolio",
    template: "%s | Mahesh Suthar"
  },
  description:
    "Cinematic portfolio for Mahesh Suthar, a game developer focused on Unity, C#, gameplay systems, multiplayer systems, and full-stack engineering.",
  keywords: [
    "Mahesh Suthar",
    "Game Developer",
    "Unity Developer",
    "Gameplay Programmer",
    "C#",
    "Multiplayer Systems",
    "Full Stack Engineer"
  ],
  authors: [{ name: "Mahesh Suthar" }],
  creator: "Mahesh Suthar",
  openGraph: {
    type: "website",
    url: "https://maheshsuthar.dev",
    title: "Mahesh Suthar | Game Developer Portfolio",
    description:
      "Gameplay systems, multiplayer prototypes, Unity engineering, and polished full-stack presentation.",
    siteName: "Mahesh Suthar Portfolio",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Mahesh Suthar cinematic game developer portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahesh Suthar | Game Developer Portfolio",
    description: "Game developer focused on Unity, C#, gameplay systems, multiplayer, and full-stack engineering.",
    images: ["/og.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#050609",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-void text-white antialiased`}>
        <a href="#projects" className="skip-link">
          Skip to projects
        </a>
        <CinematicBackground />
        <LoadingScreen />
        <Navbar />
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
