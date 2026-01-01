import { AppSideBar } from "@/components/ui/Sidebar/AppSideBar";
import { Button } from "@/components/button";
import Navbar from "@/components/ui/Header/Navbar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/sidebar";
import { createFileRoute, Outlet, useCanGoBack } from "@tanstack/react-router";
import { Toaster } from "sonner";

export const Route = createFileRoute("/ideas")({
  component: RouteComponent,
  beforeLoad: () => {},
});

function RouteComponent() {
  return (
    <>
      <SidebarProvider>
        <AppSideBar />
        <div className="flex w-full">
          <SidebarInset className="flex-1">
            <main className="flex-1  p-2 overflow-auto">
              <Navbar />
              <Outlet />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
