import type { CharacterData } from "../../character/types";
import type { Fighter, SkillLevel } from "../types";

const createFighter = (
  characterData: CharacterData,
  skillLevel: SkillLevel,
  weapon: string,
): Fighter => {
  const fighter: Fighter = {
    name: characterData.name,
    lastName: characterData.lastName,
    age: characterData.age,
    isAlive: true,
    skillLevel,
    weapon,
    die() {
      this.isAlive = false;
    },
    speak() {
      return "Primero pego y luego pregunto";
    },
  };

  return fighter;
};

export default createFighter;
