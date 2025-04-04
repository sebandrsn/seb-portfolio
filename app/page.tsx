"use client";

import ExperienceCloud from "@/components/ExperienceCloud";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion, useScroll, useTransform } from "motion/react";
import Profile from "@/components/Profile";
import { Header } from "@/components/Header";
import Image from "next/image";
import { TypewriterText } from "@/components/TypewriterText";

export default function Home() {
  const { scrollY } = useScroll();

  const meY = useTransform(scrollY, [0, 500], ["100vh", "0vh"]);
  const opacity = useTransform(scrollY, [200, 50], [0, 1]);

  return (
    <div>
      <Header />
      <div className="sticky top-0 h-screen cursor-default">
        <motion.div
          className="relative flex h-full items-center justify-center lg:hidden"
          style={{ opacity }}
        >
          <Image
            src="/images/laptop.png"
            alt="An animated laptop."
            width={500}
            height={500}
            className="h-auto"
          />

          <div className="absolute mb-48 px-2 font-mono text-sm leading-tight text-green-400 sm:text-base">
            <TypewriterText />
          </div>
        </motion.div>
        <div className="hidden lg:block">
          <ExperienceCloud />
        </div>
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
