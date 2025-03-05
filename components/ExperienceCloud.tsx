"use client";

import { useScroll, useTransform, motion } from "motion/react";
import Link from "next/link";
import { useMemo } from "react";
import AnimatedChar from "./AnimatedChar";
import { experienceRows } from "@/data/experienceData";

export default function ExperienceCloud() {
  const { scrollY } = useScroll();

  const iconRandomOffset = useMemo(() => Math.random() * 200, []);
  const iconOpacity = useTransform(
    scrollY,
    [iconRandomOffset, iconRandomOffset + 200],
    [1, 0],
  );

  const rocketRotate = useTransform(scrollY, [0, 300], [0, -45]);
  const rocketY = useTransform(scrollY, [300, 1000], ["0vh", "-100vh"]);

  return (
    <div className="space-y-4 opacity-50">
      {experienceRows.map((row) => (
        <div
          key={row.map((exp) => exp.id).join("-")}
          className="flex flex-wrap text-6xl font-bold"
        >
          {row.map((exp, expIndex) => (
            <div key={`${exp.id}-${expIndex}`} className="flex flex-row">
              {exp.unicodeIcon && (
                <motion.div style={{ opacity: iconOpacity }}>
                  {exp.url ? (
                    <Link
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.unicodeIcon}
                    </Link>
                  ) : (
                    exp.unicodeIcon
                  )}
                </motion.div>
              )}
              <div className={`flex ${exp.textColor}`}>
                {typeof exp.content === "string" ? (
                  Array.from(exp.content).map((char, index) => (
                    <AnimatedChar
                      key={`${exp.id}-${index}`}
                      char={char}
                      scrollY={scrollY}
                      url={exp.url}
                    />
                  ))
                ) : (
                  <motion.div style={{ opacity: iconOpacity }}>
                    {exp.content}
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
      <motion.div
        className="inline-flex text-6xl"
        style={{
          rotate: rocketRotate,
          y: rocketY,
          transformOrigin: "center center",
        }}
      >
        🚀
      </motion.div>
    </div>
  );
}
