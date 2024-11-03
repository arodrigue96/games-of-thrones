import { type Character } from "../../character/Character/Character.js";
import createCharacterCard from "../characterCard/createCharacterCard.js";
import createCharacterCardOverlay from "../characterCard/createCharacterCardOverlay.js";

const createCharactersCardsList = (characters: Character[]): HTMLElement => {
  const cardsList = document.createElement("ul");
  cardsList.classList.add("characters-cards-list");

  characters.forEach((character, position) => {
    const isLazyLoaded = position >= 3;
    const card = createCharacterCard(character, isLazyLoaded);
    const characterCardOverlay = createCharacterCardOverlay();

    cardsList.appendChild(card);
    card.appendChild(characterCardOverlay);
  });

  return cardsList;
};

export default createCharactersCardsList;
