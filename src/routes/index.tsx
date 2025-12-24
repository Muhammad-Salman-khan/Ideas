import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/ui/HeroSection";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <HeroSection />
    </>
  );
}
