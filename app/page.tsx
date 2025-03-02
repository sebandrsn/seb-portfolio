"use client";

import { useLayoutEffect, useState, useRef } from "react";
import ExperienceCloud from "@/components/ExperienceCloud";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion, useScroll, useTransform } from "motion/react";

export default function Home() {
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [initialOffset, setInitialOffset] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      setInitialOffset(window.innerHeight - headerHeight);
    }
  }, []);

  const headerY = useTransform(
    scrollY,
    initialOffset !== null ? [0, initialOffset] : [0, 1],
    initialOffset !== null ? [initialOffset, 0] : [0, 0],
    { clamp: true },
  );

  const cloudY = useTransform(scrollY, [0, 500], [0, -600]);

  return (
    <div>
      <div>
        <motion.h1
          ref={headerRef}
          className="fixed right-2 bg-gradient-to-r from-pink-600 via-indigo-500 to-teal-300 bg-clip-text text-6xl font-bold text-transparent md:text-9xl"
          style={{
            top: headerY,
            visibility: initialOffset !== null ? "visible" : "hidden",
          }}
        >
          sebastian
        </motion.h1>
        <div className="flex justify-center">
          <MdOutlineKeyboardDoubleArrowDown className="absolute bottom-2 animate-bounce text-6xl text-gray-500 opacity-50" />
        </div>
        <div className="min-h-screen cursor-default">
          <motion.div style={{ y: cloudY }}>
            <ExperienceCloud />
          </motion.div>
        </div>
        <div className="flex min-h-screen flex-col">
          <div className="sticky top-0 text-6xl font-bold md:text-9xl">
            this is me
          </div>
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
