"use client";
import { useEffect, useState } from "react";

export function TypewriterText() {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const text = `Hello, I'm Sebastian 👋`;
    const speed = 100;

    let i = 0;

    const startTyping = () => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, speed);
    };

    const initialTimeout = setTimeout(startTyping, 1000);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="whitespace-pre-wrap">
      {displayed}
      <span className="animate-pulse">|</span>
    </div>
  );
}
