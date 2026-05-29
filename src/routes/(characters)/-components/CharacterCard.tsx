import { cn } from "@lib/utils";
import { Character } from "@lib/constants/characters";
import { Star } from "lucide-react";
import { useFavorite } from "@lib/hooks/useFavorite";

type CharacterCardProps = {
  character: Character;
  className?: string;
};

export const CharacterCard = ({ character, className }: CharacterCardProps) => {
  const { isFavorite, toggle } = useFavorite(character.id);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle();
  };

  return (
    <article
      className={cn(
        "relative isolate flex h-87.5 flex-col justify-end overflow-hidden rounded-2xl px-3 py-6 shadow-md shadow-zinc-950",
        className
      )}
    >
      <button
        onClick={handleFavorite}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        aria-pressed={isFavorite}
        className="absolute top-3 right-3 z-10 text-amber-200 hover:text-amber-100"
      >
        <Star className={`${isFavorite ? "fill-amber-200/80" : ""} text-amber-200/50`} size={20} />
      </button>
      <img
        src={character.image || undefined}
        alt={character.name}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-stone-900/20"></div>
      <h3 className="z-10 font-light tracking-wide">{character.name}</h3>
    </article>
  );
};
