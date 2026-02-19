import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { auth } from "@/lib/firebase";
import { useNavigate } from "@tanstack/react-router";
import {
  BadgeCheck,
  Bell,
  ChevronsDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

const User = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const LoggedOut = (): void => {
    auth.signOut();
    toast.success("User LoggedOut Successfully");
    navigate({ to: "/" });
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-4">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage
              src={
                auth.currentUser ?
                  auth.currentUser?.photoURL
                : "https://picsum.photos/id/64/64/64"
              }
            />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">
              {auth.currentUser?.displayName || "Guest"}
            </span>
            <span className="truncate text-xs">
              {" "}
              {auth.currentUser?.displayName || "Guest"}
            </span>
          </div>
          <ChevronsDown className="ml-auto size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          side={isMobile ? "bottom" : "top"}
          align="center"
          sideOffset={4}
        >
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center  gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={
                    auth.currentUser ?
                      auth.currentUser?.photoURL
                    : "https://picsum.photos/id/64/64/64"
                  }
                />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {" "}
                  {auth.currentUser?.displayName || "Guest"}
                </span>
                <span className="truncate text-xs">
                  {" "}
                  {auth.currentUser?.email || "Guest@gmail.com"}
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
    </>
  );
};

export default User;
