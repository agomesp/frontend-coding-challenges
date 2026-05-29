import { queryOptions } from "@tanstack/react-query";
import { fetchCharacter } from "./characters";

export const characterQueryOptions = (id: string) => {
  return queryOptions({
    queryKey: ["character", id],
    queryFn: () => fetchCharacter(id),
    staleTime: Infinity,
  });
};
