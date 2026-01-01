import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import { Header } from "@/components/ui/Header/Header";

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
