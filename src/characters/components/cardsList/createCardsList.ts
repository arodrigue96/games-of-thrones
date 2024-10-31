import { type Character } from "../../character/types.js";
import createCharacterCard from "../characterCard/createCharacterCard.js";

const createCardsList = (characters: Character[]): HTMLElement => {
  const cardsList = document.createElement("ul");
  cardsList.classList.add("cards-list");

  characters.forEach((character, position) => {
    const isLazyLoaded = position >= 3;
    const card = createCharacterCard(character, isLazyLoaded);
    cardsList.appendChild(card);
  });

  return cardsList;
};

export default createCardsList;
