export interface CharacterData {
  name: string;
  lastName?: string;
  age: number;
}

export interface Character extends CharacterData {
  phrase: string;
  isAlive: boolean;
  die: () => void;
  speak: () => string;
}
