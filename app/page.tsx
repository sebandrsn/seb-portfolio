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
          <div className="relative">
            <Image
              src="/images/laptop.png"
              alt="An animated laptop."
              width={800}
              height={800}
              className="h-auto w-full"
            />

            <div className="absolute top-[30%] left-[18%] w-[65%] overflow-hidden px-2 font-mono text-sm leading-tight text-green-400 sm:text-base">
              <div className="break-words whitespace-pre-wrap">
                <TypewriterText />
              </div>
            </div>
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
