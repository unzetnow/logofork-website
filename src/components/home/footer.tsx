"use client";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <section className="pt-8 md:pt-4">
      <div className="mx-auto container-none">
        <div className="relative flex items-center justify-center px-8 py-20 overflow-hidden text-center rounded-2xl md:py-32">
          <svg
            className="absolute inset-0 w-full h-full pl-5 -mt-12 -z-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1744 480"
            fill="none"
          >
            <g style={{ mixBlendMode: "luminosity" }} opacity="0.5">
              <circle
                opacity="0.6"
                cx="861.225"
                cy="247.836"
                r="397.237"
                stroke="#00000050"
                strokeWidth="1.29295"
              />
              <circle
                opacity="0.5"
                cx="861.226"
                cy="247.836"
                r="521.884"
                stroke="#00000050"
                strokeWidth="1.29295"
              />
              <circle
                opacity="0.4"
                cx="861.225"
                cy="247.835"
                r="646.532"
                stroke="#00000050"
                strokeWidth="1.29295"
              />
              <circle
                opacity="0.3"
                cx="861.225"
                cy="247.836"
                r="771.179"
                stroke="#00000050"
                strokeWidth="1.29295"
              />
              <circle
                opacity="0.2"
                cx="861.225"
                cy="247.836"
                r="895.826"
                stroke="#00000050"
                strokeWidth="1.29295"
              />
              <circle
                opacity="0.15"
                cx="861.225"
                cy="247.836"
                r="1020.473"
                stroke="#00000050"
                strokeWidth="1.29295"
              />
              <circle
                opacity="0.1"
                cx="861.225"
                cy="247.836"
                r="1145.12"
                stroke="#00000050"
                strokeWidth="1.29295"
              />
              <circle
                opacity="0.1"
                cx="862.695"
                cy="238.041"
                r="1270.161"
                stroke="#00000050"
                strokeWidth="1.40477"
              />
              <circle
                opacity="0.1"
                cx="872"
                cy="240"
                r="1395.243"
                stroke="#00000050"
                strokeWidth="1.51333"
              />
            </g>
          </svg>
          <div className="relative max-w-screen-sm mx-auto mb-6">
            <h1 className="mb-4 -mt-8 text-3xl font-normal text-balance md:text-4xl text-zinc-800">
              Be A Part Of Logofork
            </h1>
            <p className="text-muted-foreground md:text-lg text-zinc-600">
              Use the app, export packages and share your feedback. Let us know
              how we can improve and help us shape the path forward.
            </p>
            <div className="flex flex-row justify-center gap-3 mt-6 sm:flex-row">
              <Button
                size="default"
                className="px-4 py-2 text-xs font-medium text-white transition-opacity rounded-md md:px-6 md:py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-rotate sm:text-sm md:text-base hover:opacity-90"
                onClick={() =>
                  window.open("https://discord.gg/htrNgSgY", "_blank")
                }
                data-umami-event="Join Discord"
              >
                Join Discord
              </Button>
              <Button
                size="default"
                variant="outline"
                className="hidden px-4 py-2 text-xs font-medium transition-opacity rounded-md lg:flex md:px-6 md:py-3 sm:text-sm md:text-base hover:opacity-80 bg-zinc-200/70"
                onClick={() =>
                  (window.location.href = "https://app.logofork.com")
                }
                data-umami-event="Launch App"
              >
                Launch App
              </Button>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative z-10 w-full mb-8 -mt-7 lg:mb-0">
        <div className="px-4 mx-auto -mb-2 container-none sm:px-6">
          <div className="flex flex-col items-center justify-between gap-1 text-sm sm:text-md md:flex-row">
            <div>
              <a
                href="https://unzet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all cursor-pointer hover:opacity-80"
                data-umami-event="Visit Unzet"
              >
                Unzet
              </a>{" "}
              built it © 2025
            </div>
            <div>
              <a
                href="mailto:logofork@unzet.com"
                className="transition-all cursor-pointer hover:opacity-80"
                data-umami-event="Contact Email Click"
              >
                logofork@unzet.com
              </a>
            </div>
          </div>
        </div>
      </footer>{" "}
    </section>
  );
};

export default Footer;
