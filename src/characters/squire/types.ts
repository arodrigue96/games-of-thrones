import type { Character } from "../character/types";
import { type Fighter } from "../fighter/types";

export type PelotismLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Squire extends Character {
  servedCharacter: Fighter;
  pelotismLevel: PelotismLevel;
}
