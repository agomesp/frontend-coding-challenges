import { useAppStore } from "./useAppStore";

export const useFavorite = (id: string) => {
  const isFavorite = useAppStore((s) => s.favorites.includes(id));
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);
  return { isFavorite, toggle: () => toggleFavorite(id) };
};
