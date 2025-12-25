import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import Logo from "../../../public/favicon.png";
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
                  Post once. Build smarter
                </h1>

                <p className="mt-8 text-pretty text-lg text-muted-foreground">
                  IdeaDrop is a place to share ideas, explore new perspectives,
                  and turn thoughts into action. Post your ideas, get feedback,
                  and move from concept to execution faster.
                </p>

                <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                  <Button
                    size="lg"
                    className="px-6 text-base"
                    render={<Link to="/ideas/new" />}
                    nativeButton={false}
                  >
                    Start Building
                  </Button>

                  <Button
                    size="lg"
                    variant="ghost"
                    className="px-6 text-base border-2 border-black"
                    render={<Link to="/" />}
                    nativeButton={false}
                  >
                    See More
                  </Button>
                </div>
              </div>

              {/* RIGHT: LOGO */}
              <div className="relative mx-auto flex w-full justify-center lg:w-1/2">
                <div className="relative aspect-square w-56 sm:w-72 lg:w-96">
                  <img
                    src={Logo}
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
