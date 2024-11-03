import { type Character } from "../../character/Character/Character.js";
import createCharacterCard from "../characterCard/index.js";
import createCharacterCardOverlay from "../characterCard/overflow/index.js";

const createCharactersCardsList = (characters: Character[]): HTMLElement => {
  const characterCardsList = document.createElement("ul");
  characterCardsList.classList.add("characters-cards-list");

  characters.forEach((character, position) => {
    const isLazyLoaded = position >= 3;
    const characterCard = createCharacterCard(character, isLazyLoaded);
    const characterCardOverlay = createCharacterCardOverlay();

    characterCardsList.appendChild(characterCard);
    characterCard.appendChild(characterCardOverlay);
  });

  return characterCardsList;
};

export default createCharactersCardsList;
