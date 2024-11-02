import type Fighter from "../../fighter/Fighter/Fighter";

export type PelotismLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface SquireStructure {
  servedCharacter: Fighter;
  pelotismLevel: PelotismLevel;
}
