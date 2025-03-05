import type { Metadata, Viewport } from "next";
import "./globals.css";
import { MotionConfig } from "motion/react";

export const metadata: Metadata = {
  title: "sebastiandersson - portfolio",
  description:
    "Showcasing the projects and skills of Sebastian Andersson, a full-stack developer based in Östersund, Sweden.",
  keywords: [
    "Full-Stack Developer",
    "Portfolio",
    "JavaScript",
    "React",
    "Next.js",
  ],
  metadataBase: new URL("https://sebastiandersson.dev"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MotionConfig reducedMotion="user">
        <body>{children}</body>
      </MotionConfig>
    </html>
  );
}
