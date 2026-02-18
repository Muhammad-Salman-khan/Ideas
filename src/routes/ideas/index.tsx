import CardIdeas from "@/components/ui/Card/Card";
import Card from "@/components/ui/Card/Card";
import { FetchIdeas } from "@/Api/useFetch";
import type { Data } from "@/Type";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { allIdeas } from "@/queryOptions/queryOptions";

export const Route = createFileRoute("/ideas/")({
  component: IdeasPage,
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(allIdeas());
  },
});

function IdeasPage() {
  const { data } = useSuspenseQuery(allIdeas());
  const NewPosts =
    data.length > 0 ?
      [...data].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
    : undefined;
  return (
    <>
      <div className="flex justify-center align-middle mt-12 items-center flex-col">
        {NewPosts?.length > 0 ?
          NewPosts?.map((e) => <CardIdeas key={e.documentId} Data={e} />)
        : "No Post Aviable"}
      </div>
    </>
  );
}
