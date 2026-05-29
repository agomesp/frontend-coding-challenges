import { characterQueryOptions } from "@lib/api/characterQueries";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { useCharacter } from "./-hooks/useCharacter";
import { CharacterDetail } from "./-components/CharacterDetail";

export const Route = createFileRoute("/(characters)/$characterId")({
  loader: async ({ context: { queryClient }, params: { characterId } }) => {
    const character = await queryClient.ensureQueryData(characterQueryOptions(characterId));
    if (!character) throw notFound();
    return character;
  },
  component: CharacterDetailView,
  notFoundComponent: () => (
    <div className="flex flex-col items-center gap-2 py-20 text-center">
      <p className="text-lg text-amber-200/60">Character not found.</p>
    </div>
  ),
});

function CharacterDetailView() {
  const { characterId } = Route.useParams();
  const { character } = useCharacter(characterId);
  return character && <CharacterDetail character={character} />;
}
