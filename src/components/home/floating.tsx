"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

const messages = [
  "Welcome to Logofork ✨",
  "Hope this helps you 🎨",
  "Export logos in seconds ",
  "Need help with branding? 💡",
  "Convert SVGs instantly 🔄",
  "Made with ❤️ for designers",
  "Let's make something cool",
  "Transform your logos here 🎭",
  "Yea Yea, I founded Unzet",
];

const Floating = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const showBubble = () => {
      if (!isHovered) {
        setCurrentMessage(
          messages[Math.floor(Math.random() * messages.length)]
        );
        setIsVisible(true);
        setTimeout(() => !isHovered && setIsVisible(false), 2500);
      }
    };

    const interval = setInterval(showBubble, 8000);

    const initialTimeout = setTimeout(showBubble, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsVisible(true);
    setCurrentMessage("Click to work with me 👋");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-7 right-7 z-50">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`absolute -top-9 right-0 rounded-lg bg-white px-3 py-1.5 border max-w-[200px] whitespace-nowrap transition-opacity duration-300 mr-4 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute -bottom-[5px] rounded-t-sm rounded-l-sm right-3 h-3 w-3 rotate-45 bg-white border-b border-r"></div>
          <p className="text-[10px] font-medium text-zinc-800">
            {currentMessage}
          </p>
        </div>

        <Link
          href="https://reserban.com"
          rel="nofollow"
          target="_blank"
          className="block h-16 w-16 overflow-hidden -mr-2 md:-mr-1 rounded-xl -mb-2.5 md:-mb-1 border bg-white relative"
        >
          <div className="absolute top-1 right-1 size-3.5 rounded-full bg-white/80 backdrop-blur-sm p-0.5">
            <ExternalLink className="size-full text-zinc-600" />
          </div>
          <Image
            src="https://framerusercontent.com/images/gNuoh3a55uuwTgMsuPufqJqBDc.png?scale-down-to=2048"
            alt="Reserban"
            width={64}
            height={64}
            className="h-full w-full object-cover scale-x-[-1] pl-0.5"
          />
        </Link>
      </div>
    </div>
  );
};

export default Floating;
