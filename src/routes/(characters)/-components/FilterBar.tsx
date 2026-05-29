import { useNavigate } from "@tanstack/react-router";
import { Button } from "@lib/components/Button";
import { characterFilters, CharacterFilterType } from "@lib/constants/filters";

const labels: Record<CharacterFilterType, string> = {
  students: "Students",
  staff: "Staff",
  favorite: "Favorite",
};

export const FilterBar = ({ active }: { active?: CharacterFilterType }) => {
  const navigate = useNavigate({ from: "/" });

  return (
    <div className="flex justify-center font-mono">
      <div className="flex gap-2 rounded-xl bg-amber-900/15 p-1">
        <Button active={!active} onClick={() => navigate({ search: {} })}>
          All Characters
        </Button>
        {characterFilters.map((f) => (
          <Button key={f} active={active === f} onClick={() => navigate({ search: { filter: f } })}>
            {labels[f]}
          </Button>
        ))}
      </div>
    </div>
  );
};
