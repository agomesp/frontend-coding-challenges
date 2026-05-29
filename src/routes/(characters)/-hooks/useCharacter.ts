import { characterQueryOptions } from "@lib/api/characterQueries";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useCharacter = (id: string) => {
  const { data: character, ...rest } = useSuspenseQuery(characterQueryOptions(id));
  return { character, ...rest };
};
