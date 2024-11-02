export interface CharacterData {
  name: string;
  lastName?: string;
  age: number;
  image: string;
}

export interface CharacterStructure {
  characterData: CharacterData;
  isAlive: boolean;
  die: () => void;
  speak: () => string;
}
