import { FetchData } from "@/hooks/useFetch";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ideas/$ideaid/")({
  component: IdeaPageDetail,

  loader: ({ params }) => FetchData(params.ideaid),
});

function IdeaPageDetail() {
  const data = Route.useLoaderData();
  console.log(data);

  return (
    <div>
      Hello "/ideas/$ideaid/ "!
      <p>{data.title}</p>
    </div>
  );
}
