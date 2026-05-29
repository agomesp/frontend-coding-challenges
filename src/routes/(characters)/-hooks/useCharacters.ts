import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "@lib/api/characters";
import { useAppStore } from "@lib/hooks/useAppStore";
import { Character } from "@lib/constants/characters";
import { CharacterFilterType } from "@lib/constants/filters";

export const useCharacters = (filter?: CharacterFilterType) => {
  const preferredHouse = useAppStore((s) => s.preferredHouse);
  const favorites = useAppStore((s) => s.favorites);

  const { data, ...rest } = useQuery<Character[]>({
    queryKey: ["characters", preferredHouse],
    queryFn: () => fetchCharacters(preferredHouse),
    staleTime: Infinity,
  });

  const characters = (data ?? [])
    .filter((c) => c.image)
    .filter((c) => {
      if (filter === "students") return c.hogwartsStudent;
      if (filter === "staff") return c.hogwartsStaff;
      if (filter === "favorite") return favorites.includes(c.id);
      return true;
    });

  return {
    characters,
    ...rest,
  };
};
