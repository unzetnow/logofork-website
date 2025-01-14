"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { ExternalLink } from "lucide-react";

const messages = [
  "Hope this helps you 🎨",
  "Export logos in seconds ",
  "Need help with branding? 💡",
  "Convert SVGs instantly 🔄",
  "Made with ❤️ for designers",
  "Let's make something cool",
  "Transform your logos here 🎭",
  "Yea Yea, I founded Unzet",
];

const WELCOME_MESSAGE = "Welcome to Logofork ✨";

const Floating = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [recentMessages, setRecentMessages] = useState<string[]>([]);

  const getRandomMessage = () => {
    const availableMessages = messages.filter(
      (msg) => !recentMessages.includes(msg)
    );
    const message =
      availableMessages[Math.floor(Math.random() * availableMessages.length)] ||
      messages[Math.floor(Math.random() * messages.length)];

    setRecentMessages((prev) => {
      const updated = [message, ...prev].slice(0, 4);
      return updated;
    });

    return message;
  };

  useEffect(() => {
    let welcomeTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;

    if (!isHovered && isFirstLoad) {
      welcomeTimer = setTimeout(() => {
        setCurrentMessage(WELCOME_MESSAGE);
        setIsVisible(true);

        hideTimer = setTimeout(() => {
          if (!isHovered) {
            setIsVisible(false);
            setIsFirstLoad(false);
          }
        }, 2500);
      }, 1000);
    }

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(hideTimer);
    };
  }, [isHovered, isFirstLoad]);

  /* eslint-disable react-hooks/exhaustive-deps */
  const startRandomMessages = useCallback(() => {
    let hideTimer: NodeJS.Timeout;
    let messageInterval: NodeJS.Timeout;

    const showRandomMessage = () => {
      if (!isHovered) {
        setCurrentMessage(getRandomMessage());
        setIsVisible(true);

        if (hideTimer) clearTimeout(hideTimer);
        hideTimer = setTimeout(() => {
          if (!isHovered) {
            setIsVisible(false);
          }
        }, 2500);
      }
    };

    const messageTimer = setTimeout(() => {
      if (!isHovered) {
        showRandomMessage();

        messageInterval = setInterval(() => {
          if (!isHovered) {
            showRandomMessage();
          }
        }, 13000);
      }
    }, 10500);

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(hideTimer);
      clearInterval(messageInterval);
    };
  }, [isHovered]);
  /* eslint-enable react-hooks/exhaustive-deps */

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    if (!isFirstLoad && !isHovered) {
      cleanup = startRandomMessages();
    }

    return () => {
      if (cleanup) cleanup();
    };
  }, [isHovered, isFirstLoad, startRandomMessages]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCurrentMessage("Click to work with me 👋");
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsVisible(false);

    if (!isFirstLoad) {
      startRandomMessages();
    }
  };

  return (
    <div className="fixed bottom-7 right-7 z-50">
      <div className="relative">
        <div
          className={`absolute -top-11 right-0 rounded-lg bg-white px-3 py-1.5 border max-w-[220px] whitespace-nowrap transition-opacity duration-300 mr-4 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute -bottom-[5px] rounded-t-sm rounded-l-sm right-3 h-3 w-3 rotate-45 bg-white border-b border-r"></div>
          <p className="text-sm font-medium text-zinc-800">{currentMessage}</p>
        </div>

        <Link
          href="https://reserban.com"
          rel="nofollow"
          target="_blank"
          className="block w-[72px] h-[72px] rounded-xl border bg-white relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute top-1 right-1 size-3.5 rounded-full bg-white/80 backdrop-blur-sm p-0.5">
            <ExternalLink className="size-full text-zinc-600" />
          </div>
          <Image
            src="https://framerusercontent.com/images/gNuoh3a55uuwTgMsuPufqJqBDc.png?scale-down-to=2048"
            alt="Reserban"
            width={64}
            height={64}
            className="h-full w-full object-cover scale-x-[-1]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Floating;
