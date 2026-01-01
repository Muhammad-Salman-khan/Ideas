import { Header } from "@/components/ui/Header/Header";
import Navbar from "@/components/ui/Header/Navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      about
    </>
  );
}
