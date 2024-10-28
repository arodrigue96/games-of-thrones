import { type Character } from "../../characters/character/types.js";
import createCharacterCard from "../characterCard/createCharacterCard.js";

const createCardsList = (characters: Character[]): HTMLElement => {
  const cardsList = document.createElement("ul");
  cardsList.classList.add("cards-list");

  characters.forEach((character) => {
    const card = createCharacterCard(character);

    cardsList.appendChild(card);
  });

  return cardsList;
};

export default createCardsList;
