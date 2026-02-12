import { FetchData, FetchIdeas } from "@/Api/useFetch";
import { queryOptions } from "@tanstack/react-query";
export const allIdeas = () =>
  queryOptions({
    queryKey: ["ideas"],
    queryFn: () => FetchIdeas(),
  });

export const editIdeas = (id: string | number) =>
  queryOptions({
    queryKey: ["ideas", id],
    queryFn: () => FetchData(id),
  });

export const ideaDetail = (id: string | number) =>
  queryOptions({
    queryKey: ["ideas", id],
    queryFn: () => FetchData(id),
  });
