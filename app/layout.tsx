import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
