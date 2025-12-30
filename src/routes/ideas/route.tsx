import { AppSideBar } from "@/components/ui/AppSideBar";
import { Header } from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
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
