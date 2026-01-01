import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  BadgeCheck,
  Bell,
  ChevronsDown,
  ChevronsUp,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const LogoSide = () => {
  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className=" text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Avatar>
                    <AvatarImage
                      className="dark:invert-100"
                      src="/favicon.png"
                    />
                    <AvatarFallback>Idea Drop</AvatarFallback>
                  </Avatar>
                </div>
              </SidebarMenuButton>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
};

export default LogoSide;
