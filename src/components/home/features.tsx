import Image from "next/image";

const Feature = () => {
  return (
    <section className="pt-6 mt-8 lg:py-12 lg:mt-8">
      <div className="px-6 mx-auto md:px-40 container-none">
        <div className="flex flex-col justify-center max-w-screen-md gap-3 mx-auto md:text-center">
          <h2 className="text-2xl md:text-4xl text-zinc-800">
            Never Been Faster
          </h2>
          <p className="max-w-screen-sm mx-auto text-sm text-muted-foreground md:text-base text-zinc-600">
            Focus on creating amazing designs, and let Logofork handle the final
            export. Package your logos in seconds, not hours!
          </p>
        </div>
        <div className="flex flex-col max-w-screen-lg mx-auto mt-4 lg:mt-12 lg:px-16">
          <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
            <div className="flex gap-4 min-[960px]:max-w-md">
              <div className="flex flex-col items-center justify-between gap-1">
                <span className="h-20 w-[3px] shrink-0 bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-70"></span>
                <span className="flex items-center justify-center font-mono text-lg border rounded-full text-zinc-600 border-zinc-200/60 size-10 shrink-0 bg-muted/50">
                  1
                </span>
                <span className="h-32 w-[3px] shrink-0 bg-gradient-to-b via-purple-500 from-transparent to-pink-500 opacity-70"></span>
              </div>
              <div className="flex flex-col justify-center gap-2 px-0 min-[960px]:px-4 min-[960px]:py-4">
                <h3 className="text-xl min-[960px]:text-2xl md:mt-3 text-zinc-800">
                  Upload Your Logo
                </h3>
                <p className="text-sm text-muted-foreground min-[960px]:text-base text-zinc-600">
                  Simply drag & drop, upload or paste your logo directly from
                  desktop or from your favorite design apps—no extra steps, no
                  hassle.
                </p>
              </div>
            </div>
            <Image
              src="https://framerusercontent.com/images/WhJKoCoBb8JP18c1ewVbQ8e1cI0.png?scale-down-to=2048"
              alt="Upload Your SVG Logo"
              width={800}
              height={450}
              priority
              quality={95}
              className="z-10 aspect-video w-full rounded-xl object-cover min-[960px]:max-h-56 min-[960px]:w-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
            <div className="flex gap-4 min-[960px]:max-w-md">
              <div className="relative flex flex-col items-center justify-between gap-1">
                <span className="h-20 w-[3px] shrink-0 bg-gradient-to-b from-pink-500 via-purple-500  to-transparent opacity-70"></span>
                <span className="flex items-center justify-center font-mono text-lg border rounded-full text-zinc-600 border-zinc-200/60 size-10 shrink-0 bg-muted/50">
                  2
                </span>
                <span className="h-32 w-[3px] shrink-0 bg-gradient-to-b from-transparent via-purple-500 to-pink-500 opacity-70"></span>
              </div>
              <div className="flex flex-col justify-center gap-1 px-0  min-[960px]:px-4 min-[960px]:py-4">
                <h3 className="text-xl min-[960px]:text-2xl md:mt-3 text-zinc-800">
                  Tailor Every Detail
                </h3>

                <p className="text-sm text-muted-foreground min-[960px]:text-base text-zinc-600">
                  Customize your export with precision—adjust background colors,
                  fine-tune padding, and choose the perfect file types for any
                  need.
                </p>
              </div>
            </div>

            <Image
              src="https://framerusercontent.com/images/7Xe6B89p84qK9zy87URsy2uhSc.png?scale-down-to=2048"
              alt="Customise Your Export"
              width={800}
              height={450}
              priority
              quality={95}
              className="z-10 max-h-56 w-full rounded-xl object-cover min-[960px]:aspect-video min-[960px]:w-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
            <div className="flex gap-4 min-[960px]:max-w-md">
              <div className="flex flex-col items-center justify-between gap-1">
                <span className="h-20 w-[3px] shrink-0 bg-gradient-to-b from-pink-500 via-indigo-500 opacity-70  to-transparent"></span>
                <span className="flex items-center justify-center font-mono text-lg border rounded-full text-zinc-600 border-zinc-200/60 size-10 shrink-0 bg-zinc-50">
                  3
                </span>
                <span className="h-32 w-[3px] shrink-0 bg-gradient-to-b  from-transparent lg:via-transparent via-indigo-500 to-indigo-500 lg:to-transparent opacity-70"></span>
              </div>
              <div className="flex flex-col justify-center px-0 gap-1 min-[960px]:px-4 min-[960px]:py-4">
                <h3 className="text-xl min-[960px]:text-2xl md:mt-3 text-zinc-800">
                  Wrap It Up
                </h3>

                <p className="text-sm text-muted-foreground min-[960px]:text-base text-zinc-600">
                  Download your freshly packaged logo files and instantly send
                  them to clients or use them in your projects. Fast, easy, and
                  professional!
                </p>
              </div>
            </div>
            <Image
              src="https://framerusercontent.com/images/ni4Hadh4Iod09JOZlK49OMp0vd4.png?scale-down-to=2048"
              alt="Save Time With Logofork"
              width={800}
              height={450}
              priority
              quality={95}
              className="z-10 max-h-56 w-full rounded-xl object-cover min-[960px]:aspect-video min-[960px]:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
