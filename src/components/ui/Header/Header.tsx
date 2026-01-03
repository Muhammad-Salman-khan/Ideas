// import Logo from "../../../public/favicon.png";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/button";
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { useTheme } from "@/Contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import User from "../User/User";

const menuItems = [
  { name: "Get Started", href: "/ideas" },
  { name: "About", href: "/about" },
];
export const Header = () => {
  const { Theme, switchTheme }: any = useTheme();
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="sticky bg-background z-50 text-foreground top-0 max-w-full">
      <nav
        data-state={menuState && "active"}
        className="sticky  max-w-full px-2"
      >
        <div
          className={cn(
            "mx-auto  max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/80 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                to="/"
                aria-label="Idea Drop Home"
                className="group flex items-center gap-3 transition-all"
              >
                {/* Logo */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br  shadow-sm transition-transform duration-200 group-hover:scale-105">
                  <img
                    src="/favicon.png"
                    alt="Idea Drop Logo"
                    className=" dark:invert-100 object-cover"
                  />
                </div>

                {/* Brand Name */}
                <span className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-indigo-500">
                  Idea
                  <span className="font-bold text-indigo-500 group-hover:text-purple-600">
                    Drop
                  </span>
                </span>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-3 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground font-bold hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="flex justify-center align-middle items-center lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => switchTheme()}
                  className={cn(isScrolled && ``)}
                >
                  {Theme === "dark" ? <Sun /> : <Moon />}
                </Button>
                {false ? (
                  <div className="gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      className={cn(
                        isScrolled &&
                          "bg-primary text-primary-foreground font-bold"
                      )}
                    >
                      <Link className="font-bold" to="/">
                        <span>Login</span>
                      </Link>
                    </Button>
                    <Button size="sm" className={cn(isScrolled)}>
                      <Link className="font-bold" to="/">
                        <span>Sign Up</span>
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <User />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
