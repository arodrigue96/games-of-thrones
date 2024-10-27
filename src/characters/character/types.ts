export interface CharacterData {
  name: string;
  lastName?: string;
  age: number;
  image: string;
}

export interface Character extends CharacterData {
  phrase: string;
  isAlive: boolean;
  die: () => void;
  speak: () => string;
}
