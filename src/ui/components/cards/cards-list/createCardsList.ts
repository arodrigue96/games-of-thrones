import { type Character } from "../../../../characters/character/types";
import createCard from "../card/createCard.js";

const createCardsList = (characters: Character[]): HTMLElement => {
  const cardsList = document.createElement("ul");
  cardsList.classList.add("cards-list");

  characters.forEach((character) => {
    const card = createCard(character);

    cardsList.appendChild(card);
  });

  return cardsList;
};

export default createCardsList;
