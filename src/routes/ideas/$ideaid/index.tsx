import { Button } from "@/components/ui/button";
import { FetchData } from "@/hooks/useFetch";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
const ideaQueryOptions = (ideaid: string | number) =>
  queryOptions({
    queryKey: ["ideas", ideaid],
    queryFn: () => FetchData(ideaid),
  });
export const Route = createFileRoute("/ideas/$ideaid/")({
  component: IdeaPageDetail,
  loader: async ({ params, context: { queryClient } }) => {
    return queryClient.ensureQueryData(ideaQueryOptions(params.ideaid));
  },
});

function IdeaPageDetail() {
  const { ideaid } = Route.useParams();
  const { data } = useSuspenseQuery(ideaQueryOptions(ideaid));

  return (
    <div className="space-y-4 p-6">
      <Link to="/ideas">
        <Button>Back</Button>
      </Link>
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-sm text-gray-500">ID: {data.id}</p>
      <p className="text-gray-700">{data.summary}</p>
      <div className="prose max-w-none">{data.description}</div>
      {data.tags && (
        <div className="flex gap-2">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full text-accent  bg-primary px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
