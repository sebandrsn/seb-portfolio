import ExperienceCloud from "@/components/ExperienceCloud";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <div className="relative min-h-screen cursor-default">
        <ExperienceCloud />
        <h1 className="absolute right-0 bottom-2 bg-gradient-to-r from-pink-600 via-indigo-500 to-teal-300 bg-clip-text text-6xl font-bold text-transparent md:text-9xl">
          sebastian
        </h1>
        <div className="flex justify-center">
          <MdOutlineKeyboardDoubleArrowDown className="absolute bottom-2 animate-bounce text-6xl text-gray-500 opacity-50" />
        </div>
      </div>
      <div className="relative flex min-h-screen flex-col">
        <div>bb</div>
      </div>
    </div>
  );
}
