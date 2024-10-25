import type { Character, CharacterData } from "../character/types";

export interface Advisor extends CharacterData {
  advisedCharacter: Character;
  speak: () => "No sé por qué, pero creo que voy a morir pronto";
}
