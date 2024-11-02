import { Character } from "../../character/Character/Character.js";
import { type CharacterData } from "../../character/Character/types";
import { type KingStructure } from "./types";

class King extends Character implements KingStructure {
  constructor(
    characterData: CharacterData,
    public yearsOfReign: number,
  ) {
    super(characterData);
  }

  speak(): string {
    return "Vais a morir todos";
  }
}

export default King;
