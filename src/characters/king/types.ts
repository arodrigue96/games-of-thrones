/* eslint-disable @typescript-eslint/consistent-type-definitions */
import type { Character } from "../character/types";

export interface King extends Character {
  yearsOfReign: number;
  speak: () => "Vais a morir todos";
}
