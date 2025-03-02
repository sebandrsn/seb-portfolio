import { JSX } from "react";
import { FaLinkedin } from "react-icons/fa";

interface Experience {
  id: string;
  content: JSX.Element;
  textColor?: string;
}

const experienceRows: Experience[][] = [
  [
    { id: "C#", content: <span>C#</span>, textColor: "text-gray-700" },
    {
      id: "Next",
      content: (
        <span>
          <span className="-mr-3 -ml-3">🔥</span>Next.js
        </span>
      ),
      textColor: "text-gray-500",
    },
    { id: "Mongo", content: <span>MongoDB</span>, textColor: "text-gray-700" },
    { id: "MVVM", content: <span>MVVM</span>, textColor: "text-gray-500" },
    {
      id: "MAP",
      content: <span>MicrosoftAzurePortal</span>,
      textColor: "text-gray-700",
    },
  ],
  [
    { id: "SQL", content: <span>SQL</span>, textColor: "text-gray-500" },
    { id: "JS", content: <span>Javascript</span>, textColor: "text-gray-700" },
    {
      id: "EC",
      content: <span>EdgeComputing</span>,
      textColor: "text-gray-500",
    },
    {
      id: "DOB",
      content: (
        <span>
          <span className="-mr-3 -ml-3">👶</span>1989
        </span>
      ),
      textColor: "text-gray-700",
    },
    { id: "WPF", content: <span>WPF</span>, textColor: "text-gray-500" },
  ],
  [
    { id: "React", content: <span>React</span>, textColor: "text-gray-700" },
    { id: "Agile", content: <span>Agile</span>, textColor: "text-gray-500" },
    {
      id: "Town",
      content: (
        <span>
          <span className="-mr-4 -ml-4">📍</span>Östersund
        </span>
      ),
      textColor: "text-gray-700",
    },
    {
      id: "Fullstack",
      content: <span>Fullstack</span>,
      textColor: "text-gray-500",
    },
    { id: "AWS", content: <span>AWS</span>, textColor: "text-gray-700" },
  ],
  [
    {
      id: "EMail",
      content: (
        <span>
          <span>✉️</span>sebastiandersson@gmail.com
        </span>
      ),
      textColor: "text-gray-500",
    },
  ],
  [
    {
      id: "ADOS",
      content: <span>AzureDevOpsServices</span>,
      textColor: "text-gray-700",
    },
    {
      id: "Angular",
      content: <span>Angular</span>,
      textColor: "text-gray-500",
    },
  ],
  [
    { id: "NET", content: <span>.NET</span>, textColor: "text-gray-500" },
    { id: "Git", content: <span>Git</span>, textColor: "text-gray-700" },
    { id: "Fastly", content: <span>Fastly</span>, textColor: "text-gray-500" },
    {
      id: "LinkedIn",
      content: (
        <span className="flex flex-row">
          <FaLinkedin className="text-blue-900" />
          LinkedIn
        </span>
      ),
      textColor: "text-gray-700",
    },
  ],
  [
    { id: "TS", content: <span>Typescript</span>, textColor: "text-gray-700" },
    { id: "TL", content: <span>TeamLead</span>, textColor: "text-gray-500" },
  ],
  [
    {
      id: "Tailwind",
      content: <span>Tailwindcss</span>,
      textColor: "text-gray-500",
    },
  ],
  [{ id: "Rocket", content: <span>🚀</span> }],
];

export default function ExperienceCloud() {
  return (
    <div className="space-y-4 opacity-50">
      {experienceRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap text-6xl font-bold">
          {row.map((exp) => (
            <div key={exp.id} className={`flex ${exp.textColor}`}>
              {exp.content}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
