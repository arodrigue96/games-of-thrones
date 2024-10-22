/* eslint-disable @typescript-eslint/consistent-type-definitions */
export interface Character {
  name: string;
  lastName: string;
  age: number;
  isAlive: boolean;
  die: () => void;
  speak: () => string;
}
