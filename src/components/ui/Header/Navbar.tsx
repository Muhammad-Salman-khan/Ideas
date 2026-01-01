import { Button } from "../../button";
import { Separator } from "../../separator";
import { SidebarTrigger } from "../../sidebar";
import { Moon, Sun } from "lucide-react";

import { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "@/Contexts/ThemeContext";
import NavUser from "../User/NavUser";
import SearchInput from "../Search/SearchInput";
import CommandBox from "../Search/CommandBox";

const Navbar = () => {
  const { Theme, switchTheme }: any = useTheme();
  const [Open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    return addEventListener("keydown", down);
  }, []);
  return (
    <header className="flex  shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 p-3 lg:gap-2 lg:px-2">
        <SidebarTrigger className="-ml-4 lg:m-0" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <SearchInput Value={value} ChangeValue={setOpen} SetValue={setValue} />

        <div className="flex items-center md:gap-2 ">
          <Button variant="ghost" size="sm" onClick={() => switchTheme()}>
            {Theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button className="">Post Idea</Button>
          <NavUser />
        </div>
      </div>
      <CommandBox
        Value={value}
        Open={Open}
        ChangeValue={setOpen}
        SetValue={setValue}
      />
    </header>
  );
};

export default Navbar;
