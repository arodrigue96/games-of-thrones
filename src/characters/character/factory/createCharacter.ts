import { type CharacterData, type Character } from "../types";

const createCharacter = (
  characterData: CharacterData,
  phrase: string,
): Character => {
  const newCharacter: Character = {
    name: characterData.name,
    lastName: characterData.lastName,
    age: characterData.age,
    isAlive: true,
    die() {
      this.isAlive = false;
    },
    speak() {
      return phrase;
    },
  };

  return newCharacter;
};

export default createCharacter;
