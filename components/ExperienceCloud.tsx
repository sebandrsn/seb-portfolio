"use client";

import { useScroll, useTransform, motion } from "motion/react";
import Link from "next/link";
import { JSX, useMemo } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import AnimatedChar from "./AnimatedChar";

interface Experience {
  id: string;
  content: string;
  textColor?: string;
  unicodeIcon?: JSX.Element;
  url?: string;
}

const experienceRows: Experience[][] = [
  [
    { id: "C#", content: "C#", textColor: "text-gray-700" },
    { id: "Next", content: "🔥Next.js", textColor: "text-gray-500" },
    { id: "Mongo", content: "MongoDB", textColor: "text-gray-700" },
    { id: "MVVM", content: "MVVM", textColor: "text-gray-500" },
    { id: "MAP", content: "MicrosoftAzurePortal", textColor: "text-gray-700" },
  ],
  [
    { id: "SQL", content: "SQL", textColor: "text-gray-500" },
    { id: "JS", content: "Javascript", textColor: "text-gray-700" },
    { id: "EC", content: "EdgeComputing", textColor: "text-gray-500" },
    { id: "DOB", content: "👶1989", textColor: "text-gray-700" },
    { id: "WPF", content: "WPF", textColor: "text-gray-500" },
  ],
  [
    { id: "React", content: "React", textColor: "text-gray-700" },
    { id: "Agile", content: "Agile", textColor: "text-gray-500" },
    { id: "Town", content: "📍Östersund", textColor: "text-gray-700" },
    { id: "Fullstack", content: "Fullstack", textColor: "text-gray-500" },
    { id: "AWS", content: "AWS", textColor: "text-gray-700" },
  ],
  [
    {
      id: "EMail",
      content: "sebastiandersson@gmail.com",
      textColor: "text-gray-500",
      unicodeIcon: <MdEmail className="text-white" />,
    },
  ],
  [
    { id: "ADOS", content: "Azure DevOpsServices", textColor: "text-gray-700" },
    { id: "Angular", content: "Angular", textColor: "text-gray-500" },
  ],
  [
    { id: "NET", content: ".NET", textColor: "text-gray-500" },
    { id: "Git", content: "Git", textColor: "text-gray-700" },
    { id: "Fastly", content: "Fastly", textColor: "text-gray-500" },
    {
      id: "LinkedIn",
      content: "LinkedIn",
      textColor: "text-gray-700",
      unicodeIcon: <FaLinkedin className="text-blue-900" />,
      url: "https://www.linkedin.com/in/sebastian-andersson-981641138",
    },
  ],
  [
    { id: "TS", content: "Typescript", textColor: "text-gray-700" },
    { id: "TL", content: "TeamLead", textColor: "text-gray-500" },
  ],
  [{ id: "Tailwind", content: "Tailwindcss", textColor: "text-gray-500" }],
  [
    {
      id: "GitHub",
      content: "GitHub",
      textColor: "text-gray-700",
      unicodeIcon: <IoLogoGithub className="text-white" />,
      url: "https://github.com/sebandrsn",
    },
  ],
];

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
