"use client";

import { useLayoutEffect, useState, useRef } from "react";
import ExperienceCloud from "@/components/ExperienceCloud";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion, useScroll, useTransform } from "motion/react";
import Profile from "@/components/Profile";

export default function Home() {
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLHeadingElement>(null);
  const thisIsMeRef = useRef<HTMLHeadingElement>(null);
  const [initialOffset, setInitialOffset] = useState<number | null>(null);
  const [thisIsMeMargin, setThisIsMeMargin] = useState(0);

  useLayoutEffect(() => {
    if (headerRef.current && thisIsMeRef.current) {
      const thisIsMeMargin =
        window.innerWidth -
        headerRef.current.offsetWidth -
        thisIsMeRef.current.offsetWidth -
        40;
      setThisIsMeMargin(thisIsMeMargin);
    }
  }, []);

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
  const cloudY = useTransform(scrollY, [0, 1000], ["0vh", "-100vh"]);
  const thisIsMeX = useTransform(
    scrollY,
    initialOffset !== null ? [0, initialOffset] : [0, 1],
    ["-250vh", "0vh"],
    { clamp: true },
  );
  const meY = useTransform(scrollY, [0, 500], ["100vh", "0vh"]);

  return (
    <div>
      <motion.h1
        className="fixed right-2 bg-gradient-to-r from-pink-600 via-indigo-500 to-teal-300 bg-clip-text text-6xl font-bold text-transparent md:text-9xl"
        style={{
          top: headerY,
          visibility: initialOffset !== null ? "visible" : "hidden",
        }}
      >
        <span ref={headerRef}>sebastian</span>
      </motion.h1>
      <motion.div
        className="fixed top-0 text-6xl font-bold md:text-9xl"
        style={{ x: thisIsMeX, marginLeft: thisIsMeMargin }}
      >
        <span ref={thisIsMeRef}>this is me:</span>
      </motion.div>
      <div className="min-h-screen cursor-default">
        <motion.div style={{ y: cloudY }}>
          <ExperienceCloud />
        </motion.div>
      </div>
      <div className="min-h-screen">
        <motion.div style={{ y: meY }}>
          <Profile />
        </motion.div>
      </div>
      <div className="min-h-screen">a</div>
      <div className="min-h-screen">b</div>
      <div className="min-h-screen">c</div>
      <div className="flex justify-center">
        <MdOutlineKeyboardDoubleArrowDown className="fixed bottom-0 animate-bounce text-6xl text-gray-500 opacity-50" />
      </div>
    </div>
  );
}
