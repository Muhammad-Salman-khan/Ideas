import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/ui/HeroSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Idea-Drop ",
      },
    ],
  }),
  component: App,
});

function App() {
  return (
    <>
      <HeroSection />
    </>
  );
}
