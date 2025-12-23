import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ideas/new/")({
  component: NewIdea,
});

function NewIdea() {
  return <div>Hello "/ideas/newIdea/newIdea"!</div>;
}
