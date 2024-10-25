import type { CharacterData } from "../character/types";

type PelotismLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Squire extends CharacterData {
  servedCharacter: "Fighter";
  pelotismLevel: PelotismLevel;
  speak: () => "Soy un loser";
}
