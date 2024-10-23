import type { Character } from "../character/types";

export type SkillLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Fighter extends Character {
  weapon: string;
  skillLevel: SkillLevel;
  speak: () => "Primero pego y luego pregunto";
}
