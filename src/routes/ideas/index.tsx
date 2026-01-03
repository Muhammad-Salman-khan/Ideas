import CardIdeas from "@/components/ui/Card/Card";
import Card from "@/components/ui/Card/Card";
import { FetchIdeas } from "@/hooks/useFetch";
import type { Data } from "@/Type";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";

const IdeasQueries = () =>
  queryOptions({
    queryKey: ["ideas"],
    queryFn: () => FetchIdeas(),
  });
export const Route = createFileRoute("/ideas/")({
  component: IdeasPage,
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(IdeasQueries());
  },
});

function IdeasPage() {
  const { data } = useSuspenseQuery(IdeasQueries());

  return (
    <>
      <div className="flex justify-center align-middle mt-12 items-center flex-col">
        {data?.map((e) => (
          <CardIdeas key={e.id} Data={e} />
        ))}
      </div>
    </>
  );
}
