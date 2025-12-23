import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ideas/$ideaid/")({
  component: IdeaPageDetail,
});

function IdeaPageDetail() {
  return <div>Hello "/ideas/$ideaid/"!</div>;
}
