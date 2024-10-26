import { daenerys } from "../../../characters/data/characters.js";
import createCard from "./card/createCard.js";

const createCardsContainer = (): HTMLElement => {
  const cardsContainer = document.createElement("main");
  cardsContainer.classList.add("cards-container");

  cardsContainer.appendChild(createCard(daenerys));

  return cardsContainer;
};

export default createCardsContainer;
