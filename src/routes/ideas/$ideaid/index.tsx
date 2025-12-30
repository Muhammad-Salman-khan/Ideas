import { Button } from "@/components/ui/button";
import DetailCard from "@/components/ui/DetailCard";
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
    <>
      <DetailCard data={data} />
    </>
  );
}
