import { Button } from "@/components/button";
import { Link } from "@tanstack/react-router";
import { TextLoop } from "../../text-loop";
export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center">
              {/* LEFT: TEXT */}
              <div className="max-w-lg text-center lg:w-1/2 lg:text-left">
                <h1 className="mt-8 text-balance text-5xl font-extrabold md:text-6xl xl:text-7xl">
                  Drop Ideas
                </h1>{" "}
                <TextLoop
                  className="text-primary text-balance text-5xl font-extrabold "
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 19,
                    mass: 1.2,
                  }}
                  interval={2.5}
                  variants={{
                    initial: {
                      y: -1 * 20,
                      rotateX: -1 * 90,
                      opacity: 0,
                      filter: "blur(10px)",
                    },
                    animate: {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                    },
                    exit: {
                      y: -1 * 20,
                      rotateX: -1 * 90,
                      opacity: 0,
                      filter: "blur(4px)",
                    },
                  }}
                >
                  <span>Debate Them</span>
                  <span>Share Ideas</span>
                </TextLoop>
                <p className="mt-8 text-pretty text-lg text-muted-foreground">
                  IdeaDrop is a place to share ideas, explore new perspectives,
                  and turn thoughts into action. Post your ideas, get feedback,
                  and move from concept to execution faster.
                </p>
                <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                  <Link to="/ideas">
                    <Button size="lg" className="px-6 text-base">
                      Start Building
                    </Button>
                  </Link>

                  <Link to="/">
                    <Button
                      size="lg"
                      variant="ghost"
                      className="px-6 text-base border-2 dark:border-white border-black"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>

              {/* RIGHT: LOGO */}
              <div className="relative mx-auto flex w-full justify-center lg:w-1/2">
                <div className="relative aspect-square w-56 sm:w-72 lg:w-96">
                  <img
                    src="/public/favicon.png"
                    alt="Idea Drop Logo"
                    className="
                    h-full
                    w-max
                    // dark:invert-100
                    object-cover
                    rounded-full
       "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
