import type { CharacterData } from "../../character/types";
import type { Fighter, SkillLevel } from "../types";
import createCharacter from "../../character/factory/createCharacter";

const fighterPhrase = "Primero pego y luego pregunto";

const createFighter = (
  characterData: CharacterData,
  skillLevel: SkillLevel,
  weapon: string,
): Fighter => {
  const fighter: Fighter = {
    ...createCharacter(characterData, fighterPhrase),
    skillLevel,
    weapon,
  };

  return fighter;
};

export default createFighter;
