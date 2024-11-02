import { Character } from "../../character/Character/Character.js";
import { type FighterStructure, type SkillLevel } from "./types.js";
import { type CharacterData } from "../../character/Character/types.js";

class Fighter extends Character implements FighterStructure {
  constructor(
    characterData: CharacterData,
    public weapon: string,
    public skillLevel: SkillLevel,
  ) {
    super(characterData);
  }

  speak(): string {
    return "Primero pego y luego pregunto";
  }
}

export default Fighter;
