import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/sidebar";
import { Link } from "@tanstack/react-router";
import NavUser from "../User/NavUser";
import LogoSide from "../Logo/LogoSide";

// Menu items.
const items = [
  {
    title: "Home",
    to: "/ideas",
    icon: Home,
  },
  {
    title: "Inbox",
    to: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    to: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    to: "#",
    icon: Search,
  },
  {
    title: "Settings",
    to: "#",
    icon: Settings,
  },
];

export function AppSideBar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1">
          <div className="flex items-center justify-center rounded-lg  text-sidebar-primary-foreground">
            <Link to="/">
              <LogoSide />
            </Link>
          </div>
          <Link to="/">
            <span className="font-bold tracking-tight group-data-[collapsible=icon]:hidden">
              IDEA
            </span>
            <span className="font-bold text-primary tracking-tight group-data-[collapsible=icon]:hidden">
              Drop
            </span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.to}>
                      <item.icon />
                      <span className="font-bold">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>{" "}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <NavUser />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
