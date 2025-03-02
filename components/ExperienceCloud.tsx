import { JSX } from "react";
import { FaLinkedin } from "react-icons/fa";

interface Experience {
  id: string;
  text?: string;
  color?: string;
  icon?: JSX.Element;
}

const experienceRows: Experience[][] = [
  [
    { id: "C#", text: "C#", color: "text-gray-700" },
    {
      id: "Next",
      text: "Next.js",
      color: "text-gray-500",
      icon: <div className="-mr-3 -ml-3">🔥</div>,
    },

    { id: "Mongo", text: "MongoDB", color: "text-gray-700" },
    { id: "MVVM", text: "MVVM", color: "text-gray-500" },
    { id: "MAP", text: "MicrosoftAzurePortal", color: "text-gray-700" },
  ],
  [
    { id: "SQL", text: "SQL", color: "text-gray-500" },
    { id: "JS", text: "Javascript", color: "text-gray-700" },
    { id: "EC", text: "EdgeComputing", color: "text-gray-500" },
    {
      id: "DOB",
      text: "1989",
      color: "text-gray-700",
      icon: <div className="-mr-2 -ml-3">👶</div>,
    },
    { id: "WPF", text: "WPF", color: "text-gray-500" },
  ],
  [
    { id: "React", text: "React", color: "text-gray-700" },
    { id: "Agile", text: "Agile", color: "text-gray-500" },
    {
      id: "Town",
      text: "Östersund",
      color: "text-gray-700",
      icon: <div className="-mr-3 -ml-3">📍</div>,
    },
    { id: "Fullstack", text: "Fullstack", color: "text-gray-500" },
    { id: "AWS", text: "AWS", color: "text-gray-700" },
  ],
  [
    {
      id: "EMail",
      text: "sebastiandersson@gmail.com",
      color: "text-gray-500",
      icon: <div>✉️</div>,
    },
  ],
  [
    { id: "ADOS", text: "AzureDevOpsServices", color: "text-gray-700" },
    { id: "Angular", text: "Angular", color: "text-gray-500" },
  ],

  [
    { id: "NET", text: ".NET", color: "text-gray-500" },
    { id: "Git", text: "Git", color: "text-gray-700" },
    { id: "Fastly", text: "Fastly", color: "text-gray-500" },
    {
      id: "LinkedIn",
      text: "LinkedIn",
      color: "text-gray-700",
      icon: <FaLinkedin className="text-blue-900" />,
    },
  ],
  [
    { id: "TS", text: "Typescript", color: "text-gray-700" },
    { id: "TL", text: "TeamLead", color: "text-gray-500" },
  ],
  [{ id: "Tailwind", text: "Tailwindcss", color: "text-gray-500" }],
  [{ id: "Rocket", icon: <div>🚀</div> }],
];

export default function ExperienceCloud() {
  return (
    <div className="space-y-4 opacity-50">
      {experienceRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap text-6xl font-bold">
          {row.map((exp) => (
            <div key={exp.id} className={`flex ${exp.color}`}>
              {exp.icon && <span className="-mr-1">{exp.icon}</span>}
              {exp.text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
