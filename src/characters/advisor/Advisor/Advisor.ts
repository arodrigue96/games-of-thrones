import { Character } from "../../character/Character/Character.js";
import { type AdvisorStructure } from "./types";
import { type CharacterData } from "../../character/Character/types";

class Advisor extends Character implements AdvisorStructure {
  constructor(
    characterData: CharacterData,
    public advisedCharacter: Character,
  ) {
    super(characterData);
  }

  speak(): string {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}

export default Advisor;
