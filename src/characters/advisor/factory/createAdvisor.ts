import createCharacter from "../../character/factory/createCharacter.js";
import { type Character, type CharacterData } from "../../character/types";
import { type Advisor } from "../types";

const advisorPhrase = "No sé por qué, pero creo que voy a morir pronto";

const createAdvisor = (
  characterData: CharacterData,
  advisedCharacter: Character,
): Advisor => {
  const advisor: Advisor = {
    ...createCharacter(characterData, advisorPhrase),
    advisedCharacter,
  };

  return advisor;
};

export default createAdvisor;
