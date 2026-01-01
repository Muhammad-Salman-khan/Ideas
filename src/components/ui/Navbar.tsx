import { Button } from "./button";
import { Separator } from "./separator";
import { SidebarMenuButton, SidebarTrigger } from "./sidebar";
import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ChevronDown, Moon, SearchIcon, Sun } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./input-group";
import { Kbd } from "./kbd";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "@/Contexts/ThemeContext";
import NavUser from "./NavUser";

const Navbar = () => {
  const { Theme, switchTheme }: any = useTheme();
  const [Open, setOpen] = useState<any>(false);
  const [value, setValue] = useState<any>("");
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
        <SidebarTrigger className="-ml-4" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="flex-1 w cursor-text" onClick={() => setOpen(true)}>
          <InputGroup className="">
            <InputGroupInput
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search or press Ctrl+K..."
            />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex items-center md:gap-2 ">
          <Button variant="ghost" size="sm" onClick={() => switchTheme()}>
            {Theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button className="">Post Idea</Button>
          <NavUser />
        </div>
      </div>
      <CommandDialog open={Open} onOpenChange={setOpen}>
        <CommandInput
          value={value}
          onValueChange={setValue}
          placeholder="Search Ideas"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem
              onSelect={() => {
                setOpen(false);
              }}
            >
              <span>Hello</span>
              <span className="text-xs text-muted-foreground ml-auto">
                Hello
              </span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
};

export default Navbar;
