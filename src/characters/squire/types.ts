import type { CharacterData } from "../character/types";

export interface Squire extends CharacterData {
  servedCharacter: "Fighter";
  pelotismDegree: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  speak: () => "Soy un loser";
}
