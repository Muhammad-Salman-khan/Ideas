import { Button } from "@/components/button";
import DetailCard from "@/components/ui/DetailCard/DetailCard";
import { FetchData } from "@/Api/useFetch";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ideaDetail } from "@/queryOptions/queryOptions";

export const Route = createFileRoute("/ideas/$ideaid/")({
  component: IdeaPageDetail,
  loader: async ({ params, context: { queryClient } }) => {
    return queryClient.ensureQueryData(ideaDetail(params.ideaid));
  },
});

function IdeaPageDetail() {
  const { ideaid } = Route.useParams();
  const { data } = useSuspenseQuery(ideaDetail(ideaid));

  return (
    <>
      <DetailCard data={data} />
    </>
  );
}
