import { Character } from "../../character/Character/Character.js";
import { type PelotismLevel, type SquireStructure } from "./types";
import { type CharacterData } from "../../character/Character/types";
import type Fighter from "../../fighter/Fighter/Fighter.js";

class Squire extends Character implements SquireStructure {
  constructor(
    characterData: CharacterData,
    public servedCharacter: Fighter,
    public pelotismLevel: PelotismLevel,
  ) {
    super(characterData);
  }

  speak(): string {
    return "Soy un loser";
  }
}

export default Squire;
