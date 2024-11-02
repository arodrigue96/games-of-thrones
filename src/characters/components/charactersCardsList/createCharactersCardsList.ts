import { type Character } from "../../character/Character/Character.js";
import createCharacterCard from "../characterCard/createCharacterCard.js";

const createCharactersCardsList = (characters: Character[]): HTMLElement => {
  const cardsList = document.createElement("ul");
  cardsList.classList.add("characters-cards-list");

  characters.forEach((character, position) => {
    const isLazyLoaded = position >= 3;
    const card = createCharacterCard(character, isLazyLoaded);
    cardsList.appendChild(card);
  });

  return cardsList;
};

export default createCharactersCardsList;
