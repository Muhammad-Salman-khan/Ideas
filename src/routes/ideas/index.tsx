import Card from "@/components/ui/Card";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/ideas/")({
  component: IdeasPage,
});

function IdeasPage() {
  return (
    <>
      <div className="flex justify-center align-middle mt-12 items-center flex-col">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
