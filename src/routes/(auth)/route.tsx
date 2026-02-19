import { Header } from "@/components/ui/Header/Header";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-3">
      <Header />
      <Outlet />
    </div>
  );
}
