import type { Character } from "../character/types";

export interface Fighter extends Character {
  weapon: string;
  skill: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  speak: () => "Primero pego y luego pregunto";
}
