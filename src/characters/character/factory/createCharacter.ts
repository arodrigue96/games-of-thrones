import { type CharacterData, type Character } from "../types";

const createCharacter = (
  { name, lastName, age }: CharacterData,
  phrase: string,
): Character => {
  const newCharacter: Character = {
    name,
    lastName,
    age,
    isAlive: true,
    phrase: "",
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
