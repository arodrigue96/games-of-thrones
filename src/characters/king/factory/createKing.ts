import createCharacter from "../../character/factory/createCharacter.js";
import { type King } from "../types";
import { type CharacterData } from "../../character/types";

const kingPhrase = "Vais a morir todos";

const createKing = (
  characterData: CharacterData,
  yearsOfReign: number,
): King => {
  const king: King = {
    ...createCharacter(characterData, kingPhrase),
    yearsOfReign,
  };

  return king;
};

export default createKing;
