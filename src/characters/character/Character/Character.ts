import { type CharacterData, type CharacterStructure } from "./types";

export abstract class Character implements CharacterStructure {
  public isAlive: boolean;

  constructor(public characterData: CharacterData) {
    this.isAlive = true;
  }

  die(): void {
    this.isAlive = false;
  }

  abstract speak(): string;
}
