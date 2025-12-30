import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/ui/HeroSection";
import { Header } from "@/components/ui/Header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Idea-Drop - Share Your ideas",
      },
    ],
  }),
  component: App,
});

function App() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}
