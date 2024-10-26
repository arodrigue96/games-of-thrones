import { type Character } from "./character/types";

const getCharacterPhrases = (characters: Character[]): string[] =>
  characters.map((character) => character.speak());

export default getCharacterPhrases;
