export type SkillLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface FighterStructure {
  weapon: string;
  skillLevel: SkillLevel;
}
