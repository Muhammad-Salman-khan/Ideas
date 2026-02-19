import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../../dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../../sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../../avatar";
import {
  BadgeCheck,
  Bell,
  ChevronsDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

const NavUser = () => {
  const { isMobile } = useSidebar();
  const navigate = useNavigate();
  const LoggedOut = (): void => {
    auth.signOut();
    toast.success("User LoggedOut Successfully");
    navigate({ to: "/" });
  };
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
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={auth.currentUser?.photoURL} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {auth.currentUser?.displayName ?
                      auth.currentUser?.displayName
                    : "Guest"}
                  </span>
                  <span className="truncate text-xs">
                    {" "}
                    {auth.currentUser?.displayName ?
                      auth.currentUser?.displayName
                    : "Guest"}
                  </span>
                </div>
                <ChevronsDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={auth.currentUser?.photoURL} />
                    <AvatarFallback className="rounded-lg">
                      {" "}
                      {auth.currentUser?.displayName ?
                        auth.currentUser?.displayName
                      : "Guest"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">
                      {" "}
                      {auth.currentUser?.displayName ?
                        auth.currentUser?.displayName
                      : "Guest"}
                    </span>
                    <span className="truncate text-xs">
                      {" "}
                      {auth.currentUser?.email ?
                        auth.currentUser?.email
                      : "Guest@gmail.com"}
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Sparkles />
                  Upgrade to Pro
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <BadgeCheck />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell />
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={LoggedOut}>
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
};

export default NavUser;
