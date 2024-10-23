import type { CharacterData } from "../character/types";

export interface King extends CharacterData {
  yearsOfReign: number;
  speak: () => "Vais a morir todos";
}
