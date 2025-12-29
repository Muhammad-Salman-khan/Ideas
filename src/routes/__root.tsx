import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Toaster } from "sonner";
import { TanStackDevtools } from "@tanstack/react-devtools";

import { Header } from "../components/ui/Header";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";

import type { QueryClient } from "@tanstack/react-query";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSideBar } from "@/components/ui/AppSideBar";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    title: "Ideas Hub – Discover, Share & Build Startup Ideas",
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      {
        name: "description",
        content:
          "Ideas Hub is a platform to discover, share, and validate startup ideas, side hustles, and business concepts. Learn from real ideas and build smarter.",
      },

      {
        name: "robots",
        content: "index, follow",
      },
    ],
  }),
  component: () => (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <HeadContent />

        <SidebarProvider>
          <div className="flex w-full">
            <AppSideBar />
            <SidebarInset className="flex-1">
              <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger />
                <Header />
              </header>

              <main className="flex-1 p-4 overflow-auto">
                <Outlet />
              </main>
            </SidebarInset>
          </div>

          <Toaster expand={true} richColors position="top-center" />
        </SidebarProvider>

        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
      </div>
    </>
  ),
});
