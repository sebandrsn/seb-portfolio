"use client";
import { useEffect, useState } from "react";

export function TypewriterText() {
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const pauseBeforeErase = 1000;
  const pauseBeforeTyping = 500;

  const [displayed, setDisplayed] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const messages = [
      "Hello, I'm Sebastian 👋",
      "I build scalable web apps using C#, .NET, and Next.js.",
      "Frontend development with React, Next.js, and TypeScript is my daily bread.",
      "Clean, maintainable code — powered by Git, Agile practices, and a passion for quality.",
      "From databases to UIs — fullstack with .NET on the backend and modern JavaScript frameworks on the frontend.",
      "Passionate about building robust systems with clean code, automated testing, and reliable CI/CD pipelines.",
      "Cloud-native mindset: Azure, AWS, and edge deployments with Fastly.",
      "Östersund-based developer with a passion for modern tech and clean code.",
    ];

    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayed.length < messages[messageIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(messages[messageIndex].slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseBeforeErase);
      }
    } else if (displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(messages[messageIndex].slice(0, displayed.length - 1));
      }, erasingSpeed);
    } else {
      timeout = setTimeout(() => {
        setMessageIndex((prev) => (prev + 1) % messages.length);
        setIsTyping(true);
      }, pauseBeforeTyping);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isTyping, messageIndex]);

  return (
    <div className="whitespace-pre-wrap">
      {displayed}
      <span className="animate-pulse">|</span>
    </div>
  );
}
