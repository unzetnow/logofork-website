"use client";

import { Group } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-6 pt-8 overflow-hidden lg:pt-4">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[25%]  sm:-translate-y-[20%] md:-translate-y-[60%] -z-10 mx-auto size-[500px] sm:size-[700px] md:size-[900px] lg:size-[1300px] rounded-full border p-8 sm:p-14 md:p-16 lg:p-32 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)]">
        <div className="p-12 border rounded-full sm:p-14 md:p-16 lg:p-32 size-full">
          <div className="border rounded-full size-full"></div>
        </div>
      </div>

      <div className="mx-auto md:px-20 lg:px-40 container-none">
        <div className="flex flex-col gap-3 md:gap-5">
          <div className="flex flex-col gap-3 px-4 md-0 md:gap-5">
            <div className="flex justify-center mb-1 lg:hidden">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 text-zinc-800">
                Available on Desktop
              </span>
            </div>
            <h1 className="max-w-screen-lg mx-auto text-3xl font-medium text-center text-zinc-800 sm:text-3xl md:text-5xl lg:text-6xl text-balance">
              Export Your Branding Projects With Ease
            </h1>
            <p className="max-w-screen-sm px-4 mx-auto text-sm text-center text-zinc-600 text-muted-foreground sm:text-base md:text-lg">
              Drag & drop, paste, or upload your SVG logos and convert them to
              every file format you need - delivered in seconds!
            </p>
            <div className="flex-col items-center justify-center hidden gap-3 pt-3 pb-8 lg:flex md:pb-8">
              <Button
                size="default"
                className="absolute px-4 py-2 mt-6 text-xs font-medium text-white transition-opacity rounded-md sm:mt-4 md:px-6 md:py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-rotate sm:text-sm md:text-base hover:opacity-90"
                onClick={() =>
                  (window.location.href = "https://app.logofork.com")
                }
                data-umami-event="Hero Export Package Click"
              >
                Export Your Package{" "}
                <Group className="ml-0.5 size-3 sm:size-3.5 md:size-4" />
              </Button>
            </div>
          </div>

          <div className="relative px-3 mx-auto mt-6 max-w-screen-2xl md:mt-10">
            <Image
              src="https://framerusercontent.com/images/1wtoc4lqo3tq8PUE6iAJg4MAW0.png?scale-down-to=2048"
              alt="Logofork Preview"
              width={1920}
              height={1080}
              className="object-cover w-full h-full -mb-8 rounded-lg md:rounded-xl grayscale"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 w-full h-16 mt-2 translate-y-20 bg-white border-t lg:translate-y-10 md:flex md:translate-y-10 border-zinc-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
