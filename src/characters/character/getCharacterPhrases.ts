import { type Character } from "./Character/Character";

const getCharacterPhrases = (characters: Character[]): string[] =>
  characters.map((character) => character.speak());

export default getCharacterPhrases;
