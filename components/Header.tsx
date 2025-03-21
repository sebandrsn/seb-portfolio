import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export function Header() {
  const [initialOffset, setInitialOffset] = useState<number | null>(null);
  const [thisIsMeMarginLeft, setThisIsMeMarginLeft] = useState(0);

  const nameRef = useRef<HTMLHeadingElement>(null);
  const thisIsMeRef = useRef<HTMLHeadingElement>(null);

  const { scrollY } = useScroll();

  useLayoutEffect(() => {
    if (nameRef.current && thisIsMeRef.current) {
      const headerHeight = nameRef.current.offsetHeight;
      setInitialOffset(window.innerHeight - headerHeight);

      const thisIsMeMargin =
        window.innerWidth -
        nameRef.current.offsetWidth -
        thisIsMeRef.current.offsetWidth -
        40;
      setThisIsMeMarginLeft(thisIsMeMargin);
    }
  }, []);

  const headerY = useTransform(
    scrollY,
    initialOffset !== null ? [0, initialOffset] : [0, 1],
    initialOffset !== null ? [initialOffset, 0] : [0, 0],
    { clamp: true },
  );

  const thisIsMeX = useTransform(
    scrollY,
    initialOffset !== null ? [0, initialOffset] : [0, 1],
    ["-250vh", "0vh"],
    { clamp: true },
  );

  const opacity = useTransform(scrollY, [200, 50], [1, 0]);

  return (
    <div>
      <motion.h1
        className="fixed right-2 z-10 bg-gradient-to-r from-pink-600 via-indigo-500 to-teal-300 bg-clip-text text-6xl font-bold text-transparent md:text-9xl"
        style={{
          top: headerY,
          visibility: initialOffset !== null ? "visible" : "hidden",
        }}
      >
        <span ref={nameRef}>sebastian</span>
        <motion.div
          className="flex flex-row justify-end space-x-4 text-4xl lg:text-6xl"
          style={{ opacity }}
        >
          <Link
            href="https://github.com/sebandrsn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub className="text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sebastian-andersson-981641138"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-900" />
          </Link>
        </motion.div>
      </motion.h1>
      <motion.div
        className="fixed top-0 hidden text-xl font-bold md:text-6xl lg:block lg:text-9xl"
        style={{ x: thisIsMeX, marginLeft: thisIsMeMarginLeft }}
      >
        <span ref={thisIsMeRef}>this is me:</span>
      </motion.div>
    </div>
  );
}
