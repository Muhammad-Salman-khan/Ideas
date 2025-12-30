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
        <Outlet />
        <Toaster expand={true} richColors position="top-center" />
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
