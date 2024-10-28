import { type Character } from "./types";

const getCharacterPhrases = (characters: Character[]): string[] =>
  characters.map((character) => character.speak());

export default getCharacterPhrases;
