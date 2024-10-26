import createCharacter from "../../character/factory/createCharacter.js";
import { type CharacterData } from "../../character/types";
import { type Fighter } from "../../fighter/types";
import { type Squire } from "../types";
import { type PelotismLevel } from "../types";

const squirePhrase = "Soy un loser";

export const createSquire = (
  characterData: CharacterData,
  pelotismLevel: PelotismLevel,
  servedCharacter: Fighter,
): Squire => {
  const newSquire: Squire = {
    ...createCharacter(characterData, squirePhrase),
    pelotismLevel,
    servedCharacter,
  };

  return newSquire;
};
