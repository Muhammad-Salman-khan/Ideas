import CardIdeas from "@/components/ui/Card/Card";
import Card from "@/components/ui/Card/Card";
import { FetchIdeas } from "@/Api/useFetch";
import type { Data } from "@/Type";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { allIdeas } from "@/queryOptions/queryOptions";
import { useAuth } from "./../../Contexts/Auth";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";

export const Route = createFileRoute("/ideas/")({
  component: IdeasPage,
  beforeLoad: async () => {
    if (!auth.currentUser) {
      throw redirect({ to: "/login" });
    }
  },
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(allIdeas());
  },
});

function IdeasPage() {
  const { data } = useSuspenseQuery(allIdeas());
  // const { currentUser } = useAuth();
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
