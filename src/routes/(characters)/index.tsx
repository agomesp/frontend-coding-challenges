import { createFileRoute } from "@tanstack/react-router";
import { CharactersGrid } from "./-components/CharactersGrid";
import { characterFilters, CharacterFilterType } from "@lib/constants/filters";
import { FilterBar } from "./-components/FilterBar";

type CharacterSearch = { filter?: CharacterFilterType };

export const Route = createFileRoute("/(characters)/")({
  validateSearch: (search: Record<string, unknown>): CharacterSearch =>
    characterFilters.includes(search.filter as CharacterFilterType)
      ? { filter: search.filter as CharacterFilterType }
      : {},
  component: CharactersIndexView,
});

function CharactersIndexView() {
  const { filter } = Route.useSearch();
  return (
    <>
      <FilterBar active={filter} />
      <CharactersGrid filter={filter} />
    </>
  );
}
