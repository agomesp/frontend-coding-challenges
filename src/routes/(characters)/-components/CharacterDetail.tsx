import { Character } from "@lib/constants/characters";
import { CharacterCard } from "./CharacterCard";
import { InfoSection } from "@lib/components/InfoSection";
import { formatDate } from "@lib/utils";
import { User, Sparkles, School, Book } from "@lib/components/Icons";

export const CharacterDetail = ({ character }: { character: Character }) => {
  return (
    <div className="container mx-auto mt-14 flex max-w-4xl justify-center gap-4">
      <div className="flex w-3xs flex-col gap-3.5">
        <CharacterCard character={character} />
        <span className="text-base text-amber-50/30">
          Also known as: {character.alternate_names?.join(", ") || "-"}
        </span>
      </div>

      <div className="max-w-xl grow rounded-3xl bg-neutral-950 p-6">
        <InfoSection title="Basic Information" icon={<User />}>
          <InfoSection.Grid>
            <InfoSection.Item label="Species" value={character.species || "—"} />
            <InfoSection.Item label="Gender" value={character.gender || "—"} />
            <InfoSection.Item
              label="Date of Birth"
              value={formatDate(character.dateOfBirth) || "—"}
            />
            <InfoSection.Item label="Ancestry" value={character.ancestry || "—"} />
            <InfoSection.Item label="Eye Color" value={character.eyeColour || "—"} />
            <InfoSection.Item label="Hair Color" value={character.hairColour || "—"} />
          </InfoSection.Grid>
        </InfoSection>

        <InfoSection.Divider />

        <InfoSection title="Magical Information" icon={<Sparkles />}>
          <InfoSection.Grid>
            <InfoSection.Item label="Wizard/Witch" value={character.wizard ? "Yes" : "No"} />
            <InfoSection.Item label="Patronus" value={character.patronus || "—"} />
          </InfoSection.Grid>
        </InfoSection>

        <InfoSection.Divider />

        <InfoSection title="Hogwarts" icon={<School />}>
          <InfoSection.Grid>
            <InfoSection.Item label="Student" value={character.hogwartsStudent ? "Yes" : "No"} />
            <InfoSection.Item label="Staff" value={character.hogwartsStaff ? "Yes" : "No"} />
          </InfoSection.Grid>
        </InfoSection>

        <InfoSection.Divider />

        <InfoSection title="Portrayed By" icon={<Book />}>
          <InfoSection.Grid>
            <InfoSection.Item label="" value={character.actor || "—"} />
            {character.alternate_actors && character.alternate_actors.length > 0 && (
              <InfoSection.Item label="Alternates" value={character.alternate_actors.join(", ")} />
            )}
          </InfoSection.Grid>
        </InfoSection>
      </div>
    </div>
  );
};
