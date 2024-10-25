import type { Character } from "../character/types";

export interface Advisor extends Character {
  advisedCharacter: Character;
}
