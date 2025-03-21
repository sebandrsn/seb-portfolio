"use client";

import ExperienceCloud from "@/components/ExperienceCloud";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion, useScroll, useTransform } from "motion/react";
import Profile from "@/components/Profile";
import { Header } from "@/components/Header";

export default function Home() {
  const { scrollY } = useScroll();

  const meY = useTransform(scrollY, [0, 500], ["100vh", "0vh"]);
  const opacity = useTransform(scrollY, [200, 50], [0, 1]);

  return (
    <div>
      <Header />
      <div className="sticky top-0 min-h-screen cursor-default">
        <ExperienceCloud />
      </div>
      <div className="min-h-screen">
        <motion.div style={{ y: meY }}>
          <Profile />
        </motion.div>
      </div>
      <motion.div className="flex lg:justify-center" style={{ opacity }}>
        <MdOutlineKeyboardDoubleArrowDown className="fixed bottom-0 animate-bounce text-6xl text-gray-500 opacity-50" />
      </motion.div>
    </div>
  );
}
