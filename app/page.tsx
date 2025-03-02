"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import ExperienceCloud from "@/components/ExperienceCloud";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export default function Home() {
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [initialOffset, setInitialOffset] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      setInitialOffset(window.innerHeight - headerHeight - 16);
    }
  }, []);

  const headerY = useTransform(
    scrollY,
    [0, initialOffset],
    [initialOffset, 0],
    { clamp: true },
  );

  const cloudY = useTransform(scrollY, [0, 500], [0, -600]);

  return (
    <div>
      <div>
        <motion.h1
          ref={headerRef}
          className="bg-gradient-to-r from-pink-600 via-indigo-500 to-teal-300 bg-clip-text text-6xl font-bold text-transparent md:text-9xl"
          style={{
            position: "fixed",
            top: headerY,
            right: "0.5rem",
          }}
        >
          sebastian
        </motion.h1>

        <div className="relative min-h-screen cursor-default">
          <motion.div style={{ y: cloudY }}>
            <ExperienceCloud />
          </motion.div>
          <div className="flex justify-center">
            <MdOutlineKeyboardDoubleArrowDown className="absolute bottom-2 animate-bounce text-6xl text-gray-500 opacity-50" />
          </div>
        </div>

        <div className="relative flex min-h-screen flex-col">
          <div className="text-6xl font-bold md:text-9xl">bb</div>
        </div>
        <div className="relative flex min-h-screen flex-col">
          <div className="text-6xl font-bold md:text-9xl">cc</div>
        </div>
        <div className="relative flex min-h-screen flex-col">
          <div className="text-6xl font-bold md:text-9xl">dd</div>
        </div>
      </div>
    </div>
  );
}
